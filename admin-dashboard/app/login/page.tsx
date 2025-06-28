"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    const validEmail = "admin@example.com";
    const validPassword = "password";

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("admin-auth", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <div className="space-y-4">
          <label className="block">
            <span className="sr-only">Email</span>
            <Input
              placeholder="Email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="sr-only">Password</span>
            <Input
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button className="w-full" type="button" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
