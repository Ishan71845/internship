"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CourseFilter } from "@/components/courses/CourseFilter";
import { coursesData } from "@/lib/courseData";

export default function CoursesPage() {
  const [filters, setFilters] = useState({
    targetExam: "",
    programType: "",
    board: "",
    classLevel: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (!filters.targetExam) return;

    if (filters.targetExam === "Foundation" && filters.board && filters.classLevel) {
      const course = coursesData.find(
        c =>
          c.targetExam === "Foundation" &&
          c.board === filters.board &&
          c.classLevel === filters.classLevel
      );
      if (course) {
        router.push(`/courses/${course.slug}`);
      } else {
        alert("No matching Foundation course found.");
      }
    }

    if (filters.targetExam !== "Foundation" && filters.programType) {
      const course = coursesData.find(
        c =>
          c.targetExam === filters.targetExam &&
          c.programType === filters.programType
      );
      if (course) {
        router.push(`/courses/${course.slug}`);
      } else {
        alert("No matching course found for selected program.");
      }
    }
  }, [filters, router]);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Find Your Course</h1>
      <CourseFilter onFilterChange={setFilters} />
    </div>
  );
}
