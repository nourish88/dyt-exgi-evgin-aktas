import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, Smartphone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

const PAGE_URL = "https://ezgievginaktas.com/online-diyet-ankara";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dyt. Ezgi Evgin — Online Beslenme Danışmanlığı",
  description:
    "Türkiye genelinden online diyet ve beslenme danışmanlığı. Haftalık görüşme, danışan portalı ve günlük geri bildirim.",
  url: PAGE_URL,
  telephone: "+90 546 265 04 40",
  image: "https://ezgievginaktas.com/images/instagram/profile.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Altay Mah. Orhan Bey Cad. Atayıldız No:1/70 Kat:8",
    addressLocality: "Etimesgut",
    addressRegion: "Ankara",
    postalCode: "06820",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "Country", name: "Türkiye" },
    { "@type": "City", name: "Ankara" },
    { "@type": "City", name: "İstanbul" },
    { "@type": "City", name: "İzmir" },
  ],
  priceRange: "₺₺",
  medicalSpecialty: "Nutrition",
};

export const metadata: Metadata = {
  title: { absolute: "Online Diyet Ankara — Uzaktan Beslenme Danışmanlığı" },
  description:
    "Online diyet ile Ankara ve Türkiye genelinden kişiye özel beslenme danışmanlığı. Haftalık görüşme, danışan portalı ve anlık destek ile sürdürülebilir takip.",
  keywords: [
    "online diyet ankara",
    "online diyetisyen ankara",
    "uzaktan diyet",
    "ankara online beslenme danışmanı",
    "online beslenme danışmanlığı",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/online-diyet-ankara",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/online-diyet-ankara",
    title: "Online Diyet Ankara — Uzaktan Beslenme Danışmanlığı",
    description:
      "Online diyet ile Ankara ve Türkiye genelinden kişiye özel beslenme danışmanlığı ve haftalık takip.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, online diyet hakkında bilgi almak istiyorum.",
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
        text: "Evet. Danışan portalı ve haftalık online görüşmeler ile Türkiye'nin her yerinden sürece katılabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Online diyet ile yüz yüze arasında fark var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Takip yoğunluğu, danışan portalı erişimi ve iletişim kanalları her iki modelde de aynı standartta uygulanır.",
      },
    },
    {
      "@type": "Question",
      name: "Online diyette öğün takibi nasıl yapılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Danışan portalından öğün paylaşımı, hatırlatmalar ve gelişim grafikleri kullanılır; diyetisyeniniz geri bildirim ve revizyon sürecini buradan yönetir. Ayrıca süreç boyunca WhatsApp üzerinden de diyetisyeninizle birebir etkileşim halinde olursunuz.",
      },
    },
  ],
};

const highlights = [
  "Haftalık strateji görüşmesi (video veya telefon)",
  "Anlık mesaj ve öğün geri bildirimi",
  "Hatırlatıcılar ve ilerleme grafikleri",
];

export default function OnlineDiyetAnkaraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", item: "https://ezgievginaktas.com/" },
          { name: "Online Diyet Ankara", item: PAGE_URL },
        ]}
      />
      <div className="min-h-screen bg-white">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Online Diyet Ankara:{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Uzaktan Profesyonel Danışmanlık
              </span>
            </h1>
            <div className="relative w-fit mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white/60">
              <Image
                src="/images/online/online-diyet-yazarken.jpg"
                alt="Online diyetisyen Ankara Ezgi Evgin uzaktan beslenme danışmanlığı görüşmesi"
                width={1200}
                height={800}
                priority
                className="w-auto h-auto max-w-full max-h-[350px] sm:max-h-[450px] md:max-h-[550px] object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto leading-relaxed">
              İş temposu, ulaşım veya farklı şehirde yaşamak yüz yüze
              görüşmeyi zorlaştırıyorsa, online diyet tam size göre. Ankara
              merkezli ofisimizle paralel yürüyen online danışmanlık modeli;
              haftalık görüşme, danışan portalı ve günlük iletişimle yüz yüze
              süreçle birebir aynı takip kalitesini sunar. Diyetisyen{" "}
              <Link
                href="/ezgi-evgin-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Dyt. Ezgi Evgin
              </Link>{" "}
              ile süreci birlikte yönetirsiniz.
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
              İlk değerlendirmede sağlık geçmişiniz, yaşam düzeniniz ve
              hedefiniz analiz edilir; ardından yalnızca size özel bir beslenme
              planı oluşturulur. Haftalık görüşmelerde plan güncellenir; günlük
              mesajlaşmayla öğün geri bildirimi ve motivasyon desteği sağlanır.
              Süreç boyunca danışan portalından diyetlerinize, grafiklerinize ve
              hatırlatıcılarınıza tek yerden erişirsiniz.
            </p>

            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-cyan-50/80 to-pink-50/50 p-5 flex gap-4 items-start">
              <Smartphone className="w-8 h-8 text-[var(--brand-primary)] shrink-0" />
              <div className="text-left space-y-2">
                <h3 className="font-semibold text-[var(--brand-dark)]">
                  Danışan portalı ile tam kontrol
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Diyet planınız, mesajlarınız ve gelişim grafikleriniz bir
                  arada. Detaylar:{" "}
                  <Link
                    href="/mobil-uygulamamiz"
                    className="text-primary font-medium hover:underline"
                  >
                    Danışan uygulaması
                  </Link>
                  .
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Online diyet kimin için uygun?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ankara içinden veya dışından; düzenli iletişim kurabilecek ve
              öğünlerini paylaşmaya hazır herkes. Kilo verme, sağlıklı beslenme
              alışkanlığı, sporcu beslenmesi veya hamilelik dönemi gibi farklı
              hedefler online modelde de aynı profesyonel yaklaşımla yönetilir.
              Yüz yüze görüşme tercih ediyorsanız{" "}
              <Link
                href="/eryaman-diyetisyen"
                className="text-primary hover:underline"
              >
                Eryaman ofisi
              </Link>
              ne geçiş her zaman mümkün.
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

          <div className="container mx-auto px-4 mt-14 prose prose-slate max-w-prose">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
              Online diyet sürecinde en çok çalışılan konular
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Online danışmanlık modeli, hedef farkı gözetmeksizin aynı disiplinle
              yürür. Her hedef için bireysel plan oluşturulur ve haftalık güncellenir.
            </p>
            <ul className="text-muted-foreground leading-relaxed">
              <li>
                <Link
                  href="/ankara-kilo-verme-diyetisyen"
                  className="text-primary hover:underline"
                >
                  Kilo verme ve kilo koruma
                </Link>
              </li>
              <li>
                <Link
                  href="/insulin-direnci-diyeti-ankara"
                  className="text-primary hover:underline"
                >
                  İnsülin direnci beslenmesi
                </Link>
              </li>
              <li>
                <Link
                  href="/pcos-diyetisyen-ankara"
                  className="text-primary hover:underline"
                >
                  PCOS dostu beslenme
                </Link>
              </li>
              <li>
                <Link
                  href="/hamilelik-beslenmesi-ankara"
                  className="text-primary hover:underline"
                >
                  Hamilelik ve emzirme dönemi beslenmesi
                </Link>
              </li>
              <li>
                <Link
                  href="/sporcu-beslenmesi-ankara"
                  className="text-primary hover:underline"
                >
                  Sporcu beslenmesi
                </Link>
              </li>
              <li>
                <Link
                  href="/cocuk-beslenmesi-diyetisyen"
                  className="text-primary hover:underline"
                >
                  Çocuk ve ergen beslenmesi
                </Link>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Ankara&apos;dan ofise gelmek tercih edenler için
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Yüz yüze görüşmeyi tercih ediyorsanız{" "}
              <Link
                href="/eryaman-diyetisyen"
                className="text-primary hover:underline"
              >
                Eryaman diyetisyen
              </Link>{" "}
              ofisi, Optimum AVM karşısında konumlanır. Yakın bölgelerden
              danışanlarımız için ayrıca{" "}
              <Link
                href="/etimesgut-diyetisyen"
                className="text-primary hover:underline"
              >
                Etimesgut
              </Link>
              ,{" "}
              <Link
                href="/sincan-diyetisyen"
                className="text-primary hover:underline"
              >
                Sincan
              </Link>{" "}
              bilgi sayfaları açıktır.
            </p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Online diyet ücretleri ve program seçenekleri
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Süreç haftalık görüşmelerle 4, 8 veya 12 haftalık paketler şeklinde
              yürür. Detaylı paket bilgisi ve fiyatlandırma için{" "}
              <Link
                href="/programlar"
                className="text-primary hover:underline"
              >
                programlar sayfasına
              </Link>{" "}
              göz atabilir, randevu için{" "}
              <Link
                href="/randevu"
                className="text-primary hover:underline"
              >
                randevu formunu
              </Link>{" "}
              kullanabilirsiniz.
            </p>
          </div>

          <div className="container mx-auto px-4 max-w-3xl mt-16">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-6 text-center">
              Sıkça Sorulan Sorular
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqJsonLd.mainEntity.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-[var(--brand-dark)]">
                    {faq.name}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    {faq.acceptedAnswer.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="container mx-auto px-4 max-w-3xl mt-14 text-center space-y-3">
            <Link href="/programlar">
              <Button
                variant="outline"
                size="lg"
                className="h-12 min-h-[44px]"
              >
                Takip sistemimizi inceleyin
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Genel Ankara aramaları için:{" "}
              <Link
                href="/ankara-diyetisyen"
                className="text-primary hover:underline"
              >
                Ankara diyetisyen
              </Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
