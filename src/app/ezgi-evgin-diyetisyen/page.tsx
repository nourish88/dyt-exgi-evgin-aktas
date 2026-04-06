import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Ezgi Evgin Aktaş — Uzman Diyetisyen | Beslenme Danışmanlığı",
  description:
    "Diyetisyen Ezgi Evgin Aktaş: Başkent Üniversitesi mezunu, Ankara Eryaman ofisi ve online beslenme danışmanlığı. Kişiye özel plan, haftalık takip ve danışan portalı.",
  keywords: [
    "ezgi evgin",
    "ezgi evgin aktaş",
    "dyt ezgi evgin",
    "diyetisyen ezgi evgin",
    "ankara diyetisyen",
    "online diyetisyen",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/ezgi-evgin-diyetisyen",
  },
  openGraph: {
    title: "Ezgi Evgin Aktaş — Uzman Diyetisyen",
    description:
      "Ankara ve online beslenme danışmanlığı. Kişiye özel programlar, haftalık takip ve sürdürülebilir sonuçlar.",
    url: "https://ezgievginaktas.com/ezgi-evgin-diyetisyen",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Ezgi Evgin Aktaş ile beslenme danışmanlığı hakkında bilgi almak istiyorum.",
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
        text: "Başkent Üniversitesi Beslenme ve Diyetetik mezunu uzman diyetisyen. 2016'dan bu yana Ankara Eryaman–Etimesgut'taki kendi merkezinde ve online olarak danışmanlık vermektedir.",
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
        text: "Yüz yüze görüşmeler Ankara Eryaman–Etimesgut çevresinde; online beslenme danışmanlığı Türkiye genelinde sunulmaktadır.",
      },
    },
  ],
};

const highlights = [
  "Başkent Üniversitesi Beslenme ve Diyetetik eğitimi, klinik deneyim",
  "Danışan portalı ile günlük takip ve iletişim",
  "Eryaman ofisi + Türkiye geneli online danışmanlık",
];

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
              Diyetisyen · Beslenme danışmanı
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Diyetisyen Ezgi Evgin Aktaş
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto leading-relaxed">
              Arama motorunda{" "}
              <strong className="text-foreground font-semibold">
                Ezgi Evgin
              </strong>
              ,{" "}
              <strong className="text-foreground font-semibold">
                Dyt Ezgi Evgin
              </strong>{" "}
              veya{" "}
              <strong className="text-foreground font-semibold">
                Ezgi Evgin Aktaş
              </strong>{" "}
              yazdığınızda aynı uzman diyetisyene ulaşıyorsunuz. Beslenme ve
              Diyetetik alanında lisans eğitimimi Başkent Üniversitesi&apos;nde
              tamamladım; 2016&apos;dan beri Ankara{" "}
              <Link
                href="/eryaman-diyetisyen"
                className="text-primary hover:underline"
              >
                Eryaman
              </Link>{" "}
              ofisimde ve{" "}
              <Link
                href="/online-diyet-ankara"
                className="text-primary hover:underline"
              >
                online
              </Link>{" "}
              olarak kişiye özel, yasaksız ve sürdürülebilir beslenme
              danışmanlığı sunuyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-12 px-8 min-h-[44px] w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Yazın
                </Button>
              </a>
              <Link href="/hakkimda">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 min-h-[44px] w-full sm:w-auto"
                >
                  Detaylı özgeçmiş
                </Button>
              </Link>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-12 md:mt-16 space-y-6 max-w-prose mx-auto">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
              Ezgi Evgin Aktaş ile çalışmak ne demek?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Hazır şablon diyetler yerine yaşam tarzınıza, iş temponuza ve
              besin tercihlerinize uyum sağlayan bir plan. Haftalık birebir
              görüşmelerle hedefler güncellenir; danışan portalı üzerinden
              diyet planınız, öğün geri bildirimleriniz ve gelişim
              grafikleriniz sürekli erişilebilir durumda kalır. Hedefiniz kilo
              yönetimi, sağlıklı beslenme alışkanlığı, hamilelik dönemi
              beslenmesi veya sporcu performansı olsun — süreç bilimsel
              referanslar ve bireysel analize dayanır, moda listelere değil.
            </p>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              İlk adım nasıl atılır?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <Link
                href="/programlar"
                className="text-primary hover:underline"
              >
                Takip sistemi
              </Link>{" "}
              ve{" "}
              <Link
                href="/ankara-diyetisyen"
                className="text-primary hover:underline"
              >
                Ankara diyetisyen
              </Link>{" "}
              sayfalarını inceledikten sonra WhatsApp üzerinden hedefinizi
              kısaca paylaşın. Size en uygun görüşme biçimi (online veya
              ofis) ve başlangıç planı birlikte belirlenir.
            </p>
          </div>

          <div className="container mx-auto px-4 max-w-5xl mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((item) => (
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
              <Link
                href="/ankara-kilo-verme-diyetisyen"
                className="text-primary hover:underline"
              >
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
