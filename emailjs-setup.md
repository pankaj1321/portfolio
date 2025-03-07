# Setting up EmailJS for Your Portfolio Contact Form

This guide will help you set up EmailJS to make your contact form fully functional, allowing visitors to send you emails directly from your portfolio website.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which should be sufficient for most portfolio websites

## Step 2: Create an Email Service

1. Log in to your EmailJS account
2. Go to the "Email Services" tab
3. Click "Add New Service"
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the authentication steps to connect your email account
6. Name your service (e.g., "portfolio-contact")
7. Note down the **Service ID** for later use

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template with the following parameters:
   - `user_name`: The name of the person contacting you
   - `user_email`: The email address of the person contacting you
   - `message`: The message they've written
4. Example template content:
   ```
   From: {{user_name}} ({{user_email}})
   
   Message:
   {{message}}
   ```
5. Save your template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to the "Account" tab
2. Find your **Public Key** in the API keys section

## Step 5: Update Your Contact Component

1. Open `src/components/Contact.jsx`
2. Replace the placeholder values with your actual EmailJS credentials:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'; // Replace with the Service ID from Step 2
   const templateId = 'YOUR_TEMPLATE_ID'; // Replace with the Template ID from Step 3
   const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with the Public Key from Step 4
   ```

## Step 6: Test Your Contact Form

1. Run your portfolio website
2. Fill out the contact form and submit it
3. Check your email to ensure you received the message
4. Make any necessary adjustments to your email template

## Important Notes

- Do not share your EmailJS credentials publicly
- For production, consider setting up environment variables to store these values securely
- The free plan limits are 200 emails per month and 2 email services
- If your form shows success but you're not receiving emails, check your spam folder

## Troubleshooting

- If emails aren't working, verify your credentials are correct
- Check the browser console for any errors
- Ensure your email service is properly connected in the EmailJS dashboard
- Test sending a template directly from the EmailJS dashboard to verify your email service is working
