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
      className="relative min-h-[88svh] md:min-h-screen flex items-end md:items-center justify-center overflow-hidden py-4 md:py-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Hero slider"
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={`bg-${currentSlide.id}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0 bg-[#1A2332]/8"
        >
          <Image
            src={currentSlide.backgroundImage ?? "/images/instagram/posts/clinic-01.jpeg"}
            alt={currentSlide.title}
            fill
            className="object-contain object-center p-4 md:p-8"
            sizes="100vw"
            priority={currentSlide.id === 1}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,35,50,0.16)] via-[rgba(26,35,50,0.06)] to-[rgba(26,35,50,0.14)]" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 pb-8 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl mx-auto text-center space-y-3 md:space-y-5 md:-translate-y-10"
          >
            <div className="rounded-2xl bg-black/22 px-4 py-4 md:px-6 md:py-6 border border-white/20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 text-[11px] md:text-xs font-semibold text-[var(--brand-dark)]">
                Dünyanın Neresinde Olursanız Olun
              </div>
              <h1 className="mt-3 text-2xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)] break-words">
                {currentSlide.title}
              </h1>
              <p className="mt-3 text-sm md:text-xl text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] break-words">
                {currentSlide.description}
              </p>
              <p className="hidden md:block mt-3 text-base text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                Aç kalmadan, sürdürülebilir beslenme adımlarıyla ilerleyelim.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                <Link href="/programlar">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-[var(--brand-dark)] hover:bg-white/90 shadow-lg transition-all duration-300 group h-11 md:h-12 px-6"
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
                    className="w-full sm:w-auto border-2 border-white/75 bg-transparent text-white hover:bg-white/10 h-11 md:h-12 px-6"
                  >
                    WhatsApp&apos;tan Bilgi Al
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden md:flex pt-1 flex-wrap justify-center gap-2">
              {[
                "7/24 Online Destek",
                "Öğün Hatırlatıcı",
                "Öğün Resmi Gönderimi",
                "Mobil Uygulama ile Grafiksel Takip",
              ].map((item) => (
                <span
                  key={item}
                  className="px-2.5 md:px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium bg-white/80 text-[var(--brand-dark)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-5 md:mt-10 flex items-center justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="hidden sm:inline-flex bg-white/90 hover:bg-white text-[var(--brand-dark)] p-3 rounded-full transition-all duration-300 shadow-md"
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
            className="hidden sm:inline-flex bg-white/90 hover:bg-white text-[var(--brand-dark)] p-3 rounded-full transition-all duration-300 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
