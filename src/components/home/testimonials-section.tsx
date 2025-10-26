"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ayşe K.",
    role: "10 Günlük Program",
    content:
      "10 günde 4 kilo verdim ve kendimi çok daha enerjik hissediyorum. Ezgi Hanım'ın profesyonel yaklaşımı ve sürekli desteği sayesinde hedefime ulaştım.",
    rating: 5,
    initials: "AK",
  },
  {
    id: 2,
    name: "Mehmet Y.",
    role: "4 Diyet Danışmanlığı",
    content:
      "Yıllardır vermeye çalıştığım kiloları sonunda verdim. Program boyunca her soruma anında cevap aldım. Kesinlikle tavsiye ediyorum!",
    rating: 5,
    initials: "MY",
  },
  {
    id: 3,
    name: "Zeynep T.",
    role: "Sürdürülebilir Yaşam",
    content:
      "Sadece kilo vermekle kalmadım, beslenme alışkanlıklarımı tamamen değiştirdim. Artık daha sağlıklı ve mutluyum. Teşekkürler!",
    rating: 5,
    initials: "ZT",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50/50 via-cyan-50/30 to-green-50/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Danışanlarımızın{" "}
            <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Görüşleri
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Binlerce mutlu danışanımızdan bazılarının deneyimleri
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="relative p-6 h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />

                <div className="space-y-4 relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[var(--brand-warning)] text-[var(--brand-warning)]"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
