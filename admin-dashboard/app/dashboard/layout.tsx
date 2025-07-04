"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAuth = localStorage.getItem("admin-auth");
    if (!isAuth) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <SidebarLink href="/dashboard" active={pathname === "/dashboard"} label="Dashboard" />
          <SidebarLink href="/dashboard/courses" active={pathname === "/dashboard/courses"} label="Courses" />
          <SidebarLink href="/dashboard/faculty" active={pathname === "/dashboard/faculty"} label="Faculty" />
          <SidebarLink href="/dashboard/results" active={pathname === "/dashboard/results"} label="Results" />
          <SidebarLink href="/dashboard/testimonials" active={pathname === "/dashboard/testimonials"} label="Testimonials" />
          <SidebarLink href="/dashboard/leads" active={pathname === "/dashboard/leads"} label="Leads" />
          <SidebarLink href="/dashboard/gallery" active={pathname === "/dashboard/gallery"} label="Gallery" />
          <SidebarLink href="/dashboard/sample-material" active={pathname === "/dashboard/sample-material"} label="Sample Material" />
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Button className="w-full" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b flex items-center px-6 shadow-sm">
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

function SidebarLink({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "block px-3 py-2 rounded hover:bg-gray-700",
        active && "bg-gray-700"
      )}
    >
      {label}
    </Link>
  );
}
