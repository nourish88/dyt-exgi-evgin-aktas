import type { Metadata } from "next";
import {
  TrendingDown,
  Salad,
  Activity,
  Target,
  Heart,
  Utensils,
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

const PAGE_URL = "https://ezgievginaktas.com/ankara-kilo-verme-diyetisyen";

export const metadata: Metadata = {
  title: "Ankara Kilo Verme Diyetisyeni — Kalıcı Sonuç",
  description:
    "Ankara'da kilo vermek istiyorsanız, yasaksız ve kişiye özel beslenme planıyla sürdürülebilir sonuca ulaşın. Haftalık takip, danışan portalı ve uzman destek.",
  keywords: [
    "ankara kilo verme",
    "ankara kilo verme diyetisyeni",
    "ankara zayıflama",
    "kilo yönetimi ankara",
    "online diyetisyen ankara",
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
    title: "Ankara Kilo Verme Diyetisyeni — Kalıcı Sonuç",
    description:
      "Ankara'da kilo vermek için yasaksız ve kişiye özel beslenme planı. Haftalık takip ve uzman destek.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankara Kilo Verme Diyetisyeni — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Yasaksız, kişiye özel beslenme planıyla sürdürülebilir kilo verme.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, kilo verme programı hakkında bilgi almak istiyorum.",
  "ankara-kilo-verme-diyetisyen"
);

const faqs: SpecialtyFaq[] = [
  {
    q: "Aç kalacak mıyım?",
    a: "Kesinlikle hayır. Kilo vermek aç kalmak değil, doğru besinleri doğru porsiyonlarda ve zamanlarda tüketmektir. Planınız, tokluk hissinizi maksimize edecek lif ve protein dengesiyle oluşturulur.",
  },
  {
    q: "Yasaklı yiyecekler olacak mı?",
    a: "Yasaklar yerine 'denge' prensibini benimsiyoruz. Sevdiğiniz tatlıları veya yemekleri tamamen hayatınızdan çıkarmak yerine, bunları günlük kalori ve makro bütçenize nasıl entegre edebileceğinizi öğreniyoruz.",
  },
  {
    q: "Listeler ne sıklıkla güncellenir?",
    a: "Beslenme planınız, haftalık kontrollerimizdeki ölçüm sonuçlarınıza, sosyal takviminize ve geri bildirimlerinize göre her hafta yenilenir. Böylece metabolizmanızın duraklamasını (plato) engelleriz.",
  },
  {
    q: "Sadece liste mi veriyorsunuz?",
    a: "Hayır. Amacımız sadece bir kağıt parçası vermek değil, size beslenme eğitimi vermektir. Porsiyon kontrolü, etiket okuma ve duygusal yeme ile başa çıkma stratejileri sürecimizin temel bir parçasıdır.",
  },
  {
    q: "Online veya Yüz Yüze görüşme fark eder mi?",
    a: "Eryaman ofisimizde yüz yüze görüşmelerde vücut analizi cihazı (BİA) kullanıyoruz. Online takiplerde ise evdeki tartınız ve mezura ölçümlerinizle ilerliyoruz. Her iki yöntemde de uygulanan diyet stratejisi ve elde edilen başarı oranı aynıdır.",
  },
];

const body: SpecialtyParagraph[] = [
  { kind: "h2", text: "Neden genel diyetler işe yaramaz?" },
  {
    kind: "p",
    text: "Kilo vermek çoğu zaman 'ne yememem lazım' sorusuyla başlar, oysa doğru soru 'nasıl bir düzen kurabilirim' olmalı. İnternetteki standart listeler kısa sürede hızlı kilo vermenizi sağlayabilir, ancak bu kilolar normal yeme düzeninize döndüğünüzde fazlasıyla geri alınır (Yo-yo etkisi).",
  },
  {
    kind: "p",
    text: "Başkent Üniversitesi Beslenme ve Diyetetik mezunu Ezgi Evgin Beslenme ve Diyet Danışmanlığı olarak, kilonuzu etkileyen değişkenleri (uyku düzeniniz, iş temponuz, stres kaynaklarınız, metabolik geçmişiniz) ilk görüşmede analiz eder ve planı doğrudan sizin yaşamınıza göre şekillendiririz.",
  },
  { kind: "h2", text: "Kalıcı Kilo Verme Kimler İçin Uygundur?" },
  {
    kind: "ul",
    items: [
      "Sürekli diyet yapıp bırakma döngüsünden (yo-yo diyeti) yorulanlar",
      "Kendi yaşam tarzına ve çalışma saatlerine uygun bir beslenme düzeni arayanlar",
      "Yasaklardan sıkılan, sevdiği yemekleri yiyerek kilo vermek isteyenler",
      "Kilo verirken kas kaybı yaşamak istemeyen, enerjisini korumak isteyenler",
      "Sadece zayıflamak değil, sağlıklı beslenmeyi yaşam tarzı haline getirmek isteyenler",
    ],
  },
];

const principles = [
  {
    icon: TrendingDown,
    title: "Hızlı Değil, Kalıcı Sonuç",
    description:
      "Şok diyetler yerine metabolizmanıza ve yaşam temponuza uygun, adım adım ilerleyen kalıcı bir süreç.",
  },
  {
    icon: Salad,
    title: "Yasaksız Beslenme Planı",
    description:
      "Sevdiğiniz besinleri tamamen çıkarmak yerine porsiyon ve zamanlama dengesine dayalı, uygulanabilir bir yaklaşım.",
  },
  {
    icon: Target,
    title: "Bireysel Hedefleme",
    description:
      "Genelgeçer kalori hedefleri değil, sizin yaşınıza, boyunuza, cinsiyetinize ve aktivite düzeyinize özel makro dağılımı.",
  },
  {
    icon: Activity,
    title: "Dinamik Revizyon",
    description:
      "Her hafta değişen hayat şartlarınıza (tatil, kutlama, yoğun iş haftası) göre esneyebilen dinamik planlar.",
  },
  {
    icon: Heart,
    title: "Psikolojik Destek",
    description:
      "Duygusal yeme krizleri, stres kaynaklı atıştırmalar ve motivasyon kayıplarına karşı yanınızda olan uzman rehberliği.",
  },
  {
    icon: Utensils,
    title: "Besin Eğitimi",
    description:
      "Neyi neden yediğinizi anlama, porsiyon kontrolü pratiği ve uzun vadede kendi diyetisyeniniz olma becerisi.",
  },
];

const process: SpecialtyParagraph[] = [
  { kind: "h2", text: "Süreç nasıl ilerliyor?" },
  {
    kind: "strongP",
    lead: "İlk Analiz Görüşmesi:",
    text: "Kan tahlilleriniz, yaşam tarzınız, sağlık geçmişiniz ve beslenme alışkanlıklarınız detaylı olarak incelenir. Size özel hedefler belirlenir.",
  },
  {
    kind: "strongP",
    lead: "Kişiselleştirilmiş Plan:",
    text: "İlk görüşme sonrasında, günlük rutininize %100 uyumlu, aç bırakmayan ve yasakların olmadığı ilk beslenme planınız oluşturulur.",
  },
  {
    kind: "strongP",
    lead: "Haftalık Takip:",
    text: "Her hafta düzenli ölçüm (yüz yüze veya online) ve değerlendirme yapılır. İhtiyaçlara ve sonuçlara göre listeleriniz tamamen güncellenir.",
  },
  {
    kind: "strongP",
    lead: "Koruma Dönemi:",
    text: "Hedef kiloya ulaşıldığında, elde edilen sonucu ömür boyu korumanızı sağlayacak Kilo Koruma Programı'na geçilir.",
  },
];

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı — Kilo Verme",
  description:
    "Ankara'da sürdürülebilir, yasaksız ve kişiye özel kilo verme danışmanlığı.",
  url: PAGE_URL,
});

const faqJsonLd = buildFaqJsonLd(faqs);

export default function AnkaraKiloVermeDiyetisyenPage() {
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
          { name: "Ankara Diyetisyen", item: "https://ezgievginaktas.com/ankara-diyetisyen" },
          { name: "Kilo Verme", item: PAGE_URL },
        ]}
      />
      <SpecialtyPage
        heroBadge="Yasaksız ve Sürdürülebilir Sonuç"
        heroBadgeIcon={TrendingDown}
        titleLead="Ankara'da Kilo Vermek:"
        titleHighlight=" Sürdürülebilir ve Kişiye Özel"
        intro="Kilo vermek çoğu zaman 'ne yememem lazım' sorusuyla başlar, oysa doğru soru 'nasıl bir düzen kurabilirim' olmalı. Ankara'da kilo verme diyetisyeni olarak yaklaşımımız tam da bu: yasak listesi değil, günlük hayatınıza uyan sürdürülebilir bir beslenme planı. Haftalık görüşmeler ve danışan portalıyla süreci birlikte yönetiyoruz."
        whatsappLink={whatsappLink}
        body={body}
        principlesIntro="Başarıya ulaşmanın sırrı şok diyetlerde değil, bedeninize duyduğunuz saygıda ve uygulanan yöntemin sürdürülebilirliğindedir."
        principles={principles}
        process={process}
        faqs={faqs}
        ctaTitle="Diyet Döngüsünü Kırın, Kalıcı Sonuca Ulaşın"
        ctaText="WhatsApp'tan ulaşın, yaşam tarzınıza en uygun planı birlikte oluşturalım."
        related={[
          { href: "/eryaman-diyetisyen", label: "Eryaman ofisi" },
          { href: "/online-diyet-ankara", label: "Online diyet" },
          { href: "/insulin-direnci-diyeti-ankara", label: "İnsülin direnci" },
          { href: "/pcos-diyetisyen-ankara", label: "PCOS diyetisyeni" },
          { href: "/programlar", label: "Programlar" },
        ]}
      />
    </>
  );
}
