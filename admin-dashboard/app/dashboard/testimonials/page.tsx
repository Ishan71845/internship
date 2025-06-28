"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type Testimonial = {
  id: number;
  student: string;
  photoPreview: string;
};

export default function TestimonialsPage() {
  const [testimonialList, setTestimonialList] = useState<Testimonial[]>([
    { id: 1, student: "Aakash S.", photoPreview: "/testimonials/aakash.jpg" },
    { id: 2, student: "Neha P.", photoPreview: "/testimonials/neha.jpg" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [form, setForm] = useState<Omit<Testimonial, "id">>({ student: "", photoPreview: "" });

  const openAddModal = () => {
    setForm({ student: "", photoPreview: "" });
    setEditingTestimonial(null);
    setModalOpen(true);
  };

  const openEditModal = (testimonial: Testimonial) => {
    setForm({ student: testimonial.student, photoPreview: testimonial.photoPreview });
    setEditingTestimonial(testimonial);
    setModalOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setForm(prev => ({ ...prev, photoPreview: URL.createObjectURL(file) }));
    }
  };

  const handleSave = () => {
    if (editingTestimonial) {
      setTestimonialList(prev =>
        prev.map(t => (t.id === editingTestimonial.id ? { ...editingTestimonial, ...form } : t))
      );
    } else {
      setTestimonialList(prev => [{ id: Date.now(), ...form }, ...prev]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this testimonial?")) {
      setTestimonialList(prev => prev.filter(t => t.id !== id));
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Testimonials</h1>
        <Button onClick={openAddModal}>+ Add Testimonial</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {testimonialList.map(testimonial => (
          <div key={testimonial.id} className="border rounded p-2">
            <Image
              src={testimonial.photoPreview}
              alt={testimonial.student}
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-2 font-semibold">{testimonial.student}</div>
            <div className="space-x-2 mt-2">
              <Button size="sm" onClick={() => openEditModal(testimonial)}>Edit</Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(testimonial.id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Student Name"
              value={form.student}
              onChange={e => setForm({ ...form, student: e.target.value })}
              className="w-full border rounded p-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-purple-50 file:text-purple-700
                hover:file:bg-purple-100"
            />
            {form.photoPreview && (
              <Image
                src={form.photoPreview}
                alt="Preview"
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded mt-2"
              />
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>{editingTestimonial ? "Save Changes" : "Add Testimonial"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
