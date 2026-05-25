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
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import {
  GOOGLE_MAPS_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";

const PAGE_URL = "https://ezgievginaktas.com/batikent-diyetisyen";

export const metadata: Metadata = {
  title: "Batıkent Diyetisyen — Eryaman Atayıldız Plaza Ofisi",
  description:
    "Batıkent'te diyetisyen arayanlar için Eryaman Atayıldız Plaza ofisinde yüz yüze veya online beslenme danışmanlığı. Kilo verme, insülin direnci, PCOS ve hamilelik beslenmesi.",
  keywords: [
    "batıkent diyetisyen",
    "batıkent beslenme uzmanı",
    "batıkent kilo verme diyetisyen",
    "batıkent online diyetisyen",
    "batıkent pcos diyetisyen",
    "eryaman diyetisyen",
    "ankara diyetisyen",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Batıkent Diyetisyen — Dyt. Ezgi Evgin",
    description:
      "Batıkent ve çevresine Eryaman ofisinden yakın mesafede yüz yüze ve online beslenme danışmanlığı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Batıkent Diyetisyen — Dyt. Ezgi Evgin",
    description:
      "Batıkent'ten Eryaman'a yakın ofis. Kilo verme, PCOS, insülin direnci ve online diyet.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Batıkent bölgesinden diyetisyen randevusu almak istiyorum.",
  "batikent-diyetisyen"
);

const focusAreas = [
  {
    icon: Apple,
    title: "Kilo verme & koruma",
    text: "Batıkent'in yoğun iş ve okul temposunda uygulanabilir, yasaksız ve doyurucu beslenme planı.",
  },
  {
    icon: HeartPulse,
    title: "İnsülin direnci & PCOS",
    text: "Tahlilleriniz ve doktor takibinizle uyumlu, sürdürülebilir metabolik beslenme.",
  },
  {
    icon: Users,
    title: "Aile, çocuk, hamilelik",
    text: "Çocuk-ergen, hamilelik ve emzirme dönemi için baskısız, alışkanlık odaklı yaklaşım.",
  },
  {
    icon: Smartphone,
    title: "Online seçeneği",
    text: "Yola çıkmak istemeyenler için görüntülü görüşme + uygulama üzerinden günlük geri bildirim.",
  },
];

const faqs = [
  {
    q: "Batıkent'ten Eryaman ofisine ulaşım nasıl?",
    a: "Batıkent merkezden özel araçla 10–15 dakika, metro ve aktarmayla yaklaşık 25–30 dakika. Ofis Eryaman Altay Mahallesi Atayıldız Plaza, Optimum AVM karşısındadır.",
  },
  {
    q: "Batıkent'te fiziksel ofisiniz var mı?",
    a: "Hayır, fiziksel ofis Eryaman'da. Batıkent danışanlarının büyük kısmı yüz yüze randevuyu işten dönüş güzergahına denk getiriyor; tercihe göre online görüşmeyle de süreç ilerletilebiliyor.",
  },
  {
    q: "İlk randevuda ne yapılır?",
    a: "Sağlık geçmişi, tahliller, çalışma saatleri, uyku, stres ve mutfak alışkanlıkları birlikte değerlendirilir. Hafta hafta güncellenen kişiye özel plan hazırlanır.",
  },
  {
    q: "Hangi gün ve saatlerde görüşme yapılıyor?",
    a: "Salı–Cuma 09:00–19:00, Cumartesi 09:00–16:00 arasında randevu verilir. Akşam dilimi için sınırlı kontenjan vardır; WhatsApp'tan uygun günü teyitleyebiliriz.",
  },
  {
    q: "Hazır liste mi alıyorum, plan kişiselleştirilir mi?",
    a: "Plan her zaman kişiye özeldir. Hazır liste verilmez; süreç haftalık görüşmelerle güncellenir ve danışan portalı üzerinden mesaj-soru desteği sürdürülür.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dyt. Ezgi Evgin — Batıkent Hattı",
  description:
    "Batıkent ve çevresine Eryaman ofisinden yüz yüze ve online kişiye özel beslenme danışmanlığı.",
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
    { "@type": "Place", name: "Batıkent" },
    { "@type": "Place", name: "Elvankent" },
    { "@type": "Place", name: "Yenimahalle" },
    { "@type": "Place", name: "Çiğdemtepe" },
    { "@type": "Place", name: "Etimesgut" },
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

export default function BatikentDiyetisyenPage() {
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

      <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/30 to-cyan-50/30">
        <article className="py-16 md:py-24">
          <section className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs md:text-sm font-medium text-[var(--brand-dark)]">
              <MapPin className="w-3.5 h-3.5" />
              Batıkent · Elvankent · Çiğdemtepe · Yenimahalle
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Batıkent Diyetisyen:{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Yakın Ofis & Sürdürülebilir Plan
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto leading-relaxed">
              Batıkent&apos;ten diyetisyen arıyorsanız, Eryaman Altay
              Mahallesi&apos;ndeki ofis yaklaşık 10–15 dakika mesafede. Yüz
              yüze veya online görüşmeyle aynı standartta takip ilerletilir;
              kişiye özel plan{" "}
              <Link
                href="/ezgi-evgin-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Dyt. Ezgi Evgin
              </Link>{" "}
              tarafından hazırlanır ve haftalık güncellenir.
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
              Batıkent&apos;ten ofise gelmek ya da online görüşmek?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Batıkent ve Çiğdemtepe&apos;den danışanlarımız genellikle mesai
              sonrası 18:00 sonrası ve cumartesi öğleden önce randevuyu tercih
              ediyor. Ofis OSB ve Bağlıca güzergahında, dönüş yolunda kolayca
              uğranabiliyor. Yola çıkmak istemeyenler için{" "}
              <Link
                href="/online-diyet-ankara"
                className="text-primary hover:underline"
              >
                online görüşme süreci
              </Link>{" "}
              aynı sıklıkta plan güncellemesi ve mesaj desteğiyle ilerler.
            </p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              En çok çalışılan konular
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
                  İnsülin direnci beslenmesi
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

          <LocalProofSection areaName="Batıkent" whatsappLink={whatsappLink} />

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
              Batıkent&apos;ten sürece başlayalım
            </h2>
            <p className="text-muted-foreground">
              Kısa bir ön görüşmede hedefinizi ve uygun takip modelini birlikte
              belirleyelim.
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
