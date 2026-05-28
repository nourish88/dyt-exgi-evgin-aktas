"use client";

import Image from "next/image";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const clinicImages = [
  "/images/clinic/clinic-01.jpg",
  "/images/clinic/clinic-02.jpg",
  "/images/clinic/clinic-03.jpg",
  "/images/clinic/clinic-04.jpg",
  "/images/clinic/clinic-05.jpg",
  "/images/clinic/clinic-06.jpg",
  "/images/clinic/clinic-07.jpg",
];

export function ClinicGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="mt-14 md:mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[var(--brand-dark)]">
          Kliniğimizden{" "}
          <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
            Kareler
          </span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Eryaman Atayıldız Plaza'daki kliniğimizde, ferah ve samimi bir ortamda
          beslenme danışmanlığı hizmeti sunuyoruz.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {clinicImages.map((src, idx) => (
          <Card
            key={src}
            className="group relative aspect-square overflow-hidden cursor-pointer border-none shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Ezgi Evgin Beslenme Kliniği - ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </Card>
        ))}
      </div>

      {/* Lightbox for viewing images */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-pink-300 transition-colors p-2"
            aria-label="Kapat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video sm:aspect-auto sm:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Klinik detayı"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
