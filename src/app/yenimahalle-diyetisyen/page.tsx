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

const PAGE_URL = "https://ezgievginaktas.com/yenimahalle-diyetisyen";

export const metadata: Metadata = {
  title: "Yenimahalle Diyetisyen — Eryaman'a Yakın Uzman Destek",
  description:
    "Yenimahalle'de diyetisyen arayanlar için Eryaman Atayıldız Plaza ofisinde kişiye özel beslenme danışmanlığı. Online görüşme veya yüz yüze randevu; kilo verme, PCOS, insülin direnci ve aile beslenmesi.",
  keywords: [
    "yenimahalle diyetisyen",
    "yenimahalle beslenme uzmanı",
    "yenimahalle kilo verme diyetisyen",
    "yenimahalle online diyetisyen",
    "demetevler diyetisyen",
    "ankara diyetisyen",
    "eryaman diyetisyen",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Yenimahalle Diyetisyen — Dyt. Ezgi Evgin",
    description:
      "Yenimahalle ve çevresine Eryaman ofisinden yakın mesafede kişiye özel beslenme danışmanlığı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yenimahalle Diyetisyen — Dyt. Ezgi Evgin",
    description:
      "Yenimahalle, Demetevler, Ostim, İvedik hattından yüz yüze ya da online beslenme takibi.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Yenimahalle bölgesinden diyetisyen randevusu almak istiyorum.",
  "yenimahalle-diyetisyen"
);

const focusAreas = [
  {
    icon: Apple,
    title: "Kilo verme ve form koruma",
    text: "Yenimahalle'nin yoğun temposu için kolay hazırlanan, hazır gıdaya bağımlılığı azaltan plan.",
  },
  {
    icon: HeartPulse,
    title: "Kronik & metabolik destek",
    text: "İnsülin direnci, PCOS, tiroid ve kolesterol değerlerine göre planlama; hekim takibinizle uyumlu.",
  },
  {
    icon: Users,
    title: "Aile ve çocuk beslenmesi",
    text: "Çocuk-ergen ve hamilelik beslenmesinde baskısız, alışkanlığa dönüşen sağlıklı tercihler.",
  },
  {
    icon: Smartphone,
    title: "Online takip",
    text: "Yola çıkmak istemeyenler için görüntülü görüşme + uygulama destekli günlük geri bildirim.",
  },
];

const faqs = [
  {
    q: "Yenimahalle'den Eryaman ofisine ulaşım nasıl?",
    a: "Yenimahalle merkez, Demetevler, Batıkent ve Ostim çevresinden özel araçla 10–20 dakika, toplu taşıma ve metroyla yaklaşık 25–35 dakika sürer. Ofis Eryaman Altay Mahallesi Optimum AVM karşısındadır.",
  },
  {
    q: "Yenimahalle'de fiziksel ofisiniz var mı?",
    a: "Hayır, fiziksel ofis Eryaman'da. Yenimahalle danışanlarının önemli bir kısmı online görüşmeyi tercih ediyor; aylık yüz yüze kontrolde Eryaman ofisine geliyor.",
  },
  {
    q: "İlk görüşmede neler değerlendirilir?",
    a: "Sağlık geçmişi, tahliller, çalışma saatleri, uyku-stres düzeni, ev mutfak alışkanlıkları ve hedefiniz birlikte değerlendirilir. Hafta hafta güncellenen kişiye özel plan hazırlanır.",
  },
  {
    q: "Online ve yüz yüze görüşme arasında sonuç farkı var mı?",
    a: "Doğru takip yapıldığında belirgin fark görülmüyor. Online görüşmelerde de aynı sıklık (haftalık), aynı plan formatı ve aynı uygulama desteği sürdürülür.",
  },
  {
    q: "Yenimahalle Belediyesi'nin diyet hizmetinden farkınız ne?",
    a: "Belediye hizmetleri çoğunlukla genel grup eğitimi formatındadır. Bireysel hedef, sık görüşme ve mesaj erişimi isteyen danışanlar özel danışmanlığı tercih ediyor.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dyt. Ezgi Evgin — Yenimahalle Hattı",
  description:
    "Yenimahalle ve çevresine Eryaman ofisinden yüz yüze ve online kişiye özel beslenme danışmanlığı.",
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
    { "@type": "Place", name: "Yenimahalle" },
    { "@type": "Place", name: "Demetevler" },
    { "@type": "Place", name: "Ostim" },
    { "@type": "Place", name: "İvedik" },
    { "@type": "Place", name: "Şentepe" },
    { "@type": "Place", name: "Batıkent" },
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

export default function YenimahalleDiyetisyenPage() {
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
              Yenimahalle · Demetevler · Ostim · İvedik · Şentepe
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Yenimahalle Diyetisyen:{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Yakın Mesafede Sürdürülebilir Beslenme
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto leading-relaxed">
              Yenimahalle&apos;den diyetisyen arıyorsanız, Eryaman Altay
              Mahallesi&apos;ndeki ofis trafik dışı saatlerde 10–20 dakika
              uzaklıkta. Online görüşmeyi tercih edenler için aynı standartta
              haftalık takip sunulur. Plan{" "}
              <Link
                href="/ezgi-evgin-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Dyt. Ezgi Evgin
              </Link>{" "}
              tarafından kişiye özel hazırlanır ve güncellenir.
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
              Yenimahalle hattından beslenme süreci
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Demetevler, Ostim, İvedik ve Şentepe&apos;den danışanlarımızın
              büyük kısmı işten dönüş güzergahını kullanıyor. Bu nedenle
              Eryaman ofisi mesai sonrası ve cumartesi günlerinde yoğun.
              Yola çıkmadan ilerlemek isteyenler{" "}
              <Link
                href="/online-diyet-ankara"
                className="text-primary hover:underline"
              >
                online görüşme süreciyle
              </Link>{" "}
              haftalık takibe başlıyor; ihtiyaca göre aylık bir kez yüz yüze
              kontrol planlıyoruz.
            </p>

            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mt-10">
              Hangi konularda destek alınır?
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
                  PCOS dostu beslenme
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

          <LocalProofSection
            areaName="Yenimahalle"
            whatsappLink={whatsappLink}
          />

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
              Yenimahalle&apos;den sürece başlayalım
            </h2>
            <p className="text-muted-foreground">
              Kısa bir ön görüşmede hedefinizi ve uygun takip modelini birlikte
              netleştirelim.
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
