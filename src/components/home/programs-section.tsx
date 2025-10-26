"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const programs = [
  {
    id: 1,
    name: "10 Günlük Roket Program",
    slug: "10-gunluk-roket-program",
    description:
      "Hızlı sonuç almak isteyenler için özel tasarlanmış 10 günlük yoğun program.",
    features: [
      "10 günlük kişisel diyet programı",
      "Hızlı kilo verme",
      "Detoks etkisi",
      "WhatsApp destek",
    ],
    badge: "Popüler",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    name: "2 Diyet + 2 Motivasyon",
    slug: "2d2m-danismanlik",
    description:
      "2 diyet programı ve 2 motivasyon görüşmesi ile dengeli bir süreç.",
    features: [
      "2 kişisel diyet programı",
      "2 motivasyon görüşmesi",
      "60 günlük süreç",
      "Online görüşme",
    ],
    badge: "En Çok Tercih Edilen",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    name: "4 Diyet Danışmanlığı",
    slug: "4d-danismanlik",
    description: "Kapsamlı takip ve düzenli görüşmelerle kalıcı sonuçlar.",
    features: [
      "4 kişisel diyet programı",
      "4 online görüşme",
      "120 günlük süreç",
      "Vücut analizi",
    ],
    badge: "Uzun Vadeli",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 4,
    name: "Sürdürülebilir Yaşam Paketi",
    slug: "surdurulebilir-yasam",
    description:
      "Yaşam tarzı değişikliği için kapsamlı beslenme koçluğu programı.",
    features: [
      "Kişiye özel yaşam planı",
      "Sürdürülebilir beslenme",
      "Alışkanlık koçluğu",
      "Sınırsız WhatsApp desteği",
    ],
    badge: "Premium",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function ProgramsSection() {
  const handleWhatsApp = (programName: string) => {
    const message = encodeURIComponent(
      `Merhaba, ${programName} hakkında bilgi almak istiyorum.`
    );
    window.open(`https://wa.me/905333104970?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Online Diyet{" "}
            <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Programlarımız
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Size en uygun programı seçin, sağlıklı yaşam yolculuğunuza hemen
            başlayın.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative h-full p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Badge */}
                <Badge className="mb-4" variant="secondary">
                  {program.badge}
                </Badge>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-sm text-muted-foreground min-h-[60px]">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 pt-4 border-t">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-[var(--brand-success)] mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* WhatsApp Button */}
                  <Button
                    onClick={() => handleWhatsApp(program.name)}
                    className="w-full mt-6 bg-[#25D366] hover:bg-[#20BD5A] text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp'tan Bilgi Al
                  </Button>
                </div>
              </Card>
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
          <Link href="/programlar">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary"
            >
              Tüm Programları Görüntüle
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
