// app/components/ContactSection.tsx
'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8 text-gray-600">
          Have questions or need assistance? We&apos;d love to hear from you!
        </p>

        <form className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded"
          >
            Send 
          </button>
        </form>
      </div>
    </section>
  );
}
