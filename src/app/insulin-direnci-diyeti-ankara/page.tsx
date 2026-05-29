import type { Metadata } from "next";
import {
  Activity,
  AlertCircle,
  Clock,
  Utensils,
  Salad,
  HeartPulse,
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

const PAGE_URL = "https://ezgievginaktas.com/insulin-direnci-diyeti-ankara";

export const metadata: Metadata = {
  title: "İnsülin Direnci Diyeti Ankara — Beslenme Planı",
  description:
    "İnsülin direnci tanısı sonrası kişiye özel beslenme planı. Ankara Eryaman ofisinde yüz yüze veya Türkiye genelinde online diyetisyen takibi. Glisemik yük, öğün sıklığı ve sürdürülebilir kilo yönetimi.",
  keywords: [
    "insülin direnci diyeti ankara",
    "insülin direnci diyetisyen",
    "insulin direnci beslenme",
    "ankara insülin direnci",
    "eryaman insülin direnci diyetisyeni",
    "online insülin direnci diyeti",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "İnsülin Direnci Diyeti Ankara — Kişiye Özel Beslenme Planı",
    description:
      "Glisemik yük, öğün düzeni ve sürdürülebilir kilo yönetimiyle insülin direncinde beslenme danışmanlığı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "İnsülin Direnci Diyeti — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Tanı sonrası kişiye özel insülin direnci beslenme planı, Ankara Eryaman ve online.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, insülin direnci için diyetisyen randevusu almak istiyorum.",
  "insulin-direnci-diyeti-ankara"
);

const faqs: SpecialtyFaq[] = [
  {
    q: "İnsülin direnci diyetinde neyi farklı yaparsınız?",
    a: "Şablon liste değil; sizin HOMA-IR değeriniz, çalışma temponuz, uyku düzeniniz ve mevcut beslenme alışkanlıklarınız temel alınır. Karbonhidrat türü, öğün sıklığı ve protein-yağ dengesi günlük rutininize göre kurgulanır.",
  },
  {
    q: "Kaç haftada sonuç görülür?",
    a: "İnsülin direncinde ölçülen değişim bireyden bireye değişmekle birlikte, çoğu danışanda ilk 2–4 hafta içinde tokluk şikâyetlerinde azalma, enerji artışı ve uyku kalitesinde iyileşme gözlenir. Kontrol kan tahlilleri genelde 8–12 hafta sonra yeniden istenir.",
  },
  {
    q: "İnsülin direnci diyetinde ekmek tamamen yasak mı?",
    a: "Hayır. Yasak kavramı sürdürülemez sonuçlar verir. Tam tahıllı ekmek, bulgur, kepekli makarna gibi düşük-orta glisemik karbonhidratlar; doğru porsiyon ve doğru kombinasyonla planda yer alır.",
  },
  {
    q: "Doktor metformin verdi, beslenme planı bunu nasıl etkiler?",
    a: "Beslenme planı ilaca paralel çalışır, onunla çelişmez. Metformin alan danışanlarda gastrointestinal yan etkileri azaltmak için öğün dağılımı özellikle ayarlanır; doktorla iletişim sürdürülür.",
  },
  {
    q: "Online görüşmeyle insülin direnci için doğru takip yapılır mı?",
    a: "Evet. Tahlil sonuçları, açlık-tokluk semptom günlüğü, kilo ve bel çevresi ölçümleri danışan portalı üzerinden takip edilir. Haftalık görüntülü görüşmeyle plan dinamik olarak güncellenir.",
  },
  {
    q: "Sadece kilo vermek mi hedef?",
    a: "Hayır. İnsülin direncinde asıl hedef metabolik düzeltmedir. Bel çevresi azalması, açlık-tokluk dengesi, enerji seviyesi ve uyku kalitesi en az kilo kaybı kadar önemli göstergelerdir.",
  },
];

const body: SpecialtyParagraph[] = [
  { kind: "h2", text: "İnsülin direnci nedir, nasıl gelişir?" },
  {
    kind: "p",
    text: "İnsülin direnci, vücut hücrelerinin insülin hormonuna karşı tepkisinin azalması ile gelişir. Pankreas aynı işi yapabilmek için daha fazla insülin salgılamak zorunda kalır; bu da kanda yüksek insülin (hiperinsülinemi) anlamına gelir. Uzun vadede tip 2 diyabet, kilo artışı (özellikle bel çevresinde), enerji dalgalanmaları, uyku düzensizlikleri ve kadınlarda PCOS gibi tablolarla bağlantılı olabilir.",
  },
  {
    kind: "p",
    text: "Tanı genellikle doktor tarafından HOMA-IR değeri, açlık insülini ve kan şekeri tetkikleri üzerinden konulur. Beslenme planı, tıbbi tedavinin yerini almaz — doktorunuzun verdiği ilaç veya takip protokolüyle birlikte çalışan, semptomları yönetilebilir hale getiren ve metabolizmayı iyileştirmeyi hedefleyen bir bileşendir.",
  },
  { kind: "h2", text: "Kimler için bu plan uygundur?" },
  {
    kind: "ul",
    items: [
      "Doktor tarafından insülin direnci tanısı alanlar",
      "HOMA-IR değeri yüksek seyreden ön-diyabet aşamasındakiler",
      "PCOS tanısı olup metabolik yönetim isteyen kadınlar",
      "Belirgin tokluk-ses kısırlığı, öğün sonrası uyku basması, iştah dalgalanması yaşayanlar",
      "Bel çevresi artışı ve karın bölgesi yağlanmasıyla mücadele edenler",
    ],
  },
];

const principles = [
  {
    icon: Activity,
    title: "Glisemik yük odaklı",
    description:
      "Sadece besinlerin glisemik indeksi değil, porsiyon ve diğer öğelerle birleştirildiğinde oluşan toplam glisemik yük göz önünde bulundurulur.",
  },
  {
    icon: Clock,
    title: "Öğün sıklığı kişiye göre ayarlanır",
    description:
      "Bazıları için 3 ana öğün, bazıları için 3 ana + 2 ara öğün uygundur. Tek bir reçete yoktur — semptom günlüğüne ve varsa kan şekeri seyrine göre belirlenir.",
  },
  {
    icon: Utensils,
    title: "Protein ve lif vurgulu",
    description:
      "Her öğünde yeterli protein ve sebzeden gelen lif; karbonhidratın kan şekeri üzerindeki etkisini yumuşatır, tokluk hissini uzatır.",
  },
  {
    icon: Salad,
    title: "Yağ kalitesi",
    description:
      "Trans yağ ve aşırı işlenmiş gıdadan uzak; zeytinyağı, kuruyemiş, balık gibi omega-3 ve tekli doymamış yağlara yer verilir.",
  },
  {
    icon: HeartPulse,
    title: "Uyku ve stres takibi",
    description:
      "İnsülin direnci sadece tabakla değil yaşam tarzıyla yönetilir. Uyku düzeni ve stres yönetimi süreç içinde birlikte konuşulur.",
  },
  {
    icon: AlertCircle,
    title: "Sürdürülebilirlik",
    description:
      "Şok diyet, aşırı düşük kalori veya tek besin grubu üzerine kurulu yaklaşımlar uzun vadede insülin direncini kötüleştirebilir. Plan dinamik tutulur.",
  },
];

const process: SpecialtyParagraph[] = [
  { kind: "h2", text: "Süreç nasıl ilerliyor?" },
  {
    kind: "strongP",
    lead: "İlk görüşme:",
    text: "tahliller, semptomlar, ilaç durumu, günlük rutin, sevdiğiniz ve sevmediğiniz besinler ele alınır. Vücut analizi ve bel çevresi ölçümü yapılır. Mutfak ve iş ortamı koşullarınıza göre planın taslağı oluşur.",
  },
  {
    kind: "strongP",
    lead: "İlk iki hafta:",
    text: "Plan uygulanırken günlük öğünler danışan portalı üzerinden paylaşılır. Bu süreçte zorlandığınız noktalar, açlık-tokluk deneyiminiz ve toplumsal/iş yemekleri gibi pratik sorunlar üzerinden plan ince ayarlanır.",
  },
  {
    kind: "strongP",
    lead: "3.–8. hafta:",
    text: "Metabolik göstergeler stabilize olmaya başlar; bel çevresi küçülmesi, uyku ve enerji kalitesinde artış gözlenir. Plan, süreç içinde 2–3 kez güncellenir. Bu noktada doktorun istediği kontrol tahlillerine hazırlık başlar.",
  },
  {
    kind: "strongP",
    lead: "Sonrası:",
    text: "Hedef sadece “diyet sonu” değildir. Süreç sonunda yeme alışkanlığı içselleşmiş, krizleri yönetebilen bir kişi olarak çıkmanız hedeflenir. Aylık kontrol görüşmeleriyle stabilite korunur.",
  },
];

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı — İnsülin Direnci",
  description:
    "Ankara Eryaman ofisinde ve Türkiye genelinde online insülin direnci beslenme danışmanlığı.",
  url: PAGE_URL,
});

const faqJsonLd = buildFaqJsonLd(faqs);

export default function InsulinDirenciPage() {
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
          { name: "İnsülin Direnci Diyeti", item: PAGE_URL },
        ]}
      />
      <SpecialtyPage
        heroBadge="Tanı sonrası kişiye özel plan · Ankara & online"
        heroBadgeIcon={HeartPulse}
        titleLead="İnsülin Direnci Diyeti"
        titleHighlight="— Ankara"
        intro="İnsülin direnci, sadece “kilo verme” meselesi değil — metabolizmanın iç dengesinin bozulduğu, doğru beslenme ve yaşam düzenlemesiyle gerilemesi mümkün bir tablodur. Ankara Eryaman ofisimde yüz yüze veya Türkiye'nin her yerinden online olarak; tahlillerinize, semptomlarınıza ve yaşam tarzınıza özel bir beslenme planıyla süreci birlikte yürütüyoruz."
        whatsappLink={whatsappLink}
        body={body}
        principlesIntro="Tek bir “insülin direnci diyeti” yoktur. Plan, bireysel parametrelerinize göre tasarlanır."
        principles={principles}
        process={process}
        faqs={faqs}
        ctaTitle="Tanınız varsa, sürece bugün başlayabiliriz"
        ctaText="WhatsApp'tan ulaşın, kısa bir ön görüşmeyle tahlilleriniz ve hedefleriniz üzerinden uygunluğu birlikte değerlendirelim."
        related={[
          { href: "/fonksiyonel-tip-diyetisyeni-ankara", label: "Fonksiyonel tıp" },
          { href: "/pcos-diyetisyen-ankara", label: "PCOS diyetisyeni" },
          { href: "/eryaman-diyetisyen", label: "Eryaman ofisi" },
          { href: "/online-diyet-ankara", label: "Online diyet" },
          { href: "/programlar", label: "Programlar" },
        ]}
      />
    </>
  );
}
