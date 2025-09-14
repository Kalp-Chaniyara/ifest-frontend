/**
 * Google Form Integration Utility
 * 
 * This utility handles automatic submission of payment data to Google Forms.
 * 
 * Setup Instructions:
 * 1. Create a Google Form with the following fields:
 *    - Full Name (Short answer)
 *    - Email (Short answer)
 *    - Phone (Short answer)
 *    - College (Short answer)
 *    - Year (Short answer)
 *    - Category (Short answer)
 *    - Pass Type (Short answer)
 *    - Amount (Short answer)
 *    - IEEE ID (Short answer)
 *    - Payment Screenshot (File upload)
 *    - Submission Time (Short answer)
 * 
 * 2. Get the form URL from the "Send" button in Google Forms
 * 3. Replace YOUR_FORM_ID in the .env file with the actual form ID
 * 
 * Note: Google Forms doesn't support direct file uploads via API.
 * For file uploads, you'll need to use Google Apps Script or a different approach.
 */

/**
 * Safely stringify data, handling circular references
 */
const safeStringify = (data: unknown): string => {
  const seen = new WeakSet();
  return JSON.stringify(data, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return '[Circular Reference]';
      }
      seen.add(value);
    }
    return value;
  });
};

interface PaymentSubmissionData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  year: string;
  category: string;
  passType: string;
  amount: number;
  ieeeId?: string;
  paymentScreenshot: string; // base64 encoded image
  submissionTime: string;
}

export const submitToGoogleForm = async (data: PaymentSubmissionData): Promise<boolean> => {
  try {
    const googleFormUrl = import.meta.env.VITE_GOOGLE_FORM_URL;
    
    if (!googleFormUrl) {
      throw new Error('Google Form URL not configured. Please set VITE_GOOGLE_FORM_URL in your .env file.');
    }

    // Map our data to Google Form entry IDs
    // You'll need to replace these with actual entry IDs from your Google Form
    const formData = {
      'entry.1234567890': data.fullName,        // Full Name entry ID
      'entry.1234567891': data.email,           // Email entry ID
      'entry.1234567892': data.phone,           // Phone entry ID
      'entry.1234567893': data.college,         // College entry ID
      'entry.1234567894': data.year,            // Year entry ID
      'entry.1234567895': data.category,        // Category entry ID
      'entry.1234567896': data.passType,        // Pass Type entry ID
      'entry.1234567897': data.amount.toString(), // Amount entry ID
      'entry.1234567898': data.ieeeId || '',    // IEEE ID entry ID
      'entry.1234567899': data.submissionTime,  // Submission Time entry ID
    };

    // Submit to Google Form
    const response = await fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors', // Google Forms doesn't support CORS
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Since we're using no-cors, we can't check the response status
    // But we can assume success if no error is thrown
    return true;

  } catch (error) {
    console.error('Google Form submission error:', error);
    throw error;
  }
};

/**
 * Alternative method using Google Apps Script
 * This method can handle file uploads properly
 */
export const submitToGoogleAppsScript = async (data: PaymentSubmissionData): Promise<boolean> => {
  try {
    const appsScriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
    
    if (!appsScriptUrl) {
      console.warn('Google Apps Script URL not configured. Skipping Google Apps Script submission.');
      return true; // Don't fail the payment flow
    }

    // Use fetch with no-cors mode to send JSON data
    try {
      const response = await fetch(appsScriptUrl, {
        method: 'POST',
        mode: 'no-cors', // This bypasses CORS but we can't read the response
        headers: {
          'Content-Type': 'application/json',
        },
        body: safeStringify(data)
      });
      
      console.log('Payment data submitted to Google Apps Script via fetch');
      return true;
      
    } catch (fetchError) {
      console.warn('Fetch method failed, trying form submission:', fetchError);
      
      // Fallback: Create a hidden iframe and use form submission
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'google-apps-script-iframe';
      document.body.appendChild(iframe);

      // Create form that will POST JSON data
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = appsScriptUrl;
      form.target = 'google-apps-script-iframe';
      form.style.display = 'none';

      // Create a hidden input with JSON data
      const jsonInput = document.createElement('input');
      jsonInput.type = 'hidden';
      jsonInput.name = 'jsonData';
      jsonInput.value = safeStringify(data);
      form.appendChild(jsonInput);

      document.body.appendChild(form);
      form.submit();
      
      // Clean up after a delay
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 5000);

      console.log('Payment data submitted to Google Apps Script via form fallback');
      return true;
    }

  } catch (error) {
    console.error('Google Apps Script submission error:', error);
    // Return true anyway since we can't verify due to CORS
    return true;
  }
};

/**
 * Get Google Form entry IDs
 * 
 * To get the entry IDs for your Google Form:
 * 1. Open your Google Form in edit mode
 * 2. Right-click on a field and select "Inspect Element"
 * 3. Look for the "name" attribute in the input element
 * 4. The name will be something like "entry.1234567890"
 * 5. Use these IDs in the formData object above
 */
export const getFormEntryIds = () => {
  console.log(`
    To get Google Form entry IDs:
    1. Open your Google Form in edit mode
    2. Right-click on a field and select "Inspect Element"
    3. Look for the "name" attribute in the input element
    4. The name will be something like "entry.1234567890"
    5. Replace the placeholder IDs in googleForm.ts with these actual IDs
  `);
};
