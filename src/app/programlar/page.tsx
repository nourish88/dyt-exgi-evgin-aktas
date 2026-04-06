"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OnlineSupportFeatures } from "@/components/online-support-features";
import { CalendarCheck2, MessageCircle, Smartphone, LineChart, ExternalLink } from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const processSteps = [
  {
    title: "1. Haftada 1 Görüşme",
    description:
      "Her hafta düzenli görüşme ile motivasyon, hedefler ve plan revizyonu birlikte yapılır.",
    icon: CalendarCheck2,
  },
  {
    title: "2. Devamlı Online Takip",
    description:
      "Süreç boyunca anlık iletişim, öğün geri bildirimleri ve günlük yönlendirmelerle desteklenirsiniz.",
    icon: MessageCircle,
  },
  {
    title: "3. Mobil Uygulama Desteği",
    description:
      "Öğün hatırlatıcılar, bildirimler, eski diyetlere erişim ve tüm sürecin mobil uygulamadan takibi sağlanır.",
    icon: Smartphone,
  },
  {
    title: "4. Grafiksel Gelişim Analizi",
    description:
      "Kilo alma-verme eğrileri, fiziksel aktivite ve ilerleme verileri grafiklerle net şekilde izlenir.",
    icon: LineChart,
  },
];

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, online diyet süreci için randevu almak istiyorum.",
  "programlar"
);
const clientAppUrl =
  process.env.NEXT_PUBLIC_CLIENT_APP_URL || "https://diet-six.vercel.app/login";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-pink-50 via-cyan-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Online Diyet{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Takip Sistemimiz
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Çalıntı paket yok, ezber diyet yok. Size özel planlanan;
              haftalık görüşme, devamlı online takip ve mobil uygulama destekli
              tek bir güçlü sistem.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Hedefimiz yalnızca kilo vermek değil; süreci sürdürülebilir,
              takip edilebilir ve motive kalabileceğiniz hale getirmek.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("programlar_hero")}
            >
              <Button size="lg" className="h-12 px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Randevu Al
              </Button>
            </a>
            <a href={clientAppUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 bg-white/80"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Danışan Uygulamasını Aç
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((item) => (
              <Card key={item.title} className="p-6 border-2 hover:border-primary/20 transition-colors">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--brand-primary)]/15 to-[var(--brand-secondary)]/15 flex items-center justify-center text-[var(--brand-primary)]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-pink-50/30 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <OnlineSupportFeatures />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-accent)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hep Yanınızdayız
            </h2>
            <p className="text-white/90 text-lg">
              Diyetleriniz, eski planlarınız, bildirimleriniz ve ilerleme
              grafikleriniz tek yerde. Anlık iletişimle sürecinizi birlikte
              yönetiyoruz.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("programlar_footer")}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Randevu Oluştur
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
