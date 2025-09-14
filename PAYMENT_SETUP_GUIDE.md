# Payment Flow Setup Guide

This guide will help you set up the complete payment flow with QR code generation, image upload, and Google Form integration.

## Features Implemented

✅ **QR Code Payment**: Generate UPI QR codes for easy payment
✅ **Image Upload**: Users can upload payment screenshots
✅ **Google Form Integration**: Automatic submission to Google Forms
✅ **Backend Integration**: Backup submission to your backend
✅ **User Experience**: Step-by-step payment flow with progress indicators

## Setup Instructions

### 1. Environment Variables

Update your `.env` file with the following variables:

```env
# Payment Configuration
VITE_UPI_ID=your-upi-id@paytm
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### 2. Google Form Setup

#### Option A: Direct Google Form (Recommended for simple data)

1. **Create a Google Form** with the following fields:
   - Full Name (Short answer)
   - Email (Short answer)
   - Phone (Short answer)
   - College (Short answer)
   - Year (Short answer)
   - Category (Short answer)
   - Pass Type (Short answer)
   - Amount (Short answer)
   - IEEE ID (Short answer)
   - Payment Screenshot (File upload)
   - Submission Time (Short answer)

2. **Get the Form URL**:
   - Click "Send" in your Google Form
   - Copy the form URL (it should look like: `https://docs.google.com/forms/d/e/1FAIpQLSd.../formResponse`)
   - Replace `YOUR_FORM_ID` in your `.env` file

3. **Get Entry IDs**:
   - Open your form in edit mode
   - Right-click on each field and select "Inspect Element"
   - Look for the `name` attribute (e.g., `entry.1234567890`)
   - Update the entry IDs in `src/lib/googleForm.ts`

#### Option B: Google Apps Script (Recommended for file uploads)

1. **Create a Google Apps Script**:
   - Go to [script.google.com](https://script.google.com)
   - Create a new project
   - Use the script provided below

2. **Deploy as Web App**:
   - Click "Deploy" → "New deployment"
   - Choose "Web app" as type
   - Set access to "Anyone"
   - Copy the web app URL to your `.env` file

### 3. Google Apps Script Code

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Create a new Google Sheet to store the data
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Add headers if this is the first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Full Name', 'Email', 'Phone', 'College', 'Year', 
        'Category', 'Pass Type', 'Amount', 'IEEE ID', 
        'Payment Screenshot', 'Submission Time'
      ]);
    }
    
    // Add the data
    sheet.appendRow([
      data.fullName,
      data.email,
      data.phone,
      data.college,
      data.year,
      data.category,
      data.passType,
      data.amount,
      data.ieeeId || '',
      data.paymentScreenshot ? 'Screenshot uploaded' : 'No screenshot',
      data.submissionTime
    ]);
    
    // Handle file upload if present
    if (data.paymentScreenshot) {
      // Convert base64 to blob and save to Google Drive
      const blob = Utilities.newBlob(
        Utilities.base64Decode(data.paymentScreenshot.split(',')[1]),
        'image/png',
        `payment_${data.fullName}_${Date.now()}.png`
      );
      
      const file = DriveApp.createFile(blob);
      // You can move this file to a specific folder if needed
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 4. Backend Integration

Add this endpoint to your backend to handle payment submissions:

```javascript
// Express.js example
app.post('/payments/submit', async (req, res) => {
  try {
    const { userDetails, selectedPass, selectedCategory, paymentScreenshot, timestamp } = req.body;
    
    // Save to your database
    const paymentRecord = await Payment.create({
      fullName: userDetails.fullName,
      email: userDetails.email,
      phone: userDetails.phone,
      college: userDetails.college,
      year: userDetails.year,
      category: selectedCategory.name,
      passType: selectedPass.name,
      amount: selectedPass.price,
      ieeeId: userDetails.ieeeId,
      paymentScreenshot: paymentScreenshot,
      timestamp: timestamp
    });
    
    res.json({ success: true, paymentId: paymentRecord.id });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
```

### 5. UPI Configuration

1. **Set your UPI ID** in the `.env` file:
   ```env
   VITE_UPI_ID=your-business@paytm
   ```

2. **Common UPI IDs format**:
   - Paytm: `business@paytm`
   - PhonePe: `business@ybl`
   - Google Pay: `business@okaxis`
   - BHIM: `business@upi`

## How It Works

### Payment Flow

1. **User Registration**: User fills out registration form
2. **QR Code Generation**: System generates UPI QR code with payment details
3. **Payment**: User scans QR code and completes payment via UPI app
4. **Screenshot Upload**: User uploads payment confirmation screenshot
5. **Form Submission**: Data is automatically submitted to Google Form and backend
6. **Confirmation**: User is redirected to profile page

### Data Flow

```
User Input → QR Code → Payment → Screenshot → Google Form + Backend → Confirmation
```

## Testing

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Test the payment flow**:
   - Go to `/register`
   - Fill out the registration form
   - Proceed to payment step
   - Verify QR code generation
   - Test image upload functionality
   - Check Google Form submissions

## Troubleshooting

### Common Issues

1. **QR Code not generating**:
   - Check if `qrcode` package is installed
   - Verify UPI ID format in `.env`

2. **Google Form submission fails**:
   - Verify form URL and entry IDs
   - Check browser console for CORS errors
   - Ensure form is set to accept responses

3. **Image upload issues**:
   - Check file size limits (currently 5MB)
   - Verify file type validation
   - Check browser compatibility

### Debug Mode

Enable debug logging by adding this to your component:

```typescript
const DEBUG = import.meta.env.DEV;

if (DEBUG) {
  console.log('Payment data:', paymentData);
  console.log('Form submission:', formData);
}
```

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to version control
2. **File Upload**: Implement proper file validation and size limits
3. **Data Validation**: Validate all user inputs on both frontend and backend
4. **Rate Limiting**: Implement rate limiting for form submissions
5. **HTTPS**: Always use HTTPS in production

## Production Deployment

1. **Update environment variables** for production
2. **Configure proper UPI merchant account**
3. **Set up monitoring** for form submissions
4. **Implement error handling** and user notifications
5. **Test payment flow** thoroughly before going live

## Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify all environment variables are set correctly
3. Test Google Form submission manually
4. Check backend logs for API errors
5. Ensure all dependencies are installed

For additional help, refer to the component documentation in `src/components/PaymentFlow.tsx` and `src/lib/googleForm.ts`.
