"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  BadgeCheck,
  MessageCircleHeart,
  CalendarCheck2,
  Target,
} from "lucide-react";

const reasons = [
  {
    title: "Kişiye Özel Planlama",
    description:
      "Yaşam düzeninize, kan tahlillerinize ve hedeflerinize uygun, uygulanabilir bir beslenme planı oluşturulur.",
    icon: Target,
  },
  {
    title: "Yakın Takip",
    description:
      "Haftada 1 düzenli görüşme ile süreç değerlendirilir; hedefler ve motivasyon sürekli güncel tutulur.",
    icon: CalendarCheck2,
  },
  {
    title: "Anlık Online Destek",
    description:
      "Öğün resmi gönderimi, anlık geri bildirim, mobil hatırlatıcılar ve süreç içi hızlı iletişim ile yalnız kalmazsınız.",
    icon: MessageCircleHeart,
  },
  {
    title: "Mobil Uygulama Takibi",
    description:
      "Eski diyetlere erişim, fiziksel aktivite takibi ve kilo alma-verme eğrilerinin grafiksel analiziyle ilerleme net takip edilir.",
    icon: BadgeCheck,
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Neden{" "}
            <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Birlikte Çalışmalıyız?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-muted-foreground"
          >
            Hedefe odaklanan değil, sürdürülebilir sonuç üreten bir danışmanlık süreci.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full p-6 border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-primary)]/15 to-[var(--brand-secondary)]/15 flex items-center justify-center text-[var(--brand-primary)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
