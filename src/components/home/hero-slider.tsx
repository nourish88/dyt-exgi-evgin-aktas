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
      if (index === currentIndex) return;
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
      x: direction > 0 ? 70 : -70,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 70 : -70,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative py-6 md:py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Hero slider"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-[30px] border border-slate-200/80 bg-white/90 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.55)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr]">
            <div className="relative h-[45svh] min-h-[320px] lg:h-[560px] bg-slate-100">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`image-${currentSlide.id}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={
                      currentSlide.backgroundImage ??
                      "/images/instagram/posts/clinic-01.jpeg"
                    }
                    alt={currentSlide.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority={currentSlide.id === 1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="px-5 py-6 sm:px-7 sm:py-8 lg:px-9 lg:py-10 bg-gradient-to-br from-white to-slate-50/70">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={`text-${currentSlide.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-4"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 text-[11px] md:text-xs font-semibold text-[var(--brand-dark)]">
                    Online Beslenme Danışmanlığı
                  </div>

                  <h1 className="text-2xl md:text-4xl font-bold leading-tight text-[var(--brand-dark)]">
                    {currentSlide.title}
                  </h1>

                  <p className="text-sm md:text-lg text-slate-700 break-words">
                    {currentSlide.description}
                  </p>

                  <p className="text-sm text-slate-600">
                    Aç kalmadan, sürdürülebilir beslenme adımlarıyla ilerleyelim.
                  </p>

                  <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
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
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="border-t border-slate-200/80 bg-slate-50/85 px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={goToPrevious}
                className="inline-flex bg-white hover:bg-slate-100 text-[var(--brand-dark)] p-3 rounded-full transition-all duration-300 shadow-sm"
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
                className="inline-flex bg-white hover:bg-slate-100 text-[var(--brand-dark)] p-3 rounded-full transition-all duration-300 shadow-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
