"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Danışan Yorumu",
    role: "Kilo Verme Süreci",
    content:
      "Süreçte motivasyonun yüksek tutulduğu, düzenli takip edilen ve sürdürülebilir şekilde kilo yönetimine odaklanan bir danışmanlık deneyimi.",
    rating: 5,
    initials: "DY",
    source: "DoktorTakvimi",
  },
  {
    id: 2,
    name: "Danışan Yorumu",
    role: "Online Danışmanlık",
    content:
      "Online görüşme düzeni ve günlük yaşama uyarlanabilir planlarla, farklı şehirlerden de düzenli ilerleme sağlanabildiğini vurgulayan geri bildirimler.",
    rating: 5,
    initials: "DY",
    source: "DoktorTakvimi",
  },
  {
    id: 3,
    name: "Danışan Yorumu",
    role: "Yaşam Tarzı Değişimi",
    content:
      "Sadece kilo kaybı değil, beslenme alışkanlıklarının kalıcı şekilde değişmesi ve sürecin uzun vadede sürdürülebilir olması öne çıkıyor.",
    rating: 5,
    initials: "DY",
    source: "DoktorTakvimi",
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
            DoktorTakvimi profilindeki danışan geri bildirimlerinden derlenmiştir
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
                    &ldquo;{testimonial.content}&rdquo;
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
                      <div className="text-[11px] text-primary font-medium mt-1">
                        Kaynak: {testimonial.source}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.doktortakvimi.com/ezgi-evgin/diyetisyen-beslenme-uzmani/ankara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary hover:underline"
          >
            Tüm yorumları DoktorTakvimi&apos;nde görüntüle
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
