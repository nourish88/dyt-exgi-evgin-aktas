"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote, ExternalLink } from "lucide-react";

const successStories = [
  {
    id: 1,
    title: "Sürdürülebilir Kilo Kaybı",
    quote:
      "Zorlayıcı diyetler yerine günlük yaşama uyumlu bir planla, motivasyon bozulmadan ilerleyebildim.",
    summary: "Düzenli takip ve sürdürülebilir beslenme yaklaşımı öne çıkıyor.",
  },
  {
    id: 2,
    title: "Online Süreçte Yüksek Verim",
    quote:
      "Online görüşmelerde bile süreç çok sistemliydi, sorularım hızlı yanıtlandı ve düzenim bozulmadan devam ettim.",
    summary: "Uzaktan danışmanlıkta düzenli iletişim ve pratik uygulama dikkat çekiyor.",
  },
  {
    id: 3,
    title: "Alışkanlık Değişimi",
    quote:
      "Sadece kilo vermedim; beslenme düzenimi kalıcı şekilde değiştirdim ve kendimi daha enerjik hissetmeye başladım.",
    summary: "Kısa dönem sonuçtan çok uzun vadeli yaşam tarzı değişimi vurgulanıyor.",
  },
  {
    id: 4,
    title: "Kişiye Özel Yaklaşım",
    quote:
      "Program birebir bana göre düzenlendiği için hem uygulaması kolay oldu hem de sonuçları net gördüm.",
    summary: "Kişiselleştirme ve uygulanabilir planlar memnuniyetin ana nedeni.",
  },
];

export function SuccessStoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-pink-50/40 to-cyan-50/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Başarı{" "}
            <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Hikayeleri
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Danışan yorumlarındaki en olumlu geri bildirimlerden derlenmiştir.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="h-full p-6 border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-white/85 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{story.title}</h3>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>

                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[var(--brand-warning)] text-[var(--brand-warning)]"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </p>

                  <p className="text-sm text-[var(--brand-dark)]/80 border-t pt-3">
                    {story.summary}
                  </p>
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
            Tüm danışan yorumlarını incele
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
