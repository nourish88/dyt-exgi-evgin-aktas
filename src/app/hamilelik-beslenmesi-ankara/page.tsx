import type { Metadata } from "next";
import {
  Baby,
  Heart,
  Apple,
  Droplet,
  Pill,
  CalendarDays,
} from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import {
  SpecialtyPage,
  buildServiceJsonLd,
  buildFaqJsonLd,
  type SpecialtyFaq,
  type SpecialtyParagraph,
} from "@/components/specialty/specialty-page";

const PAGE_URL = "https://ezgievginaktas.com/hamilelik-beslenmesi-ankara";

export const metadata: Metadata = {
  title: "Hamilelik Beslenmesi Ankara — Diyetisyen Desteği",
  description: "Hamilelikte sağlıklı kilo alımı ve emzirme döneminde süt artıran beslenme planı. Ankara'da hamile diyeti için uzman destek alın.",
  keywords: [
    "hamilelik beslenmesi ankara",
    "hamile diyetisyeni",
    "gebelik diyetisyeni ankara",
    "hamile beslenmesi",
    "emzirme dönemi beslenme",
    "online hamilelik diyetisyeni",
  ],
  alternates: {
    canonical: PAGE_URL ,
    languages: {
      "tr-TR": PAGE_URL ,
      "x-default": PAGE_URL ,
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Hamilelik Beslenmesi Ankara — Anne ve Bebek İçin",
    description:
      "Trimester bazlı kişiye özel beslenme planı, sağlıklı kilo alımı ve emzirme dönemi desteği.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamilelik Beslenmesi — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Gebelik ve emzirme döneminde anne-bebek odaklı kişiye özel beslenme.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, hamilelik dönemi beslenme danışmanlığı için randevu almak istiyorum.",
  "hamilelik-beslenmesi-ankara"
);

const faqs: SpecialtyFaq[] = [
  {
    q: "Hamilelikte kaç kilo almak normaldir?",
    a: "Gebelik öncesi BMI değerine göre değişir: normal kilolu bir kadın için tüm gebelik boyunca 11.5–16 kg, fazla kilolu için 7–11.5 kg, obez için 5–9 kg aralığı önerilir. Bu aralıklar dünya standartlarıdır ve kişisel olarak doktor takibi ile ayarlanır.",
  },
  {
    q: "Sürekli mide bulantım var, ne yiyebilirim?",
    a: "Mide bulantısı (özellikle 1. trimesterda) çok yaygındır. Küçük ve sık öğünler, kuru karbonhidratlar (galeta, kraker), zencefil, B6 vitamininden zengin besinler genelde tolerasyonu kolaylaştırır. Plan, semptomlarınıza özel uyarlanır.",
  },
  {
    q: "Hamilelikte hangi besinler kesinlikle yenmemeli?",
    a: "Çiğ et, çiğ deniz ürünleri, pastörize edilmemiş süt ürünleri, çiğ yumurta, yüksek civa içeren büyük balıklar (kılıç, köpek balığı) ve aşırı işlenmiş şarküteri ürünleri sakıncalıdır. Kafein günde 200 mg ile sınırlanmalıdır.",
  },
  {
    q: "Gestasyonel diyabet tanım var, plan değişir mi?",
    a: "Evet. Karbonhidrat dağılımı, öğün zamanlaması ve glisemik yük çok daha sıkı yönetilir. Kan şekeri ölçüm sonuçlarınız haftalık değerlendirilir. Doktor ve perinatoloji ekibiyle iletişim sürdürülür.",
  },
  {
    q: "Emzirme döneminde beslenme nasıl olmalı?",
    a: "Emzirme döneminde yaklaşık 450–500 kcal/gün ek ihtiyaç vardır. Süt üretimini destekleyen yeterli sıvı alımı, kaliteli protein, omega-3 ve mikrobesin yoğunluğu yüksek bir plan oluşturulur. Bebeğin tolere edemediği besinler izlenir.",
  },
  {
    q: "Hamilelikte takviye gerekli mi?",
    a: "Folik asit, demir, D vitamini ve gerekirse iyot gibi takviyeler genellikle doktor tarafından önerilir. Beslenme planı bu takviyelerin emilimini destekleyecek şekilde kurgulanır; özellikle demir takviyesinin tolerasyonu için öğün düzenlemesi önemlidir.",
  },
];

const body: SpecialtyParagraph[] = [
  { kind: "h2", text: "Hamilelikte beslenme neden bu kadar önemli?" },
  {
    kind: "p",
    text: "Hamilelik döneminde anne adayının beslenmesi, hem kendi sağlığını hem de bebeğin sağlıklı gelişimini doğrudan etkiler. Yetersiz veya dengesiz beslenme; düşük doğum ağırlığı, erken doğum riski, gestasyonel diyabet ve anne adayında demir eksikliği anemisi gibi durumlara yol açabilir. Doğru kurgulanmış bir beslenme planı bu riskleri belirgin biçimde azaltır.",
  },
  {
    kind: "p",
    text: "Önemli olan “iki kişilik yemek” yanılgısından uzak durmak. Gerçek ihtiyaç, kalori değil — besin yoğunluğudur. 2. trimesterda günlük yaklaşık 340 kcal, 3. trimesterda 450 kcal ek ihtiyaç olur; ama bu ek enerji boş kalorilerden değil, vitamin-mineral yoğunluğu yüksek seçimlerden gelmelidir.",
  },
  { kind: "h2", text: "Kimler için bu sayfa uygundur?" },
  {
    kind: "ul",
    items: [
      "Gebelik planlayan ve hazırlık dönemini doğru yürütmek isteyen kadınlar",
      "İlk trimesterdaki anne adayları (bulantı, iştahsızlık, kilo dalgalanması)",
      "Gestasyonel diyabet tanısı alan veya risk grubundaki anne adayları",
      "Çoğul gebelik (ikiz, üçüz) takibinde olanlar",
      "Emzirme dönemini sağlıklı geçirmek ve hamilelik kilolarını dengeli vermek isteyenler",
    ],
  },
];

const principles = [
  {
    icon: CalendarDays,
    title: "Trimester bazlı ayarlama",
    description:
      "Her trimester farklı: 1. trimester bulantı yönetimi, 2. trimester besin yoğunluğu, 3. trimester ödem ve kilo seyri ön planda.",
  },
  {
    icon: Apple,
    title: "Mikrobesin yoğunluğu",
    description:
      "Folik asit, demir, D vitamini, omega-3, kalsiyum, iyot — her öğün bu öğeleri içerecek şekilde planlanır.",
  },
  {
    icon: Heart,
    title: "Anne-bebek odaklı denge",
    description:
      "Anne adayının enerji ve sağlık dengesi, bebeğin gelişim hızı ve doktor takibinden gelen veriler birlikte değerlendirilir.",
  },
  {
    icon: Droplet,
    title: "Yeterli sıvı + tuz dengesi",
    description:
      "Gebelikte sıvı ihtiyacı artar; aynı zamanda tansiyon ve ödem yönetimi için tuz dengesi de plana entegre edilir.",
  },
  {
    icon: Pill,
    title: "Takviye koordinasyonu",
    description:
      "Doktorun önerdiği prenatal takviyeler ve demir-D vitamini desteğiyle uyumlu, emilimi destekleyen bir öğün düzeni.",
  },
  {
    icon: Baby,
    title: "Emzirmeye geçiş",
    description:
      "Doğumdan sonra emzirme dönemi planı önceden hazırlanır; süt üretimini destekleyen ve kilo verme telaşına girmeden ilerleyen yaklaşım.",
  },
];

const process: SpecialtyParagraph[] = [
  { kind: "h2", text: "Süreç nasıl ilerliyor?" },
  {
    kind: "strongP",
    lead: "İlk görüşme:",
    text: "Gebelik haftası, doktor takipleri, mevcut tahliller, semptomlar ve beslenme alışkanlıkları detaylı konuşulur. BMI ve kilo alım hedefi belirlenir.",
  },
  {
    kind: "strongP",
    lead: "Trimester boyunca:",
    text: "Plan her trimester değişen ihtiyaçlara göre güncellenir. Bulantı dönemlerinde tolerasyon, sonraki dönemde besin yoğunluğu odağa alınır.",
  },
  {
    kind: "strongP",
    lead: "Doktor iletişimi:",
    text: "Tahlil sonuçları (özellikle hemoglobin, OGTT, D vitamini) düzenli paylaşılır. Gerekli durumda doktor önerilerine paralel revizyon yapılır.",
  },
  {
    kind: "strongP",
    lead: "Doğum sonrası:",
    text: "Emzirme dönemi planı önceden hazır edilir. Doğum sonrası kilo verme süreci hızlandırılmadan, anne-bebek sağlığı önceliğiyle yürütülür.",
  },
];

const serviceJsonLd = buildServiceJsonLd({
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı — Hamilelik",
  description:
    "Hamilelik ve emzirme dönemi için kişiye özel beslenme danışmanlığı, Ankara Eryaman ve online.",
  url: PAGE_URL,
});

const faqJsonLd = buildFaqJsonLd(faqs);

export default function HamilelikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", item: "https://ezgievginaktas.com/" },
          { name: "Hamilelik Beslenmesi", item: PAGE_URL },
        ]}
      />
      <SpecialtyPage
        heroBadge="Anne ve bebek odaklı plan · Ankara & online"
        heroBadgeIcon={Baby}
        titleLead="Hamilelik Beslenmesi"
        titleHighlight="— Ankara"
        intro="Hamilelik döneminde doğru beslenme, anne sağlığı kadar bebeğin gelişimini de doğrudan etkileyen kritik bir bileşen. Trimester bazlı besin ögesi gereksinimleri, sağlıklı kilo alımı ve emzirmeye geçiş; Ankara Eryaman ofisinde yüz yüze veya Türkiye genelinde online görüşmelerle, doktor takibinizle uyumlu bir beslenme planıyla birlikte yürütülür."
        whatsappLink={whatsappLink}
        body={body}
        principlesIntro="Hamilelikte beslenme, “iki kişilik yemek” değil — bilinçli besin seçimi demek. Plan, trimesterınıza ve sağlık tablonuza özel kurgulanır."
        principles={principles}
        process={process}
        faqs={faqs}
        ctaTitle="Gebelik yolculuğunuzda doğru beslenme yanınızda olsun"
        ctaText="WhatsApp'tan ulaşın, kısa bir ön görüşmeyle gebelik haftanız, tahlilleriniz ve hedefleriniz üzerinden başlangıç planını birlikte konuşalım."
        related={[
          { href: "/eryaman-diyetisyen", label: "Eryaman ve Etimesgut ofisi" },
          { href: "/online-diyetisyen", label: "Online diyet" },
          { href: "/pcos-diyetisyen-ankara", label: "PCOS diyetisyeni" },
          { href: "/cocuk-beslenmesi-diyetisyen", label: "Çocuk beslenmesi" },
        ]}
      />
    </>
  );
}
