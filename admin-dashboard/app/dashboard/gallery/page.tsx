"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type GalleryImage = {
  id: number;
  title: string;
  photoPreview: string;
};

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryImage[]>([
    { id: 1, title: "Campus View", photoPreview: "/gallery/campus.jpg" },
    { id: 2, title: "Annual Function", photoPreview: "/gallery/function.jpg" }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [form, setForm] = useState<Omit<GalleryImage, "id">>({ title: "", photoPreview: "" });

  const openAddModal = () => {
    setForm({ title: "", photoPreview: "" });
    setEditingImage(null);
    setModalOpen(true);
  };

  const openEditModal = (image: GalleryImage) => {
    setForm({ title: image.title, photoPreview: image.photoPreview });
    setEditingImage(image);
    setModalOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setForm(prev => ({
        ...prev,
        photoPreview: URL.createObjectURL(files[0])
      }));
    }
  };

  const handleSave = () => {
    if (editingImage) {
      setGallery(prev =>
        prev.map(img =>
          img.id === editingImage.id ? { ...editingImage, ...form } : img
        )
      );
    } else {
      setGallery(prev => [
        { id: Date.now(), ...form },
        ...prev
      ]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this image?")) {
      setGallery(prev => prev.filter(img => img.id !== id));
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Gallery</h1>
        <Button onClick={openAddModal}>+ Add Image</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map(image => (
          <div key={image.id} className="bg-white p-3 rounded shadow">
            <Image
              src={image.photoPreview}
              alt={image.title}
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-2 font-semibold">{image.title}</div>
            <div className="space-x-2 mt-2">
              <Button size="sm" onClick={() => openEditModal(image)}>Edit</Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(image.id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingImage ? "Edit Image" : "Add Image"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Image Title"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
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
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
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
            <Button onClick={handleSave}>{editingImage ? "Save Changes" : "Add Image"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
