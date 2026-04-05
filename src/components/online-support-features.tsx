import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  BellRing,
  MessageCircle,
  Smartphone,
  LineChart,
  CalendarCheck2,
  Camera,
  History,
  Activity,
  ExternalLink,
} from "lucide-react";

const CLIENT_APP_LOGIN_URL =
  process.env.NEXT_PUBLIC_CLIENT_APP_URL || "https://diet-six.vercel.app/login";

const features = [
  { text: "7/24 online destek", icon: MessageCircle },
  { text: "Yüz yüze görüşme + motivasyon", icon: CalendarCheck2 },
  { text: "Mobil bildirimlerle motivasyon artırma", icon: BellRing },
  { text: "Öğün hatırlatıcı", icon: Smartphone },
  { text: "Anlık iletişim", icon: MessageCircle },
  { text: "Öğün resimleri gönderip onay alma", icon: Camera },
  {
    text: "Diyetlere, diyet geçmişine ve sürece mobil uygulamadan erişim",
    icon: History,
  },
  { text: "Spor ve kilo süreçlerini grafiksel analiz etme", icon: Activity },
];

export function OnlineSupportFeatures() {
  return (
    <Card className="p-6 md:p-8 border-2 border-primary/15 bg-gradient-to-br from-white to-pink-50/40 overflow-hidden">
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">
          Hep Yanınızdayız
        </span>
        <span className="text-sm text-muted-foreground">
          Online Diyet Süreci
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          {features.map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-2.5 rounded-xl border bg-white px-3 py-3"
            >
              <item.icon className="w-4 h-4 mt-0.5 text-[var(--brand-primary)]" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl border bg-white p-3">
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-[var(--brand-primary)]/10 rounded-full blur-2xl" />
          <div className="relative mx-auto w-[210px] h-[360px] rounded-[28px] border-4 border-[var(--brand-dark)] bg-black p-2 shadow-xl">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <Image
                src="/images/mobil-pic.jpeg"
                alt="Mobil uygulama ile diyet takibi"
                fill
                className="object-cover"
                sizes="220px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] space-y-1">
                <p className="font-semibold">Mobil Takip Aktif</p>
                <p>Ogun bildirimleri, grafikler, anlik destek</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {[
          { icon: MessageCircle, label: "Anlık Destek" },
          { icon: BellRing, label: "Bildirim Sistemi" },
          { icon: Smartphone, label: "Mobil Uygulama" },
          { icon: LineChart, label: "Grafiksel Takip" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border bg-white px-3 py-3 text-center"
          >
            <item.icon className="w-5 h-5 mx-auto mb-1 text-[var(--brand-primary)]" />
            <p className="text-xs font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border bg-white p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-[var(--brand-dark)]">
            Danışan Portalına Tek Tıkla Geçiş
          </p>
          <p className="text-xs text-muted-foreground">
            Telefon numaranızla giriş yapıp diyet planlarınızı ve bildirimlerinizi anında takip edin.
          </p>
        </div>
        <a href={CLIENT_APP_LOGIN_URL} target="_blank" rel="noopener noreferrer">
          <Button className="h-10 px-5">
            Uygulamaya Git
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </div>
    </Card>
  );
}
