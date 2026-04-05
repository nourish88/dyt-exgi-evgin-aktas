"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const instagramPosts = [
  {
    id: 1,
    image: "/images/instagram/posts/post-05.jpeg",
    label: "Tarif",
  },
  {
    id: 2,
    image: "/images/instagram/posts/post-06.jpeg",
    label: "Kahvaltı",
  },
  {
    id: 3,
    image: "/images/instagram/posts/post-07.jpeg",
    label: "Motivasyon",
  },
  {
    id: 4,
    image: "/images/instagram/posts/post-08.jpeg",
    label: "Danışan",
  },
  {
    id: 5,
    image: "/images/instagram/posts/post-09.jpeg",
    label: "Soru-Cevap",
  },
];

export function InstagramSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50/50 via-white to-cyan-50/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[var(--brand-secondary)]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 rounded-full">
            <Image
              src="/images/instagram/profile.jpg"
              alt="dyt_ezgievgin profil"
              width={28}
              height={28}
              className="rounded-full border border-white/70"
            />
            <Instagram className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-lg">
              Instagram Ailem
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Günlük Paylaşımlarım
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Sağlıklı tarifler, beslenme ipuçları ve günlük motivasyon için
            Instagram hesabımı takip edin.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-7">
            <Sparkles className="w-4 h-4 text-[var(--brand-primary)]" />
            <span>Tarifler</span>
            <span className="text-gray-300">•</span>
            <span>Pratik Öğünler</span>
            <span className="text-gray-300">•</span>
            <span>Danışan Motivasyonu</span>
          </div>

          <a
            href="https://instagram.com/dyt_ezgievgin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group h-14 px-8"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @dyt_ezgievgin
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href="https://instagram.com/dyt_ezgievgin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[var(--brand-primary)] transition-all duration-300 cursor-pointer aspect-square">
                  <Image
                    src={post.image}
                    alt={`Instagram içerik ${post.id}`}
                    fill
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/90 to-[var(--brand-secondary)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-white p-4 w-full">
                      <span className="inline-flex text-xs font-semibold px-2.5 py-1 bg-white/20 rounded-full">
                        {post.label}
                      </span>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Daha fazlası için Instagram&apos;da beni takip edin.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Her gün yeni içerik</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full animate-pulse" />
              <span>Canlı soru-cevap</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
