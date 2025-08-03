'use client';

import { useState } from 'react';

interface Props {
  onLogin: (email: string, password: string) => void;
  disabled?: boolean;
}

export default function AdminLoginForm({ onLogin, disabled }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          disabled={disabled}
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          disabled={disabled}
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        disabled={disabled}
      >
        {disabled ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
