"use client";

import React from "react";
import { motion } from "framer-motion";

const AchievementsCarousel = () => {
  const achievements = [
    "✅ 500+ Enrollments Last Year",
    "🎯 95% Success Rate in Competitive Exams",
    "🏆 15+ Years of Excellence",
  ];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-8 whitespace-nowrap text-blue-800 font-semibold"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {achievements.map((item, idx) => (
          <span key={idx} className="flex-shrink-0">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default AchievementsCarousel;
