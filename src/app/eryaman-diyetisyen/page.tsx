import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Eryaman Diyetisyen | Ezgi Evgin Aktaş",
  description:
    "Eryaman diyetisyen arayışınız için online ve yüz yüze beslenme danışmanlığı. Kişiye özel kilo verme ve sağlıklı beslenme programları.",
  keywords: [
    "eryaman diyetisyen",
    "eryaman online diyetisyen",
    "eryaman kilo verme",
    "etimesgut diyetisyen",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/eryaman-diyetisyen",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Eryaman için diyetisyen randevusu almak istiyorum.",
  "eryaman-diyetisyen"
);

export default function EryamanDiyetisyenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/40 to-cyan-50/40">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-5">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Eryaman&apos;da{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Diyetisyen Desteği
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kilo verme, sürdürülebilir beslenme ve online takip sistemiyle
              Eryaman/Etimesgut bölgesinde kişiye özel diyetisyen danışmanlığı.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 px-8 min-h-[44px]">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Randevu Al
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              "Kişiye özel beslenme planı",
              "Haftalık takip ve güncelleme",
              "Online + yüz yüze danışmanlık",
            ].map((item) => (
              <Card key={item} className="p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand-success)] mt-0.5" />
                  <p className="text-sm">{item}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-prose mx-auto text-left space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Eryaman ve çevresinde &ldquo;diyetisyen arıyorum&rdquo; diyorsanız;
              ofisimiz Etimesgut ilçesi sınırlarında, ulaşımı kolay bir konumdadır.
              Aynı zamanda{" "}
              <Link href="/online-diyet-ankara" className="text-primary font-medium hover:underline">
                online diyet Ankara
              </Link>{" "}
              veya başka şehirlerden sürece devam etmek isteyenler için tam
              dijital takip de mümkündür.
            </p>
            <p>
              Genel Ankara aramaları için{" "}
              <Link href="/ankara-diyetisyen" className="text-primary font-medium hover:underline">
                Ankara diyetisyen
              </Link>{" "}
              sayfamızda süreci özetledik. Uzman hakkında markalı aramalar için{" "}
              <Link href="/ezgi-evgin-diyetisyen" className="text-primary font-medium hover:underline">
                Ezgi Evgin Aktaş
              </Link>{" "}
              sayfasına göz atabilirsiniz.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/programlar" className="text-primary hover:underline font-medium">
              Programları incele
            </Link>
            <span className="text-muted-foreground" aria-hidden>
              ·
            </span>
            <Link href="/mobil-uygulamamiz" className="text-primary hover:underline font-medium">
              Danışan uygulaması
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
