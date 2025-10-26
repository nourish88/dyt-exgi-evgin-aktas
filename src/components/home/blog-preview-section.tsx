"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";

// Demo blog posts
const blogPosts = [
  {
    id: 1,
    title: "Sağlıklı Kilo Verme İçin 10 Altın Kural",
    excerpt:
      "Kalıcı ve sağlıklı bir şekilde kilo vermek için mutlaka bilmeniz gereken 10 temel kuralı sizler için derledik.",
    category: "Beslenme",
    date: "15 Ekim 2025",
    readTime: "5 dk",
    slug: "saglikli-kilo-verme-icin-10-altin-kural",
  },
  {
    id: 2,
    title: "Metabolizmayı Hızlandıran Besinler",
    excerpt:
      "Metabolizmanızı doğal yollarla hızlandırmanıza yardımcı olacak süper besinleri keşfedin.",
    category: "Sağlık",
    date: "12 Ekim 2025",
    readTime: "4 dk",
    slug: "metabolizmayi-hizlandiran-besinler",
  },
  {
    id: 3,
    title: "Su İçmenin Kilo Vermeye Etkisi",
    excerpt:
      "Günlük su tüketiminin kilo kaybı sürecindeki rolü ve faydaları hakkında bilmeniz gerekenler.",
    category: "İpuçları",
    date: "10 Ekim 2025",
    readTime: "3 dk",
    slug: "su-icmenin-kilo-vermeye-etkisi",
  },
];

export function BlogPreviewSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50/30 via-white to-cyan-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Sağlık{" "}
            <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Blogu
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Sağlıklı beslenme ve yaşam hakkında faydalı bilgiler
          </motion.p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary/20">
                  <div className="space-y-4">
                    {/* Category Badge */}
                    <Badge variant="secondary" className="font-medium">
                      {post.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 pt-4 border-t text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-sm text-primary font-medium pt-2 group-hover:gap-3 transition-all">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary"
            >
              Tüm Blog Yazılarını Görüntüle
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
