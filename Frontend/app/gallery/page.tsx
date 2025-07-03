"use client";

import Image from "next/image";

const galleryImages = [
  "/gallery/director.jpg",
  "/gallery/pic1.jpg",
  "/gallery/pic2.jpg",
  "/gallery/pic3.jpg",
  "/gallery/pic4.jpg",
  "/gallery/pic5.jpg",
  "/gallery/pic6.jpg",
  "/gallery/pic7.jpg",
  "/gallery/pic8.jpg",
  "/gallery/pic9.jpg",
  "/gallery/pic10.jpg",
  "/gallery/pic11.jpg",
  "/gallery/pic12.jpg",
  "/gallery/pic13.jpg",
  "/gallery/pic14.jpg",
  "/gallery/pic15.jpg",
  "/gallery/pic16.jpg",
  "/gallery/pic17.jpg",
  "/gallery/pic18.jpg",
  "/gallery/pic19.jpg",
  "/gallery/pic20.jpg",
  "/gallery/pic21.jpg",
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section with Director */}
      <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden justify-center">
        <Image
          src="/gallery/director.jpg"
          alt="Director"
          width={500}
          height={400}
          className="object-cover brightness-75 align-item-centre"
          priority
        />
        <div className="absolute inset-0 flex items-center align-item-center justify-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">
            Meet Our Director
          </h1>
        </div>
      </div>

      {/* Gallery grid */}
    <div className="columns-3 sm:columns-2 md:columns-3 gap-4 space-y-4">
      {galleryImages
        .filter((src) => src !== "/gallery/director.jpg")
        .map((src, idx) => (
        <div key={idx} className="overflow-hidden rounded-lg">
          <Image
            src={src}
            alt={`Gallery ${idx + 1}`}
            width={400}
            height={300}
            className="w-full mb-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
        </div>
        ))}
    </div>
    </div>
  );
}
