"use client"

// components/ContactForm.jsx

import { useState } from 'react';


export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message') setCharCount(value.length);
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    // You can send it to an API or email handler here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4 bg-gray-100 rounded-md shadow">
      <h2 className="text-2xl font-bold text-center text-black">GET STARTED</h2>
      <p className="text-center text-black">
        Save money, reduce risk, and speed completion of your project with Prosync Engineering. Contact us to learn how our talented team of versatile professionals could help you.
      </p>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="w-full border p-2 rounded text-black"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="w-full border p-2 rounded text-black"
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="w-full border p-2 rounded text-black"
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="w-full border p-2 rounded text-black"
        onChange={handleChange}
      />

      <div>
        <textarea
          name="message"
          placeholder="Enter your message..."
          maxLength={500}
          rows={5}
          className="w-full border p-2 rounded text-black"
          onChange={handleChange}
          required
        />
        <div className="text-right text-sm text-black">{charCount} / 500</div>
      </div>

      <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-gray-700">
        GET IN TOUCH
      </button>
    </form>
  );
}
