# Event Registration API Endpoints

This document outlines the API endpoints needed for event registration functionality.

## Required Endpoints

### 1. GET `/events/:eventId/registration-status`
**Purpose**: Check if the authenticated user is registered for a specific event

**Headers**:
- `Content-Type: application/json`
- `x-user-data: JSON_STRING` (from your existing middleware)

**Response**:
```json
{
  "isRegistered": true | false,
  "registrationDate": "2024-01-15T10:30:00Z" // if registered
}
```

**Status Codes**:
- `200`: Success
- `401`: Unauthorized

---

### 2. POST `/events/:eventId/register`
**Purpose**: Register the authenticated user for a specific event

**Headers**:
- `Content-Type: application/json`
- `x-user-data: JSON_STRING` (from your existing middleware)

**Response**:
```json
{
  "success": true,
  "message": "Successfully registered for the event",
  "registrationId": "uuid-string"
}
```

**Status Codes**:
- `200`: Success
- `400`: Already registered or validation error
- `401`: Unauthorized
- `404`: Event not found

---

## Database Schema

Your existing `users` table already has the `registered_events` array field:

```sql
-- Your existing users table structure:
-- member_id (serial number)
-- email
-- full_name
-- mobile_number
-- pass_type
-- username
-- password
-- college
-- ieee_id
-- registered_events (array) -- This stores event IDs
-- payment_status
-- payment_id
```

---

## Backend Implementation

Add these endpoints to your existing controllers:

```javascript
// Event Registration Controller

import {neon} from "@neondatabase/serverless"
import dotenv from "dotenv";
dotenv.config();

const pool = neon(process.env.DATABASE_URL)

// Check registration status for specific event
export const getRegistrationStatus = async (req, res) => {
     try {
          const userData = JSON.parse(req.headers['x-user-data']);
          const { eventId } = req.params;
          
          console.log("User in getRegistrationStatus through middleware", userData);
          
          const username = userData.username;

          const [user] = await pool`
               SELECT registered_events FROM users WHERE username = ${username}
          `;

          if (!user) {
               return res.status(404).json({ message: "User not found" });
          }

          // Check if eventId is in the registered_events array
          const registeredEvents = user.registered_events || [];
          const isRegistered = registeredEvents.includes(eventId);

          res.status(200).json({ 
               isRegistered: isRegistered,
               registeredEvents: registeredEvents
          });
     } catch (error) {
          console.error("Error checking registration status:", error.message);
          res.status(500).json({ message: "Failed to check registration status" });
     }
}

// Register for event
export const registerForEvent = async (req, res) => {
     try {
          const userData = JSON.parse(req.headers['x-user-data']);
          const { eventId } = req.params;
          
          console.log("User in registerForEvent through middleware", userData);
          
          const username = userData.username;

          // Get current registered events
          const [user] = await pool`
               SELECT registered_events FROM users WHERE username = ${username}
          `;

          if (!user) {
               return res.status(404).json({ 
                    success: false,
                    message: "User not found" 
               });
          }

          const registeredEvents = user.registered_events || [];

          // Check if already registered
          if (registeredEvents.includes(eventId)) {
               return res.status(400).json({ 
                    success: false,
                    message: "You are already registered for this event" 
               });
          }

          // Add event to registered_events array
          const updatedEvents = [...registeredEvents, eventId];

          const [updatedUser] = await pool`
               UPDATE users 
               SET registered_events = ${updatedEvents}
               WHERE username = ${username}
               RETURNING registered_events
          `;

          res.status(200).json({ 
               success: true,
               message: "Successfully registered for the event",
               registeredEvents: updatedUser.registered_events
          });
     } catch (error) {
          console.error("Error registering for event:", error.message);
          res.status(500).json({ message: "Failed to register for event" });
     }
}

// Get all registered events for user
export const getAllRegisteredEvents = async (req, res) => {
     try {
          const userData = JSON.parse(req.headers['x-user-data']);
          
          console.log("User in getAllRegisteredEvents through middleware", userData);
          
          const username = userData.username;

          const [user] = await pool`
               SELECT registered_events FROM users WHERE username = ${username}
          `;

          if (!user) {
               return res.status(404).json({ message: "User not found" });
          }

          res.status(200).json({ 
               registeredEvents: user.registered_events || []
          });
     } catch (error) {
          console.error("Error getting registered events:", error.message);
          res.status(500).json({ message: "Failed to get registered events" });
     }
}
```

## Add Routes to Your Router

```javascript
// Add these routes to your existing router
router.get('/user/registration-status/:eventId', authenticateToken, getRegistrationStatus);
router.post('/events/:eventId/register', authenticateToken, registerForEvent);
router.get('/user/registered-events', authenticateToken, getAllRegisteredEvents);
```

---

## Frontend Integration

The frontend will:
1. **Check Registration Status**: Automatically check when user visits event page
2. **Show Registration Button**: Different states based on registration status
3. **Handle Registration**: Register user and show success/error messages
4. **Update UI**: Button changes to "Already Registered" after successful registration

This ensures a smooth event registration experience for users! 🚀
