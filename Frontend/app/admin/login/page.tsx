// app/admin/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError("");

    try {
      const BACKEND_URL =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
      console.log("✅ Using API:", BACKEND_URL);

      const res = await fetch(`${BACKEND_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 bg-transparent shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">Admin Login</h1>
      <AdminLoginForm onLogin={handleLogin} disabled={loading} />
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      {loading && <p className="text-blue-600 text-sm mt-2">Logging in...</p>}
    </div>
  );
}
