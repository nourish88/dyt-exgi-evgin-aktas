"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/hero-slides";

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const currentSlide = heroSlides[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative min-h-[88svh] md:min-h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Hero slider"
    >
      <div className="container mx-auto px-4 relative z-10 py-4 md:py-0 md:pb-24 md:h-screen md:flex md:items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="w-full grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-5 md:gap-8 items-center"
          >
            <div className="relative h-[44svh] min-h-[330px] rounded-3xl overflow-hidden border border-black/10 md:h-[76vh]">
              <Image
                src={currentSlide.backgroundImage ?? "/images/instagram/posts/clinic-01.jpeg"}
                alt={currentSlide.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority={currentSlide.id === 1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent md:hidden" />
            </div>

            <div className="rounded-2xl bg-white/92 md:bg-white/95 px-4 py-5 md:px-8 md:py-8 border border-black/8 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 text-[11px] md:text-xs font-semibold text-[var(--brand-dark)]">
                Online Beslenme Danışmanlığı
              </div>
              <h1 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[var(--brand-dark)] break-words">
                {currentSlide.title}
              </h1>
              <p className="mt-3 text-sm md:text-lg text-slate-700 break-words">
                {currentSlide.description}
              </p>
              <p className="hidden md:block mt-3 text-sm text-slate-600">
                Aç kalmadan, sürdürülebilir beslenme adımlarıyla ilerleyelim.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                <Link href="/programlar">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[var(--brand-dark)] text-white hover:bg-[var(--brand-secondary)] shadow-lg transition-all duration-300 group h-11 md:h-12 px-6"
                  >
                    Şimdi Başla
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=905462650440&text=Merhaba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-[var(--brand-dark)]/20 bg-transparent text-[var(--brand-dark)] hover:bg-slate-50 h-11 md:h-12 px-6"
                  >
                    WhatsApp&apos;tan Bilgi Al
                  </Button>
                </Link>
              </div>
              <div className="hidden md:flex pt-4 flex-wrap gap-2">
                {[
                  "7/24 Online Destek",
                  "Öğün Hatırlatıcı",
                  "Öğün Resmi Gönderimi",
                  "Mobil Uygulama ile Grafiksel Takip",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1.5 rounded-full text-[11px] font-medium bg-slate-100 text-[var(--brand-dark)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 flex items-center justify-center gap-4 md:mt-0 md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2">
          <button
            onClick={goToPrevious}
            className="inline-flex bg-white/95 hover:bg-white text-[var(--brand-dark)] p-3 rounded-full transition-all duration-300 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-[var(--brand-primary)] w-8 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="inline-flex bg-white/95 hover:bg-white text-[var(--brand-dark)] p-3 rounded-full transition-all duration-300 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
