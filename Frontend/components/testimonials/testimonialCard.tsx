"use client";

import { testimonialsData } from "@/lib/testimonialData";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function TestimonialsCards() {
  return (
    <section className="py-12 container">
      <h2 className="text-center text-3xl font-bold mb-8 text-primary">
        What Our Students Say
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {testimonialsData.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              show: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="h-[300px] p-5 flex flex-col justify-between bg-card shadow-md rounded-xl">
              <CardContent className="flex flex-col h-full p-0">
                <div className="text-sm text-muted-foreground italic mb-4 overflow-hidden text-ellipsis">
                  “{testimonial.review.length > 280
                    ? testimonial.review.slice(0, 280) + "..."
                    : testimonial.review}”
                </div>

                <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground font-medium">
                  <span>- {testimonial.name}</span>
                  <span>{"⭐".repeat(testimonial.rating)}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
