"use client";

import Image from "next/image";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mediaCategories = {
  education: {
    title: "Eğitim ve Seminerler",
    images: [
      {
        src: "/images/clinic/ilkokul-cocuklari-beslenme-egitimi.jpg",
        alt: "İlkokul Çocuklarına Beslenme Eğitimi",
      },
      {
        src: "/images/clinic/saglik-beslenme-egitimi.jpg",
        alt: "Sağlıklı Beslenme Eğitimi Verirken",
      },
      {
        src: "/images/clinic/kamu-kurumlari-egitimi.jpg",
        alt: "Kamu Kurumlarına Beslenme Eğitimi",
      },
      {
        src: "/images/clinic/kamu-kurumlari-dengeli-beslenme-egitimi.jpg",
        alt: "Kamu Kurumlarına Sağlıklı ve Dengeli Beslenme Eğitimi",
      },
      {
        src: "/images/clinic/okullarda-egitim.jpg",
        alt: "Okullarda Beslenme Eğitimi",
      },
      {
        src: "/images/clinic/egitim-verirken.jpg",
        alt: "Beslenme Semineri Verirken",
      },
      {
        src: "/images/clinic/egitimde.jpg",
        alt: "Eğitim Esnasında",
      },
    ],
  },
  press: {
    title: "Basın ve Medya",
    images: [
      {
        src: "/images/clinic/basina-demec-verirken.jpg",
        alt: "Basına Beslenme Hakkında Demeç Verirken",
      },
      {
        src: "/images/clinic/tgrt-haber-ornek-ogun.jpg",
        alt: "TGRT Haber'de Örnek Öğün Hazırlarken",
      },
      {
        src: "/images/clinic/tgrt-haber-ornek-menu.jpg",
        alt: "TGRT Haber'de Örnek Menü Hazırlarken",
      },
    ],
  },
};

export function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)]">
            Eğitimler &{" "}
            <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Basında Biz
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Toplum sağlığını geliştirmek için kurumsal firmalara, okullara ve
            kamu kuruluşlarına verdiğimiz eğitimlerden ve basına yansıyan
            karelerden bazıları.
          </p>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="education">Eğitim & Seminerler</TabsTrigger>
            <TabsTrigger value="press">Basın & Medya</TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mediaCategories.education.images.map((img, idx) => (
                <Card
                  key={idx}
                  className="group relative aspect-square overflow-hidden cursor-pointer border-none shadow-sm hover:shadow-md transition-all duration-300"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-xs font-medium p-3">
                      {img.alt}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="press" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mediaCategories.press.images.map((img, idx) => (
                <Card
                  key={idx}
                  className="group relative aspect-square md:aspect-[4/3] overflow-hidden cursor-pointer border-none shadow-sm hover:shadow-md transition-all duration-300"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 flex items-end">
                    <p className="text-white text-sm font-medium p-4">
                      {img.alt}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Lightbox for viewing images */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
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
              className="relative w-full max-w-5xl aspect-video sm:aspect-auto sm:h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full min-h-[50vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="text-white mt-4 text-lg font-medium text-center">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
