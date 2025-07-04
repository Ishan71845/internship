"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type StudyMaterial = {
  id: number;
  title: string;
  fileName: string;
};

export default function SampleMaterialPage() {
  const [materials, setMaterials] = useState<StudyMaterial[]>([
    { id: 1, title: "Physics Notes", fileName: "physics_notes.pdf" },
    { id: 2, title: "Biology Revision", fileName: "bio_revision.pdf" }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<StudyMaterial | null>(null);
  const [form, setForm] = useState<Omit<StudyMaterial, "id">>({ title: "", fileName: "" });

  const openAddModal = () => {
    setForm({ title: "", fileName: "" });
    setEditingMaterial(null);
    setModalOpen(true);
  };

  const openEditModal = (material: StudyMaterial) => {
    setForm({ title: material.title, fileName: material.fileName });
    setEditingMaterial(material);
    setModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setForm(prev => ({ ...prev, fileName: files[0].name }));
    }
  };

  const handleSave = () => {
    if (editingMaterial) {
      setMaterials(prev =>
        prev.map(m =>
          m.id === editingMaterial.id ? { ...editingMaterial, ...form } : m
        )
      );
    } else {
      setMaterials(prev => [
        { id: Date.now(), ...form },
        ...prev
      ]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this material?")) {
      setMaterials(prev => prev.filter(m => m.id !== id));
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Sample Study Material</h1>
        <Button onClick={openAddModal}>+ Add PDF</Button>
      </div>

      <div className="space-y-3">
        {materials.map(material => (
          <div key={material.id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{material.title}</div>
              <div className="text-gray-600 text-sm">{material.fileName}</div>
            </div>
            <div className="space-x-2">
              <Button size="sm" onClick={() => openEditModal(material)}>Edit</Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(material.id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingMaterial ? "Edit Material" : "Add Material"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              className="w-full border rounded p-2"
            />
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-red-50 file:text-red-700
                hover:file:bg-red-100"
            />
            {form.fileName && (
              <div className="text-sm text-gray-700 mt-1">
                Selected: <span className="font-semibold">{form.fileName}</span>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>{editingMaterial ? "Save Changes" : "Add Material"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
