// app/components/layout/sections/FooterSection.tsx

'use client';

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <p className="text-sm text-gray-200">
            Arpita&apos;s Science Academy provides quality coaching for IIT-JEE, NEET, NDA, CET and Foundation (Class 10th–12th).
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link href="/#courses" className="hover:text-blue-300">Courses</Link></li>
            <li><Link href="/#results" className="hover:text-blue-300">Results</Link></li>
            <li><Link href="/#contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-200">📍 St Shiromani N Maharaja Path, Divya Nagar, Wanwadi, Pune, Maharashtra 411040</p>
          <p className="text-sm text-gray-200">📞 +91-9876543XXX</p>
          <p className="text-sm text-gray-200">✉️ info@arpitasacademy.com</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-white text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-300">
        &copy; {currentYear} Arpita&apos;s Science Academy. All rights reserved.
      </div>
    </footer>
  );
};
