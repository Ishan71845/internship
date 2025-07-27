// lib/axios.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

export const fetchLeads = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_BASE_URL}/leads`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch leads');
  return res.json();
};

export const deleteLeadById = async (id: string) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_BASE_URL}/leads/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Failed to delete lead');
  return res.json();
};
