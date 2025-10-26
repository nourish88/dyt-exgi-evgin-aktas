"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageSlider } from "@/components/ui/image-slider";
import { placeholderImages } from "@/lib/placeholder-images";
import { GraduationCap, Award, Heart, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const education = [
    {
      year: "2018 - 2022",
      title: "Beslenme ve Diyetetik",
      institution: "İstanbul Üniversitesi",
      description: "Lisans eğitimi",
    },
    {
      year: "2022 - 2024",
      title: "Klinik Beslenme Yüksek Lisans",
      institution: "Hacettepe Üniversitesi",
      description: "Yüksek lisans tamamlandı",
    },
  ];

  const certificates = [
    "Sporcu Beslenmesi Sertifikası",
    "Diyabet Danışmanlığı",
    "Obezite ve Kilo Yönetimi",
    "Çocuk Beslenmesi Uzmanlığı",
    "Fonksiyonel Tıp Eğitimi",
    "Online Danışmanlık Sertifikası",
  ];

  const expertise = [
    "Kilo Yönetimi ve Obezite Tedavisi",
    "Sporcu Beslenmesi",
    "Diyabet Diyeti",
    "Hamilelik ve Emzirme Dönemi Beslenmesi",
    "Çocuk ve Ergen Beslenmesi",
    "Beslenme Koçluğu",
  ];

  // Background slider state
  const [currentBg, setCurrentBg] = useState(0);

  const backgroundImages = [
    `data:image/svg+xml,${encodeURIComponent(`
      <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fce7f3;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#cffafe;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#d1fae5;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg1)"/>
        <circle cx="300" cy="200" r="150" fill="white" opacity="0.1"/>
        <circle cx="1600" cy="800" r="200" fill="white" opacity="0.15"/>
        <circle cx="1000" cy="400" r="120" fill="white" opacity="0.1"/>
      </svg>
    `)}`,
    `data:image/svg+xml,${encodeURIComponent(`
      <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fbcfe8;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#e0f2fe;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#fef3c7;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg2)"/>
        <circle cx="500" cy="600" r="180" fill="white" opacity="0.12"/>
        <circle cx="1400" cy="300" r="150" fill="white" opacity="0.1"/>
        <circle cx="900" cy="850" r="130" fill="white" opacity="0.15"/>
      </svg>
    `)}`,
    `data:image/svg+xml,${encodeURIComponent(`
      <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ddd6fe;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#fce7f3;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#cffafe;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg3)"/>
        <circle cx="400" cy="400" r="160" fill="white" opacity="0.1"/>
        <circle cx="1500" cy="700" r="190" fill="white" opacity="0.12"/>
        <circle cx="1100" cy="200" r="140" fill="white" opacity="0.15"/>
      </svg>
    `)}`,
  ];

  // Auto-rotate background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // 5 saniyede bir değiş

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Slider */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBg}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${backgroundImages[currentBg]}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Merhaba, Ben{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Ezgi Evgin Aktaş
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto drop-shadow-sm"
            >
              Uzman diyetisyen olarak, binlerce kişinin sağlıklı yaşam
              yolculuğunda rehberlik ettim. Amacım, sadece kilo verdirmek değil,
              yaşam tarzı değişikliği yaratarak kalıcı sonuçlar elde etmenizi
              sağlamak.
            </motion.p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBg(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentBg
                  ? "bg-[var(--brand-primary)] w-8 h-3"
                  : "bg-white/50 hover:bg-white/70 w-3 h-3"
              }`}
              aria-label={`Arka plan ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-pink-50 to-white border-2 border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Misyonum</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Sağlıklı beslenmeyi herkes için erişilebilir kılmak ve kişiye
                özel programlarla insanların en iyi versiyonlarına ulaşmalarına
                yardımcı olmak.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-white border-2 border-secondary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-secondary)] to-[var(--brand-accent)] flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Vizyonum</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Türkiye'nin ve dünyanın her yerinden insanlara online
                platformlar aracılığıyla ulaşarak, global bir sağlıklı yaşam
                topluluğu oluşturmak.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gradient-to-br from-pink-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Eğitim{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  Geçmişim
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2">{item.year}</Badge>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-primary font-medium mb-1">
                        {item.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sertifikalar & Uzmanlık
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  {" "}
                  Alanlarım
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certificates */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Sertifikalar
                </h3>
                <div className="space-y-3">
                  {certificates.map((cert, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]" />
                        <span className="text-sm font-medium">{cert}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-secondary" />
                  Uzmanlık Alanları
                </h3>
                <div className="space-y-3">
                  {expertise.map((item, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)]" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-accent)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sizin İçin Buradayım!
            </h2>
            <p className="text-lg text-white/90">
              Sağlıklı yaşam yolculuğunuzda size rehberlik etmek için
              sabırsızlanıyorum. Hemen iletişime geçin ve birlikte başlayalım!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/905333104970?text=Merhaba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 bg-white text-primary hover:bg-white/90 rounded-lg font-semibold transition-colors"
              >
                WhatsApp'tan İletişime Geç
              </a>
              <a
                href="/programlar"
                className="inline-flex items-center justify-center h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 transition-colors"
              >
                Programları İncele
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Çalışmalarımızdan Kareler */}
      <ImageSlider
        images={placeholderImages.workGallery}
        title="Çalışmalarımızdan Kareler"
        autoplay={true}
        autoplayInterval={6000}
      />
    </div>
  );
}
