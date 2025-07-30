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
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* ✅ MOBILE ONLY: Director image left, quote right */}
      <div className="block sm:hidden w-full mb-8">
        <div className="flex flex-row items-center justify-between gap-4">
          {/* Director Image */}
          <div className="w-1/3 flex justify-center">
            <Image
              src="/gallery/director.jpg"
              alt="Director"
              width={100}
              height={100}
              className="rounded-lg object-cover"
              priority
            />
          </div>

          {/* Quote */}
          <div className="w-2/3 text-left text-white">
            <p className="text-sm font-semibold">
              &quot;Success is no accident. It is hard work, perseverance, learning,
              studying, sacrifice, and most of all, love of what you are doing.&apos;
            </p>
            <p className="text-xs text-white/80 mt-1">- Sikandar Sir</p>
            <p className="text-xs text-white/60">
              Director at Arpita&apos; Science Academy
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP ONLY: Original full hero */}
      <div className="hidden sm:flex relative w-full h-[400px] mb-8 rounded-xl overflow-hidden items-center justify-center">
        <Image
          src="/gallery/director.jpg"
          alt="Director"
          width={300}
          height={200}
          className="brightness-95 object-cover ml-0"
          priority
        />
        <div className="inset-0 flex flex-col items-center justify-end px-4 text-center absolute z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100
 drop-shadow-lg mb-0 ">
            &quot;Success is no accident. It is hard work, perseverance,
            learning, studying, sacrifice, and most of all, love of what you
            are doing.&quot;
          </h1>
          <p className="text-lg text-white/80">- Sikandar Sir</p>
          <p className="text-sm text-white/80">
            Director at Arpita&apos;s Science Academy
          </p>
        </div>
      </div>

      {/*  Gallery grid */}
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
