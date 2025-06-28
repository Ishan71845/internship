// app/components/AdmissionInfo.tsx

"use client";

import { motion } from "framer-motion";

export default function AdmissionInfo() {
  const steps = [
    {
      title: "Step 1: Inquiry",
      description: "Fill out our online inquiry form or visit our institute to get detailed information about the available courses.",
    },
    {
      title: "Step 2: Counseling",
      description: "Meet with our academic counselor to discuss your goals and find the best-fit course tailored to your needs.",
    },
    {
      title: "Step 3: Registration",
      description: "Complete the registration form with your personal and academic details.",
    },
    {
      title: "Step 4: Document Submission",
      description: "Submit necessary documents like ID proof, academic certificates, and passport-sized photographs.",
    },
    {
      title: "Step 5: Fee Payment",
      description: "Pay the admission fee through our secure online portal or at the institute front desk.",
    },
    {
      title: "Step 6: Confirmation",
      description: "Receive confirmation via email/SMS and attend the orientation session.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20 bg-blue-50" id="admission-info">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">Enrollment Procedure</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
