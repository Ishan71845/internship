"use client";

import { facultyData } from "@/lib/facultyData";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export function FacultyCards() {
  return (
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Our Expert Faculty</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyData.map((faculty) => (
          <motion.div
            key={faculty.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="p-4 shadow-lg flex flex-col items-center">
              <div className="w-48 h-48 relative mb-4 rounded-full overflow-hidden">
                <Image
                  src={faculty.image}
                  alt={`${faculty.name} - ${faculty.subject}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
                <p className="text-purple-700">{faculty.subject}</p>
                <p className="text-gray-500 mt-1">{faculty.experience} experience</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
