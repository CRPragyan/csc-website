// src/components/ContactUsForm.js
import { useState } from 'react';
import { sendEmail } from '../utils/emailjs';

function ContactUsForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await sendEmail({
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
      });
      setStatus('Message sent!');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="flex flex-col md:flex-row gap-10 md:p-0 p-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formState.subject}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formState.message}
          onChange={handleChange}
          required
        ></textarea>
        <div className="flex justify-center mt-6">
          <button type="submit" className="primary-btn px-4">
            Submit
          </button>
        </div>
        {status && <p className="text-center mt-2">{status}</p>}
      </form>
    </div>
  );
}

console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log('User ID:', import.meta.env.VITE_EMAILJS_USER_ID);


export default ContactUsForm;
