// components/AdminSidebar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-64 bg-white h-screen shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-3">
        <Link href="/admin/dashboard" className={isActive('/admin/dashboard') ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
          Dashboard
        </Link>
        <Link href="/admin/courses" className={isActive('/admin/courses') ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
          Courses
        </Link>
        <Link href="/admin/uploads" className={isActive('/admin/uploads') ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
          Uploads
        </Link>
        <Link href="/admin/settings" className={isActive('/admin/settings') ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
          Settings
        </Link>
      </nav>
    </aside>
  );
}
