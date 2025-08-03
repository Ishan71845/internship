'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) return router.push('/admin/login');

    const fetchLeads = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/leads/leads`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const json = await res.json();
          setLeads(Array.isArray(json) ? json : []);
        } else {
          setError('Failed to fetch leads');
        }
      } catch (err) {
        setError('Server error');
      }
    };

    fetchLeads();
  }, [router]);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm('Are you sure you want to delete this lead?');
    if (!confirm) return;

    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/leads/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setLeads((prev) => prev.filter((lead) => lead._id !== id));
        toast.success('Lead deleted successfully');
      } else {
        toast.error('Failed to delete lead');
      }
    } catch (error) {
      toast.error('Server error');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {leads.length === 0 ? (
        <p>No leads found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white dark:bg-card border border-gray-300 dark:border-muted">
            <thead className="bg-gray-100 dark:bg-muted">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-white">Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-white">Email</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-white">Phone</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-white">Course</th>
                <th className="py-3 px-4 text-right text-sm font-semibold text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead._id} className="border-t dark:border-muted hover:bg-gray-50 dark:hover:bg-muted/40 transition">
                  <td className="py-3 px-4 text-sm">{lead.name}</td>
                  <td className="py-3 px-4 text-sm">{lead.email}</td>
                  <td className="py-3 px-4 text-sm">{lead.phone}</td>
                  <td className="py-3 px-4 text-sm">{lead.course}</td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(lead._id)}>
                      <Trash2 className="h-5 w-5 text-red-500 hover:text-red-700" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
