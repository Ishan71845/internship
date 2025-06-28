"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { studentPairs } from "@/data/studentData";

const ResultCarousel = () => {
  const [duration, setDuration] = useState(12); // default for medium/large

  // Detect screen width and adjust duration
  useEffect(() => {
    const updateDuration = () => {
      if (window.innerWidth < 640) {
        setDuration(6); // faster on small devices
      } else {
        setDuration(12); // normal on md and above
      }
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  return (
    <div className="overflow-hidden w-full py-6">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
      >
        {[...studentPairs, ...studentPairs].map((pair, index) => (
          <div
            key={index}
            className="min-w-[320px] bg-white shadow-lg rounded-xl p-4"
          >
            <div className="flex justify-center gap-4">
              {pair.map((student, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-full"
                  />
                  <p className="font-extrabold mt-2 text-blue-600">{student.name}</p>
                  <p className="text-red-500 font-bold mt-1">{student.exam}</p>
                  <p className="text-sm text-gray-600">{student.rank}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ResultCarousel;
