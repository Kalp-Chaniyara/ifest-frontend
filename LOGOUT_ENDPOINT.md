# Logout Endpoint Implementation

Add this logout endpoint to your existing auth controller:

```javascript
// Add this to your existing auth controller

// Logout user
export const logout = async (req, res) => {
     try {
          // Clear the httpOnly cookie
          res.clearCookie('tokenStorer', {
               httpOnly: true,
               secure: process.env.NODE_ENV === "production",
               sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
               path: "/"
          });

          res.status(200).json({ 
               success: true,
               message: "Logged out successfully" 
          });
     } catch (error) {
          console.error("Logout Error:", error);
          res.status(500).json({ message: "Server error" });
     }
};
```

## Add Route to Your Router

Add this route to your existing router:

```javascript
// Add this route to your existing router
router.post('/auth/logout', logout);
```

## What This Does

1. **Clears the httpOnly cookie** that contains the JWT token
2. **Ends the user session** on the backend
3. **Allows frontend to properly logout** and show Register button

## Testing

After implementing this endpoint:

1. Login with a user
2. Header should show "Profile" button
3. Click logout
4. Header should show "Register" button
5. Clicking Profile button should redirect to login

This ensures that logout works properly and the header shows the correct button after logout.
