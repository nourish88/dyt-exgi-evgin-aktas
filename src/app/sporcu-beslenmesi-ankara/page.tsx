import type { Metadata } from "next";
import {
  Dumbbell,
  Flame,
  Timer,
  Beef,
  Activity,
  Trophy,
} from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import {
  SpecialtyPage,
  buildLocalBusinessJsonLd,
  buildFaqJsonLd,
  type SpecialtyFaq,
  type SpecialtyParagraph,
} from "@/components/specialty/specialty-page";

const PAGE_URL = "https://ezgievginaktas.com/sporcu-beslenmesi-ankara";

export const metadata: Metadata = {
  title: "Sporcu Beslenmesi Ankara — Diyetisyen Desteği",
  description: "Performans artışı, kas kazanımı veya yağ kaybı odaklı sporcu beslenmesi planları. Profesyonel ve amatör sporcular için Ankara'da uzman destek.",
  keywords: [
    "sporcu beslenmesi ankara",
    "sporcu diyetisyeni",
    "fitness diyetisyeni ankara",
    "kas kazanımı diyeti",
    "performans beslenmesi",
    "online sporcu diyetisyeni",
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
    type: "website",
    url: PAGE_URL,
    title: "Sporcu Beslenmesi Ankara — Performans Odaklı Plan",
    description:
      "Antrenman tipinize ve hedefe (performans, kas, yağ) göre kişiye özel sporcu beslenmesi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sporcu Beslenmesi — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Antrenmana uyumlu makro ve öğün zamanlaması — Ankara Eryaman ve online.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, sporcu beslenmesi danışmanlığı için randevu almak istiyorum.",
  "sporcu-beslenmesi-ankara"
);

const faqs: SpecialtyFaq[] = [
  {
    q: "Profesyonel sporcu değilim, bu plan bana uygun mu?",
    a: "Evet. Sporcu beslenmesi sadece elit sporcular için değildir; haftada 3+ gün düzenli antrenman yapan herkesin performansı, toparlanması ve vücut kompozisyonu beslenme planından doğrudan etkilenir.",
  },
  {
    q: "Kas kazanımı için sürekli protein içmem mi gerek?",
    a: "Hayır. Önemli olan toplam günlük protein alımı (genelde 1.6–2.2 g/kg arası) ve bunun öğünlere düzgün dağılımıdır. Protein tozu pratik bir destek olabilir ama zorunlu değildir; çoğu danışan ihtiyacı doğal besinlerle karşılar.",
  },
  {
    q: "Antrenmandan önce ne yemeliyim?",
    a: "Antrenmandan 1.5–3 saat önce, karbonhidrat ağırlıklı ve düşük yağlı bir öğün ideal. Eğer 30–60 dakika kala antrenmana giriyorsanız, daha hafif ve hızlı sindirilebilir bir atıştırmalık (örn. muz + bir miktar protein) tercih edilir. Plan günlük programınıza özel ayarlanır.",
  },
  {
    q: "Yağ kaybı ve kas kazanımı aynı anda mümkün mü?",
    a: "Antrenmanlı olmayan, henüz başlayan veya antrenman süreci uzun bir aradan sonra yenilenen kişilerde (body recomposition) mümkündür. İleri seviye sporcularda ise iki hedef genelde periyodlanarak (önce kas, sonra yağ) yönetilir.",
  },
  {
    q: "Takviye (kreatin, BCAA, omega-3) almalı mıyım?",
    a: "Kreatin kanıt düzeyi yüksek; çoğu güç sporu yapan danışanda önerilir. BCAA, yeterli protein alındığında genelde gereksizdir. Omega-3 ve D vitamini tahlil sonuçlarına göre değerlendirilir. Takviye, plan oturduktan sonra ihtiyaca göre eklenir.",
  },
  {
    q: "Yarış / müsabaka dönemi için özel plan oluyor mu?",
    a: "Evet. Müsabakaya doğru özellikle son 1–2 haftalık dönem için karbonhidrat yükleme, sıvı ve elektrolit stratejisi, yarış günü öğünleri detaylı planlanır. Bu dönem sporcuyla birlikte gün gün kurgulanır.",
  },
];

const body: SpecialtyParagraph[] = [
  { kind: "h2", text: "Sporcu beslenmesi neden ayrı bir uzmanlık ister?" },
  {
    kind: "p",
    text: "Düzenli antrenman yapan birinin enerji ve besin ihtiyacı, sedanter bir bireyinkinden belirgin farklıdır. Antrenman tipi (dayanıklılık vs. güç), antrenman sıklığı, hedef (performans, kas kazanımı, yağ kaybı) ve toparlanma süreci — hepsi öğün düzenini ve makro dengesini doğrudan etkiler. Genel “sağlıklı beslenme” önerileri çoğu zaman yetersiz kalır.",
  },
  {
    kind: "p",
    text: "Doğru kurgulanmış sporcu beslenmesi planı; antrenmandaki performansı, toparlanma hızını, yaralanma riskini ve uzun vadeli vücut kompozisyonunu doğrudan etkiler. Yanlış kurgulanmış bir plansa; halsizlik, performans düşüşü, anormal kilo dalgalanmaları ve hormonal sorunlara yol açabilir.",
  },
  { kind: "h2", text: "Kimler için uygundur?" },
  {
    kind: "ul",
    items: [
      "Haftada 3+ gün düzenli antrenman yapan amatör ve yarı-profesyonel sporcular",
      "Dayanıklılık sporcuları (koşu, bisiklet, triatlon, yüzme)",
      "Güç ve hipertrofi odaklı çalışanlar (fitness, vücut geliştirme, crossfit)",
      "Takım sporları oyuncuları (futbol, basketbol, voleybol)",
      "Yarış / müsabaka öncesi peaking planı arayanlar",
      "Vücut kompozisyonu (yağ kaybı + kas koruma) hedefleyenler",
    ],
  },
];

const principles = [
  {
    icon: Flame,
    title: "Enerji dengesi kişiselleştirilir",
    description:
      "Kalori ihtiyacı; antrenman tipi, antrenman süresi, vücut kompozisyonu ve hedefe göre hesaplanır. Tek tip formül yoktur.",
  },
  {
    icon: Beef,
    title: "Protein dağılımı önemli",
    description:
      "Toplam günlük protein kadar, öğünlere 3–5 kez dağıtılması da önemlidir. Genelde 1.6–2.2 g/kg aralığı hedeflenir.",
  },
  {
    icon: Timer,
    title: "Antrenman zamanlamasına uyum",
    description:
      "Öncesi, sırası ve sonrasındaki öğün düzeni; performansı ve toparlanmayı doğrudan etkiler. Plan, antrenman saatlerinize göre kurgulanır.",
  },
  {
    icon: Activity,
    title: "Toparlanma odaklı yaklaşım",
    description:
      "Antrenman sonrası 30–60 dakikalık “anabolik pencere” mitinin ötesinde; uzun vadeli toparlanma için günlük makrolar ve uyku düzeni önceliklidir.",
  },
  {
    icon: Trophy,
    title: "Hedef bazlı dönemler",
    description:
      "Hipertrofi, güç, dayanıklılık veya yarış peaking dönemlerinde plan tamamen farklılaşır. Sezonal periyotlama uygulanır.",
  },
  {
    icon: Dumbbell,
    title: "Takviye akıllıca",
    description:
      "Önce besin, sonra takviye prensibi: kreatin, omega-3, D vitamini gibi kanıt düzeyi yüksek seçimler ihtiyaca göre eklenir.",
  },
];

const process: SpecialtyParagraph[] = [
  { kind: "h2", text: "Süreç nasıl ilerliyor?" },
  {
    kind: "strongP",
    lead: "İlk görüşme:",
    text: "Antrenman programı, sıklığı, hedefiniz, daha önce uygulanan beslenme yaklaşımları, vücut kompozisyonu ve sağlık geçmişi detaylı ele alınır. Performans testleri varsa değerlendirilir.",
  },
  {
    kind: "strongP",
    lead: "İlk 2–4 hafta:",
    text: "Plan uygulanırken antrenman performansı, toparlanma kalitesi ve enerji seviyesi haftalık görüşmelerle takip edilir. Kalori ve makro dengesi tepkiye göre ince ayarlanır.",
  },
  {
    kind: "strongP",
    lead: "1.–3. ay:",
    text: "Vücut kompozisyonunda ölçülebilir değişimler gözlenir. Plan, sezon ve hedef değişimine göre dönemler halinde güncellenir. Yarış/müsabaka varsa peaking planı önceden devreye alınır.",
  },
  {
    kind: "strongP",
    lead: "Stabilite ve sezonal yönetim:",
    text: "Edinilen beslenme refleksleri yerleşir. Yeni hedefler ortaya çıktıkça veya sezon değiştikçe periyotlama uygulanır.",
  },
];

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı — Sporcu Beslenmesi",
  description:
    "Performans ve vücut kompozisyonu odaklı sporcu beslenmesi danışmanlığı, Ankara Eryaman ve online.",
  url: PAGE_URL,
});

const faqJsonLd = buildFaqJsonLd(faqs);

export default function SporcuPage() {
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
            name: "Uzmanlık Alanları",
            item: "https://ezgievginaktas.com/programlar",
          },
          { name: "Sporcu Beslenmesi", item: PAGE_URL },
        ]}
      />
      <SpecialtyPage
        heroBadge="Antrenmana uyumlu plan · Ankara & online"
        heroBadgeIcon={Dumbbell}
        titleLead="Sporcu Beslenmesi"
        titleHighlight="— Ankara"
        intro="Düzenli antrenman yapan biri için “sağlıklı beslenme” yeterli değil; performans, toparlanma ve vücut kompozisyonu doğru kurgulanmış bir sporcu beslenmesi planına bağlı. Ankara Eryaman ofisinde yüz yüze veya Türkiye genelinde online; antrenman programınız ve hedefinize özel makro, öğün zamanlaması ve takviye stratejisiyle süreci birlikte yönetiyoruz."
        whatsappLink={whatsappLink}
        body={body}
        principlesIntro="Sporcu beslenmesinde tek doğru yoktur — antrenman tipiniz, hedefiniz ve günlük rutininiz planı şekillendirir."
        principles={principles}
        process={process}
        faqs={faqs}
        ctaTitle="Performansınızı bir üst seviyeye taşıyalım"
        ctaText="WhatsApp'tan ulaşın, antrenman programınız ve hedefiniz üzerinden ön görüşmeyle başlayalım."
        related={[
          { href: "/eryaman-diyetisyen", label: "Eryaman ofisi" },
          { href: "/online-diyet-ankara", label: "Online diyet" },
          { href: "/ankara-kilo-verme-diyetisyen", label: "Kilo verme" },
          { href: "/programlar", label: "Programlar" },
          { href: "/hesaplayicilar", label: "BMI & Kalori" },
        ]}
      />
    </>
  );
}
