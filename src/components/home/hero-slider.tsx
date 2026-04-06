"use client";

import { useState, useEffect, useCallback, type TouchEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/hero-slides";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  }, [currentIndex]);

  const handleTouchActivate = (
    event: TouchEvent<HTMLButtonElement>,
    action: () => void
  ) => {
    event.preventDefault();
    event.stopPropagation();
    action();
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, goToNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const currentSlide = heroSlides[currentIndex];

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
              <Image
                key={`image-${currentSlide.id}`}
                src={currentSlide.backgroundImage ?? "/images/instagram/posts/clinic-01.jpeg"}
                alt={currentSlide.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={currentSlide.id === 1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent pointer-events-none" />
            </div>

            <div className="px-5 py-6 sm:px-7 sm:py-8 lg:px-9 lg:py-10 bg-gradient-to-br from-white to-slate-50/70">
              <div key={`text-${currentSlide.id}`} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 text-[11px] md:text-xs font-semibold text-[var(--brand-dark)] text-left leading-snug max-w-full">
                  {"Ankara & Eryaman · Online beslenme danışmanlığı"}
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

                <div className="pt-1 flex flex-col items-stretch gap-3">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Link href="/programlar" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto min-h-[44px] bg-[var(--brand-dark)] text-white hover:bg-[var(--brand-secondary)] shadow-lg transition-all duration-300 group h-11 md:h-12 px-6"
                      >
                        Programları İncele
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="w-full sm:w-auto min-h-[44px] border-2 border-[var(--brand-dark)]/20 bg-transparent text-[var(--brand-dark)] hover:bg-slate-50 h-11 md:h-12 px-6"
                    >
                      <a
                        href={buildWhatsAppApiUrl(
                          "Merhaba, bilgi almak istiyorum.",
                          `hero_slide_${currentIndex + 1}`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackWhatsAppClick(`hero_slide_${currentIndex + 1}`)
                        }
                      >
                        WhatsApp&apos;tan Bilgi Al
                      </a>
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="lg"
                    asChild
                    className="w-full sm:w-auto min-h-[44px] h-auto py-3 text-sm font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-secondary)] hover:bg-pink-50/80"
                  >
                    <a
                      href={buildWhatsAppApiUrl(
                        "Merhaba, ücretsiz ön görüşme hakkında bilgi almak istiyorum.",
                        "hero_on_gorusme"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center sm:text-left justify-center sm:justify-start"
                      onClick={() => trackWhatsAppClick("hero_on_gorusme")}
                    >
                      Ücretsiz ön görüşme bilgisi (WhatsApp)
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/80 bg-slate-50/85 px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goToPrevious}
                onTouchEnd={(e) => handleTouchActivate(e, goToPrevious)}
                className="inline-flex bg-white hover:bg-slate-100 text-[var(--brand-dark)] p-3 rounded-full transition-all duration-300 shadow-sm touch-manipulation"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => goToSlide(index)}
                    onTouchEnd={(e) => handleTouchActivate(e, () => goToSlide(index))}
                    className={`transition-all duration-300 rounded-full touch-manipulation ${
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
                type="button"
                onClick={goToNext}
                onTouchEnd={(e) => handleTouchActivate(e, goToNext)}
                className="inline-flex bg-white hover:bg-slate-100 text-[var(--brand-dark)] p-3 rounded-full transition-all duration-300 shadow-sm touch-manipulation"
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
