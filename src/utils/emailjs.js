// src/utils/emailjs.js
import emailjs from 'emailjs-com';

export const sendEmail = (templateParams) => {
  // Access environment variables with import.meta.env
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    throw new Error('EmailJS environment variables are not defined.');
  }

  return emailjs.send(serviceId, templateId, templateParams, userId);
};
