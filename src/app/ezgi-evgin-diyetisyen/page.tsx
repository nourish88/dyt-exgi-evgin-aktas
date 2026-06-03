import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MessageCircle,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Globe2,
  Quote,
  Stethoscope,
  Sparkles,
  ClipboardList,
} from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import {
  DOKTORTAKVIMI_PROFILE_URL,
  GOOGLE_MAPS_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";

export const metadata: Metadata = {
  title: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
  description: "Dyt. Ezgi Evgin: Ankara'da yüz yüze ve online beslenme danışmanlığı. Kalıcı kilo verme, sağlıklı yaşam ve kişiye özel diyet programları.",
  keywords: [
    "ezgi evgin",
    "ezgi evgin aktaş",
    "dyt ezgi evgin",
    "diyetisyen ezgi evgin",
    "diyetisyen ezgi evgin aktaş",
    "ankara diyetisyen",
    "online diyetisyen",
    "eryaman diyetisyen",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/ezgi-evgin-diyetisyen",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/ezgi-evgin-diyetisyen",
    type: "profile",
    title: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Başkent Üniversitesi Beslenme ve Diyetetik mezunu, Ankara Eryaman ve online beslenme danışmanlığı.",
    url: "https://ezgievginaktas.com/ezgi-evgin-diyetisyen",
    firstName: "Ezgi",
    lastName: "Evgin Aktaş",
    username: "dyt_ezgievgin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Ankara Eryaman ve online beslenme danışmanlığı — yasaksız, kişiye özel, sürdürülebilir.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Ezgi Evgin Beslenme ve Diyet Danışmanlığı ile beslenme danışmanlığı hakkında bilgi almak istiyorum.",
  "ezgi-evgin-diyetisyen"
);

// Sayfaya özel Person schema — global Person schema'sını override eder.
// jobTitle, alumniOf, hasCredential, sameAs ve url bu sayfa için bağlamla
// zenginleştirildi.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
  alternateName: [
    "Ezgi Evgin",
    "Dyt. Ezgi Evgin",
    "Dyt Ezgi Evgin",
    "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
  ],
  givenName: "Ezgi",
  familyName: "Evgin Aktaş",
  jobTitle: "Diyetisyen · Beslenme ve Diyetetik Uzmanı",
  description: "Dyt. Ezgi Evgin: Ankara'da yüz yüze ve online beslenme danışmanlığı. Kalıcı kilo verme, sağlıklı yaşam ve kişiye özel diyet programları.",
  url: "https://ezgievginaktas.com/ezgi-evgin-diyetisyen",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı Hakkında",
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
      name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı hangi konularda uzmanlaşmıştır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kilo yönetimi, insülin direnci, PCOS, hamilelik ve emzirme dönemi beslenmesi, çocuk ve ergen beslenmesi, sporcu beslenmesi ve sağlıklı yaşam alışkanlığı edindirme alanlarında deneyim sahibidir.",
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

const brandWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı | Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
  alternateName: [
    "Ezgi Evgin",
    "Dyt. Ezgi Evgin",
    "Dyt Ezgi Evgin",
    "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    "Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
  ],
  url: "https://ezgievginaktas.com/ezgi-evgin-diyetisyen",
  mainEntity: personJsonLd,
};

const expertiseAreas = [
  {
    icon: Stethoscope,
    title: "Kilo Yönetimi & Sağlıklı Kilo Verme",
    description:
      "Şok ya da kısıtlı diyet yerine, metabolik dengeyi koruyan, haftada 0.5–1 kg arası kalıcı kayba yönlendiren yapılandırılmış plan.",
  },
  {
    icon: Sparkles,
    title: "İnsülin Direnci & PCOS",
    description:
      "Doktor tanısı sonrasında öğün sıklığı, makro dengesi ve glisemik yük üzerine kurulmuş, semptomları azaltmaya yönelik beslenme planı.",
  },
  {
    icon: HeartHandshake,
    title: "Hamilelik & Emzirme Dönemi",
    description:
      "Trimester bazlı besin ögesi gereksinimleri, kilo alım takibi ve emzirme döneminde anne-bebek sağlığını koruyan beslenme.",
  },
  {
    icon: ClipboardList,
    title: "Çocuk & Ergen Beslenmesi",
    description:
      "Aileyle birlikte; çocuğun yaşına, aktivitesine ve okul rutinine uyumlu, baskıdan uzak ve büyüme dostu beslenme yaklaşımı.",
  },
  {
    icon: Briefcase,
    title: "Sporcu Beslenmesi",
    description:
      "Antrenman türüne ve hedefe (performans, kas kazanımı, yağ kaybı) göre öğün zamanlaması, besin ögesi dağılımı ve takviye planlaması.",
  },
  {
    icon: Globe2,
    title: "Online & Uzaktan Danışmanlık",
    description:
      "Görüntülü görüşme + danışan portalı + günlük mesajlaşma desteğiyle Türkiye'nin her yerinden aynı kalitede takip.",
  },
];

const highlights = [
  "Başkent Üniversitesi Beslenme ve Diyetetik lisans diploması",
  "2016'dan bu yana özel ofiste danışmanlık deneyimi",
  "Bin'den fazla danışana kişiye özel plan tamamlandı",
  "Haftalık birebir görüşme + danışan portalı + günlük mesajlaşma",
  "Yasaksız, sürdürülebilir ve yaşam tarzına uyumlu yaklaşım",
];

const approachSteps = [
  {
    title: "1. Sizi tanırız, plan değil önce kişi gelir",
    text: "İlk görüşmede sağlık geçmişiniz, günlük rutininiz, çalışma temponuz, uyku düzeniniz, beslenme alışkanlıklarınız ve sevdiğiniz–sevmediğiniz besinler detaylıca konuşulur. Vücut kompozisyonu ve antropometrik ölçümler alınır.",
  },
  {
    title: "2. Hedef, yöntem değil sonuçtur",
    text: "“Şu kadar günde şu kadar kilo” yerine, sürdürülebilir bir alışkanlık çerçevesinin altyapısı kurulur. Sürdürülemez hedefler kısa vadede başarısız olur; bu yüzden başlangıçtan gerçekçi ölçek belirlenir.",
  },
  {
    title: "3. Plan, mutfağınıza göre yazılır",
    text: "Hazır şablon hiçbir zaman kullanılmaz. Bütçenize, mutfağınızdaki ürünlere, alerji ve intoleranslara ve kültürel besin tercihlerinize göre özelleştirilmiş plan hazırlanır.",
  },
  {
    title: "4. Süreç hafta hafta birlikte yürür",
    text: "Her hafta görüşmeyle ilerleme, zorlandığınız noktalar ve yeni hedefler konuşulur. Plan dinamik olarak güncellenir — bedeniniz değişir, planınız da değişmelidir.",
  },
  {
    title: "5. Görüşme aralarında yalnız bırakmayız",
    text: "Danışan portalı üzerinden öğün paylaşımı, sorular, hatırlatmalar ve gelişim grafikleri tek noktada toplanır. Diyetisyenle iletişim sadece görüşme günleriyle sınırlı değildir.",
  },
];

export default function EzgiEvginDiyetisyenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandWebPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/20 to-cyan-50/30">
        {/* HERO */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
            <p className="text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-wide">
              Diyetisyen · Beslenme ve Diyetetik Uzmanı
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
              Ezgi Evgin Beslenme ve Diyet Danışmanlığı
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose mx-auto leading-relaxed">
              Arama motorunda{" "}
              <strong className="text-foreground font-semibold">
                Ezgi Evgin
              </strong>
              ,{" "}
              <strong className="text-foreground font-semibold">
                Dyt. Ezgi Evgin
              </strong>{" "}
              veya{" "}
              <strong className="text-foreground font-semibold">
                Ezgi Evgin Beslenme ve Diyet Danışmanlığı
              </strong>{" "}
              yazdığınızda aynı uzman diyetisyene ulaşıyorsunuz. Başkent
              Üniversitesi Beslenme ve Diyetetik mezunuyum; 2016&apos;dan bu
              yana Ankara{" "}
              <Link
                href="/eryaman-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Eryaman
              </Link>{" "}
              ofisimde ve{" "}
              <Link
                href="/online-diyet-ankara"
                className="text-primary hover:underline font-medium"
              >
                online
              </Link>{" "}
              olarak kişiye özel, yasaksız ve sürdürülebilir beslenme
              danışmanlığı sunuyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-12 px-8 min-h-[44px] w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Yazın
                </Button>
              </a>
              <Link href="/randevu">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 min-h-[44px] w-full sm:w-auto"
                >
                  Randevu Sayfası
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="pb-4">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
              {highlights.map((item) => (
                <Card key={item} className="p-4">
                  <div className="flex gap-2 items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm leading-snug">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* BIYOGRAFI */}
        <section className="py-14">
          <div className="container mx-auto px-4 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)]">
              Eğitim, mesleki yolculuk ve neden bu işteyim?
            </h2>
            <p>
              Beslenme ve Diyetetik lisans eğitimimi{" "}
              <strong className="text-foreground">Başkent Üniversitesi</strong>
              &apos;nde tamamladım. Üniversite yıllarımda hastane stajları ve
              klinik beslenme rotasyonları sırasında en çok dikkatimi çeken
              şey, &ldquo;diyet&rdquo; kelimesinin hâlâ pek çok insan için kısa
              vadeli, kısıtlayıcı ve cezalandırıcı bir kavram olmasıydı. Oysa
              beslenme, ömür boyu süren bir ilişki — bunu zorla değil, kişinin
              yaşamına dokunan bir yöntemle kurmak mümkün.
            </p>
            <p>
              2016&apos;da kendi merkezimi Ankara&apos;da kurduğumdan bu yana,
              bu yaklaşımla bin&apos;den fazla danışana rehberlik ettim. Kilo
              yönetimi, insülin direnci, PCOS, hamilelik ve çocuk beslenmesi
              gibi geniş bir yelpazede çalışıyor olmamın temel sebebi şu:
              insanlar tek konuda gelmez. Bir kişi insülin direnciyle gelir, üç
              ay sonra hamilelik planlaması ekler; başka biri sporcu olarak
              başlar, sezonu kapatınca farklı bir öğün düzenine geçer. Süreç
              değişir; danışmanlık da bununla birlikte değişmelidir.
            </p>
            <p>
              Mesleki yaklaşımım iki sütuna dayanır:{" "}
              <strong className="text-foreground">bilimsel referans</strong> ve{" "}
              <strong className="text-foreground">kişisel uyum</strong>. Plan,
              güncel klinik beslenme literatürüne dayanır ama soğuk bir Excel
              tablosu olarak kalmaz; mutfağınıza, iş temponuza, kültürünüze ve
              psikolojinize göre yorumlanır. Bu yüzden danışanlarımın çoğunda
              uzun vadeli sonuç görüyorum — çünkü süreç boyunca planları{" "}
              <em>yaşıyorlar</em>, sadece uygulamıyorlar.
            </p>
          </div>
        </section>

        {/* UZMANLIK ALANLARI */}
        <section className="py-12 bg-white/60 border-y border-pink-100/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)]">
                Uzmanlık alanları
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Farklı yaş, yaşam tarzı ve sağlık durumuna uygun beslenme
                danışmanlığı.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertiseAreas.map((a) => (
                <Card
                  key={a.title}
                  className="p-5 hover:shadow-md transition-shadow"
                >
                  <a.icon className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
                  <h3 className="font-semibold text-[var(--brand-dark)] mb-1.5">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* YAKLAŞIM */}
        <section className="py-14">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)]">
                Çalışma yaklaşımım — adım adım
              </h2>
              <p className="text-muted-foreground mt-2">
                Hazır liste yok. Plan, sizinle birlikte yazılır.
              </p>
            </div>
            <div className="space-y-3">
              {approachSteps.map((s) => (
                <div
                  key={s.title}
                  className="p-5 bg-white rounded-xl border border-gray-100 hover:border-[var(--brand-primary)]/30 transition-colors"
                >
                  <h3 className="font-semibold text-[var(--brand-dark)] mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EĞİTİM & KIMLIK */}
        <section className="py-12 bg-gradient-to-br from-pink-50/40 to-cyan-50/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)] text-center mb-8">
              Eğitim, sertifikalar ve mesleki kimlik
            </h2>
            <div className="space-y-4">
              <Card className="p-5 flex gap-4 items-start">
                <GraduationCap className="w-7 h-7 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[var(--brand-dark)]">
                    Lisans · Beslenme ve Diyetetik
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Başkent Üniversitesi, Sağlık Bilimleri Fakültesi, Beslenme ve
                    Diyetetik Bölümü. Klinik beslenme, toplum sağlığı, anne–çocuk
                    beslenmesi ve sporcu beslenmesi rotasyonları.
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex gap-4 items-start">
                <Briefcase className="w-7 h-7 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[var(--brand-dark)]">
                    Mesleki Deneyim · 2016&apos;dan günümüze
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Ankara Eryaman&apos;da kendi merkezinde danışmanlık. Yüz
                    yüze görüşmeler, online danışan takibi ve danışan portalı
                    üzerinden bütünleşik süreç yönetimi.
                  </p>
                </div>
              </Card>
              <Card className="p-5 flex gap-4 items-start">
                <Globe2 className="w-7 h-7 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[var(--brand-dark)]">
                    Online Profiller
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    <a
                      href="https://www.instagram.com/dyt_ezgievgin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Instagram
                    </a>
                    {" · "}
                    <a
                      href="https://www.doktortakvimi.com/ezgi-evgin/diyetisyen-beslenme-uzmani/ankara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      DoktorTakvimi
                    </a>
                    {" · "}
                    <a
                      href="https://diyetisyenezgievgin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      diyetisyenezgievgin.com
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FELSEFE / ALINTI */}
        <section className="py-14">
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
                  — Ezgi Evgin Beslenme ve Diyet Danışmanlığı
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* SSS */}
        <section className="py-12 bg-white/60">
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

        {/* CTA */}
        <section className="py-14">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="p-8 md:p-10 text-center bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-secondary)]/5 border-[var(--brand-primary)]/20">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)] mb-3">
                Birlikte başlamak için ilk adım
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                WhatsApp&apos;tan kısa bir sohbetle başlayalım — durumunuzu,
                hedefinizi ve programın size uygun olup olmadığını birlikte
                değerlendirelim.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-12 px-8 min-h-[44px]">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp&apos;tan Yaz
                  </Button>
                </a>
                <Link href="/iletisim">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 min-h-[44px]"
                  >
                    İletişim sayfası
                  </Button>
                </Link>
              </div>
            </Card>

            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/eryaman-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Eryaman ofisi
              </Link>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <Link
                href="/online-diyet-ankara"
                className="text-primary hover:underline font-medium"
              >
                Online diyet Ankara
              </Link>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <Link
                href="/ankara-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Ankara diyetisyen
              </Link>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <Link
                href="/ankara-kilo-verme-diyetisyen"
                className="text-primary hover:underline font-medium"
              >
                Kilo verme diyetisyeni
              </Link>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <Link
                href="/programlar"
                className="text-primary hover:underline font-medium"
              >
                Programlar
              </Link>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <Link
                href="/hakkimda"
                className="text-primary hover:underline font-medium"
              >
                Detaylı özgeçmiş
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
