"use client";

export default function CallToAction() {
  return (
    <section className="bg-blue-900 text-white py-16 px-6 md:px-20 text-center rounded-t-3xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-lg mb-6">
        Join hundreds of students who have already started their journey with us. Admissions closing soon!
      </p>
      <a
        href="/admissions"
        className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition"
      >
        Apply Now
      </a>
    </section>
  );
}
