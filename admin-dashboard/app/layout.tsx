import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduPlatform Admin",
  description: "Full-stack platform to manage courses, faculty, results, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
