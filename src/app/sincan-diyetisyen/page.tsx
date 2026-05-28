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
import { ClinicGallery } from "@/components/local-seo/clinic-gallery";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import {
  GOOGLE_MAPS_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";

const PAGE_URL = "https://ezgievginaktas.com/sincan-diyetisyen";

export const metadata: Metadata = {
  title: "Sincan Diyetisyen — Eryaman Ofisinden Yakın Destek",
  description:
    "Sincan'da diyetisyen arayanlar için Eryaman Atayıldız Plaza ofisinde yüz yüze veya online beslenme danışmanlığı. Kilo verme, insülin direnci, PCOS ve hamilelik beslenmesi.",
  keywords: [
    "sincan diyetisyen",
    "sincan beslenme uzmanı",
    "sincan kilo verme diyetisyen",
    "sincan online diyetisyen",
    "sincan pcos diyetisyen",
    "sincan insülin direnci diyeti",
    "eryaman diyetisyen",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Sincan Diyetisyen — Dyt. Ezgi Evgin",
    description:
      "Sincan ve çevresine Eryaman ofisinden yakın mesafede, kişiye özel beslenme danışmanlığı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sincan Diyetisyen — Dyt. Ezgi Evgin",
    description:
      "Sincan'dan Eryaman'a yakın ofis. Kilo yönetimi, PCOS, insülin direnci ve online diyet.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Sincan bölgesinden diyetisyen randevusu almak istiyorum.",
  "sincan-diyetisyen"
);

const focusAreas = [
  {
    icon: Apple,
    title: "Sürdürülebilir kilo verme",
    text: "Sincan'ın yoğun iş-okul temposuna uygun, hazırlığı kolay ve doyurucu öğünlerle ilerleyen plan.",
  },
  {
    icon: HeartPulse,
    title: "İnsülin direnci & PCOS",
    text: "Tahlil ve semptomlarla uyumlu metabolik beslenme. Hekim takibinizle birlikte yürütülür.",
  },
  {
    icon: Users,
    title: "Aile, çocuk, hamilelik",
    text: "Çocuk-ergen seçici beslenme, hamilelik ve emzirme dönemi için baskısız, dengeli yaklaşım.",
  },
  {
    icon: Smartphone,
    title: "Online takip seçeneği",
    text: "Yola çıkmak istemeyenler için görüntülü görüşme + danışan portalı üzerinden günlük geri bildirim.",
  },
];

const faqs = [
  {
    q: "Sincan'dan Eryaman ofisine ulaşım nasıl?",
    a: "Sincan merkezden Eryaman Altay Mahallesi'ne özel araçla yaklaşık 10–15 dakika, toplu taşımayla 25–30 dakika sürer. Ofis Optimum AVM karşısında, OSB ve Başkent Üniversitesi yönünde kolay rotayla erişilir.",
  },
  {
    q: "Sincan'da diyetisyenle yüz yüze görüşmek şart mı?",
    a: "Hayır. Yüz yüze gelmek isteyen danışanlar Eryaman ofisini tercih ederken, yoğun çalışan veya çocuk sahibi olan danışanlarımız online görüşmeyle aynı takip standardını sürdürür.",
  },
  {
    q: "Randevu nasıl alınır?",
    a: "WhatsApp üzerinden 0546 265 04 40 numarasına kısa bir mesaj göndererek hedefinizi ve uygun günlerinizi paylaşmanız yeterli. İlk görüşme öncesinde size kısa bir ön değerlendirme formu iletilir.",
  },
  {
    q: "Hazır liste verilir mi, plan kişiselleştirilir mi?",
    a: "Plan her zaman kişiye özeldir. Tahliller, sağlık geçmişi, çalışma saatleri, evdeki mutfak düzeniniz ve sevdiğiniz besinler değerlendirilerek hazırlanır; haftalık görüşmelerle güncellenir.",
  },
  {
    q: "Sincan Belediyesi diyetisyen hizmeti yerine neden özel danışmanlık?",
    a: "Belediye hizmetleri grup eğitim ağırlıklıdır. Bireysel hedef, daha yoğun takip ve mesaj erişimi isteyen danışanlarımız özel danışmanlığı tercih ediyor; her ikisi de farklı ihtiyaçları karşılar.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dyt. Ezgi Evgin — Sincan Hattı",
  description:
    "Sincan ve çevresine Eryaman ofisinden yüz yüze ve online kişiye özel beslenme danışmanlığı.",
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
    { "@type": "Place", name: "Sincan" },
    { "@type": "Place", name: "Fatih" },
    { "@type": "Place", name: "Yenikent" },
    { "@type": "Place", name: "Pınarbaşı" },
    { "@type": "Place", name: "Plevne" },
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

export default function SincanDiyetisyenPage() {
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
          { name: "Sincan Diyetisyen", item: PAGE_URL },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/30 to-cyan-50/30">
        <article className="py-16 md:py-24">
          <section className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs md:text-sm font-medium text-[var(--brand-dark)]">
              <MapPin className="w-3.5 h-3.5" />
              Sincan · Fatih · Yenikent · Plevne · Pınarbaşı
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Sincan Diyetisyen:{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Yakın Mesafede Uzman Destek
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto leading-relaxed">
              Sincan&apos;dan diyetisyen arıyorsanız, Eryaman Altay
              Mahallesi&apos;ndeki ofis size yalnızca 10–15 dakika
              uzaklıktadır. Yüz yüze veya online görüşmeyle, hedeflerinize
              uygun kişiye özel plan{" "}
              <Link
                href="/ezgi-evgin-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Dyt. Ezgi Evgin
              </Link>{" "}
              tarafından hazırlanır ve haftalık olarak güncellenir.
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
              Sincan&apos;dan ofise gelmek ya da online görüşmek?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sincan, Yenikent, Fatih ve Plevne&apos;den danışanlarımız
              genellikle hafta içi mesai sonrası veya cumartesi randevularını
              tercih ediyor. Eryaman ofisi, OSB ve Başkent Üniversitesi
              güzergahında olduğu için işten dönüş yolunda kolayca
              uğranabiliyor. Yoğun tempoda olan danışanlar için{" "}
              <Link
                href="/online-diyet-ankara"
                className="text-primary hover:underline"
              >
                online diyet süreci
              </Link>{" "}
              aynı sıklıkta görüşme, plan güncellemesi ve mesaj desteğiyle
              ilerler.
            </p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Sincan&apos;da en çok gelen hedefler
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

          <section className="container mx-auto px-4 max-w-5xl">
            <ClinicGallery />
          </section>

          <LocalProofSection areaName="Sincan" whatsappLink={whatsappLink} />

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
              Sincan&apos;dan sürece başlamak için yazın
            </h2>
            <p className="text-muted-foreground">
              Kısa bir ön görüşmede hedefinizi ve size uygun takip modelini
              birlikte planlayalım.
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
