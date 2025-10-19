# Event Registration Implementation for Single Table Schema

This guide shows how to implement event registration using your existing single `users` table with `registered_events` array.

## Your Database Schema

```sql
-- Your existing users table:
CREATE TABLE users (
    member_id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    full_name VARCHAR(255),
    mobile_number VARCHAR(20),
    pass_type VARCHAR(50),
    username VARCHAR(100),
    password VARCHAR(255),
    college VARCHAR(255),
    ieee_id VARCHAR(100),
    registered_events TEXT[], -- Array of event IDs
    payment_status VARCHAR(20),
    payment_id VARCHAR(255)
);
```

## Backend Implementation

Add these functions to your existing user controller:

```javascript
// Event Registration Functions

// Check if user is registered for specific event
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

// Register user for event
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

## How It Works

1. **Check Registration**: Queries the `registered_events` array to see if event ID exists
2. **Register for Event**: Adds the event ID to the `registered_events` array
3. **Get All Events**: Returns the entire `registered_events` array

## Example Data Flow

### Before Registration:
```json
{
  "registered_events": ["1", "3"]
}
```

### After Registering for Event "5":
```json
{
  "registered_events": ["1", "3", "5"]
}
```

## Frontend Integration

The frontend already uses the correct endpoints:
- `GET /user/registration-status/:eventId` - Check if registered
- `POST /events/:eventId/register` - Register for event

This implementation works perfectly with your existing single table schema! 🚀
