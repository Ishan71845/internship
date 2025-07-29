"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { studentPairs } from "@/data/studentData";

const ResultCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind sm: breakpoint
    };

    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full py-6">
      {isMobile ? (
        //  Mobile view with scroll-snap
        <div className="flex gap-4 overflow-x-auto px-4 scroll-snap-x scroll-snap-mandatory">
          {[...studentPairs, ...studentPairs].map((pair, index) => (
            <div
              key={index}
              className="w-[320px] flex-shrink-0 bg-white shadow-lg rounded-xl p-4 scroll-snap-align-start"
            >
              <div className="flex justify-between gap-4">
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
        </div>
      ) : (
        //  Desktop/laptop view with static layout
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {studentPairs.map((pair, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-4"
            >
              <div className="flex justify-between gap-4">
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
        </div>
      )}
    </div>
  );
};

export default ResultCarousel;
