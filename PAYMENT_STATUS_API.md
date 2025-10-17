# Payment Status API Endpoints

This document outlines the API endpoints needed for the payment status tracking system that works in both development and production environments.

## Required Endpoints

### 1. GET `/user/payment-status`
**Purpose**: Fetch the current payment status for the authenticated user

**Headers**:
- `Content-Type: application/json`
- `x-user-data: JSON_STRING` (from your existing middleware)

**Response**:
```json
{
  "status": "success" | "failure" | "pending" | "none",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

**Status Codes**:
- `200`: Success
- `401`: Unauthorized
- `404`: User not found

---

### 2. POST `/user/payment-status`
**Purpose**: Update the payment status for a user

**Headers**:
- `Content-Type: application/json`
- `x-user-data: JSON_STRING` (from your existing middleware)

**Request Body**:
```json
{
  "status": "success" | "failure" | "pending",
  "username": "optional_username_for_non_authenticated_users"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Payment status updated successfully",
  "status": "COMPLETED"
}
```

**Status Codes**:
- `200`: Success
- `400`: Invalid status or missing username
- `401`: Unauthorized
- `404`: User not found

---

### 3. DELETE `/user/payment-status`
**Purpose**: Clear the payment status for the authenticated user (used during logout)

**Headers**:
- `Content-Type: application/json`
- `x-user-data: JSON_STRING` (from your existing middleware)

**Response**:
```json
{
  "success": true,
  "message": "Payment status cleared successfully"
}
```

**Status Codes**:
- `200`: Success
- `401`: Unauthorized

---

## Database Schema (Already Exists)

Your existing `users` table already has the `payment_status` column:

```sql
-- Your existing users table already has:
-- payment_status VARCHAR (stores: 'COMPLETED', 'FAILED', 'PENDING', 'INITIATED')
-- payment_id VARCHAR (stores the order ID)
```

## Status Mapping

| Frontend Status | Database Status | Description |
|----------------|-----------------|-------------|
| `success` | `COMPLETED` | Payment successful |
| `failure` | `FAILED` | Payment failed |
| `pending` | `PENDING` | Payment in progress |
| `none` | `INITIATED` | No payment or cleared |

---

## Implementation Notes

1. **Authentication**: Uses your existing middleware with `x-user-data` header
2. **Database**: Uses your existing `users` table with `payment_status` column
3. **Integration**: Works with your existing `checkStatus` function
4. **Security**: Proper validation of status values and user permissions

---

## Frontend Integration

The frontend will:
1. **On Login**: Fetch payment status from API
2. **On Payment**: Update status via API (your existing `checkStatus` already does this)
3. **On Logout**: Clear status via API
4. **Fallback**: Use localStorage only in development mode when API fails

This ensures the system works reliably in both development and production environments while integrating seamlessly with your existing backend structure.
