# Backend Implementation Guide for Payment Status

This guide shows you how to implement the payment status endpoints in your existing backend to make localhost work exactly like production.

## Quick Implementation

Add these three functions to your existing user controller file:

```javascript
// Add these endpoints to your existing user controller

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
```

## Add Routes to Your Router

Add these routes to your existing router file:

```javascript
// Add these routes to your existing router
router.get('/user/payment-status', authenticateToken, getPaymentStatus);
router.post('/user/payment-status', authenticateToken, updatePaymentStatus);
router.delete('/user/payment-status', authenticateToken, clearPaymentStatus);
```

## What This Fixes

1. **Login Issue**: When user logs in, their payment status is fetched from database and set in frontend
2. **Header Issue**: Header will show "Profile" if user has completed payment, "Register" if not
3. **Production Parity**: Localhost will work exactly like production
4. **Fallback Support**: If API fails, frontend falls back to localStorage

## Testing

After implementing these endpoints:

1. Start your backend server
2. Login with a user who has `payment_status = 'COMPLETED'` in database
3. Header should show "Profile" button
4. Login with a user who has `payment_status = 'INITIATED'` in database  
5. Header should show "Register" button

## Database Status Mapping

| Frontend Status | Database Status | Description |
|----------------|-----------------|-------------|
| `success` | `COMPLETED` | Payment successful |
| `failure` | `FAILED` | Payment failed |
| `pending` | `PENDING` | Payment in progress |
| `none` | `INITIATED` | No payment or cleared |

This implementation uses your existing database structure and middleware, so it integrates seamlessly with your current backend!
