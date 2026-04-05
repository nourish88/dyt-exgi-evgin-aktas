"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  Smartphone,
  CalendarCheck2,
  ExternalLink,
} from "lucide-react";
import { OnlineSupportFeatures } from "@/components/online-support-features";

export function ProgramsSection() {
  const clientAppUrl =
    process.env.NEXT_PUBLIC_CLIENT_APP_URL || "https://diet-six.vercel.app/login";

  const conversionCards = [
    {
      title: "Haftalık Strateji Görüşmesi",
      text: "Her hafta net bir plan: nerede zorlandınız, neyi değiştireceğiz, bu haftanın hedefi ne?",
      icon: CalendarCheck2,
      badge: "1:1 Takip",
    },
    {
      title: "Mobil Uygulama ile Süreç Yönetimi",
      text: "Diyetleriniz, geçmiş kayıtlarınız, aktivite verileriniz ve ilerleme grafikleri aktif danışan portalında tek ekranda.",
      icon: Smartphone,
      badge: "Uygulama Destekli",
    },
    {
      title: "Anlık İletişim ve Öğün Onayı",
      text: "Öğün fotoğrafı gönderin, geri bildirim alın; hatırlatıcılarla süreci aksatmadan ilerleyin.",
      icon: Sparkles,
      badge: "Günlük Motivasyon",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Bizim{" "}
            <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Takip Sistemimiz
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Hazır paket değil, size özel ve her hafta güncellenen bir sistem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {conversionCards.map((card) => (
            <Card key={card.title} className="p-5 border-2 hover:border-primary/20 transition-colors">
              <div className="space-y-3">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">
                  {card.badge}
                </span>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-primary)]/15 to-[var(--brand-secondary)]/15 flex items-center justify-center text-[var(--brand-primary)]">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.text}</p>
              </div>
            </Card>
          ))}
        </div>

        <OnlineSupportFeatures />

        <div className="mt-6 rounded-2xl border border-primary/20 bg-gradient-to-r from-cyan-50 to-pink-50 p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-[var(--brand-dark)]">
                Takip sadece anlatılmıyor, uygulamada aktif kullanılıyor.
              </p>
              <p className="text-sm text-muted-foreground">
                Danışanlar telefon numarasıyla giriş yapıp diyetlerini, geçmiş
                planlarını ve mesajlarını günlük olarak takip ediyor.
              </p>
            </div>
            <a href={clientAppUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="h-11 px-5 bg-white">
                Danışan Portalını Aç
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=905462650440&text=Merhaba,%20online%20diyet%20randevusu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-12 px-8">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp&apos;tan Randevu Al
            </Button>
          </a>
          <Link href="/programlar">
            <Button variant="outline" className="h-12 px-8">
              Sistemi İncele
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
