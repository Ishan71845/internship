'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Lead {
  _id: string;
  name: string;
  phone: string;
  email: string;
  // Add any other fields you have
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      router.push('/admin/login');
      return;
    }

    const fetchLeads = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/leads`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setLeads(data);
        } else {
          setError('Failed to fetch leads');
        }
      } catch (err) {
        setError('Server error');
      }
    };

    fetchLeads();
  }, [router]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {leads.length === 0 ? (
        <p>No leads found.</p>
      ) : (
        <ul className="space-y-2">
          {leads.map((lead) => (
            <li key={lead._id} className="p-4 bg-gray-100 rounded">
              <p><strong>Name:</strong> {lead.name}</p>
              <p><strong>Email:</strong> {lead.email}</p>
              <p><strong>Phone:</strong> {lead.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
