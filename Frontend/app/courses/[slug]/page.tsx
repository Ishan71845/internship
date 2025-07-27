"use client";

import { coursesData } from "@/lib/courseData";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/courses/LeadForm";
import Image from "next/image";

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = coursesData.find(c => c.slug === params.slug);
  if (!course) return notFound();

  return (
    <div className="container py-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
      <p className="text-muted-foreground mb-4">{course.description}</p>

      {/* IMAGE */}
      {course.image && (
        <div className="mb-6">
          <Image
            src={course.image}
            alt={course.title}
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      )}

      {/* COURSE DETAILS */}
      <div className="mb-6 space-y-2 text-sm">
        <div><strong>Target Exam:</strong> {course.targetExam}</div>
        {course.programType && <div><strong>Program Type:</strong> {course.programType}</div>}
        {course.board && <div><strong>Board:</strong> {course.board}</div>}
        {course.classLevel && <div><strong>Class Level:</strong> {course.classLevel}</div>}
      </div>

      {/* FULL DESCRIPTION */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About this course</h2>
        <p className="text-base leading-relaxed text-gray-200">{course.longDescription}</p>
      </div>

      <Button size="lg" onClick={() => {
        document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
      }}>
        Apply Now
      </Button>

      {/* LEAD FORM */}
      <div id="apply-form" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Apply for this course</h2>
        <LeadForm course={params.slug} />
      </div>
    </div>
  );
}