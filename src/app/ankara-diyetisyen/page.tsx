import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Ankara Diyetisyen | Ezgi Evgin Aktaş",
  description:
    "Ankara diyetisyen arayanlar için Etimesgut–Eryaman ofisi ve online danışmanlık. Kişiye özel beslenme, kilo yönetimi ve sürdürülebilir takip.",
  keywords: [
    "ankara diyetisyen",
    "diyetisyen ankara",
    "ankara online diyetisyen",
    "etimesgut diyetisyen",
    "eryaman diyetisyen",
    "Ezgi Evgin Aktaş",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/ankara-diyetisyen",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Ankara için diyetisyen randevusu almak istiyorum.",
  "ankara-diyetisyen"
);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ankara’da diyetisyen randevusu nasıl alabilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp veya iletişim sayfamız üzerinden yazarak online veya yüz yüze görüşme için randevu talep edebilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Sadece Ankara’ya mı hizmet veriliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yüz yüze görüşmeler Etimesgut–Eryaman bölgesindeki ofiste; online beslenme danışmanlığı ise Türkiye’nin her yerinden sunulmaktadır.",
      },
    },
    {
      "@type": "Question",
      name: "Online diyet ile nasıl takip ediliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Danışan portalı üzerinden diyet planınıza, mesajlarınıza ve gelişim grafiklerinize ulaşır; haftalık görüşmelerle planınız güncellenir.",
      },
    },
  ],
};

export default function AnkaraDiyetisyenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/30 to-cyan-50/30">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Ankara Diyetisyen: Kişiye Özel Beslenme ve Takip
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto">
              Ankara’da diyetisyen arıyorsanız; Etimesgut ve Eryaman merkezli
              ofisimizde yüz yüze görüşme alabilir veya şehrin her ilçesinden
              ve Türkiye genelinden{" "}
              <Link href="/online-diyet-ankara" className="text-primary hover:underline font-medium">
                online diyet
              </Link>{" "}
              programlarına katılabilirsiniz. Uzman diyetisyen{" "}
              <Link href="/ezgi-evgin-diyetisyen" className="text-primary hover:underline font-medium">
                Ezgi Evgin Aktaş
              </Link>
              , hedefinize uygun, uygulanabilir ve sürdürülebilir beslenme
              planları ile yanınızda.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 px-8 min-h-[44px]">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Randevu Al
              </Button>
            </a>
          </div>

          <div className="container mx-auto px-4 mt-12 md:mt-16 prose prose-slate max-w-prose mx-auto">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Ankara’da neden uzman diyetisyen desteği?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Hazır listeler ve kısa süreli modalar yerine; yaşam tarzınıza,
              sağlık geçmişinize ve hedefinize göre şekillenen profesyonel bir
              süreç, hem sonuçları hem de motivasyonu güçlendirir. Kilo verme,
              kilo alma, kronik hastalıklarda beslenme veya sporcu beslenmesi
              gibi alanlarda kişiye özel yaklaşım esastır.
            </p>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Eryaman ve çevresi için yüz yüze; Türkiye için online
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ofisimiz{" "}
              <Link href="/eryaman-diyetisyen" className="text-primary hover:underline">
                Eryaman–Etimesgut
              </Link>{" "}
              hattında konumlanmıştır. Şehir dışından veya yoğun temponuz
              nedeniyle yüz yüze gelemiyorsanız, aynı kalite standardında online
              beslenme danışmanlığı ve uygulama üzerinden günlük takip ile süreç
              yönetilir. Detaylar için{" "}
              <Link href="/programlar" className="text-primary hover:underline">
                online programlar
              </Link>{" "}
              ve{" "}
              <Link href="/mobil-uygulamamiz" className="text-primary hover:underline">
                mobil danışan uygulaması
              </Link>{" "}
              sayfalarımıza göz atabilirsiniz.
            </p>
          </div>

          <div className="container mx-auto px-4 max-w-5xl mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Haftalık görüşme ve plan güncellemesi",
                "Mesajlaşma ve öğün geri bildirimi",
                "Uygulama ile diyet, grafik ve hatırlatmalar",
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

          <div className="container mx-auto px-4 max-w-3xl mt-14 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Kilo verme odaklı arıyorsanız{" "}
              <Link href="/ankara-kilo-verme-diyetisyen" className="text-primary hover:underline">
                Ankara kilo verme diyetisyeni
              </Link>{" "}
              sayfamızı da inceleyin.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-12 min-h-[44px]">
                Ücretsiz ön bilgi için yazın
              </Button>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
