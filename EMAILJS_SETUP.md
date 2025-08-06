# EmailJS Setup Guide

This guide will help you set up EmailJS to enable your contact form to send emails.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}

Message:
{{message}}

Best regards,
{{from_name}}
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Update Your Contact.js

Replace the placeholder values in your `src/components/Contact.js` file:

```javascript
// Replace "YOUR_PUBLIC_KEY" with your actual public key
emailjs.init("YOUR_PUBLIC_KEY");

// Replace "YOUR_SERVICE_ID" with your service ID
// Replace "YOUR_TEMPLATE_ID" with your template ID
const response = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  templateParams
);
```

## Step 6: Test Your Contact Form

1. Start your React app: `npm start`
2. Open the contact form
3. Fill in the required fields
4. Submit the form
5. Check your email to see if the message was received

## Troubleshooting

- Make sure all IDs are correct (Public Key, Service ID, Template ID)
- Check the browser console for any error messages
- Verify your email service is properly connected
- Ensure your template variables match the ones in the code

## Security Notes

- The public key is safe to use in client-side code
- EmailJS handles the email sending securely
- No backend server required 