"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  BellRing,
  MessageCircle,
  LineChart,
  Clock3,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { getClientAppLoginUrl } from "@/lib/client-app-url";

const APP_URL = getClientAppLoginUrl();

type InstalledRelatedApp = {
  id?: string;
  platform?: string;
  url?: string;
  version?: string;
};

export default function MobileAppPage() {
  const [isOpening, setIsOpening] = useState(false);
  const [openHint, setOpenHint] = useState<string>("");

  const featureCards = useMemo(
    () => [
      {
        title: "Anlık Bildirimler",
        description: "Öğün zamanı, su hatırlatmaları ve süreç bildirimleri tek ekranda.",
        icon: BellRing,
      },
      {
        title: "Diyetisyen ile Hızlı İletişim",
        description: "Sorularınızı bekletmeden iletin, günlük süreci aktif yönetin.",
        icon: MessageCircle,
      },
      {
        title: "Grafiksel Gelişim Takibi",
        description: "Kilo ve ölçü değişimlerinizi haftalık grafiklerle net görün.",
        icon: LineChart,
      },
      {
        title: "Telefonla Hızlı Giriş",
        description: "Danışan girişi telefon numarasıyla pratik ve güvenli şekilde ilerler.",
        icon: Clock3,
      },
    ],
    []
  );

  const openClientApp = async () => {
    setIsOpening(true);
    setOpenHint("");

    try {
      const isStandalone =
        window.matchMedia?.("(display-mode: standalone)")?.matches ||
        Boolean((window.navigator as any).standalone);

      if (isStandalone) {
        window.location.assign(APP_URL);
        return;
      }

      let hasInstalledRelatedApp = false;
      const nav = navigator as Navigator & {
        getInstalledRelatedApps?: () => Promise<InstalledRelatedApp[]>;
      };

      if (typeof nav.getInstalledRelatedApps === "function") {
        try {
          const installedApps = await nav.getInstalledRelatedApps();
          hasInstalledRelatedApp = Array.isArray(installedApps) && installedApps.length > 0;
        } catch {
          hasInstalledRelatedApp = false;
        }
      }

      // Bazı mobil tarayıcılarda link capturing açıksa kurulu PWA otomatik açılır.
      window.location.assign(APP_URL);

      if (hasInstalledRelatedApp) {
        setOpenHint(
          "Kurulu uygulama destekleniyorsa doğrudan PWA açılır; aksi durumda web portalı açılır."
        );
      } else {
        setOpenHint("Uygulama tarayıcıda açıldı. Ana ekrana ekleyerek PWA gibi kullanabilirsiniz.");
      }
    } finally {
      setIsOpening(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_15%,#ffe3f2_0%,#ffffff_35%),radial-gradient(circle_at_85%_10%,#d8f5ff_0%,#ffffff_40%),linear-gradient(135deg,#f8fbff_0%,#ffffff_100%)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">
              Danışan Portalı
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Mobil Uygulamamız ile
              <span className="block bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Süreci Günlük Yönetin
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              Diyet planlarınızı, gelişim verilerinizi ve mesajlaşmayı tek bir
              akışta takip edin. Hızlı giriş, güçlü takip ve sürdürülebilir
              sonuç odaklı bir deneyim.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                onClick={openClientApp}
                disabled={isOpening}
                className="h-12 px-7 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:opacity-90 text-white"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                {isOpening ? "Açılıyor..." : "Uygulamayı Aç"}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <a
                href={buildWhatsAppApiUrl(
                  "Merhaba, mobil uygulama hakkında bilgi almak istiyorum.",
                  "mobil_uygulamamiz"
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("mobil_uygulamamiz")}
              >
                <Button variant="outline" className="h-12 px-7 bg-white">
                  WhatsApp&apos;tan Bilgi Al
                </Button>
              </a>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-[var(--brand-dark)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Telefon numaranız ile hızlı danışan girişi
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--brand-dark)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Uyumlu cihazlarda kurulu PWA açılışı otomatik desteklenir
              </div>
            </div>

            {openHint && <p className="text-xs text-muted-foreground">{openHint}</p>}
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-pink-200/60 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-cyan-200/60 blur-3xl" />
            <div className="relative mx-auto w-[250px] h-[500px] rounded-[34px] border-[10px] border-[var(--brand-dark)] bg-black p-2 shadow-2xl">
              <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-white">
                <Image
                  src="/images/mobil-pic.jpeg"
                  alt="Danışan portalı arayüzü"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 250px, 300px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-semibold">Danışan portalı</p>
                  <p className="text-xs text-white/90">
                    Planlar, hatırlatıcılar ve grafikler
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {featureCards.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/5 bg-white/80 backdrop-blur p-5 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/15 flex items-center justify-center text-[var(--brand-primary)] mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-semibold text-[var(--brand-dark)]">{item.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
