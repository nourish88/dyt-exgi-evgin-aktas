"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { aboutPageSliderImages } from "@/lib/hero-slides";

// Etkileşim adacığı: yalnızca galeri slider state'ini yönetir.
// Sayfanın metin/başlık içeriği server'da render edilir (CLAUDE.md §4.1).
export function AboutGallery() {
  const slideCount = aboutPageSliderImages.length;
  const [heroIndex, setHeroIndex] = useState(0);

  const goHeroNext = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    const interval = setInterval(goHeroNext, 5000);
    return () => clearInterval(interval);
  }, [goHeroNext]);

  return (
    <div
      className="max-w-2xl mx-auto mt-10 w-full"
      role="region"
      aria-label="Fotoğraf galerisi"
    >
      <div className="rounded-[24px] border border-slate-200/80 bg-white/95 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
        <div className="relative aspect-[4/3] w-full bg-neutral-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={aboutPageSliderImages[heroIndex]}
                alt={`Dyt. Ezgi Evgin Aktaş — görsel ${heroIndex + 1}`}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 42rem"
                priority={heroIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="border-t border-slate-200/80 bg-slate-50/90 px-3 py-3 sm:px-4 sm:py-3">
          <div
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2"
            role="tablist"
            aria-label="Görsel seç (otomatik 5 sn)"
          >
            {aboutPageSliderImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setHeroIndex(index)}
                className={`transition-all duration-300 rounded-full touch-manipulation ${
                  index === heroIndex
                    ? "bg-[var(--brand-primary)] w-6 sm:w-8 h-2 sm:h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2 sm:w-3 sm:h-3"
                }`}
                aria-label={`Görsel ${index + 1}`}
                aria-current={index === heroIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
