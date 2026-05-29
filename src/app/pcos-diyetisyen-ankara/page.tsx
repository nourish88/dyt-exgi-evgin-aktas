import type { Metadata } from "next";
import {
  Sparkles,
  ScanLine,
  Apple,
  Activity,
  Moon,
  Pill,
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

const PAGE_URL = "https://ezgievginaktas.com/pcos-diyetisyen-ankara";

export const metadata: Metadata = {
  title: "PCOS Diyetisyeni Ankara — Beslenme Planı",
  description:
    "PCOS (Polikistik Over Sendromu) için kişiye özel beslenme planı. Hormonal denge, insülin duyarlılığı, kilo yönetimi ve düzenli adet için Ankara Eryaman ofisinde ve online diyetisyen.",
  keywords: [
    "pcos diyetisyen ankara",
    "pcos diyeti",
    "pcos beslenme",
    "polikistik over diyeti",
    "ankara pcos diyetisyeni",
    "online pcos diyetisyeni",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "PCOS Diyetisyeni Ankara — Hormon Dostu Beslenme",
    description:
      "Polikistik over sendromunda kişiye özel beslenme planı: insülin duyarlılığı, kilo dengesi, düzenli adet.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PCOS Diyetisyeni — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Polikistik over sendromunda kişiye özel beslenme — Ankara Eryaman ve online.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, PCOS için diyetisyen randevusu almak istiyorum.",
  "pcos-diyetisyen-ankara"
);

const faqs: SpecialtyFaq[] = [
  {
    q: "PCOS diyeti her kadın için aynı mı?",
    a: "Hayır. PCOS oldukça heterojen bir tablodur — bazı kadınlarda insülin direnci baskın, bazısında androjen seviyeleri öne çıkar. Plan; tanı paneliniz, semptomlarınız ve gelecek planlarınıza göre (örn. gebelik isteği) kişiselleştirilir.",
  },
  {
    q: "Sadece kilolu PCOS'lularda beslenme önemli mi?",
    a: "Hayır. Zayıf PCOS olarak adlandırılan grupta da kilo değişimi gerekmez ama öğün düzeni, lif alımı ve glisemik yönetim hormonal dengeyi belirgin biçimde etkiler. Plan yalnız kilo değil bütün metabolik tabloyu hedefler.",
  },
  {
    q: "Adet düzensizliğim ne zaman düzelir?",
    a: "Bireysel farklılık vardır. Çoğu danışanda 8–12 hafta içinde döngü düzenli hale gelmeye başlar; bazı durumlarda 4–6 ay sürebilir. Beslenme planı uyku ve egzersiz alışkanlıklarıyla beraber çalıştığında en hızlı sonucu verir.",
  },
  {
    q: "Süt ürünleri PCOS'ta kesinlikle yasak mı?",
    a: "Hayır. İnternette yaygın olan bu yasak, tüm danışanlar için geçerli değildir. Bazı kadınlarda yüksek miktarda hayvansal süt androjen artışını tetikleyebilir; bu kişiselleştirilmiş bir kararla planda yönetilir.",
  },
  {
    q: "Gebelik planlıyorum, plan farklı mı olur?",
    a: "Evet. Gebelik öncesi dönem için folik asit, demir, omega-3 ve insülin duyarlılığı odağı belirgin hale getirilir. Doktor ve jinekologla iletişim sürdürülerek hem PCOS yönetimi hem gebelik hazırlığı paralel ilerletilir.",
  },
  {
    q: "Online görüşmeyle PCOS takibi yeterli mi?",
    a: "Evet. Tahlil sonuçları, semptom günlüğü ve kilo ölçümleri danışan portalı üzerinden takip edilir. Haftalık görüntülü görüşmelerle plan dinamik biçimde güncellenir.",
  },
];

const body: SpecialtyParagraph[] = [
  { kind: "h2", text: "PCOS nedir, beslenme neden bu kadar önemli?" },
  {
    kind: "p",
    text: "Polikistik Over Sendromu (PCOS), üreme çağındaki kadınlarda en sık görülen hormonal bozukluklardan biridir. Düzensiz adet, akne, kıllanma artışı, kilo değişimleri ve insülin direnci sıklıkla görülen tablodur. Tek bir nedeni yoktur — genetik, çevresel ve yaşam tarzına bağlı faktörlerin etkileşimiyle gelişir.",
  },
  {
    kind: "p",
    text: "Beslenme, PCOS yönetiminde tıbbi tedaviyle yan yana çalışan en güçlü araçlardan biridir. İnsülin duyarlılığını iyileştiren, kronik düşük seviyeli iltihaplanmayı azaltan ve hormonal sinyalleri stabilize eden bir beslenme planı; semptomların belirgin ölçüde gerilemesini sağlayabilir.",
  },
  { kind: "h2", text: "Kimler bu sayfadan yararlanabilir?" },
  {
    kind: "ul",
    items: [
      "PCOS tanısı yeni konulmuş ve nereden başlayacağını bilmeyen kadınlar",
      "Adet düzensizliği veya akne, kıllanma gibi androjen kaynaklı semptomları olan kadınlar",
      "İnsülin direnciyle birlikte PCOS tablosu yaşayanlar",
      "Gebelik planlayan veya kısırlık takibinde olan kadınlar",
      "Düşük kilo / zayıf PCOS tipinde olup hormonal denge isteyenler",
    ],
  },
];

const principles = [
  {
    icon: ScanLine,
    title: "Tanı paneline göre kişiselleştirme",
    description:
      "Androjen, insülin, TSH, D vitamini ve diğer hormon değerleri planın temelini oluşturur. Bireysel tabloya göre yaklaşım değişir.",
  },
  {
    icon: Apple,
    title: "Düşük glisemik yük",
    description:
      "İnsülin pikinden uzak, sebze ve protein eşliğinde dengelenmiş karbonhidrat seçimleri — hem kilo hem hormonal denge için kritik.",
  },
  {
    icon: Activity,
    title: "Düzenli hareket entegrasyonu",
    description:
      "Aşırı yüksek yoğunluklu egzersiz kortizolü artırabilir; PCOS'ta orta yoğunluklu hareket ve direnç egzersizi dengeli planlanır.",
  },
  {
    icon: Moon,
    title: "Uyku düzeni",
    description:
      "Yetersiz uyku, insülin duyarlılığını ve androjen seviyelerini olumsuz etkiler. Uyku hijyeni süreç içinde mutlaka konuşulur.",
  },
  {
    icon: Sparkles,
    title: "Mikrobesin desteği",
    description:
      "Magnezyum, D vitamini, inositol, omega-3 gibi öğelerin kan değerleri takip edilerek beslenme ve gerektiğinde takviyeyle desteklenir.",
  },
  {
    icon: Pill,
    title: "İlaç + plan koordinasyonu",
    description:
      "Metformin, oral kontraseptif veya inositol gibi tedaviler alıyorsanız beslenme planı bunlarla çelişmez, onlara paralel kurgulanır.",
  },
];

const process: SpecialtyParagraph[] = [
  { kind: "h2", text: "Süreç nasıl ilerliyor?" },
  {
    kind: "strongP",
    lead: "İlk görüşme:",
    text: "tanı paneliniz, jinekolog/endokrinolog notları, semptom günlüğünüz ve gelecek planlarınız (gebelik isteği vb.) ele alınır. Beslenme alışkanlıkları, sevdiğiniz besinler, mutfak rutinleriniz konuşulur.",
  },
  {
    kind: "strongP",
    lead: "İlk 4 hafta:",
    text: "Plan uygulanırken günlük öğünler ve semptomlar danışan portalında takip edilir. Tokluk, enerji, sindirim ve cilt değişimleri haftalık görüşmelerde değerlendirilir.",
  },
  {
    kind: "strongP",
    lead: "2.–3. ay:",
    text: "Adet düzeninde ve metabolik göstergelerde değişim gözlenmeye başlar. Plan, bedensel ve psikolojik dönüşüme göre 2–3 kez güncellenir. Bu noktada gerekli kontrol tahlilleri için doktorla iletişim önerilir.",
  },
  {
    kind: "strongP",
    lead: "Stabilite dönemi:",
    text: "Yeni alışkanlıklar içselleşir; bu noktadan sonra ihtiyaç duyduğunuz sıklıkta kontrol görüşmeleriyle uzun vadeli stabilite korunur.",
  },
];

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı — PCOS",
  description:
    "Polikistik Over Sendromu için kişiye özel beslenme danışmanlığı, Ankara Eryaman ve online.",
  url: PAGE_URL,
});

const faqJsonLd = buildFaqJsonLd(faqs);

export default function PcosPage() {
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
          { name: "PCOS Diyetisyeni", item: PAGE_URL },
        ]}
      />
      <SpecialtyPage
        heroBadge="Hormon dostu beslenme · Ankara & online"
        heroBadgeIcon={Sparkles}
        titleLead="PCOS Diyetisyeni"
        titleHighlight="— Ankara"
        intro="Polikistik Over Sendromu (PCOS), beslenmenin en belirgin fark yarattığı hormonal tablolardan biridir. Adet düzensizliği, kilo değişimleri, akne ve kıllanma gibi semptomlar; doğru beslenme planı ve yaşam ayarlamalarıyla belirgin biçimde gerilemeye başlar. Ankara Eryaman ofisinde yüz yüze veya Türkiye genelinde online olarak; tanı paneliniz ve semptomlarınıza özel bir planla süreci birlikte yürütüyoruz."
        whatsappLink={whatsappLink}
        body={body}
        principlesIntro="PCOS yönetiminde beslenme; tanı tipinize, semptomlarınıza ve hayat hedeflerinize göre kişiselleştirilir."
        principles={principles}
        process={process}
        faqs={faqs}
        ctaTitle="PCOS tanınız varsa — başlamak için doğru zaman"
        ctaText="WhatsApp'tan ulaşın, kısa bir ön görüşmeyle tanı tablonuzu ve hedeflerinizi birlikte değerlendirelim."
        related={[
          { href: "/fonksiyonel-tip-diyetisyeni-ankara", label: "Fonksiyonel tıp" },
          { href: "/insulin-direnci-diyeti-ankara", label: "İnsülin direnci" },
          { href: "/eryaman-diyetisyen", label: "Eryaman ofisi" },
          { href: "/online-diyet-ankara", label: "Online diyet" },
          { href: "/programlar", label: "Programlar" },
        ]}
      />
    </>
  );
}
