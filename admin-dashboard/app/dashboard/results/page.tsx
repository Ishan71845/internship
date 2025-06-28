"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type Result = {
  id: number;
  exam: string;
  photoPreview: string;
};

export default function ResultsPage() {
  const [resultsList, setResultsList] = useState<Result[]>([
    { id: 1, exam: "NEET 2024", photoPreview: "/results/neet2024.jpg" },
    { id: 2, exam: "JEE 2024", photoPreview: "/results/jee2024.jpg" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingResult, setEditingResult] = useState<Result | null>(null);
  const [form, setForm] = useState<Omit<Result, "id">>({ exam: "", photoPreview: "" });

  const openAddModal = () => {
    setForm({ exam: "", photoPreview: "" });
    setEditingResult(null);
    setModalOpen(true);
  };

  const openEditModal = (result: Result) => {
    setForm({ exam: result.exam, photoPreview: result.photoPreview });
    setEditingResult(result);
    setModalOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setForm(prev => ({ ...prev, photoPreview: URL.createObjectURL(file) }));
    }
  };

  const handleSave = () => {
    if (editingResult) {
      setResultsList(prev =>
        prev.map(r => (r.id === editingResult.id ? { ...editingResult, ...form } : r))
      );
    } else {
      setResultsList(prev => [{ id: Date.now(), ...form }, ...prev]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this result?")) {
      setResultsList(prev => prev.filter(r => r.id !== id));
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Results</h1>
        <Button onClick={openAddModal}>+ Add Result</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {resultsList.map(result => (
          <div key={result.id} className="border rounded p-2">
            <Image
              src={result.photoPreview}
              alt={result.exam}
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-2 font-semibold">{result.exam}</div>
            <div className="space-x-2 mt-2">
              <Button size="sm" onClick={() => openEditModal(result)}>Edit</Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(result.id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingResult ? "Edit Result" : "Add Result"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Exam Name (e.g. NEET 2024)"
              value={form.exam}
              onChange={e => setForm({ ...form, exam: e.target.value })}
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
                file:bg-green-50 file:text-green-700
                hover:file:bg-green-100"
            />
            <Image
              src={form.photoPreview}
              alt="Preview"
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded mt-2"
            />
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>{editingResult ? "Save Changes" : "Add Result"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
