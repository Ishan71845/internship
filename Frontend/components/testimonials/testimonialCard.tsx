"use client";

import { testimonialsData } from "@/lib/testimonialData";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function TestimonialsCards() {
  return (
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">What Our Students Say</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {testimonialsData.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              show: { opacity: 1, scale: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotateX: 3,
              rotateY: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
            }}
          >
            <Card className="p-4 min-h-48 flex flex-col justify-between shadow-md">
              <CardContent>
                <p className="mb-4 italic">&quot;{testimonial.review}&quot;</p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>- {testimonial.name}</span>
                  <span>{"⭐".repeat(testimonial.rating)}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
