import Image from "next/image";
import { Instagram, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { InstagramGrid } from "./instagram-grid";

export async function InstagramSection() {
  const posts = await prisma.instagramPost.findMany({
    where: { active: true },
    orderBy: { order: "asc" },
    take: 6,
  });

  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50/50 via-white to-cyan-50/50 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[var(--brand-secondary)]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 md:gap-3 mb-4 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 rounded-full">
            <Image
              src="/images/instagram/profile.jpg"
              alt="dyt_ezgievgin profil"
              width={28}
              height={28}
              className="rounded-full border border-white/70"
            />
            <Instagram className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-sm md:text-lg">
              Instagram Ailem
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Günlük Paylaşımlarım
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Klinikten gerçek anlar, danışan süreci ve günlük motivasyon
            paylaşımları için Instagram hesabımı takip edin.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground mb-7">
            <Sparkles className="w-4 h-4 text-[var(--brand-primary)]" />
            <span>Gerçek Süreç</span>
            <span className="text-gray-300">•</span>
            <span>Klinikten Kareler</span>
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
        </div>

        <InstagramGrid posts={posts} />

        {/* Bottom CTA */}
        <div className="text-center mt-12">
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
        </div>
      </div>
    </section>
  );
}
