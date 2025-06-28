import React from "react";
import { courses } from "@/data/coursesData";

export const CoursesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-xl shadow-md bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2 cursor-pointer hover:underline">
                {course.title}
              </h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
