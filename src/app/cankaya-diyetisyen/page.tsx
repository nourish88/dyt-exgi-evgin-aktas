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

const PAGE_URL = "https://ezgievginaktas.com/cankaya-diyetisyen";

export const metadata: Metadata = {
  title: "Çankaya Diyetisyen — Online Görüşme & Eryaman Ofisi",
  description:
    "Çankaya'da diyetisyen arayanlar için kişiye özel online beslenme danışmanlığı veya Eryaman Atayıldız Plaza ofisinde yüz yüze görüşme. Kilo verme, PCOS, insülin direnci ve hamilelik beslenmesi.",
  keywords: [
    "çankaya diyetisyen",
    "çankaya beslenme uzmanı",
    "çankaya online diyetisyen",
    "çankaya kilo verme diyetisyen",
    "çankaya pcos diyetisyen",
    "ankara diyetisyen",
    "online diyet ankara",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Çankaya Diyetisyen — Dyt. Ezgi Evgin",
    description:
      "Çankaya'dan kolay erişilebilen online görüşme ve Eryaman'da yüz yüze beslenme danışmanlığı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Çankaya Diyetisyen — Dyt. Ezgi Evgin",
    description:
      "Çankaya'dan online ya da Eryaman ofisinde yüz yüze kişiye özel diyet ve takip.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Çankaya bölgesinden diyetisyen randevusu almak istiyorum.",
  "cankaya-diyetisyen"
);

const focusAreas = [
  {
    icon: Smartphone,
    title: "Online görüşme",
    text: "Çankaya'nın yoğun trafiğinde yola çıkmadan, görüntülü görüşme ve danışan portalıyla aynı standartta takip.",
  },
  {
    icon: Apple,
    title: "Kilo yönetimi",
    text: "Ofis çalışanı, akademisyen, öğrenci — temposu farklı danışanlar için uygulanabilir, aç bırakmayan plan.",
  },
  {
    icon: HeartPulse,
    title: "Metabolik destek",
    text: "İnsülin direnci, PCOS, tiroid ve kan tablosu sonuçlarına göre kişiselleştirilmiş beslenme.",
  },
  {
    icon: Users,
    title: "Hamilelik & aile",
    text: "Hamilelik, emzirme, çocuk-ergen ve aile beslenmesinde baskısız, dengeli ve sürdürülebilir yaklaşım.",
  },
];

const faqs = [
  {
    q: "Çankaya'da fiziksel ofisiniz var mı?",
    a: "Şu anda fiziksel ofis Eryaman Atayıldız Plaza'dadır. Çankaya'daki danışanlarımızın büyük kısmı online görüşmeyi tercih ediyor; isteyenler Eryaman ofisine yüz yüze gelebilir.",
  },
  {
    q: "Online diyet Çankaya'da yüz yüze kadar etkili olur mu?",
    a: "Evet. Görüşmeler görüntülü yapılır, plan paylaşımı ve günlük geri bildirim danışan portalı üzerinden yürür. Yapılan değerlendirmelerde online ve yüz yüze takip sonuçları benzer seviyededir.",
  },
  {
    q: "İlk randevuda ne yapılır?",
    a: "Sağlık geçmişi, tahliller, günlük rutin, uyku-stres düzeni ve yemek tercihleri detaylı değerlendirilir. İlk hafta için size özel plan hazırlanır ve takip günleri belirlenir.",
  },
  {
    q: "Çankaya'dan hangi semtlerden danışan geliyor?",
    a: "Kavaklıdere, Bahçelievler, Çukurambar, Birlik, Ümitköy, Çayyolu, Bilkent, Beysukent, Konutkent ve ODTÜ çevresinden danışanlar süreci genellikle online ilerletir; ay sonu kontrolünde Eryaman ofisini tercih edenler de var.",
  },
  {
    q: "Randevu nasıl alınır, ödeme nasıl yapılır?",
    a: "WhatsApp üzerinden 0546 265 04 40 numarasına yazarak randevu alabilirsiniz. Ödeme havale/EFT veya online ödeme bağlantısıyla yapılır; süreç sözleşme ve KVKK aydınlatması ile başlar.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dyt. Ezgi Evgin — Çankaya Hattı",
  description:
    "Çankaya ve Ankara genelinde online; Eryaman ofisinde yüz yüze kişiye özel beslenme danışmanlığı.",
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
    { "@type": "Place", name: "Çankaya" },
    { "@type": "Place", name: "Çukurambar" },
    { "@type": "Place", name: "Çayyolu" },
    { "@type": "Place", name: "Ümitköy" },
    { "@type": "Place", name: "Bilkent" },
    { "@type": "Place", name: "Bahçelievler" },
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

export default function CankayaDiyetisyenPage() {
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
              Çankaya · Çukurambar · Çayyolu · Ümitköy · Bilkent
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Çankaya Diyetisyen:{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Online & Yüz Yüze Beslenme Danışmanlığı
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto leading-relaxed">
              Çankaya&apos;da diyetisyen arıyorsanız iki seçeneğiniz var:
              trafiğe çıkmadan görüntülü görüşmeyle yürüyen{" "}
              <Link
                href="/online-diyet-ankara"
                className="text-primary hover:underline font-medium"
              >
                online diyet süreci
              </Link>{" "}
              veya Eryaman Atayıldız Plaza ofisinde yüz yüze randevu. Her iki
              modelde plan{" "}
              <Link
                href="/ezgi-evgin-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Dyt. Ezgi Evgin
              </Link>{" "}
              tarafından kişiye özel hazırlanır.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 px-8 min-h-[44px]">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Randevu Al
                </Button>
              </a>
              <Button asChild variant="outline" size="lg" className="h-12">
                <Link href="/online-diyet-ankara">
                  <Route className="w-5 h-5 mr-2" />
                  Online Diyet Detayları
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
              Çankaya temposunda sürdürülebilir beslenme
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Çankaya, hem yoğun ofis çalışanı hem de öğrenci nüfusunun yüksek
              olduğu bir bölge. Bu temponun içinde uzun listeler, yasaklı diyetler
              ve katı kalori sınırlamaları nadiren sürdürülebilir oluyor. Burada
              hedef; rutininize uyumlu, dışarıda yemek seçiminizi kolaylaştıran
              ve gerçekten uygulayabileceğiniz bir plan kurmak. Görüşmeler haftalık;
              ölçüm, ruh hali ve uygulama yüzdesine göre güncellenir.
            </p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Online görüşme nasıl çalışır?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              İlk randevudan önce kısa bir form ve tahlil paylaşımı yapılır. Görüşme
              güvenli video bağlantısıyla 45–60 dakika sürer. Plan, danışan portalı
              ve mobil uygulama üzerinden paylaşılır; öğün fotoğrafı, ölçüm ve soru
              akışı buradan yürür.{" "}
              <Link
                href="/mobil-uygulamamiz"
                className="text-primary hover:underline"
              >
                Mobil uygulama hakkında detaylar
              </Link>
              .
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
                  İnsülin direnci
                </Link>
              </li>
              <li>
                <Link
                  href="/pcos-diyetisyen-ankara"
                  className="text-primary hover:underline"
                >
                  PCOS beslenme
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
                  href="/hamilelik-beslenmesi-ankara"
                  className="text-primary hover:underline"
                >
                  Hamilelik ve emzirme dönemi
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

          <LocalProofSection areaName="Çankaya" whatsappLink={whatsappLink} />

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
              Çankaya&apos;dan sürece başlamak için yazın
            </h2>
            <p className="text-muted-foreground">
              Online veya yüz yüze — size uygun modeli kısa bir ön görüşmeyle
              birlikte belirleyelim.
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
