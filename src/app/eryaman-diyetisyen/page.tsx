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
} from "lucide-react";
import { LocalProofSection } from "@/components/local-seo/local-proof-section";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import {
  GOOGLE_MAPS_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";

export const metadata: Metadata = {
  title: "Eryaman Diyetisyen — Optimum AVM Karşısı",
  description:
    "Eryaman'da diyetisyen mi arıyorsunuz? Altay Mahallesi Atayıldız Plaza (Optimum AVM karşısı) ofisimizde kişiye özel beslenme danışmanlığı. Salı-Cumartesi 09:00-20:00. Yüz yüze veya online.",
  keywords: [
    "eryaman diyetisyen",
    "eryaman beslenme danışmanı",
    "etimesgut diyetisyen",
    "eryaman kilo verme",
    "eryaman online diyetisyen",
    "altay mahallesi diyetisyen",
    "optimum avm diyetisyen",
    "eryaman insulin direnci",
    "eryaman hamile diyetisyeni",
    "eryaman çocuk diyetisyeni",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/eryaman-diyetisyen",
  },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/eryaman-diyetisyen",
    title: "Eryaman Diyetisyen — Optimum AVM Karşısı",
    description:
      "Eryaman Altay Mahallesi Atayıldız Plaza'da kişiye özel beslenme danışmanlığı. Yüz yüze veya online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eryaman Diyetisyen — Dyt. Ezgi Evgin Aktaş",
    description:
      "Eryaman Optimum AVM karşısı, kişiye özel beslenme danışmanlığı.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Eryaman bölgesinde diyetisyen randevusu almak istiyorum.",
  "eryaman-diyetisyen"
);

const features = [
  {
    icon: MapPin,
    title: "Optimum AVM Karşısı, Kolay Ulaşım",
    description:
      "Altay Mahallesi Orhan Bey Caddesi Atayıldız Plaza. Eryaman'ın merkezinde, hem araçla hem toplu taşımayla rahat erişim.",
  },
  {
    icon: CalendarCheck2,
    title: "Haftalık Birebir Görüşme",
    description:
      "Her hafta yüz yüze veya online; süreciniz değerlendirilir, planınız güncellenir, motivasyonunuz korunur.",
  },
  {
    icon: Smartphone,
    title: "Görüşme Arası Sürekli Destek",
    description:
      "Danışan portalından öğün paylaşımı, hatırlatıcılar ve gelişim grafikleriyle görüşmeler arasında da yalnız kalmazsınız.",
  },
];

const targetAudience = [
  {
    icon: Apple,
    title: "Kilo Vermek İsteyenler",
    description:
      "Aç kalmadan, yaşam tarzınıza uygun ve sürdürülebilir bir kilo verme süreci.",
  },
  {
    icon: Heart,
    title: "İnsülin Direnci & Metabolik Sorunlar",
    description:
      "Doktor tanısı sonrası beslenmeyle desteklenen vakalar için kişiye özel plan.",
  },
  {
    icon: Baby,
    title: "Hamile ve Emziren Anneler",
    description:
      "Hamilelik ve emzirme döneminde anne-bebek sağlığını koruyan dengeli beslenme.",
  },
  {
    icon: Users,
    title: "Çocuk ve Ergen Beslenmesi",
    description:
      "Aile katılımıyla; çocuğun yaşına ve aktivitesine uygun, baskısız beslenme.",
  },
  {
    icon: Dumbbell,
    title: "Sporcu Beslenmesi",
    description:
      "Antrenman yoğunluğuna ve hedefe (performans, kas, yağ kaybı) göre beslenme planı.",
  },
  {
    icon: ClipboardList,
    title: "Sağlıklı Yaşam Alışkanlığı",
    description:
      "Kilo problemi olmadan, daha enerjik ve düzenli bir günlük rutin kurmak isteyenler.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Ücretsiz Ön Görüşme",
    description:
      "WhatsApp üzerinden kısa bir sohbet — durumunuzu, hedefinizi ve programın size uygun olup olmadığını birlikte değerlendiririz.",
  },
  {
    step: "2",
    title: "İlk Detaylı Görüşme",
    description:
      "Ofiste veya online; sağlık geçmişi, yaşam tarzı, çalışma temposu, sevdiğiniz ve sevmediğiniz besinler — her detayı not alırız.",
  },
  {
    step: "3",
    title: "Kişiye Özel Beslenme Planı",
    description:
      "Ezberden hazır plan yok. Mutfağınıza, bütçenize ve günlük programınıza göre özelleştirilmiş plan hazırlanır.",
  },
  {
    step: "4",
    title: "Haftalık Takip & Ayar",
    description:
      "Her hafta görüşmeyle ilerleme, zorlandığınız noktalar ve yeni hedefler konuşulur. Plan dinamik olarak güncellenir.",
  },
  {
    step: "5",
    title: "Danışan Uygulaması ile Süreklilik",
    description:
      "Görüşmeler arasında öğün paylaşımı, soru sorma, hatırlatma ve gelişim grafikleri — tek uygulamada.",
  },
];

const faqs = [
  {
    q: "Eryaman'da kliniğiniz tam olarak nerede?",
    a: "Eryaman Altay Mahallesi Orhan Bey Caddesi, Atayıldız Plaza No:1/70 Kat:8, Optimum AVM'nin tam karşısında. Etimesgut/Ankara 06820. Hem Eryaman içinden hem Etimesgut, Sincan, Batıkent yönlerinden kolay ulaşım var.",
  },
  {
    q: "İlk görüşme ne kadar sürer ve nasıl ilerler?",
    a: "İlk görüşme genelde 45-60 dakika sürer. Sağlık geçmişiniz, hedefleriniz, yaşam tarzınız ve beslenme alışkanlıklarınız detaylı konuşulur. Vücut analizi ve ölçümler yapılır. Sonrasında size özel plan oluşturulur.",
  },
  {
    q: "Yüz yüze gelemiyorum, online görüşme mümkün mü?",
    a: "Evet. Eryaman dışından gelen ya da yoğun temposu olan danışanlar için online görüşme aynı kalite standardında sunulur. Görüntülü görüşme + danışan uygulaması üzerinden plan, mesajlaşma ve takip yapılır.",
  },
  {
    q: "Görüşme aralığı ne kadar olmalı?",
    a: "Genelde haftalık görüşme önerilir — alışkanlık değişimi düzenli geri bildirim ister. Süreç stabilize olduğunda iki haftada bire geçilebilir. Sıklık, hedefe ve sürecin gidişatına göre birlikte belirlenir.",
  },
  {
    q: "Aç kalmadan kilo vermek gerçekten mümkün mü?",
    a: "Evet. Yaklaşımımız 'yasaklı liste' veya 'aşırı kısıtlı menü' değil. Doğru besin seçimi, öğün düzeni ve porsiyon dengesiyle tok kalarak hedefe ulaşılır. Bu yöntem hem kalıcı hem sürdürülebilir.",
  },
  {
    q: "Çalışma saatleriniz nedir?",
    a: "Salı'dan Cumartesi'ye 09:00-20:00 arası açığız. Pazar ve Pazartesi kapalı. Randevu için WhatsApp üzerinden 0546 265 04 40 numarasına yazabilirsiniz.",
  },
  {
    q: "Eryaman'a metro veya otobüsle nasıl gelirim?",
    a: "Ankara M2 metro hattı Eryaman istasyonuna iner, oradan klinik 5-7 dakika yürüme mesafesinde. EGO otobüsleri de Eryaman Merkez duraklarında yoğun şekilde geçer. Ayrıca AVM otoparkı ve çevre yol kenarı park imkanı mevcuttur.",
  },
  {
    q: "Programdan ne zaman sonuç alırım?",
    a: "Sağlıklı kilo kaybı haftada 0.5-1 kg arasındadır. İlk 2-4 hafta hem kilo hem ölçü hem enerji açısından değişimler hissedilmeye başlar. Asıl hedef ise kalıcı alışkanlık ve uzun vadeli sağlık.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
  description:
    "Eryaman ve Etimesgut bölgesinde kişiye özel beslenme ve diyet danışmanlığı. Yüz yüze ve online görüşme.",
  url: "https://ezgievginaktas.com/eryaman-diyetisyen",
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
  areaServed: [
    { "@type": "City", name: "Ankara" },
    { "@type": "Place", name: "Eryaman" },
    { "@type": "Place", name: "Etimesgut" },
    { "@type": "Place", name: "Sincan" },
    { "@type": "Place", name: "Batıkent" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  priceRange: "₺₺",
  medicalSpecialty: "Nutrition",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function EryamanDiyetisyenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/40 to-cyan-50/40">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article>
        {/* HERO */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs md:text-sm font-medium text-[var(--brand-dark)]">
                <MapPin className="w-3.5 h-3.5" />
                Eryaman Altay Mah. · Optimum AVM Karşısı
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--brand-dark)]">
                Eryaman Diyetisyen:{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  Yanı Başınızda Uzman Destek
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Eryaman ve Etimesgut&apos;ta diyetisyen arıyorsanız doğru
                adrestesiniz. Kilo yönetimi, insülin direnci, hamilelik
                beslenmesi, çocuk ve sporcu beslenmesi — alanında uzman
                diyetisyen Ezgi Evgin Aktaş ile yüz yüze veya online
                danışmanlık. Aç kalmadan, yasaksız ve sürdürülebilir.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-12 px-8 min-h-[44px]">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp&apos;tan Randevu Al
                  </Button>
                </a>
                <a href="tel:+905462650440">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 min-h-[44px]"
                  >
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
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Adres
                  </p>
                  <p className="text-sm text-gray-800 mt-1 leading-relaxed">
                    Altay Mah. Orhan Bey Cad.
                    <br />
                    Atayıldız Plaza No:1/70 Kat:8
                    <br />
                    <span className="text-gray-500">
                      Optimum AVM karşısı · 06820 Etimesgut/Ankara
                    </span>
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Çalışma Saatleri
                  </p>
                  <p className="text-sm text-gray-800 mt-1 leading-relaxed">
                    Salı – Cumartesi
                    <br />
                    09:00 – 20:00
                    <br />
                    <span className="text-gray-500">Pazar & Pazartesi kapalı</span>
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    İletişim
                  </p>
                  <p className="text-sm text-gray-800 mt-1 leading-relaxed">
                    <a
                      href="tel:+905462650440"
                      className="hover:text-[var(--brand-primary)]"
                    >
                      0546 265 04 40
                    </a>
                    <br />
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--brand-primary)]"
                    >
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
                <Card
                  key={f.title}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <f.icon className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
                  <h2 className="font-semibold mb-2 text-[var(--brand-dark)]">
                    {f.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NEDEN FARK YARATIR */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-4">
                Eryaman&apos;da diyetisyen desteği neden fark yaratır?
              </h2>
              <p>
                Semt dışındaki uzak bir ofise gitmek, yoğun bir günün üstüne
                ekstra yük demek. Eryaman Altay Mahallesi&apos;nde, Optimum
                AVM&apos;nin tam karşısındaki Atayıldız Plaza&apos;da
                konumlanan kliniğimiz bu sorunu ortadan kaldırır. Eryaman
                içinden 5 dakikada, Etimesgut merkezden 10 dakikada, Sincan ve
                Batıkent yönünden 15 dakikada ulaşılır. M2 metro Eryaman
                istasyonundan yürüme mesafesinde, AVM otoparkı ve sokak park
                imkanları da kolay.
              </p>
              <p>
                Başkent Üniversitesi Beslenme ve Diyetetik mezunu uzman
                diyetisyen Ezgi Evgin Aktaş, 2016&apos;dan bu yana kendi
                merkezinde <strong>yasaksız ve sürdürülebilir</strong>{" "}
                beslenme yaklaşımıyla binden fazla danışana rehberlik etmiştir.
                Hızlı diyet, şok program veya katı kısıtlama değil; yaşam
                tarzınıza uyumlu, mutfağınızdaki malzemelerle yürüyen, hafta
                hafta birlikte güncellenen bir süreç.
              </p>
              <p>
                Eryaman dışından gelenler veya yoğun temposu olanlar için{" "}
                <Link
                  href="/online-diyet-ankara"
                  className="text-primary font-medium hover:underline"
                >
                  online diyet
                </Link>{" "}
                seçeneği de aynı kalite standardında. Genel Ankara aramaları
                için{" "}
                <Link
                  href="/ankara-diyetisyen"
                  className="text-primary font-medium hover:underline"
                >
                  Ankara diyetisyen
                </Link>
                , özel olarak kilo verme odağında ise{" "}
                <Link
                  href="/ankara-kilo-verme-diyetisyen"
                  className="text-primary font-medium hover:underline"
                >
                  Ankara kilo verme diyetisyen
                </Link>{" "}
                sayfalarımızı inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* KİMLER İÇİN UYGUN */}
        <section className="py-12 md:py-16 bg-white/60">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)]">
                Kimler İçin Uygun?
              </h2>
              <p className="text-muted-foreground mt-2">
                Farklı yaş, hedef ve yaşam tarzına uyumlu beslenme planları
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {targetAudience.map((t) => (
                <Card key={t.title} className="p-5 hover:shadow-md transition-shadow">
                  <t.icon className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
                  <h3 className="font-semibold text-[var(--brand-dark)] mb-1.5">
                    {t.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SÜREÇ */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)]">
                Süreç Nasıl İşliyor?
              </h2>
              <p className="text-muted-foreground mt-2">
                Randevudan ilk sonuçlara — adım adım rehberlik
              </p>
            </div>
            <div className="space-y-4">
              {processSteps.map((s) => (
                <div
                  key={s.step}
                  className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[var(--brand-primary)]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white flex items-center justify-center font-bold shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--brand-dark)] mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ULAŞIM */}
        <section className="py-12 md:py-16 bg-white/60">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)]">
                Ulaşım & Konum
              </h2>
              <p className="text-muted-foreground mt-2">
                Klinik Optimum AVM&apos;nin tam karşısında, ulaşım kolay
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-5">
                <Car className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
                <h3 className="font-semibold mb-1.5 text-[var(--brand-dark)]">
                  Araçla
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Optimum AVM otoparkı ve çevre yol kenarı park imkanı.
                  Eryaman içinden 5 dk, Etimesgut Merkez 10 dk, Sincan ve
                  Batıkent yönünden 15 dk.
                </p>
              </Card>
              <Card className="p-5">
                <Bus className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
                <h3 className="font-semibold mb-1.5 text-[var(--brand-dark)]">
                  Toplu Taşıma
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ankara M2 metro hattı Eryaman istasyonundan 5-7 dk yürüyüş.
                  EGO otobüs hatları yoğun olarak Eryaman Merkez ve Optimum
                  duraklarından geçer.
                </p>
              </Card>
              <Card className="p-5">
                <MapPin className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
                <h3 className="font-semibold mb-1.5 text-[var(--brand-dark)]">
                  Hizmet Verdiğimiz Semtler
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Eryaman, Etimesgut, Sincan, Batıkent, Yenimahalle ve
                  çevresinde yüz yüze; Türkiye genelinde online danışmanlık.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <LocalProofSection areaName="Eryaman" whatsappLink={whatsappLink} />

        {/* SSS */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)]">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-muted-foreground mt-2">
                Eryaman&apos;da diyetisyen sürecine başlamadan önce merak
                edilenler
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

        {/* CTA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="p-8 md:p-10 text-center bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-secondary)]/5 border-[var(--brand-primary)]/20">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)] mb-3">
                İlk Adımı Atın
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Ücretsiz ön görüşmeyle başlayın — durumunuzu, hedeflerinizi ve
                programın size uygunluğunu birlikte değerlendirelim.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-12 px-8 min-h-[44px]">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp&apos;tan Yaz
                  </Button>
                </a>
                <a href="tel:+905462650440">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 min-h-[44px]"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    0546 265 04 40
                  </Button>
                </a>
              </div>
            </Card>

            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/programlar"
                className="text-primary hover:underline font-medium"
              >
                Takip sistemini incele
              </Link>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <Link
                href="/hakkimda"
                className="text-primary hover:underline font-medium"
              >
                Diyetisyen hakkında
              </Link>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <Link
                href="/mobil-uygulamamiz"
                className="text-primary hover:underline font-medium"
              >
                Danışan uygulaması
              </Link>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <Link
                href="/iletisim"
                className="text-primary hover:underline font-medium"
              >
                İletişim
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
