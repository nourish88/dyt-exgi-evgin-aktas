import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Ankara Diyetisyen — Beslenme ve Diyet Danışmanlığı | Ezgi Evgin Aktaş",
  description:
    "Ankara'da diyetisyen arıyorsanız: Eryaman ofisinde yüz yüze veya online beslenme danışmanlığı. Kişiye özel plan, haftalık görüşme ve danışan portalı ile takip.",
  keywords: [
    "ankara diyetisyen",
    "diyetisyen ankara",
    "ankara beslenme danışmanı",
    "ankara online diyetisyen",
    "etimesgut diyetisyen",
    "eryaman diyetisyen",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/ankara-diyetisyen",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Ankara'da diyetisyen randevusu almak istiyorum.",
  "ankara-diyetisyen"
);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ankara'da diyetisyen randevusu nasıl alabilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp veya iletişim sayfamız üzerinden yazarak online veya yüz yüze görüşme için randevu talep edebilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Sadece Ankara'ya mı hizmet veriliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yüz yüze görüşmeler Etimesgut–Eryaman bölgesindeki ofiste; online beslenme danışmanlığı ise Türkiye'nin her yerinden sunulmaktadır.",
      },
    },
    {
      "@type": "Question",
      name: "Online diyet ile yüz yüze arasında kalite farkı var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Haftalık görüşme, danışan portalı ve günlük iletişim her iki modelde de aynı standartta uygulanır.",
      },
    },
  ],
};

const highlights = [
  "Haftalık birebir görüşme ve plan güncellemesi",
  "Mesajlaşma, öğün geri bildirimi ve anlık destek",
  "Danışan portalı: diyet planı, grafik ve hatırlatmalar",
];

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
              Ankara Diyetisyen:{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Bilimsel Yaklaşım, Kişiye Özel Plan
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto leading-relaxed">
              Ankara&apos;da diyetisyen desteği almak; hazır listelerle
              başlayıp birkaç hafta sonra bırakmak zorunda değilsiniz.
              Etimesgut–Eryaman ofisinde yüz yüze veya Türkiye&apos;nin her
              yerinden online olarak, yaşam tarzınıza uyan sürdürülebilir bir
              beslenme planıyla çalışabilirsiniz. Diyetisyen{" "}
              <Link
                href="/ezgi-evgin-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Ezgi Evgin Aktaş
              </Link>{" "}
              ile süreç haftalık görüşme, günlük iletişim ve danışan portalı
              üçlüsüne dayanır.
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
              Neden profesyonel bir Ankara diyetisyeni ile çalışmalı?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Her bireyin metabolizması, uyku düzeni, stres kaynakları ve
              besin tercihleri farklıdır. İnternetteki genel tavsiyeler bu
              farklılıkları göz ardı eder. Profesyonel bir diyetisyen, ilk
              görüşmede sizi tanır; sağlık geçmişinizi, günlük rutininizi ve
              hedefinizi analiz ederek yalnızca size ait bir plan oluşturur.
              Başkent Üniversitesi Beslenme ve Diyetetik eğitimi, klinik ve
              hastane deneyimiyle şekillenen bu yaklaşım, kısa vadeli şok
              diyetlerden temelden farklıdır.
            </p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Eryaman ofisi veya online — aynı kalite
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ofisimiz{" "}
              <Link
                href="/eryaman-diyetisyen"
                className="text-primary hover:underline"
              >
                Eryaman–Etimesgut
              </Link>{" "}
              hattında konumlanmıştır. Ankara&apos;nın diğer ilçelerinden veya
              şehir dışından sürece katılmak isteyenler için{" "}
              <Link
                href="/online-diyet-ankara"
                className="text-primary hover:underline"
              >
                online diyet
              </Link>{" "}
              seçeneği tam aynı disiplin ve takip kalitesiyle sunulur. Takip
              sistemimizi görmek için{" "}
              <Link
                href="/programlar"
                className="text-primary hover:underline"
              >
                online programlar
              </Link>{" "}
              ve{" "}
              <Link
                href="/mobil-uygulamamiz"
                className="text-primary hover:underline"
              >
                danışan uygulaması
              </Link>{" "}
              sayfalarına göz atabilirsiniz.
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

          <div className="container mx-auto px-4 max-w-3xl mt-14 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Kilo verme odaklı arıyorsanız{" "}
              <Link
                href="/ankara-kilo-verme-diyetisyen"
                className="text-primary hover:underline"
              >
                Ankara kilo verme diyetisyeni
              </Link>{" "}
              sayfamızı da inceleyin.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="h-12 min-h-[44px]"
              >
                Ücretsiz ön bilgi için yazın
              </Button>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
