// EmailJS Configuration Example
// Copy this file to emailjs-config.js and replace with your actual values

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "YOUR_PUBLIC_KEY_HERE", // Get this from EmailJS Account → API Keys
  SERVICE_ID: "YOUR_SERVICE_ID_HERE", // Get this from EmailJS Email Services
  TEMPLATE_ID: "YOUR_TEMPLATE_ID_HERE", // Get this from EmailJS Email Templates
};

// Example usage in Contact.js:
// import { EMAILJS_CONFIG } from './emailjs-config';
// 
// emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
// 
// const response = await emailjs.send(
//   EMAILJS_CONFIG.SERVICE_ID,
//   EMAILJS_CONFIG.TEMPLATE_ID,
//   templateParams
// ); 