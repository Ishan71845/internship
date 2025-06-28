"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ResultCollages() {
  const collages = [
    {
      id: 1,
      title: "12th Boards + JEE/NEET/CET Results",
      image: "/results/collage2.jpg",
    },
    {
      id: 2,
      title: "10th Boards Results",
      image: "/results/collage10.jpg",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Our Outstanding Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {collages.map((collage) => (
          <motion.div
            key={collage.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={collage.image}
                alt={collage.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{collage.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
