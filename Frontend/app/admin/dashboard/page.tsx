'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  createdAt: string;
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/leads/leads`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const json = await res.json();
          const leadArray = Array.isArray(json) ? json : []; // ✅ FIX
          setLeads(leadArray);
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
            <li key={lead._id} className="p-4 bg-black rounded">
              <p><strong>Name:</strong> {lead.name}</p>
              <p><strong>Email:</strong> {lead.email}</p>
              <p><strong>Phone:</strong> {lead.phone}</p>
              <p><strong>Course:</strong> {lead.course}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
