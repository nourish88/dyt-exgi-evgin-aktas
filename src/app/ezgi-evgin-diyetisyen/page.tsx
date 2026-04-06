import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Ezgi Evgin Aktaş | Diyetisyen Ezgi Evgin",
  description:
    "Dyt Ezgi Evgin (Ezgi Evgin Aktaş): Ankara Eryaman ve online beslenme danışmanlığı. Kişiye özel diyet, kilo yönetimi ve uygulama ile takip.",
  keywords: [
    "ezgi evgin",
    "ezgi evgin aktaş",
    "dyt ezgi evgin",
    "diyetisyen ezgi evgin",
    "ankara diyetisyen",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/ezgi-evgin-diyetisyen",
  },
  openGraph: {
    title: "Ezgi Evgin Aktaş | Uzman Diyetisyen",
    description:
      "Ezgi Evgin Aktaş ile Ankara ve online beslenme danışmanlığı. Kişiye özel programlar ve sürdürülebilir takip.",
    url: "https://ezgievginaktas.com/ezgi-evgin-diyetisyen",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Ezgi Evgin Aktaş ile danışmanlık hakkında bilgi almak istiyorum.",
  "ezgi-evgin-diyetisyen"
);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ezgi Evgin Aktaş kimdir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ezgi Evgin Aktaş, Başkent Üniversitesi Beslenme ve Diyetetik mezunu uzman diyetistir; Etimesgut–Eryaman ofisinde ve online olarak danışmanlık vermektedir.",
      },
    },
    {
      "@type": "Question",
      name: "Dyt Ezgi Evgin ile nasıl iletişime geçilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web sitesindeki WhatsApp butonları veya iletişim sayfası üzerinden doğrudan mesaj gönderebilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi bölgelere hizmet veriliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yüz yüze görüşmeler Ankara Eryaman–Etimesgut çevresinde; online diyet ve danışmanlık Türkiye genelindedir.",
      },
    },
  ],
};

export default function EzgiEvginDiyetisyenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/20 to-cyan-50/30">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
            <p className="text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-wide">
              Diyetisyen · Beslenme danışmanlığı
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Ezgi Evgin Aktaş (Dyt Ezgi Evgin)
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto">
              Markalı aramalarınızda gördüğünüz{" "}
              <strong className="text-foreground font-semibold">Ezgi Evgin</strong> ve{" "}
              <strong className="text-foreground font-semibold">Ezgi Evgin Aktaş</strong>{" "}
              adlarıyla aynı uzman diyetisyene ulaşıyorsunuz. Ankara{" "}
              <Link href="/eryaman-diyetisyen" className="text-primary hover:underline">
                Eryaman
              </Link>{" "}
              ofisinde yüz yüze;{" "}
              <Link href="/online-diyet-ankara" className="text-primary hover:underline">
                online diyet
              </Link>{" "}
              ile Türkiye’nin her yerinden hizmet sunuyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 px-8 min-h-[44px] w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Yazın
                </Button>
              </a>
              <Link href="/hakkimda">
                <Button variant="outline" size="lg" className="h-12 min-h-[44px] w-full sm:w-auto">
                  Hakkımda detaylı
                </Button>
              </Link>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-12 md:mt-16 space-y-6 max-w-prose mx-auto">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
              Ezgi Evgin ile çalışmak ne anlama gelir?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Hazır şablon yerine yaşamınıza uyumlu plan; haftalık görüşmeler,
              günlük mesajlaşma ve uygulama üzerinden diyet–grafik–hatırlatıcı
              bütünlüğü. Hedefiniz kilo yönetimi, sağlıklı beslenme alışkanlığı
              veya sürdürülebilir enerji ise süreç birlikte tasarlanır.
            </p>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Ankara diyetisyen aramasıyla bulduğum sayfayı nasıl kullanmalıyım?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Önce{" "}
              <Link href="/programlar" className="text-primary hover:underline">
                programlar
              </Link>{" "}
              ve{" "}
              <Link href="/ankara-diyetisyen" className="text-primary hover:underline">
                Ankara diyetisyen
              </Link>{" "}
              sayfalarını okuyun; ardından WhatsApp üzerinden hedefinizi kısaca
              yazın. Size uygun görüşme biçimi (online veya ofis) birlikte netleştirilir.
            </p>
          </div>

          <div className="container mx-auto px-4 max-w-5xl mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Akademik diyetetik geçmişi ve klinik deneyim",
                "Danışan portalı ve düzenli takip",
                "Eryaman ofis + Türkiye geneli online",
              ].map((item) => (
                <Card key={item} className="p-5">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm leading-snug">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 max-w-3xl mt-14 text-center text-sm text-muted-foreground">
            <p>
              Kilo verme odağı için:{" "}
              <Link href="/ankara-kilo-verme-diyetisyen" className="text-primary hover:underline">
                Ankara kilo verme diyetisyeni
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
