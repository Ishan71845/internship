"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AchievementsCarousel from "@/components/layout/sections/AchievementCarousel";

const HeroSection = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2003;

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-16 overflow-hidden"
    >
      <div className="md:w-1/2 z-10 flex flex-col justify-center items-center md:items-start">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-blue-900">
          Arpita&apos;s Science Academy: Premier Coaching for IIT JEE, NEET, NDA, CET, 10th & 12th Foundation
        </h1>
        <h2 className="text-lg md:text-2xl font-medium mb-6 text-blue-700">
          {yearsOfExperience}+ years empowering students for success in entrance & board exams.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:justify-start mb-8">
          <Link href="/courses" aria-label="Explore Our Courses">
            <button className="bg-blue-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-900 transition">
              Explore Courses
            </button>
          </Link>
          <Link href="/contact" aria-label="Contact Us">
            <button className="bg-green-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-green-800 transition">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="mt-4 w-full">
          <AchievementsCarousel />
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <Image
          src="/heroSlide.png"
          alt="Students preparing for exams at Arpita's Science Academy"
          width={500}
          height={500}
          className="rounded-lg shadow-md"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
