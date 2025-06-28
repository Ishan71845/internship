"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type Faculty = {
  id: number;
  name: string;
  subject: string;
  experience: string;
  photoPreview: string; // for local preview
};

export default function FacultyPage() {
  const [facultyList, setFacultyList] = useState<Faculty[]>([
    {
      id: 1,
      name: "Dr. Rajeev Mehra",
      subject: "Physics",
      experience: "15 years",
      photoPreview: "/faculty/raj.jpg",
    },
    {
      id: 2,
      name: "Ms. Sunita Joshi",
      subject: "Biology",
      experience: "10 years",
      photoPreview: "/faculty/sunita.jpg",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState<Faculty | null>(null);
  const [form, setForm] = useState<Omit<Faculty, "id">>({
    name: "",
    subject: "",
    experience: "",
    photoPreview: "",
  });

  const openAddModal = () => {
    setForm({ name: "", subject: "", experience: "", photoPreview: "" });
    setEditingFaculty(null);
    setModalOpen(true);
  };

  const openEditModal = (faculty: Faculty) => {
    setForm({
      name: faculty.name,
      subject: faculty.subject,
      experience: faculty.experience,
      photoPreview: faculty.photoPreview,
    });
    setEditingFaculty(faculty);
    setModalOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setForm(prev => ({ ...prev, photoPreview: imageUrl }));
    }
  };

  const handleSave = () => {
    if (editingFaculty) {
      setFacultyList(prev =>
        prev.map(f =>
          f.id === editingFaculty.id ? { ...editingFaculty, ...form } : f
        )
      );
    } else {
      setFacultyList(prev => [
        ...prev,
        { id: Date.now(), ...form },
      ]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this faculty?")) {
      setFacultyList(prev => prev.filter(f => f.id !== id));
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Faculty</h1>
        <Button onClick={openAddModal}>+ Add Faculty</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Photo</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Experience</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {facultyList.map(faculty => (
              <tr key={faculty.id}>
                <td className="p-2 border">
                  <Image
                    src={faculty.photoPreview}
                    alt={faculty.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="p-2 border">{faculty.name}</td>
                <td className="p-2 border">{faculty.subject}</td>
                <td className="p-2 border">{faculty.experience}</td>
                <td className="p-2 border space-x-2">
                  <Button size="sm" onClick={() => openEditModal(faculty)}>
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(faculty.id)}
                  >
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
            <DialogTitle>
              {editingFaculty ? "Edit Faculty" : "Add Faculty"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Input
              placeholder="Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <Input
              placeholder="Subject"
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
            />
            <Input
              placeholder="Experience"
              value={form.experience}
              onChange={e => setForm({ ...form, experience: e.target.value })}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {form.photoPreview && (
              <Image
                src={form.photoPreview}
                alt="Preview"
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover mt-2"
              />
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>
              {editingFaculty ? "Save Changes" : "Add Faculty"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
