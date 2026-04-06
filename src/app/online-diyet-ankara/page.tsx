import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, Smartphone } from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Online Diyet Ankara | Uzaktan Beslenme Danışmanlığı",
  description:
    "Online diyet Ankara ve Türkiye geneli: kişiye özel plan, haftalık görüşme, mesajlaşma ve danışan uygulaması ile sürdürülebilir takip. Diyetisyen Ezgi Evgin Aktaş.",
  keywords: [
    "online diyet ankara",
    "online diyetisyen ankara",
    "uzaktan diyet",
    "ankara online beslenme",
    "Ezgi Evgin Aktaş",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/online-diyet-ankara",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, online diyet ve Ankara dışından danışmanlık hakkında bilgi almak istiyorum.",
  "online-diyet-ankara"
);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Online diyet Ankara dışından da yapılabilir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Online beslenme danışmanlığı ile Türkiye’nin her yerinden sürece katılabilir; danışan uygulaması üzerinden plan ve mesajlarınıza erişebilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Online diyet ile yüz yüze diyet arasında fark var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Takip yoğunluğu ve iletişim kanalları aynı profesyonel standardı hedefler; yüz yüze görüşme ofiste, online görüşmeler ise video veya mesajlaşma ile yapılabilir.",
      },
    },
    {
      "@type": "Question",
      name: "Öğün takibi nasıl yapılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Öğün paylaşımı, hatırlatmalar ve gelişim grafikleri danışan portalında toplanır; diyetisyeniniz geri bildirim ve revizyonları buradan yönetir.",
      },
    },
  ],
};

export default function OnlineDiyetAnkaraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Online Diyet Ankara ve Türkiye Geneli
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto">
              Yoğun iş temposu, şehir dışında yaşamak veya ulaşım zorluğu
              nedeniyle yüz yüze görüşmeye her hafta gelemiyorsanız, online diyet
              ile aynı disiplinli takibi yaşayabilirsiniz. Ankara’daki ofisimizle
              paralel olarak{" "}
              <Link href="/ankara-diyetisyen" className="text-primary hover:underline font-medium">
                Ankara diyetisyen
              </Link>{" "}
              hizmeti de sunulmaktadır.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 px-8 min-h-[44px]">
                <MessageCircle className="w-5 h-5 mr-2" />
                Online Süreç İçin WhatsApp
              </Button>
            </a>
          </div>

          <div className="container mx-auto px-4 mt-12 md:mt-16 space-y-6 max-w-prose mx-auto">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
              Online beslenme danışmanlığında neler var?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              İlk değerlendirme sonrası size özel beslenme planı; haftalık
              görüşmelerle güncellenen hedefler ve günlük iletişim kanalları.
              Diyetisyen{" "}
              <Link href="/ezgi-evgin-diyetisyen" className="text-primary hover:underline">
                Ezgi Evgin Aktaş
              </Link>{" "}
              ile süreç, moda listeler yerine bilimsel referanslar ve yaşamınıza
              uyum üzerine kurulur.
            </p>
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-cyan-50/80 to-pink-50/50 p-5 flex gap-4 items-start">
              <Smartphone className="w-8 h-8 text-[var(--brand-primary)] shrink-0" />
              <div className="text-left space-y-2">
                <h3 className="font-semibold text-[var(--brand-dark)]">
                  Uygulama destekli takip
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Danışan portalında diyetleriniz, mesajlarınız ve grafikleriniz
                  bir arada. Detaylar:{" "}
                  <Link href="/mobil-uygulamamiz" className="text-primary font-medium hover:underline">
                    Mobil uygulamamız
                  </Link>
                  .
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Kimler online diyet için uygundur?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ankara ve çevre iller başta olmak üzere; düzenli iletişim kurabilecek
              ve öğünlerini paylaşmaya hazır tüm danışanlar. Yüz yüze görmek
              isteyenler için{" "}
              <Link href="/eryaman-diyetisyen" className="text-primary hover:underline">
                Eryaman diyetisyen
              </Link>{" "}
              sayfamızdan ofis sürecine geçiş de mümkündür.
            </p>
          </div>

          <div className="container mx-auto px-4 max-w-5xl mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Haftalık strateji görüşmesi",
                "Anlık mesaj ve öğün geri bildirimi",
                "Hatırlatıcılar ve ilerleme grafikleri",
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

          <div className="container mx-auto px-4 max-w-3xl mt-14 text-center">
            <Link href="/programlar">
              <Button variant="outline" size="lg" className="h-12 min-h-[44px] mb-4">
                Takip sistemimizi inceleyin
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
