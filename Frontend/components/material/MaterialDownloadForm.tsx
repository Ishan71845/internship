'use client';

import { useState } from 'react';

export function MaterialDownloadForm({
  material,
  onClose,
}: {
  material: { title: string; file: string };
  onClose: () => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

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
    try {
      const res = await fetch(`${BACKEND_URL}/api/leads/create-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          course: material.title,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Submitted! Download will begin shortly.');
        window.open(`/pdfs/${material.file}`, '_blank');
        onClose();
      } else {
        alert(data.message || '❌ Submission failed');
      }
    } catch (err) {
      console.error('Download lead error:', err);
      alert('Server error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md w-full max-w-md text-black">
        <h2 className="text-xl font-bold mb-4">Download: {material.title}</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-3 px-4 py-2 border rounded text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-3 px-4 py-2 border rounded text-white "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Your Phone"
          className="w-full mb-4 px-4 py-2 border rounded text-white "
          value={phone}
          onChange={(e) => {
            const value = e.target.value;
            // Allow only digits and max 10 characters
            if (/^\d{0,10}$/.test(value)) {
              setPhone(value);
            }
          }}
          required
        />

        <div className="flex justify-between">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {loading ? 'Submitting...' : 'Submit & Download'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-red-600 hover:underline px-4 py-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
