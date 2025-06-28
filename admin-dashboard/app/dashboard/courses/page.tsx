"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  programType: string;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      title: "IIT-JEE Main & Advanced",
      slug: "jee-main-advanced",
      description: "2 year intensive course for JEE.",
      category: "JEE",
      programType: "Two year"
    },
    {
      id: 2,
      title: "NEET UG One Year",
      slug: "neet-ug-one-year",
      description: "1 year crash course for NEET.",
      category: "NEET",
      programType: "One year"
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  // Form state
  const [form, setForm] = useState<Omit<Course, "id">>({
    title: "",
    slug: "",
    description: "",
    category: "",
    programType: ""
  });

  const openAddModal = () => {
    setForm({ title: "", slug: "", description: "", category: "", programType: "" });
    setEditingCourse(null);
    setModalOpen(true);
  };

  const openEditModal = (course: Course) => {
    setForm({
      title: course.title,
      slug: course.slug,
      description: course.description,
      category: course.category,
      programType: course.programType
    });
    setEditingCourse(course);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (editingCourse) {
      // Edit mode
      setCourses(prev =>
        prev.map(c => c.id === editingCourse.id ? { ...editingCourse, ...form } : c)
      );
    } else {
      // Add mode
      setCourses(prev => [
        ...prev,
        { id: Date.now(), ...form }
      ]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this course?")) {
      setCourses(prev => prev.filter(c => c.id !== id));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Courses</h1>
        <Button onClick={openAddModal}>+ Add Course</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Program Type</th>
              <th className="p-2 border">Slug</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td className="p-2 border">{course.title}</td>
                <td className="p-2 border">{course.category}</td>
                <td className="p-2 border">{course.programType}</td>
                <td className="p-2 border">{course.slug}</td>
                <td className="p-2 border space-x-2">
                  <Button size="sm" onClick={() => openEditModal(course)}>Edit</Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(course.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingCourse ? "Edit Course" : "Add Course"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            <Input placeholder="Slug" value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} />
            <Input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
            <Input placeholder="Category (JEE, NEET, NDA, CET, Foundation)" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
            <Input placeholder="Program Type (One year, Two year, etc)" value={form.programType} onChange={e => setForm({ ...form, programType: e.target.value })} />
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>{editingCourse ? "Save Changes" : "Add Course"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
