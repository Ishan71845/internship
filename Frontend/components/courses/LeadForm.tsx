'use client';

import { useState } from 'react';

export function LeadForm({ course }: { course: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      alert('Name is required.');
      return false;
    }

    if (!emailRegex.test(email)) {
      alert('Invalid email address.');
      return false;
    }

    if (!phoneRegex.test(phone)) {
      alert('Phone number must be exactly 10 digits.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

    try {
      const res = await fetch(`${BACKEND_URL}/api/leads/create-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, course }),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Submitted successfully!');
        setName('');
        setEmail('');
        setPhone('');
      } else {
        alert(data.message || '❌ Submission failed');
      }
    } catch (err) {
      console.error('Lead form error:', err);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-2 rounded border text-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 rounded border text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Your Phone Number"
        className="w-full px-4 py-2 rounded border text-white"
        value={phone}
        onChange={(e) => {
          const value = e.target.value;
          // Restrict to numeric input and max 10 digits
          if (/^\d{0,10}$/.test(value)) {
            setPhone(value);
          }
        }}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded w-full"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
