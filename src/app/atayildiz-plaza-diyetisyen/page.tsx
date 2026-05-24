import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MessageCircle,
  MapPin,
  CalendarCheck2,
  Smartphone,
  Phone,
  Clock,
  Car,
  Bus,
  CheckCircle2,
  Users,
  Heart,
  Baby,
  Dumbbell,
  Apple,
  ClipboardList,
  Building2,
} from "lucide-react";
import { LocalProofSection } from "@/components/local-seo/local-proof-section";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import {
  GOOGLE_MAPS_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";

const PAGE_URL = "https://ezgievginaktas.com/atayildiz-plaza-diyetisyen";

export const metadata: Metadata = {
  title: "Atayıldız Plaza Diyetisyen — Eryaman Ofis",
  description:
    "Atayıldız Plaza'da (Altay Mah. Orhan Bey Cd. No:1/70 Kat:8) diyetisyen Ezgi Evgin Aktaş. Optimum AVM karşısı, Eryaman'da yüz yüze beslenme danışmanlığı. Salı-Cuma 09:00-19:00, Cmt 09:00-16:00.",
  keywords: [
    "atayıldız plaza diyetisyen",
    "ata yıldız plaza diyetisyen",
    "eryaman diyetisyen",
    "etimesgut diyetisyen",
    "atayıldız plaza beslenme",
    "optimum avm karşısı diyetisyen",
    "altay mahallesi diyetisyen",
    "eryaman beslenme danışmanı",
    "atayıldız plaza kat 8",
    "eryaman kilo verme diyetisyen",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Atayıldız Plaza Diyetisyen — Eryaman Ofis",
    description:
      "Atayıldız Plaza Kat:8'de diyetisyen Ezgi Evgin Aktaş. Optimum AVM karşısı, Eryaman'da yüz yüze ve online beslenme danışmanlığı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atayıldız Plaza Diyetisyen — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Atayıldız Plaza Kat:8, Eryaman Optimum AVM karşısı. Kişiye özel beslenme danışmanlığı.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Atayıldız Plaza ofisinde diyetisyen randevusu almak istiyorum.",
  "atayildiz-plaza-diyetisyen"
);

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı — Atayıldız Plaza",
  alternateName: ["Atayıldız Plaza Diyetisyen", "Ata Yıldız Plaza Diyetisyen", "Eryaman Diyetisyen Atayıldız"],
  url: PAGE_URL,
  telephone: "+90 546 265 04 40",
  image: "https://ezgievginaktas.com/images/instagram/profile.jpg",
  sameAs: [INSTAGRAM_PROFILE_URL, GOOGLE_MAPS_PROFILE_URL],
  hasMap: GOOGLE_MAPS_PROFILE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Altay Mah. Orhan Bey Cad. Atayıldız Plaza No:1/70 Kat:8",
    addressLocality: "Etimesgut",
    addressRegion: "Ankara",
    postalCode: "06820",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.947",
    longitude: "32.677",
  },
  containedInPlace: {
    "@type": "Place",
    name: "Atayıldız Plaza",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Altay Mah. Orhan Bey Cad. No:1",
      addressLocality: "Etimesgut",
      addressRegion: "Ankara",
      postalCode: "06820",
      addressCountry: "TR",
    },
  },
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
  areaServed: [
    { "@type": "City", name: "Ankara" },
    { "@type": "Place", name: "Eryaman" },
    { "@type": "Place", name: "Etimesgut" },
    { "@type": "Place", name: "Sincan" },
    { "@type": "Place", name: "Batıkent" },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://ezgievginaktas.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Eryaman Diyetisyen",
      item: "https://ezgievginaktas.com/eryaman-diyetisyen",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Atayıldız Plaza Diyetisyen",
      item: PAGE_URL,
    },
  ],
};

const faqs = [
  {
    q: "Atayıldız Plaza diyetisyen ofisi kaçıncı katta?",
    a: "Atayıldız Plaza'daki beslenme danışmanlığı ofisimiz 8. katta, No:1/70'te yer almaktadır. Plaza girişinden asansörle doğrudan 8. kata çıkabilirsiniz.",
  },
  {
    q: "Atayıldız Plaza'ya nasıl ulaşırım?",
    a: "Atayıldız Plaza, Eryaman Altay Mahallesi Orhan Bey Caddesi üzerinde, Optimum AVM'nin tam karşısındadır. Hem araçla hem toplu taşımayla kolayca ulaşılabilir. Adres: Altay Mah. Orhan Bey Cad. Atayıldız Plaza No:1/70 Kat:8, Etimesgut/Ankara.",
  },
  {
    q: "Atayıldız Plaza'da otopark var mı?",
    a: "Evet. Atayıldız Plaza'nın kendi otopark alanı mevcuttur. Bunun yanı sıra Optimum AVM otoparkı da 100 metre mesafede olup araçla gelenlere geniş park imkânı sunar. Orhan Bey Caddesi üzerinde yol kenarı park da yapılabilmektedir.",
  },
  {
    q: "Eryaman metro durağından Atayıldız Plaza'ya nasıl gelinir?",
    a: "Ankara M2 metro hattında Eryaman istasyonunda inerek yaklaşık 5-7 dakika yürüyerek Atayıldız Plaza'ya ulaşabilirsiniz. Optimum AVM'yi gördüğünüzde karşı tarafta Atayıldız Plaza'yı göreceksiniz.",
  },
  {
    q: "Atayıldız Plaza Optimum AVM'ye ne kadar uzak?",
    a: "Atayıldız Plaza, Optimum AVM'nin tam karşısındadır; aralarında yalnızca Orhan Bey Caddesi bulunur. Yürüme mesafesi 1-2 dakikadır.",
  },
  {
    q: "Hangi gün ve saatlerde ofiste olunuyor?",
    a: "Atayıldız Plaza ofisimiz Salı, Çarşamba, Perşembe ve Cuma günleri 09:00-19:00, Cumartesi ise 09:00-16:00 saatleri arasında hizmet vermektedir. Pazar ve Pazartesi günleri kapalıdır. Randevu için 0546 265 04 40 numaralı WhatsApp hattımızı kullanabilirsiniz.",
  },
  {
    q: "Atayıldız Plaza'da yüz yüze danışmanlıkla birlikte online takip de yapılıyor mu?",
    a: "Evet. İlk görüşmeyi Atayıldız Plaza ofisinde yapıp sonraki takip görüşmelerini online olarak sürdürmek mümkündür. Danışan portalı üzerinden öğün takibi, mesajlaşma ve gelişim grafikleri erişiminizde olur.",
  },
  {
    q: "Etimesgut veya Sincan'dan Atayıldız Plaza'ya nasıl gelinir?",
    a: "Etimesgut merkezden yaklaşık 10 dakika, Sincan ve Batıkent yönünden yaklaşık 15 dakika araç süresi vardır. EGO otobüs hatları da Eryaman Merkez ve Optimum duraklarından düzenli olarak geçer.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const features = [
  {
    icon: Building2,
    title: "Atayıldız Plaza Kat:8 — Merkezi Konum",
    description:
      "Eryaman Altay Mahallesi'nin kalbinde, Optimum AVM'nin tam karşısındaki Atayıldız Plaza'da. 8. kattan Eryaman manzarası eşliğinde danışmanlık.",
  },
  {
    icon: CalendarCheck2,
    title: "Haftalık Birebir Görüşme",
    description:
      "Her hafta yüz yüze veya online; süreciniz değerlendirilir, beslenme planınız güncellenir, motivasyonunuz korunur.",
  },
  {
    icon: Smartphone,
    title: "Görüşmeler Arası Sürekli Destek",
    description:
      "Danışan portalından öğün paylaşımı, hatırlatıcılar ve gelişim grafikleriyle görüşmeler arasında da yalnız kalmazsınız.",
  },
];

const targetAudience = [
  {
    icon: Apple,
    title: "Kilo Vermek İsteyenler",
    description: "Aç kalmadan, yaşam tarzınıza uygun ve sürdürülebilir kilo verme süreci.",
  },
  {
    icon: Heart,
    title: "İnsülin Direnci & PCOS",
    description: "Doktor tanısı sonrası beslenmeyle desteklenen vakalar için kişiye özel plan.",
  },
  {
    icon: Baby,
    title: "Hamile ve Emziren Anneler",
    description: "Hamilelik ve emzirme döneminde anne-bebek sağlığını koruyan dengeli beslenme.",
  },
  {
    icon: Users,
    title: "Çocuk ve Ergen Beslenmesi",
    description: "Aile katılımıyla; çocuğun yaşına ve aktivitesine uygun, baskısız beslenme.",
  },
  {
    icon: Dumbbell,
    title: "Sporcu Beslenmesi",
    description: "Antrenman yoğunluğuna ve hedefe göre beslenme planı.",
  },
  {
    icon: ClipboardList,
    title: "Sağlıklı Yaşam Alışkanlığı",
    description: "Kilo problemi olmadan, daha enerjik ve düzenli bir günlük rutin kurmak isteyenler.",
  },
];

export default function AtayildizPlazaDiyetisyenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/40 to-cyan-50/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-6 max-w-5xl">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
            <li><Link href="/" className="hover:text-primary">Ana Sayfa</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/eryaman-diyetisyen" className="hover:text-primary">Eryaman Diyetisyen</Link></li>
            <li aria-hidden>/</li>
            <li className="text-[var(--brand-dark)] font-medium">Atayıldız Plaza Diyetisyen</li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs md:text-sm font-medium text-[var(--brand-dark)]">
                <Building2 className="w-3.5 h-3.5" />
                Atayıldız Plaza Kat:8 · Optimum AVM Karşısı
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--brand-dark)]">
                Atayıldız Plaza{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  Diyetisyen
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Eryaman Altay Mahallesi&apos;nde, Optimum AVM&apos;nin tam karşısındaki{" "}
                <strong>Atayıldız Plaza Kat:8</strong>&apos;de kişiye özel beslenme danışmanlığı.
                Kilo yönetimi, insülin direnci, hamilelik beslenmesi ve daha fazlası —
                uzman diyetisyen Ezgi Evgin Aktaş ile yüz yüze veya online.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-12 px-8 min-h-[44px]">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp&apos;tan Randevu Al
                  </Button>
                </a>
                <a href="tel:+905462650440">
                  <Button size="lg" variant="outline" className="h-12 px-8 min-h-[44px]">
                    <Phone className="w-5 h-5 mr-2" />
                    0546 265 04 40
                  </Button>
                </a>
              </div>
            </div>

            {/* Klinik Bilgi Kartı */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Card className="p-5 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Adres</p>
                  <p className="text-sm text-gray-800 mt-1 leading-relaxed">
                    Altay Mah. Orhan Bey Cad.
                    <br />
                    <strong>Atayıldız Plaza</strong> No:1/70 Kat:8
                    <br />
                    <span className="text-gray-500">Optimum AVM karşısı · 06820 Etimesgut/Ankara</span>
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Çalışma Saatleri</p>
                  <p className="text-sm text-gray-800 mt-1 leading-relaxed">
                    Salı – Cuma: 09:00 – 19:00
                    <br />
                    Cumartesi: 09:00 – 16:00
                    <br />
                    <span className="text-gray-500">Pazar & Pazartesi kapalı</span>
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">İletişim</p>
                  <p className="text-sm text-gray-800 mt-1 leading-relaxed">
                    <a href="tel:+905462650440" className="hover:text-[var(--brand-primary)]">
                      0546 265 04 40
                    </a>
                    <br />
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-primary)]">
                      WhatsApp ile yaz
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ÖZELLİKLER */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {features.map((f) => (
                <Card key={f.title} className="p-6 hover:shadow-lg transition-shadow">
                  <f.icon className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
                  <h2 className="font-semibold mb-2 text-[var(--brand-dark)]">{f.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NEDEN ATAYILDIZ PLAZA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-4">
                Atayıldız Plaza&apos;da neden diyetisyen ofisi?
              </h2>
              <p>
                <strong>Atayıldız Plaza</strong>, Eryaman&apos;ın en merkezi noktalarından birinde,
                Altay Mahallesi Orhan Bey Caddesi üzerinde konumlanmaktadır. Optimum AVM&apos;nin
                tam karşısındaki bu plazanın 8. katında yer alan ofisimiz, hem araçla hem de
                toplu taşımayla rahatlıkla ulaşılabilen bir lokasyon sunar. Eryaman içinden
                5 dakika, Etimesgut merkezinden 10 dakika, Sincan ve Batıkent yönlerinden
                ise yaklaşık 15 dakikalık yol mesafesindedir.
              </p>
              <p>
                <strong>Atayıldız Plaza diyetisyen</strong> araması yaparak buraya ulaşanlar
                için önemli bir bilgi: Plazanın kendi otoparkı ve yanı başındaki Optimum AVM
                otoparkı park konusunda hiçbir sıkıntı yaşatmaz. Aynı zamanda Ankara M2 metro
                hattı Eryaman istasyonundan yürüyerek 5-7 dakikada ulaşmak mümkündür.
                EGO otobüsleri de Optimum durağına yoğun sıklıkla uğrar.
              </p>
              <p>
                Başkent Üniversitesi Beslenme ve Diyetetik mezunu diyetisyen Ezgi Evgin Aktaş,
                2016&apos;dan bu yana{" "}
                <strong>Atayıldız Plaza</strong>&apos;daki ofisinde binden fazla danışana
                rehberlik etmiştir. Yaklaşımın temeli şudur: hazır diyet listesi değil,
                sizin mutfağınıza, çalışma temponuza ve sevdiğiniz besinlere göre şekillenen,
                haftadan haftaya güncellenen bir süreç. Hızlı kilo verme rejimleri yerine
                kalıcı alışkanlık değişikliği hedeflenir.
              </p>
              <p>
                Eryaman&apos;da veya Etimesgut&apos;ta yaşıyor ya da çalışıyorsanız,{" "}
                <strong>Atayıldız Plaza</strong>&apos;daki ofisimiz semtinizde uzman
                diyetisyen desteği için en yakın ve erişilebilir seçenektir. Yüz yüze
                danışmanlık tercih etmeyenler için aynı kalite standardında{" "}
                <Link href="/online-diyet-ankara" className="text-primary font-medium hover:underline">
                  online diyet
                </Link>{" "}
                seçeneği de mevcuttur.
              </p>
            </div>
          </div>
        </section>

        {/* KİMLER İÇİN UYGUN */}
        <section className="py-12 md:py-16 bg-white/60">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)]">Kimler İçin Uygun?</h2>
              <p className="text-muted-foreground mt-2">
                Farklı yaş, hedef ve yaşam tarzına uyumlu beslenme planları
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {targetAudience.map((t) => (
                <Card key={t.title} className="p-5 hover:shadow-md transition-shadow">
                  <t.icon className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
                  <h3 className="font-semibold text-[var(--brand-dark)] mb-1.5">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ULAŞIM */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)]">
                Atayıldız Plaza&apos;ya Ulaşım
              </h2>
              <p className="text-muted-foreground mt-2">
                Optimum AVM&apos;nin tam karşısı, araç ve toplu taşıma ile kolay erişim
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-5">
                <Car className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
                <h3 className="font-semibold mb-1.5 text-[var(--brand-dark)]">Araçla</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Atayıldız Plaza&apos;nın kendi otoparkı ve Optimum AVM otoparkı kullanılabilir.
                  Orhan Bey Cad. kenarında da park imkânı var. Eryaman içinden 5 dk,
                  Etimesgut Merkez&apos;den 10 dk, Sincan ve Batıkent&apos;ten 15 dk.
                </p>
              </Card>
              <Card className="p-5">
                <Bus className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
                <h3 className="font-semibold mb-1.5 text-[var(--brand-dark)]">Toplu Taşıma</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  M2 metro Eryaman istasyonundan yaklaşık 5-7 dk yürüyüş ile Atayıldız
                  Plaza&apos;ya ulaşılır. EGO otobüsleri Optimum AVM durağında sık aralıklarla uğrar.
                </p>
              </Card>
              <Card className="p-5">
                <MapPin className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
                <h3 className="font-semibold mb-1.5 text-[var(--brand-dark)]">Hizmet Verilen Semtler</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Atayıldız Plaza ofisimiz; Eryaman, Etimesgut, Sincan, Batıkent ve Yenimahalle
                  danışanlarına yüz yüze, Türkiye genelinde online hizmet verir.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <LocalProofSection areaName="Atayıldız Plaza" whatsappLink={whatsappLink} />

        {/* SSS */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)]">Sıkça Sorulan Sorular</h2>
              <p className="text-muted-foreground mt-2">
                Atayıldız Plaza diyetisyen ofisi hakkında merak edilenler
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((f, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-[var(--brand-primary)]/30 transition-colors"
                >
                  <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none">
                    <span className="font-semibold text-[var(--brand-dark)] flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                      {f.q}
                    </span>
                    <span className="text-[var(--brand-primary)] text-xl shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pl-12 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* İÇ LİNKLEME */}
        <section className="py-8 md:py-10">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">
              İlgili sayfalar
            </h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/eryaman-diyetisyen" className="text-primary hover:underline font-medium">
                Eryaman Diyetisyen
              </Link>
              <span className="text-muted-foreground" aria-hidden>·</span>
              <Link href="/etimesgut-diyetisyen" className="text-primary hover:underline font-medium">
                Etimesgut Diyetisyen
              </Link>
              <span className="text-muted-foreground" aria-hidden>·</span>
              <Link href="/ankara-diyetisyen" className="text-primary hover:underline font-medium">
                Ankara Diyetisyen
              </Link>
              <span className="text-muted-foreground" aria-hidden>·</span>
              <Link href="/online-diyet-ankara" className="text-primary hover:underline font-medium">
                Online Diyet Ankara
              </Link>
              <span className="text-muted-foreground" aria-hidden>·</span>
              <Link href="/insulin-direnci-diyeti-ankara" className="text-primary hover:underline font-medium">
                İnsülin Direnci Diyeti
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="p-8 md:p-10 text-center bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-secondary)]/5 border-[var(--brand-primary)]/20">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)] mb-3">
                Atayıldız Plaza&apos;da Randevu Alın
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Ücretsiz ön görüşmeyle başlayın — Atayıldız Plaza ofisinde veya online,
                size en uygun seçenekle danışmanlık sürecini birlikte planlayalım.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-12 px-8 min-h-[44px]">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp&apos;tan Yaz
                  </Button>
                </a>
                <a href="tel:+905462650440">
                  <Button size="lg" variant="outline" className="h-12 px-8 min-h-[44px]">
                    <Phone className="w-5 h-5 mr-2" />
                    0546 265 04 40
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </section>
      </article>
    </div>
  );
}
