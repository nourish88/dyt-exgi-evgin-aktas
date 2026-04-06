"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Heart, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { aboutPageSliderImages } from "@/lib/hero-slides";

export default function AboutPage() {
  const education = [
    {
      year: "Lisans Eğitimi",
      title: "Beslenme ve Diyetetik",
      institution: "Başkent Üniversitesi",
      description:
        "Obez olan ve olmayan adölesanların beslenme alışkanlıklarının karşılaştırılması konulu tez ile tamamlandı.",
    },
    {
      year: "Yüksek Lisans",
      title: "Beslenme ve Diyetetik",
      institution: "Başkent Üniversitesi",
      description: "Lisansüstü akademik uzmanlaşma süreci devam etmektedir.",
    },
  ];

  const internships = [
    "Etimesgut Toplum Sağlığı Merkezi",
    "Ankara Tıp Fakültesi Çocuk Hastanesi",
    "Ankara Numune Eğitim ve Araştırma Hastanesi",
    "Gülhane Tıp Akademisi",
  ];

  const careerJourney = [
    {
      period: "İlk Klinik Deneyim",
      place: "Özel Çankaya Hastanesi",
      detail:
        "Klinik, poliklinik ve kurum diyetisyenliği alanlarında; kilo yönetimi ve hastalıklarda diyet tedavisi konularında danışan takibi.",
    },
    {
      period: "İkinci Kurumsal Adım",
      place: "Özel Koru Hastanesi",
      detail:
        "Kilo yönetimi, gebe-emziklilik dönemi beslenmesi, çocuk ve ergenlerde kilo yönetimi ve hastalıklarda beslenme tedavisi.",
    },
    {
      period: "2016 Eylül - Günümüz",
      place: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
      detail:
        "Kurucusu olduğu merkezde yasaksız, sürdürülebilir ve kişiye özel beslenme yaklaşımıyla danışanlarına hizmet vermektedir.",
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

  const slideCount = aboutPageSliderImages.length;
  const [heroIndex, setHeroIndex] = useState(0);

  const goHeroNext = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const goHeroPrev = useCallback(() => {
    setHeroIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    const interval = setInterval(goHeroNext, 5000);
    return () => clearInterval(interval);
  }, [goHeroNext]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goHeroPrev();
      if (e.key === "ArrowRight") goHeroNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goHeroNext, goHeroPrev]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Slider */}
      <section className="relative py-20 overflow-hidden min-h-[480px]">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={aboutPageSliderImages[heroIndex]}
                alt={`Ezgi Evgin Aktaş — görsel ${heroIndex + 1}`}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={heroIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px]" />
        </div>

        <button
          type="button"
          onClick={goHeroPrev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/90 text-[var(--brand-dark)] shadow-md hover:bg-white transition-colors"
          aria-label="Önceki görsel"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={goHeroNext}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/90 text-[var(--brand-dark)] shadow-md hover:bg-white transition-colors"
          aria-label="Sonraki görsel"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

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
              Ankara Eryaman merkezli kliniğimde ve online görüşmelerde;
              kilo verme, sürdürülebilir beslenme, metabolik hastalıklarda
              beslenme ve yaşam tarzı değişikliği odaklı danışmanlık veriyorum.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto"
            >
              Yaklaşımım, kısa süreli kısıtlamalardan çok uzun vadeli alışkanlık
              dönüşümünü hedefleyen; bilimsel, uygulanabilir ve danışan odaklı
              bir beslenme planlamasıdır.
            </motion.p>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center gap-2 px-12 max-w-full"
          role="tablist"
          aria-label="Hero görselleri"
        >
          {aboutPageSliderImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setHeroIndex(index)}
              className={`transition-all duration-300 rounded-full touch-manipulation ${
                index === heroIndex
                  ? "bg-[var(--brand-primary)] w-8 h-3"
                  : "bg-white/60 hover:bg-white/85 w-3 h-3"
              }`}
              aria-label={`Görsel ${index + 1}`}
              aria-current={index === heroIndex}
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
                Sağlıklı beslenmeyi sürdürülebilir hale getirip, kişiye özel
                planlarla danışanlarımın günlük yaşam içinde zorlanmadan
                ilerleyebildiği bir sistem kurmak.
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
                Eryaman ve Etimesgut başta olmak üzere Ankara&apos;da yüz yüze,
                Türkiye ve yurt dışından danışanlarla online olarak bilimsel ve
                uygulanabilir beslenme danışmanlığı sunmak.
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

      {/* Internship + Career */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Mesleki{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  Yolculuğum
                </span>
              </h2>
              <p className="text-muted-foreground">
                Eğitim, staj ve hastane deneyimlerinden kliniğime uzanan süreç
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Staj Deneyimleri</h3>
                <div className="space-y-3">
                  {internships.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[var(--brand-primary)]" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Lisans Tez Konusu</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Obez olan ve olmayan adölesanların beslenme alışkanlıklarının
                  karşılaştırılması.
                </p>
              </Card>
            </div>

            <div className="space-y-4">
              {careerJourney.map((item) => (
                <Card key={item.place} className="p-6">
                  <Badge className="mb-3">{item.period}</Badge>
                  <h3 className="text-lg font-bold mb-2">{item.place}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
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
                href={buildWhatsAppApiUrl(
                  "Merhaba, sizinle tanışmak ve bilgi almak istiyorum.",
                  "hakkimda"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 bg-white text-primary hover:bg-white/90 rounded-lg font-semibold transition-colors"
                onClick={() => trackWhatsAppClick("hakkimda")}
              >
                WhatsApp&apos;tan İletişime Geç
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

    </div>
  );
}
