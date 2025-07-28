"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { studentResults } from "@/lib/resultData";

export default function ResultComponent() {
  return (
    <section className="py-16 container">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Outstanding Achievers
      </h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {studentResults.map((student) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-card p-3 rounded-xl shadow-md text-center relative"
          >
            <div className=" top-2 -left-9 bg-yellow-400 text-black text-xs px-2 py-1 font-semibold rounded">
              {student.rank}
            </div>

            <div className="w-28 h-28 mx-auto mb-3 relative rounded-full overflow-hidden border-2 border-primary shadow">
              <Image
                src={student.image}
                alt={student.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>

            <h4 className="text-base font-semibold">{student.name}</h4>
            <p className="text-xs text-muted-foreground">{student.result}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
