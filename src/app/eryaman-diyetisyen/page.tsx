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
  TrendingUp,
} from "lucide-react";
import { LocalProofSection } from "@/components/local-seo/local-proof-section";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import {
  GOOGLE_MAPS_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";

// ─── METADATA ────────────────────────────────────────────────────────────────
// title: 36 karakter — Google sonuçlarında kesilmemesi için template suffix'i kullanılmaz
// description: 152 karakter — CTA ve mahalle bilgisi içeriyor
export const metadata: Metadata = {
  title: {
    absolute: "Eryaman Diyetisyen | Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
  },
  description:
    "Eryaman'da kişiye özel beslenme danışmanlığı: Ezgi Evgin, Atayıldız Plaza (Optimum AVM karşısı). Kilo, insülin direnci, hamilelik. Ücretsiz ön görüşme — 0546 265 04 40.",
  keywords: [
    "eryaman diyetisyen",
    "eryaman beslenme danışmanı",
    "eryaman kilo verme",
    "eryaman online diyet",
    "atayıldız plaza diyetisyen",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/eryaman-diyetisyen",
  },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/eryaman-diyetisyen",
    title: "Eryaman Beslenme ve Diyet Danışmanlığı | Ezgi Evgin · Atayıldız Plaza",
    description:
      "Eryaman Atayıldız Plaza'da (Optimum AVM karşısı) kişiye özel beslenme danışmanlığı. Yapracık, Göksu ve 1–5. Etap için ücretsiz ön görüşme.",
    images: [
      {
        url: "https://ezgievginaktas.com/images/instagram/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Eryaman beslenme danışmanlığı Ezgi Evgin — Atayıldız Plaza, Optimum AVM karşısı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eryaman Beslenme Danışmanlığı — Ezgi Evgin · Atayıldız Plaza",
    description:
      "Eryaman Optimum AVM karşısı, kişiye özel beslenme danışmanlığı. Ücretsiz ön görüşme ile başlayın.",
    images: ["https://ezgievginaktas.com/images/instagram/profile.jpg"],
  },
};

// ─── JSON-LD SCHEMA (@graph: LocalBusiness + NutritionService) ────────────────
const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ezgievginaktas.com/#nutrition-service",
      name: "Eryaman Kişiye Özel Beslenme Danışmanlığı",
      serviceType: "Nutrition Consulting",
      description:
        "Kilo yönetimi, insülin direnci, PCOS, hamilelik ve emzirme, çocuk ve sporcu beslenmesi alanlarında kişiye özel beslenme planlaması ve haftalık takip.",
      provider: {
        "@id": "https://ezgievginaktas.com",
      },
      areaServed: [
        { "@type": "Place", name: "Eryaman" },
      ],
      availableChannel: [
        {
          "@type": "ServiceChannel",
          serviceType: "Yüz yüze görüşme",
          availableLanguage: "Turkish",
          serviceLocation: {
            "@type": "Place",
            name: "Atayıldız Plaza, Eryaman",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Altay Mah. Orhan Bey Cad. Atayıldız Plaza No:1/70 Kat:8",
              addressLocality: "Etimesgut",
              addressRegion: "Ankara",
              postalCode: "06820",
              addressCountry: "TR",
            },
          },
        },
        {
          "@type": "ServiceChannel",
          serviceType: "Online görüşme",
          availableLanguage: "Turkish",
        },
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "TRY",
        description: "Ücretsiz ön görüşme ile başlayın. Paket ücretleri için WhatsApp üzerinden bilgi alın.",
      },
    },
    {
      "@type": "Person",
      "@id": "https://ezgievginaktas.com/#dietitian",
      name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
      alternateName: "Ezgi Evgin",
      jobTitle: "Diyetisyen",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Başkent Üniversitesi",
        department: "Beslenme ve Diyetetik",
      },
      worksFor: {
        "@id": "https://ezgievginaktas.com",
      },
      sameAs: [INSTAGRAM_PROFILE_URL],
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Eryaman'da kliniğiniz tam olarak nerede?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eryaman Altay Mahallesi Orhan Bey Caddesi, Atayıldız Plaza No:1/70 Kat:8, Optimum AVM'nin tam karşısında. 1. Etap, 5. Etap, Yapracık, Göksu ve Mustafa Kemal Mahallesi yönlerinden kolay ulaşım var.",
      },
    },
    {
      "@type": "Question",
      name: "Eryaman 1. Etap, 5. Etap veya Mustafa Kemal Mahallesi'nden ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eryaman 1. Etap'tan yaklaşık 5–8 dakika, 5. Etap'tan 8–12 dakika, Mustafa Kemal Mahallesi'nden ise 6–10 dakika araçla ulaşılır. Tüm bu noktalar Optimum AVM çevresindeki bağlantı yollarıyla klinik yeri olan Atayıldız Plaza'ya doğrudan bağlı.",
      },
    },
    {
      "@type": "Question",
      name: "Eryaman'daki diğer beslenme uzmanlarından farkınız ne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ezgi Evgin, 2016'dan bu yana 1000+ danışanla çalışmış, Başkent Üniversitesi mezunu bir diyetisyen. Hazır liste ya da şok diyet yerine yaşam tarzınıza ve mutfağınıza uygun, haftalık güncellenen kişisel planlar hazırlıyor. Görüşmeler arası sürekli iletişim (danışan portalı) ve uzun vadeli alışkanlık odağı en belirgin farklar.",
      },
    },
    {
      "@type": "Question",
      name: "Görüşme ücreti ne kadar, kaç seans gerekli?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seans ücretleri paket kapsamı ve görüşme sıklığına göre değiştiğinden güncel bilgi için WhatsApp üzerinden (0546 265 04 40) yazmanızı öneririz. Kaç seans gerektiği hedefinize ve başlangıç durumunuza göre farklılaşır; ortalama 3–6 aylık süreçlerde belirgin değişimler görülür. İlk ön görüşme tamamen ücretsiz.",
      },
    },
    {
      "@type": "Question",
      name: "Sigorta kapsamında mı, ödeme yöntemleri neler?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Klinik özel muayene kapsamında hizmet vermekte olup SGK veya özel sigorta geri ödemesi mevcut değil. Nakit, kredi/banka kartı ve havale/EFT ile ödeme kabul ediliyor.",
      },
    },
    {
      "@type": "Question",
      name: "Eryaman dışında oturanlar için online görüşme yeterli mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eryaman dışından gelen danışanlar yüz yüze görüşmeyi tercih edebilir; online görüşme ise aynı plan kalitesi ve takip süreciyle sunulur. Ulaşım zor olduğunda süreç sekteye uğramadan online devam edebilir.",
      },
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Eryaman bölgesinde diyetisyen randevusu almak istiyorum.",
  "eryaman-diyetisyen"
);

const features = [
  {
    icon: MapPin,
    title: "Optimum AVM Karşısı, Kolay Ulaşım",
    description:
      "Altay Mahallesi Orhan Bey Caddesi Atayıldız Plaza. Yapracık, Göksu ve tüm etaplardan hem araçla hem toplu taşımayla rahat erişim.",
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

const danisanProfili = [
  {
    icon: Apple,
    title: "Kilo Kontrolü",
    pct: 40,
    color: "bg-[var(--brand-primary)]",
    description:
      "Sürdürülebilir kilo kaybı — aç kalmadan, yasak listesiz, mutfağınızdaki malzemelerle.",
    link: "/ankara-kilo-verme-diyetisyen",
    linkLabel: "Kilo verme programı",
  },
  {
    icon: Heart,
    title: "İnsülin Direnci & Metabolik",
    pct: 25,
    color: "bg-rose-400",
    description:
      "Doktor tanısı sonrası glisemik yük, öğün sıklığı ve kilo yönetimi odaklı plan.",
    link: "/insulin-direnci-diyeti-ankara",
    linkLabel: "İnsülin direnci beslenme",
  },
  {
    icon: Baby,
    title: "Hamilelik & Emzirme",
    pct: 15,
    color: "bg-pink-400",
    description:
      "Trimester bazlı besin gereksinimleri, sağlıklı kilo alımı ve emzirme dönemi.",
    link: "/hamilelik-beslenmesi-ankara",
    linkLabel: "Hamilelik beslenmesi",
  },
  {
    icon: Users,
    title: "Çocuk & Ergen Beslenmesi",
    pct: 10,
    color: "bg-amber-400",
    description:
      "Aile odaklı, baskısız yaklaşım — seçici yeme, büyüme desteği, sağlıklı alışkanlık.",
    link: "/cocuk-beslenmesi-diyetisyen",
    linkLabel: "Çocuk beslenmesi",
  },
  {
    icon: Dumbbell,
    title: "Sporcu Beslenmesi",
    pct: 10,
    color: "bg-cyan-500",
    description:
      "Antrenman yoğunluğuna ve hedefe (performans, kas, yağ kaybı) göre makro planlama.",
    link: "/sporcu-beslenmesi-ankara",
    linkLabel: "Sporcu beslenmesi",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Ücretsiz Ön Görüşme",
    description:
      "WhatsApp üzerinden kısa bir sohbet — durumunuzu, hedefinizi ve programın size uygun olup olmadığını birlikte değerlendiririz. Herhangi bir ücret alınmaz.",
  },
  {
    step: "2",
    title: "İlk Detaylı Görüşme (45–60 dk)",
    description:
      "Ofiste veya online; sağlık geçmişi, tahlil sonuçları, yaşam tarzı, çalışma temposu, sevdiğiniz ve sevmediğiniz besinler. Vücut analizi ve ölçümler yapılır.",
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



// SSS — mevcut + 5 yeni soru
const faqs = [
  {
    q: "Eryaman'da kliniğiniz tam olarak nerede?",
    a: "Eryaman Altay Mahallesi Orhan Bey Caddesi, Atayıldız Plaza No:1/70 Kat:8, Optimum AVM'nin tam karşısında. 1. Etap, 5. Etap, Yapracık, Göksu ve Mustafa Kemal Mahallesi yönlerinden kolay ulaşım var.",
  },
  {
    q: "Eryaman 1. Etap, 5. Etap veya Mustafa Kemal Mahallesi'nden ne kadar sürer?",
    a: "Eryaman 1. Etap'tan yaklaşık 5–8 dakika, 5. Etap'tan 8–12 dakika, Mustafa Kemal Mahallesi'nden ise 6–10 dakika araçla ulaşılır. Tüm bu noktalar Optimum AVM çevresindeki bağlantı yollarıyla Atayıldız Plaza'ya doğrudan bağlı. Metro ile 5–7 dakika yürüyüş mesafesindeyiz.",
  },
  {
    q: "Eryaman'daki diğer beslenme uzmanlarından farkınız ne?",
    a: "Dyt. Ezgi Evgin, 2016'dan bu yana 1000+ danışanla çalışmış, Başkent Üniversitesi Beslenme ve Diyetetik bölümü mezunu. Hazır liste ya da şok diyet yerine yaşam tarzınıza ve mutfağınıza uygun, haftalık güncellenen kişisel planlar hazırlanıyor. Görüşmeler arası sürekli iletişim (danışan portalı) ve uzun vadeli alışkanlık odağı en belirgin farklar.",
  },
  {
    q: "Görüşme ücreti ne kadar, kaç seans gerekli?",
    a: "Seans ücretleri paket kapsamı ve görüşme sıklığına göre değiştiğinden güncel bilgi için WhatsApp üzerinden (0546 265 04 40) yazmanızı öneririz. Kaç seans gerektiği hedefinize ve başlangıç durumunuza göre farklılaşır; ortalama 3–6 aylık süreçlerde belirgin değişimler görülür. İlk ön görüşme tamamen ücretsiz.",
  },
  {
    q: "Sigorta kapsamında mı, ödeme yöntemleri neler?",
    a: "Klinik özel muayene kapsamında hizmet vermekte olup SGK veya özel sigorta geri ödemesi mevcut değil. Nakit, kredi/banka kartı ve havale/EFT ile ödeme kabul ediliyor.",
  },
  {
    q: "Eryaman dışında oturanlar için online görüşme yeterli mi?",
    a: "Eryaman dışından gelen danışanlar yüz yüze görüşmeyi tercih edebilir; online görüşme ise aynı plan kalitesi ve takip süreciyle sunulur. Ulaşım zorsa süreç sekteye uğramadan online devam edebilir.",
  },
  {
    q: "Ücretsiz ön görüşme nasıl oluyor?",
    a: "WhatsApp üzerinden kısa bir mesaj yeterli. Durumunuzu, hedefinizi ve varsa sağlık durumunuzu kısaca paylaşırsınız. Randevu öncesinde programın size uygun olup olmadığını birlikte değerlendiririz — herhangi bir ücret alınmaz.",
  },
  {
    q: "İlk görüşme ne kadar sürer ve nasıl ilerler?",
    a: "İlk görüşme genelde 45–60 dakika sürer. Sağlık geçmişiniz, tahlil sonuçlarınız, hedefleriniz, yaşam tarzınız ve beslenme alışkanlıklarınız detaylı konuşulur. Vücut analizi ve ölçümler yapılır, ardından kişiye özel plan hazırlık süreci başlar.",
  },
  {
    q: "Yüz yüze gelemiyorum, online görüşme mümkün mü?",
    a: "Evet. Eryaman dışından gelenler ya da yoğun temposu olanlar için online görüşme aynı kalite standardında sunulur. Görüntülü görüşme + danışan uygulaması üzerinden plan, mesajlaşma ve takip yapılır.",
  },
  {
    q: "Aç kalmadan kilo vermek gerçekten mümkün mü?",
    a: "Evet. Yaklaşımımız 'yasaklı liste' veya 'aşırı kısıtlı menü' değil. Doğru besin seçimi, öğün düzeni ve porsiyon dengesiyle tok kalarak hedefe ulaşılır. Bu yöntem hem kalıcı hem sürdürülebilir.",
  },
  {
    q: "Çalışma saatleriniz nedir?",
    a: "Salı, Çarşamba, Perşembe, Cuma günleri 09:00–19:00, Cumartesi günleri 09:00–16:00. Pazar ve Pazartesi kapalı. Randevu için WhatsApp: 0546 265 04 40.",
  },
  {
    q: "Eryaman'a metro veya otobüsle nasıl gelirim?",
    a: "Ankara M2 metro hattı Eryaman istasyonundan 5–7 dakika yürüyüş. EGO otobüsleri Eryaman Merkez ve Optimum duraklarından yoğun geçer. AVM otoparkı ve çevre yol parkı da mevcut.",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function EryamanDiyetisyenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/40 to-cyan-50/40">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", item: "https://ezgievginaktas.com/" },
          {
            name: "Eryaman Diyetisyen",
            item: "https://ezgievginaktas.com/eryaman-diyetisyen",
          },
        ]}
      />

      <article>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs md:text-sm font-medium text-[var(--brand-dark)]">
                <MapPin className="w-3.5 h-3.5" />
                Eryaman Altay Mah. · Optimum AVM Karşısı · Atayıldız Plaza
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--brand-dark)]">
                Eryaman Beslenme Danışmanlığı:{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  Yanı Başınızda Uzman Destek
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Eryaman&apos;da beslenme danışmanı arıyorsanız doğru adrestesiniz. 1.
                Etap, 5. Etap, Yapracık, Göksu ve Mustafa Kemal Mahallesi&apos;nden kolayca ulaşılan{" "}
                <strong>Atayıldız Plaza kliniğimizde</strong> kilo yönetimi,
                insülin direnci, hamilelik ve çocuk beslenmesi — Ezgi Evgin Beslenme ve Diyet Danışmanlığı ile yüz yüze veya online. Ücretsiz ön görüşme ile
                başlayın.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-12 px-8 min-h-[44px]">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Ücretsiz Ön Görüşme — WhatsApp
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

            {/* Klinik Bilgi Kartları */}
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

        {/* ── ÖZELLİKLER ───────────────────────────────────────────────────── */}
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

        {/* ── NEDEN FARK YARATIR ───────────────────────────────────────────── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-4">
                Eryaman&apos;da beslenme danışmanlığı desteği neden fark yaratır?
              </h2>
              <p>
                Eryaman, Ankara&apos;nın en hızlı büyüyen ilçelerinden biri. 1.
                Etap&apos;tan 5. Etap&apos;a, Yapracık&apos;tan Göksu&apos;ya,
                Mustafa Kemal Mahallesi&apos;nden Mevlana Bulvarı güzergahına
                uzanan geniş bölgede yaşayan binlerce aile sağlıklı beslenme
                konusunda yol gösterici bir uzmana ihtiyaç duyuyor. Semt
                dışındaki uzak bir ofise gitmek ise yoğun bir günün üstüne
                ekstra yük demek.
              </p>
              <p>
                Eryaman Altay Mahallesi&apos;nde,{" "}
                <strong>Optimum AVM&apos;nin tam karşısındaki</strong> Atayıldız
                Plaza&apos;da konumlanan kliniğimiz bu sorunu ortadan kaldırır.
                Eryaman içinden kısa sürede ulaşılır. M2 metro
                Eryaman istasyonundan yürüme mesafesinde.
              </p>
              <p>
                Başkent Üniversitesi Beslenme ve Diyetetik mezunu{" "}
                <Link
                  href="/hakkimda"
                  className="text-primary font-medium hover:underline"
                >
                  Dyt. Ezgi Evgin
                </Link>
                , 2016&apos;dan bu yana kendi merkezinde{" "}
                <strong>yasaksız ve sürdürülebilir</strong> beslenme
                yaklaşımıyla binden fazla danışana rehberlik etmiştir. Hızlı
                diyet, şok program veya katı kısıtlama değil; yaşam tarzınıza
                uyumlu, mutfağınızdaki malzemelerle yürüyen, haftalık
                güncellenen bir süreç.
              </p>
              <p>
                Eryaman&apos;da kilo verme konusundaki en sık hata: birkaç
                haftalık şok diyetlerle çabuk sonuç aramak. Bu yaklaşım kısa
                vadede işe yarasa da kaybedilen kilonun büyük çoğunluğu 3–6 ay
                içinde geri döner. Haftalık görüşmelerle desteklenen, kişiye
                özel bir beslenme planı hem kalıcı kilo kaybı sağlar hem de
                insülin direnci, PKOS, hamilelik ve sporcu beslenmesi gibi özel
                durumlarda çok daha güvenli ilerler.
              </p>
              <p>
                Eryaman dışından gelenler veya yoğun temposu olanlar için{" "}
                <Link
                  href="/online-diyetisyen"
                  className="text-primary font-medium hover:underline"
                >
                  online diyet
                </Link>{" "}
                seçeneği de aynı kalite standardında. Genel Ankara aramaları
                için{" "}
                <Link
                  href="/"
                  className="text-primary font-medium hover:underline"
                >
                  Ankara diyetisyen
                </Link>
                , kilo verme odaklı ayrıntı için{" "}
                <Link
                  href="/ankara-kilo-verme-diyetisyen"
                  className="text-primary font-medium hover:underline"
                >
                  Ankara kilo verme diyetisyen
                </Link>{" "}
                sayfalarımıza bakabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* ── ERYAMAN'DA EN ÇOK KARŞILAŞILAN BESLENME SORUNLARI ───────────── */}
        <section className="py-12 md:py-16 bg-white/60">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs font-medium text-[var(--brand-dark)] mb-4">
                <TrendingUp className="w-3.5 h-3.5 text-[var(--brand-primary)]" />
                Danışan profili — Eryaman kliniği
              </div>
              <h2 className="text-3xl font-bold text-[var(--brand-dark)]">
                Eryaman&apos;da En Çok Karşılaşılan Beslenme Sorunları
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Kliniğimize başvuran Eryaman ve çevresi danışanlarının hedef
                dağılımı — her bir grupta kişiye özel, farklı bir yaklaşım
                uygulanır.
              </p>
            </div>

            <div className="space-y-4">
              {danisanProfili.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[var(--brand-primary)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="font-semibold text-[var(--brand-dark)]">
                          {item.title}
                        </h3>
                        <span className="text-sm font-bold text-[var(--brand-primary)] shrink-0 ml-2">
                          %{item.pct}
                        </span>
                      </div>
                      {/* progress bar */}
                      <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                        <div
                          className={`${item.color} h-2 rounded-full`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}{" "}
                        <Link
                          href={item.link}
                          className="text-primary hover:underline font-medium whitespace-nowrap"
                        >
                          {item.linkLabel} →
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground mt-6">
              Yüzdeler, kliniğe başvuran danışanların genel hedef dağılımını
              yansıtmakta olup her danışanın profili kendi özel koşullarına
              göre değerlendirilir.
            </p>
          </div>
        </section>

        {/* ── SÜREÇ ────────────────────────────────────────────────────────── */}
        <section className="py-12 md:py-16 bg-white/60">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)]">
                Süreç Nasıl İşliyor?
              </h2>
              <p className="text-muted-foreground mt-2">
                Ücretsiz ön görüşmeden ilk sonuçlara — adım adım rehberlik
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


        {/* ── ULAŞIM & GOOGLE MAPS ─────────────────────────────────────────── */}
        <section className="py-12 md:py-16 bg-white/60">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[var(--brand-dark)]">
                Ulaşım & Konum
              </h2>
              <p className="text-muted-foreground mt-2">
                Klinik Optimum AVM&apos;nin tam karşısında — araç, metro veya
                otobüsle kolay ulaşım
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="p-5">
                <Car className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
                <h3 className="font-semibold mb-1.5 text-[var(--brand-dark)]">
                  Araçla
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Optimum AVM otoparkı ve çevre yol parkı. 1. Etap ve 5.
                  Etap yönünden kısa sürede ulaşım.
                </p>
              </Card>
              <Card className="p-5">
                <Bus className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
                <h3 className="font-semibold mb-1.5 text-[var(--brand-dark)]">
                  Toplu Taşıma
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  M2 metro Eryaman istasyonundan 5–7 dk yürüyüş. EGO otobüsleri
                  Eryaman Merkez ve Optimum duraklarından yoğun geçer.
                </p>
              </Card>
              <Card className="p-5">
                <MapPin className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
                <h3 className="font-semibold mb-1.5 text-[var(--brand-dark)]">
                  Hizmet Bölgeleri
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Eryaman (1–5. Etap, Yapracık, Göksu, Altay Mah.) ve Türkiye
                  geneli online.
                </p>
              </Card>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              {/*
               * Görsel SEO önerisi:
               * Sayfaya eklenmesi gereken görseller için alt text önerileri:
               * 1. Klinik dış fotoğrafı:
               *    alt="Eryaman beslenme danışmanlığı Ezgi Evgin kliniği — Atayıldız Plaza, Optimum AVM karşısı"
               * 2. Diyetisyen profil fotoğrafı:
               *    alt="Diyetisyen Ezgi Evgin, Eryaman Atayıldız Plaza kliniğinde danışmanlık seansı"
               * 3. Konsültasyon odası:
               *    alt="Eryaman beslenme danışmanlığı — Atayıldız Plaza klinik görüşme odası"
               * 4. Danışan portalı ekranı:
               *    alt="Eryaman beslenme uzmanı takip uygulaması — Ezgi Evgin danışan portalı"
               * 5. Optimum AVM ve klinik konumu harita görseli:
               *    alt="Eryaman beslenme danışmanlığı klinik konumu — Optimum AVM karşısı, Altay Mahallesi haritası"
               */}
              <iframe
                src="https://maps.google.com/maps?q=39.9669753,32.6358095&hl=tr&z=16&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eryaman Diyetisyen Ezgi Evgin — Atayıldız Plaza, Optimum AVM karşısı konumu"
                aria-label="Google Haritalar: Diyetisyen Ezgi Evgin, Eryaman Atayıldız Plaza konumu"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">
              Altay Mah. Orhan Bey Cad. Atayıldız Plaza No:1/70 Kat:8 —
              Optimum AVM karşısı ·{" "}
              <a
                href={GOOGLE_MAPS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Google Haritalar&apos;da Aç
              </a>
            </p>
          </div>
        </section>

        <LocalProofSection areaName="Eryaman" whatsappLink={whatsappLink} />

        {/* ── SSS ──────────────────────────────────────────────────────────── */}
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

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="p-8 md:p-10 text-center bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-secondary)]/5 border-[var(--brand-primary)]/20">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)] mb-3">
                Eryaman&apos;da Diyetisyen Randevusu Alın
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Ücretsiz ön görüşmeyle başlayın — durumunuzu, hedeflerinizi ve
                programın size uygunluğunu birlikte değerlendirelim. Hiçbir
                taahhüt olmadan soru sorabilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-12 px-8 min-h-[44px]">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Ücretsiz Ön Görüşme — WhatsApp
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
                href="/online-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Online takip sistemini incele
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
