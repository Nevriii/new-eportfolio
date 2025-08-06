// EmailJS Configuration
// Replace TEMPLATE_ID with your actual template ID from EmailJS dashboard

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "Xhue1A6CnbIZnD78A",
  SERVICE_ID: "service_wbmicje",
  TEMPLATE_ID: "template_qiq9xha", // User's actual template ID
};

// Usage in Contact.js:
// import { EMAILJS_CONFIG } from './emailjs-config';
// 
// emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
// 
// const response = await emailjs.send(
//   EMAILJS_CONFIG.SERVICE_ID,
//   EMAILJS_CONFIG.TEMPLATE_ID,
//   templateParams
// ); 