// Add these endpoints to your existing user controller

import {neon} from "@neondatabase/serverless"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET
const pool = neon(process.env.DATABASE_URL)

// Get payment status for authenticated user
export const getPaymentStatus = async (req, res) => {
     try {
          const userData = JSON.parse(req.headers['x-user-data']);
          console.log("User in getPaymentStatus through middleware", userData);
          
          const username = userData.username;

          const [user] = await pool`SELECT payment_status FROM users WHERE username = ${username}`;

          if (!user) {
               return res.status(404).json({ message: "User not found" });
          }

          // Map database status to frontend status
          let status = 'none';
          if (user.payment_status === 'COMPLETED') {
               status = 'success';
          } else if (user.payment_status === 'FAILED') {
               status = 'failure';
          } else if (user.payment_status === 'PENDING' || user.payment_status === 'INITIATED') {
               status = 'pending';
          }

          res.status(200).json({ 
               status,
               updatedAt: new Date().toISOString()
          });
     } catch (error) {
          console.error("Error fetching payment status:", error.message);
          res.status(500).json({ message: "Failed to fetch payment status" });
     }
}

// Update payment status for authenticated user
export const updatePaymentStatus = async (req, res) => {
     try {
          const userData = JSON.parse(req.headers['x-user-data']);
          const { status, username: providedUsername } = req.body;
          
          console.log("User in updatePaymentStatus through middleware", userData);
          
          const username = providedUsername || userData.username;

          if (!username) {
               return res.status(400).json({ message: "Username is required" });
          }

          // Map frontend status to database status
          let dbStatus = 'INITIATED';
          if (status === 'success') {
               dbStatus = 'COMPLETED';
          } else if (status === 'failure') {
               dbStatus = 'FAILED';
          } else if (status === 'pending') {
               dbStatus = 'PENDING';
          }

          const [updatedUser] = await pool`
               UPDATE users 
               SET payment_status = ${dbStatus}
               WHERE username = ${username}
               RETURNING username, payment_status
          `;

          if (!updatedUser) {
               return res.status(404).json({ message: "User not found" });
          }

          res.status(200).json({ 
               success: true,
               message: "Payment status updated successfully",
               status: updatedUser.payment_status
          });
     } catch (error) {
          console.error("Error updating payment status:", error.message);
          res.status(500).json({ message: "Failed to update payment status" });
     }
}

// Clear payment status for authenticated user (used during logout)
export const clearPaymentStatus = async (req, res) => {
     try {
          const userData = JSON.parse(req.headers['x-user-data']);
          console.log("User in clearPaymentStatus through middleware", userData);
          
          const username = userData.username;

          await pool`
               UPDATE users 
               SET payment_status = 'INITIATED'
               WHERE username = ${username}
          `;

          res.status(200).json({ 
               success: true,
               message: "Payment status cleared successfully"
          });
     } catch (error) {
          console.error("Error clearing payment status:", error.message);
          res.status(500).json({ message: "Failed to clear payment status" });
     }
}
