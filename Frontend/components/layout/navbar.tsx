"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md" aria-label="Main navigation">
      <div className="container flex items-center justify-between py-7 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo2.png" alt="Arpita's Science Academy Logo" width={80} height={80} />
          <span className="text-lg font-bold text-blue-800 hidden sm:block">
            Arpita&apos;s Science Academy
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-8 font-medium text-gray-700">
            <li><Link href="/">Why Us</Link></li>
            <li><Link href="/results">Results</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/faculty">Faculty</Link></li>
            <li><Link href="/testimonial">Testimonials</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <Link href="/sample-material">Sample Study Material</Link>
            <Link href="/admin/login" className="text-sm font-medium">Admin</Link>

          </ul>

          {/* Social icons on desktop */}
          <div className="flex gap-4 ml-6">
            <a
              href="https://www.instagram.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={22} className="text-pink-600 hover:text-pink-800" />
            </a>
            <a
              href="https://www.facebook.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={22} className="text-blue-600 hover:text-blue-800" />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} className="text-green-600 hover:text-green-800" />
            </a>
          </div>
        </div>

        {/* Hamburger icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Why Us</Link>
            </li>
            <li>
              <Link href="/results" onClick={() => setIsOpen(false)}>Results</Link>
            </li>
            <li>
              <Link href="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
            </li>
            <li>
              <Link href="/faculty" onClick={() => setIsOpen(false)}>Faculty</Link>
            </li>
            <li>
              <Link href="/testimonial" onClick={() => setIsOpen(false)}>Testimonials</Link>
            </li>
          </ul>

          {/* Social icons in mobile */}
          <div className="flex justify-center gap-6 py-4 border-t border-gray-200">
            <a
              href="https://www.instagram.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={26} className="text-pink-600 hover:text-pink-800" />
            </a>
            <a
              href="https://www.facebook.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={26} className="text-blue-600 hover:text-blue-800" />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={26} className="text-green-600 hover:text-green-800" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
