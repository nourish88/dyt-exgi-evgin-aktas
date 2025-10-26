"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Placeholder Instagram posts
const instagramPosts = [
  {
    id: 1,
    image: `data:image/svg+xml,${encodeURIComponent(`
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#e91e8c;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f472b6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#ig1)"/>
        <text x="200" y="200" font-family="Arial" font-size="80" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white" opacity="0.9">🥗</text>
      </svg>
    `)}`,
    likes: 1247,
    comments: 89,
  },
  {
    id: 2,
    image: `data:image/svg+xml,${encodeURIComponent(`
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4ecdc4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#14b8a6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#ig2)"/>
        <text x="200" y="200" font-family="Arial" font-size="80" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white" opacity="0.9">🥑</text>
      </svg>
    `)}`,
    likes: 982,
    comments: 64,
  },
  {
    id: 3,
    image: `data:image/svg+xml,${encodeURIComponent(`
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f9a8d4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#c084fc;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#ig3)"/>
        <text x="200" y="200" font-family="Arial" font-size="80" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white" opacity="0.9">🍓</text>
      </svg>
    `)}`,
    likes: 1534,
    comments: 112,
  },
  {
    id: 4,
    image: `data:image/svg+xml,${encodeURIComponent(`
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1a2332;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#4f46e5;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#ig4)"/>
        <text x="200" y="200" font-family="Arial" font-size="80" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white" opacity="0.9">🥤</text>
      </svg>
    `)}`,
    likes: 876,
    comments: 45,
  },
  {
    id: 5,
    image: `data:image/svg+xml,${encodeURIComponent(`
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f472b6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#ig5)"/>
        <text x="200" y="200" font-family="Arial" font-size="80" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white" opacity="0.9">🥦</text>
      </svg>
    `)}`,
    likes: 1103,
    comments: 78,
  },
  {
    id: 6,
    image: `data:image/svg+xml,${encodeURIComponent(`
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#14b8a6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#ig6)"/>
        <text x="200" y="200" font-family="Arial" font-size="80" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white" opacity="0.9">🍎</text>
      </svg>
    `)}`,
    likes: 1421,
    comments: 95,
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
            Sağlıklı tarifler, beslenme ipuçları ve motivasyon dolu anlar için
            beni Instagram&apos;da takip edin!
          </p>

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[var(--brand-primary)] transition-all duration-300 cursor-pointer aspect-square">
                {/* Image */}
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/90 to-[var(--brand-secondary)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center space-y-3">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="w-5 h-5 fill-white" />
                        <span className="font-semibold">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-semibold">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
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
            Daha fazlası için Instagram&apos;da beni takip edin ve topluluğumuza
            katılın! 💖
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
