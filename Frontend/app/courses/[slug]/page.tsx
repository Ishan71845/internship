"use client";

import { coursesData } from "@/lib/courseData";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/courses/LeadForm";

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = coursesData.find(c => c.slug === params.slug);
  if (!course) return notFound();

  return (
    <div className="container py-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-muted-foreground mb-6">{course.description}</p>
      <div className="mb-6 space-y-2 text-sm">
        <div><strong>Target Exam:</strong> {course.targetExam}</div>
        <div><strong>Program Type:</strong> {course.programType}</div>
        <div><strong>Board:</strong> {course.board}</div>
      </div>
      <Button size="lg" onClick={() => {
        document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
      }}>
        Apply Now
      </Button>

      <div id="apply-form" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Apply for this course</h2>
        <LeadForm />
      </div>
    </div>
  );
}
