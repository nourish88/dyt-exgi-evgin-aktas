import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  Heart,
  Target,
  Globe2,
  Quote,
} from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { AboutGallery } from "@/components/about/about-gallery";
import {
  DOKTORTAKVIMI_PROFILE_URL,
  GOOGLE_MAPS_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";

export const metadata: Metadata = {
  title: {
    absolute:
      "Diyetisyen Ezgi Evgin Aktaş — Hakkımda, Eğitim ve Uzmanlık Alanları",
  },
  description:
    "Diyetisyen Ezgi Evgin Aktaş kimdir? Başkent Üniversitesi Beslenme ve Diyetetik mezunu; 2016'dan beri Ankara Eryaman'da yüz yüze ve online beslenme danışmanlığı.",
  keywords: [
    "ezgi evgin",
    "ezgi evgin aktaş",
    "dyt ezgi evgin",
    "diyetisyen ezgi evgin",
    "diyetisyen ezgi evgin aktaş",
    "ankara diyetisyen hakkımda",
    "eryaman diyetisyen",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/hakkimda",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: "https://ezgievginaktas.com/hakkimda",
    title: "Diyetisyen Ezgi Evgin Aktaş — Hakkımda",
    description:
      "Başkent Üniversitesi Beslenme ve Diyetetik mezunu, Ankara Eryaman ve online beslenme danışmanlığı — yasaksız, kişiye özel, sürdürülebilir.",
    firstName: "Ezgi",
    lastName: "Evgin Aktaş",
    username: "dyt_ezgievgin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyetisyen Ezgi Evgin Aktaş — Hakkımda",
    description:
      "Ankara Eryaman ve online beslenme danışmanlığı — yasaksız, kişiye özel, sürdürülebilir.",
  },
};

// Kişi/marka konsolidasyonu: "ezgi evgin", "dyt ezgi evgin", "diyetisyen
// ezgi evgin" gibi marka aramaları bu sayfaya çözümlensin diye Person schema
// alternateName ile zenginleştirildi (eski /ezgi-evgin-diyetisyen buraya 301).
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ezgi Evgin Aktaş",
  alternateName: [
    "Ezgi Evgin",
    "Dyt. Ezgi Evgin",
    "Dyt Ezgi Evgin",
    "Diyetisyen Ezgi Evgin",
    "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
  ],
  givenName: "Ezgi",
  familyName: "Evgin Aktaş",
  jobTitle: "Diyetisyen · Beslenme ve Diyetetik Uzmanı",
  description:
    "Dyt. Ezgi Evgin: Ankara'da yüz yüze ve online beslenme danışmanlığı. Kalıcı kilo verme, sağlıklı yaşam ve kişiye özel diyet programları.",
  url: "https://ezgievginaktas.com/hakkimda",
  image: "https://ezgievginaktas.com/images/instagram/profile.jpg",
  telephone: "+905462650440",
  email: "ezgievgin_dytsyn@hotmail.com",
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    url: "https://ezgievginaktas.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Altay Mah. Orhan Bey Cad. Ata Yıldız Plaza No:1/70 Kat:8",
      addressLocality: "Etimesgut",
      addressRegion: "Ankara",
      postalCode: "06820",
      addressCountry: "TR",
    },
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Başkent Üniversitesi",
    department: "Beslenme ve Diyetetik",
    sameAs: "https://www.baskent.edu.tr/",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Lisans Diploması",
    name: "Beslenme ve Diyetetik Lisans",
    recognizedBy: {
      "@type": "Organization",
      name: "Başkent Üniversitesi",
    },
  },
  knowsAbout: [
    "Beslenme ve Diyetetik",
    "Kilo Yönetimi",
    "İnsülin Direnci Beslenmesi",
    "PCOS ve Beslenme",
    "Hamilelik ve Emzirme Dönemi Beslenmesi",
    "Çocuk ve Ergen Beslenmesi",
    "Sporcu Beslenmesi",
    "Online Beslenme Danışmanlığı",
  ],
  knowsLanguage: ["tr", "en"],
  areaServed: [
    { "@type": "City", name: "Ankara" },
    { "@type": "Place", name: "Eryaman" },
    { "@type": "Place", name: "Etimesgut" },
    { "@type": "Country", name: "Türkiye" },
  ],
  sameAs: [
    INSTAGRAM_PROFILE_URL,
    DOKTORTAKVIMI_PROFILE_URL,
    "https://diyetisyenezgievgin.com",
    GOOGLE_MAPS_PROFILE_URL,
  ],
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Diyetisyen Ezgi Evgin Aktaş — Hakkımda",
  url: "https://ezgievginaktas.com/hakkimda",
  mainEntity: personJsonLd,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Diyetisyen Ezgi Evgin Aktaş kimdir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ezgi Evgin, Başkent Üniversitesi Beslenme ve Diyetetik bölümü mezunu. 2016'dan bu yana Ankara Eryaman–Etimesgut'taki kendi merkezinde yüz yüze ve Türkiye genelinde online olarak kişiye özel beslenme danışmanlığı vermektedir.",
      },
    },
    {
      "@type": "Question",
      name: "Dyt. Ezgi Evgin'in çalışma yaklaşımı nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yaklaşım yasaksız ve sürdürülebilir beslenme üzerine kuruludur: hazır liste yerine yaşam tarzına, iş temposuna ve besin tercihine göre kişiye özel plan, haftalık birebir görüşme ve danışan portalı üzerinden günlük destek.",
      },
    },
    {
      "@type": "Question",
      name: "Ezgi Evgin ile online görüşme nasıl yapılır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Görüntülü görüşme yazılım üzerinden gerçekleştirilir; öncesinde sağlık geçmişi ve hedef formu doldurulur. İlk görüşme 45–60 dk sürer; sonrasında plan danışan portalına yüklenir ve haftalık takip mesajlaşma + görüşmelerle yapılır.",
      },
    },
    {
      "@type": "Question",
      name: "Ezgi Evgin'in ofisi nerede?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ankara Eryaman Altay Mahallesi Orhan Bey Caddesi Ata Yıldız Plaza No:1/70 Kat:8 — Optimum AVM'nin tam karşısında, Etimesgut/Ankara. Salı–Cuma 09:00–19:00, Cumartesi 09:00-16:00 arası açıktır.",
      },
    },
    {
      "@type": "Question",
      name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı ile nasıl iletişime geçilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp üzerinden 0546 265 04 40 numarasına, web sitesindeki randevu sayfasından veya iletişim formundan ulaşabilirsiniz. Hızlı yanıt için WhatsApp önerilir.",
      },
    },
  ],
};

const education = [
  {
    year: "Lisans Eğitimi",
    title: "Beslenme ve Diyetetik",
    institution: "Başkent Üniversitesi",
    description:
      "Obez olan ve olmayan adölesanların beslenme alışkanlıklarının karşılaştırılması konulu tez ile tamamlandı.",
  },
  {
    year: "Yüksek Lisans",
    title: "Beslenme ve Diyetetik",
    institution: "Başkent Üniversitesi",
    description: "Lisansüstü akademik uzmanlaşma süreci devam etmektedir.",
  },
];

const internships = [
  "Etimesgut Toplum Sağlığı Merkezi",
  "Ankara Tıp Fakültesi Çocuk Hastanesi",
  "Ankara Numune Eğitim ve Araştırma Hastanesi",
  "Gülhane Tıp Akademisi",
];

const careerJourney = [
  {
    period: "İlk Klinik Deneyim",
    place: "Özel Çankaya Hastanesi",
    detail:
      "Klinik, poliklinik ve kurum diyetisyenliği alanlarında; kilo yönetimi ve hastalıklarda diyet tedavisi konularında danışan takibi.",
  },
  {
    period: "İkinci Kurumsal Adım",
    place: "Özel Koru Hastanesi",
    detail:
      "Kilo yönetimi, gebe-emziklilik dönemi beslenmesi, çocuk ve ergenlerde kilo yönetimi ve hastalıklarda beslenme tedavisi.",
  },
  {
    period: "2016 Eylül - Günümüz",
    place: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    detail:
      "Kurucusu olduğu merkezde yasaksız, sürdürülebilir ve kişiye özel beslenme yaklaşımıyla danışanlarına hizmet vermektedir.",
  },
];

const certificates = [
  "Sporcu Beslenmesi Sertifikası",
  "Diyabet Danışmanlığı",
  "Obezite ve Kilo Yönetimi",
  "Çocuk Beslenmesi Uzmanlığı",
  "Fonksiyonel Tıp Eğitimi",
  "Online Danışmanlık Sertifikası",
];

const expertise = [
  "Fonksiyonel Tıp Diyetisyeni",
  "Şişmanlık (Obezite)",
  "Diyabet (Şeker Hastalığı)",
  "Kilo Problemi",
  "Aşırı Kilo Alımı",
  "Hiperlipidemi",
  "Kilo Alma Diyetleri",
  "Çocuk ve Ergenlerde Kilo Kontrolü",
  "Tip 1 Diyabet",
  "Yeni Doğan Metabolik Hastalık",
  "Sağlıklı Beslenme",
  "Troid Hastalıklarında Beslenme",
  "Anoreksiya ve Bulimia Hastalarında Beslenme",
  "Kalp Damar Hastalıkları ve Beslenme",
  "Zayıflama Programı",
  "Kurumsal Beslenme Danışmanlığı",
  "Metabolik Hastalıklarda Beslenme",
  "Sporcu Beslenmesi",
  "Çocuk Beslenmesi",
  "İnsülin Direnci ve Metabolik Sendrom",
  "Gelişme Geriliği",
  "Gut Hastalığı ve Beslenme",
  "Gebelik ve Beslenme",
  "Non-Çölyak Glüten Hassasiyeti",
  "Yaşam Koçluğu",
  "Tip 2 Diyabet",
  "Obezite",
  "İrritabl Bağırsak Sendromu",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero: metin server-render, galeri client adacığı */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-pink-50/90 via-white to-cyan-50/70">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-wide">
              Diyetisyen · Beslenme ve Diyetetik Uzmanı
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--brand-dark)]">
              Merhaba, Ben{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Diyetisyen Ezgi Evgin Aktaş
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Arama motorunda{" "}
              <strong className="text-foreground font-semibold">Ezgi Evgin</strong>,{" "}
              <strong className="text-foreground font-semibold">
                Dyt. Ezgi Evgin
              </strong>{" "}
              veya{" "}
              <strong className="text-foreground font-semibold">
                Diyetisyen Ezgi Evgin
              </strong>{" "}
              yazdığınızda aynı uzmana ulaşıyorsunuz.{" "}
              <Link
                href="/fonksiyonel-tip-diyetisyeni-ankara"
                className="text-[var(--brand-primary)] hover:underline font-semibold"
              >
                Fonksiyonel tıp diyetisyeni
              </Link>{" "}
              olarak Ankara Eryaman merkezli kliniğimde ve{" "}
              <Link
                href="/online-diyetisyen"
                className="text-[var(--brand-primary)] hover:underline font-semibold"
              >
                online görüşmelerde
              </Link>
              ; bütüncül yaklaşım, kilo verme, sürdürülebilir beslenme ve
              metabolik hastalıklarda yaşam tarzı değişikliği odaklı danışmanlık
              veriyorum.
            </p>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Yaklaşımım, kısa süreli kısıtlamalardan çok uzun vadeli alışkanlık
              dönüşümünü hedefleyen; bilimsel, uygulanabilir ve danışan odaklı
              bir beslenme planlamasıdır.
            </p>
          </div>

          <AboutGallery />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-pink-50 to-white border-2 border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Misyonum</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Sağlıklı beslenmeyi sürdürülebilir hale getirip, kişiye özel
                planlarla danışanlarımın günlük yaşam içinde zorlanmadan
                ilerleyebildiği bir sistem kurmak.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-white border-2 border-secondary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-secondary)] to-[var(--brand-accent)] flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Vizyonum</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Eryaman ofisinde yüz yüze, Türkiye ve yurt dışından
                danışanlarla online olarak bilimsel ve uygulanabilir beslenme
                danışmanlığı sunmak.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Biyografi */}
      <section className="py-14 bg-gradient-to-br from-pink-50/30 to-white">
        <div className="container mx-auto px-4 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)]">
            Eğitim, mesleki yolculuk ve neden bu işteyim?
          </h2>
          <p>
            Beslenme ve Diyetetik lisans eğitimimi{" "}
            <strong className="text-foreground">Başkent Üniversitesi</strong>
            &apos;nde tamamladım. Üniversite yıllarımda hastane stajları ve
            klinik beslenme rotasyonları sırasında en çok dikkatimi çeken şey,
            &ldquo;diyet&rdquo; kelimesinin hâlâ pek çok insan için kısa vadeli,
            kısıtlayıcı ve cezalandırıcı bir kavram olmasıydı. Oysa beslenme,
            ömür boyu süren bir ilişki — bunu zorla değil, kişinin yaşamına
            dokunan bir yöntemle kurmak mümkün.
          </p>
          <p>
            2016&apos;da kendi merkezimi Ankara&apos;da kurduğumdan bu yana, bu
            yaklaşımla bin&apos;den fazla danışana rehberlik ettim. Kilo
            yönetimi, insülin direnci, PCOS, hamilelik ve çocuk beslenmesi gibi
            geniş bir yelpazede çalışıyor olmamın temel sebebi şu: insanlar tek
            konuda gelmez. Bir kişi insülin direnciyle gelir, üç ay sonra
            hamilelik planlaması ekler; başka biri sporcu olarak başlar, sezonu
            kapatınca farklı bir öğün düzenine geçer. Süreç değişir; danışmanlık
            da bununla birlikte değişmelidir. Eryaman'daki yüz yüze görüşmelerimin yanı sıra, yurtiçi ve yurtdışından katılan yüzlerce danışanıma <Link href="/online-diyetisyen" className="text-[var(--brand-primary)] hover:underline font-semibold">online diyetisyen</Link> olarak da aynı titizlikle hizmet veriyorum.
          </p>
          <p>
            Mesleki yaklaşımım iki sütuna dayanır:{" "}
            <strong className="text-foreground">bilimsel referans</strong> ve{" "}
            <strong className="text-foreground">kişisel uyum</strong>. Plan,
            güncel klinik beslenme literatürüne dayanır ama soğuk bir Excel
            tablosu olarak kalmaz; mutfağınıza, iş temponuza, kültürünüze ve
            psikolojinize göre yorumlanır.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Eğitim{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  Geçmişim
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2">{item.year}</Badge>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-primary font-medium mb-1">
                        {item.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internship + Career */}
      <section className="py-16 bg-gradient-to-br from-cyan-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Mesleki{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  Yolculuğum
                </span>
              </h2>
              <p className="text-muted-foreground">
                Eğitim, staj ve hastane deneyimlerinden kliniğime uzanan süreç
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <Card className="p-6 border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Staj Deneyimleri</h3>
                <div className="space-y-3">
                  {internships.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[var(--brand-primary)]" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Lisans Tez Konusu</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Obez olan ve olmayan adölesanların beslenme alışkanlıklarının
                  karşılaştırılması.
                </p>
              </Card>
            </div>

            {/* Timeline-style career */}
            <div className="relative space-y-4 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[var(--brand-primary)]/40 before:via-[var(--brand-secondary)]/40 before:to-[var(--brand-accent)]/40">
              {careerJourney.map((item) => (
                <div key={item.place} className="relative pl-10">
                  <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] flex items-center justify-center ring-4 ring-white">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <Card className="p-6 border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                    <Badge className="mb-3">{item.period}</Badge>
                    <h3 className="text-lg font-bold mb-2">{item.place}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.detail}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & Expertise */}
      <section className="py-16 bg-gradient-to-br from-cyan-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sertifikalar & Uzmanlık{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  Alanlarım
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Certificates */}
              <Card className="p-6 border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Sertifikalar
                </h3>
                <div className="flex flex-wrap gap-2">
                  {certificates.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs font-medium text-[var(--brand-dark)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]" />
                      {cert}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Expertise */}
              <Card className="p-6 border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                  <Target className="w-5 h-5 text-secondary" />
                  Uzmanlık ve İlgi Alanları
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-xs font-medium text-[var(--brand-dark)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)]" />
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Online profiller */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="p-5 flex gap-4 items-start">
            <Globe2 className="w-7 h-7 text-[var(--brand-primary)] shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-[var(--brand-dark)]">
                Online Profiller
              </h2>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Instagram
                </a>
                {" · "}
                <a
                  href={DOKTORTAKVIMI_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  DoktorTakvimi
                </a>
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Felsefe / alıntı */}
      <section className="py-12 bg-gradient-to-br from-pink-50/40 to-cyan-50/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="p-8 md:p-10 bg-white relative">
            <Quote className="w-10 h-10 text-[var(--brand-primary)]/30 absolute top-5 left-5" />
            <div className="pl-12 md:pl-14">
              <p className="text-lg md:text-xl text-[var(--brand-dark)] leading-relaxed">
                &ldquo;İyi bir beslenme planı, danışana &lsquo;ne kadar
                zayıfladın?&rsquo; değil, &lsquo;ne kadar iyi
                hissediyorsun?&rsquo; sorusuyla başlar. Kilo değişimi bir
                sonuçtur; süreç, enerji, uyku, sindirim ve psikolojik
                hafiflemeyle birlikte ölçülür.&rdquo;
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                — Dyt. Ezgi Evgin Aktaş
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* SSS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)] text-center mb-8">
            Sıkça sorulan sorular
          </h2>
          <div className="space-y-3">
            {faqJsonLd.mainEntity.map((q, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl border border-gray-100 hover:border-[var(--brand-primary)]/30 transition-colors"
              >
                <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none">
                  <span className="font-semibold text-[var(--brand-dark)]">
                    {q.name}
                  </span>
                  <span className="text-[var(--brand-primary)] text-xl shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {q.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-accent)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sizin İçin Buradayım!
            </h2>
            <p className="text-lg text-white/90">
              Sağlıklı yaşam yolculuğunuzda size rehberlik etmek için
              sabırsızlanıyorum. Hemen iletişime geçin ve birlikte başlayalım!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={buildWhatsAppApiUrl(
                  "Merhaba, sizinle tanışmak ve bilgi almak istiyorum.",
                  "hakkimda",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 bg-white text-primary hover:bg-white/90 rounded-lg font-semibold transition-colors"
              >
                WhatsApp&apos;tan İletişime Geç
              </a>
              <Link
                href="/online-diyetisyen"
                className="inline-flex items-center justify-center h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 transition-colors"
              >
                Online Diyeti İncele
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm pt-6 text-white/90">
              <Link href="/eryaman-diyetisyen" className="hover:underline font-medium">
                Eryaman ofisi
              </Link>
              <span aria-hidden>·</span>
              <Link href="/online-diyetisyen" className="hover:underline font-medium">
                Online diyetisyen
              </Link>
              <span aria-hidden>·</span>
              <Link
                href="/ankara-kilo-verme-diyetisyen"
                className="hover:underline font-medium"
              >
                Kilo verme diyetisyeni
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
