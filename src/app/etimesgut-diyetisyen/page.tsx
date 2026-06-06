import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Apple,
  CalendarCheck2,
  CheckCircle2,
  HeartPulse,
  MapPin,
  MessageCircle,
  Route,
  Smartphone,
  Users,
} from "lucide-react";
import { LocalProofSection } from "@/components/local-seo/local-proof-section";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import {
  GOOGLE_MAPS_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";

const PAGE_URL = "https://ezgievginaktas.com/etimesgut-diyetisyen";

export const metadata: Metadata = {
  title: "Etimesgut Diyetisyen — Eryaman Ofisi",
  description:
    "Etimesgut'ta diyetisyen arayanlar için Eryaman Altay Mahallesi Atayıldız Plaza ofisinde kişiye özel beslenme danışmanlığı. Kilo verme, insülin direnci, PCOS, hamilelik ve online diyet desteği.",
  keywords: [
    "etimesgut diyetisyen",
    "etimesgut beslenme uzmanı",
    "etimesgut kilo verme diyetisyen",
    "eryaman diyetisyen",
    "etimesgut online diyetisyen",
    "etimesgut pcos diyetisyen",
    "etimesgut insülin direnci diyeti",
    "etimesgut hamilelik beslenmesi",
  ],
  alternates: {
    canonical: PAGE_URL ,
    languages: {
      "tr-TR": PAGE_URL ,
      "x-default": PAGE_URL ,
    },
  },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Etimesgut Diyetisyen — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Etimesgut ve Eryaman hattında yüz yüze veya online kişiye özel beslenme danışmanlığı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etimesgut Diyetisyen — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Etimesgut'ta kilo yönetimi, insülin direnci, PCOS ve sağlıklı beslenme desteği.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Etimesgut bölgesinde diyetisyen randevusu almak istiyorum.",
  "etimesgut-diyetisyen"
);

const focusAreas = [
  {
    icon: Apple,
    title: "Kilo verme ve kilo koruma",
    text: "Aç kalmadan, günlük rutininize ve sosyal hayatınıza uyumlu sürdürülebilir plan.",
  },
  {
    icon: HeartPulse,
    title: "İnsülin direnci ve PCOS",
    text: "Tahliller, semptomlar ve doktor takibiyle uyumlu metabolik beslenme desteği.",
  },
  {
    icon: Users,
    title: "Aile, çocuk ve hamilelik",
    text: "Çocuk, ergen, hamilelik ve emzirme dönemleri için baskısız ve dengeli yaklaşım.",
  },
  {
    icon: Smartphone,
    title: "Online takip",
    text: "Etimesgut dışından veya yoğun tempoda olan danışanlar için görüntülü görüşme ve portal takibi.",
  },
];

const faqs = [
  {
    q: "Etimesgut'ta ofisiniz nerede?",
    a: "Ofis Eryaman Altay Mahallesi Orhan Bey Caddesi Ata Yıldız Plaza No:1/70 Kat:8 adresinde, Optimum AVM karşısındadır. Etimesgut merkez, Elvankent, Bağlıca, Yapracık ve Sincan yönünden kolay ulaşım sağlanır.",
  },
  {
    q: "Etimesgut diyetisyen randevusu nasıl alınır?",
    a: "WhatsApp üzerinden 0546 265 04 40 numarasına yazarak yüz yüze veya online görüşme için randevu talep edebilirsiniz. İlk mesajda hedefinizi ve size uygun günleri belirtmeniz yeterlidir.",
  },
  {
    q: "Kilo vermek için hazır liste mi veriliyor?",
    a: "Hayır. Plan; sağlık geçmişiniz, tahlilleriniz, çalışma saatleriniz, ev düzeniniz, sevdiğiniz besinler ve hedefinize göre kişiye özel hazırlanır. Süreç haftalık görüşmelerle güncellenir.",
  },
  {
    q: "Online diyet Etimesgut'ta yüz yüze kadar etkili olur mu?",
    a: "Uygun takip sistemiyle evet. Görüşmeler görüntülü yapılır; ölçüm, öğün paylaşımı, soru-cevap ve plan güncellemeleri danışan portalı üzerinden yürütülür.",
  },
  {
    q: "Hangi alanlarda destek veriliyor?",
    a: "Kilo yönetimi, sağlıklı beslenme alışkanlığı, insülin direnci, PCOS, hamilelik ve emzirme dönemi, çocuk ve ergen beslenmesi, sporcu beslenmesi ve online diyet alanlarında danışmanlık verilir.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
  description:
    "Etimesgut ve Eryaman bölgesinde yüz yüze ve online kişiye özel beslenme danışmanlığı.",
  url: PAGE_URL,
  telephone: "+90 546 265 04 40",
  image: "https://ezgievginaktas.com/images/instagram/profile.jpg",
  sameAs: [INSTAGRAM_PROFILE_URL, GOOGLE_MAPS_PROFILE_URL],
  hasMap: GOOGLE_MAPS_PROFILE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Altay Mah. Orhan Bey Cad. Atayıldız No:1/70 Kat:8",
    addressLocality: "Etimesgut",
    addressRegion: "Ankara",
    postalCode: "06820",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "Place", name: "Etimesgut" },
    { "@type": "Place", name: "Eryaman" },
    { "@type": "Place", name: "Elvankent" },
    { "@type": "Place", name: "Bağlıca" },
    { "@type": "Place", name: "Yapracık" },
    { "@type": "City", name: "Ankara" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  priceRange: "₺₺",
  medicalSpecialty: "Nutrition",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function EtimesgutDiyetisyenPage() {
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
          {
            name: "Bölgeler",
            item: "https://ezgievginaktas.com/ankara-diyetisyen",
          },
          { name: "Etimesgut Diyetisyen", item: PAGE_URL },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/30 to-cyan-50/30">
        <article className="py-16 md:py-24">
          <section className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs md:text-sm font-medium text-[var(--brand-dark)]">
              <MapPin className="w-3.5 h-3.5" />
              Etimesgut · Eryaman · Elvankent · Bağlıca
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Etimesgut Diyetisyen:{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Kişiye Özel Beslenme Danışmanlığı
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto leading-relaxed">
              Etimesgut&apos;ta diyetisyen arıyorsanız, Eryaman Altay
              Mahallesi&apos;ndeki ofiste yüz yüze veya online görüşmeyle
              sürdürülebilir bir beslenme süreci başlatabilirsiniz. Diyetisyen{" "}
              <Link
                href="/ezgi-evgin-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Dyt. Ezgi Evgin
              </Link>{" "}
              ile plan; tahlilleriniz, günlük rutininiz, hedefiniz ve yemek
              alışkanlıklarınıza göre kişiselleştirilir.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 px-8 min-h-[44px]">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Randevu Al
                </Button>
              </a>
              <Button asChild variant="outline" size="lg" className="h-12">
                <Link href="/eryaman-diyetisyen">
                  <Route className="w-5 h-5 mr-2" />
                  Ofis ve Ulaşım Bilgisi
                </Link>
              </Button>
            </div>
          </section>

          <section className="container mx-auto px-4 max-w-5xl mt-14 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <Card key={area.title} className="p-5">
                    <Icon className="w-7 h-7 text-primary mb-4" />
                    <h2 className="text-base font-semibold text-[var(--brand-dark)]">
                      {area.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {area.text}
                    </p>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="container mx-auto px-4 mt-14 prose prose-slate max-w-prose">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
              Etimesgut&apos;ta diyetisyen seçerken neye bakmalı?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Kilo verme veya sağlıklı beslenme süreci yalnızca bir listeyle
              ilerlemez. İyi bir takip; sağlık geçmişinizi, laboratuvar
              bulgularınızı, uyku ve stres düzeninizi, iş-okul temponuzu ve
              yemek tercihlerinizi aynı anda değerlendirir. <strong>Etimesgut Belediyesi ücretsiz diyetisyen</strong> gibi hizmetleri araştıran, ancak tamamen kendine özel ilgi, sıkı takip sistemi ve iletişim sıklığı isteyen danışanlarımız için kliniğimiz oldukça ideal bir alternatiftir. Bu nedenle Etimesgut bölgesinde diyetisyen ararken konum kadar planın sürdürülebilirliği de önemlidir.
            </p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Eryaman ofisinden Etimesgut geneline hizmet
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ofis{" "}
              <Link
                href="/eryaman-diyetisyen"
                className="text-primary hover:underline"
              >
                Eryaman&apos;da, Optimum AVM karşısında
              </Link>{" "}
              yer alır. Etimesgut merkez, Elvankent, Bağlıca, Yapracık, Sincan
              ve Batıkent hattından kolay ulaşılabilir. Yüz yüze gelemeyen
              danışanlar için{" "}
              <Link
                href="/online-diyetisyen"
                className="text-primary hover:underline"
              >
                online diyet Ankara
              </Link>{" "}
              süreci aynı takip standardıyla yürütülür.
            </p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              En çok çalışılan hedefler
            </h2>
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
                  İnsülin direnci beslenme planı
                </Link>
              </li>
              <li>
                <Link
                  href="/pcos-diyetisyen-ankara"
                  className="text-primary hover:underline"
                >
                  PCOS ve hormon dostu beslenme
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
            </ul>
          </section>

          <section className="container mx-auto px-4 max-w-4xl mt-14">
            <div className="rounded-2xl border bg-white/80 p-6 md:p-8">
              <div className="flex items-start gap-3">
                <CalendarCheck2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
                    Süreç nasıl başlar?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    WhatsApp&apos;tan kısa bir ön bilgi mesajı gönderirsiniz.
                    İlk görüşmede hedefiniz, sağlık geçmişiniz, tahlilleriniz
                    ve günlük düzeniniz değerlendirilir. Ardından kişiye özel
                    plan hazırlanır; haftalık görüşmelerde plan güncellenir ve
                    danışan portalı üzerinden takip sürdürülür.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                    {[
                      "İlk değerlendirme",
                      "Kişiye özel plan",
                      "Haftalık takip",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <LocalProofSection areaName="Etimesgut" whatsappLink={whatsappLink} />

          <section className="container mx-auto px-4 max-w-3xl mt-14">
            <h2 className="text-2xl font-bold text-center text-[var(--brand-dark)] mb-6">
              Sık sorulan sorular
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.q} className="p-5">
                  <h3 className="font-semibold text-[var(--brand-dark)]">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-4 max-w-3xl mt-14 text-center space-y-4">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
              Etimesgut&apos;ta beslenme sürecinize başlayın
            </h2>
            <p className="text-muted-foreground">
              Kısa bir ön görüşmeyle hedefinizi ve size uygun takip modelini
              birlikte netleştirelim.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 px-8 min-h-[44px]">
                <MessageCircle className="w-5 h-5 mr-2" />
                Randevu İçin Yazın
              </Button>
            </a>
          </section>
        </article>
      </div>
    </>
  );
}
