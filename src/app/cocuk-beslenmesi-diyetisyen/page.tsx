import type { Metadata } from "next";
import {
  Baby,
  Users,
  Apple,
  Salad,
  Smile,
  Clock,
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

const PAGE_URL = "https://ezgievginaktas.com/cocuk-beslenmesi-diyetisyen";

export const metadata: Metadata = {
  title: "Çocuk Beslenmesi Diyetisyeni — Ankara",
  description:
    "Çocuk ve ergen beslenmesinde uzman diyetisyen desteği. Sağlıklı büyüme, kilo yönetimi ve seçici yeme alışkanlığı için Ankara Eryaman ofisinde ve online aileyle birlikte planlanan beslenme.",
  keywords: [
    "çocuk beslenmesi diyetisyen",
    "ankara çocuk diyetisyeni",
    "ergen beslenmesi",
    "çocuk kilo verme",
    "seçici yeme",
    "online çocuk diyetisyeni",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Çocuk Beslenmesi Diyetisyeni — Aile Odaklı Yaklaşım",
    description:
      "Çocuk ve ergen beslenmesinde sağlıklı büyüme, kilo yönetimi ve seçici yeme alışkanlığı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Çocuk Beslenmesi Diyetisyeni — Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Aile odaklı, baskısız çocuk beslenmesi danışmanlığı — Ankara Eryaman ve online.",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, çocuğum için diyetisyen danışmanlığı almak istiyorum.",
  "cocuk-beslenmesi-diyetisyen"
);

const faqs: SpecialtyFaq[] = [
  {
    q: "Çocuğum diyet yapmalı mı?",
    a: "Çocuklarda “diyet” kavramı yanlış bir çerçevedir. Hedef, büyüme döneminde sağlıklı kilo seyri ve doğru beslenme alışkanlığı edindirmektir. Plan; çocuğun yaşı, aktivite düzeyi ve aile mutfak rutiniyle uyumlu, baskısız bir biçimde oluşturulur.",
  },
  {
    q: "Çocuğum hiçbir sebze yemiyor, ne yapmalıyım?",
    a: "Seçici yeme, 2–7 yaş aralığında özellikle yaygındır. Cezalandırma veya pazarlık kısa vadede işe yarayabilir ama uzun vadede ilişkiyi bozar. Aile mutfak alışkanlıkları, sunum biçimi, çocuğun süreç katılımı ve sabırlı tekrar; etkili müdahale alanlarıdır.",
  },
  {
    q: "Ergen kızım sürekli diyet yapmak istiyor, nasıl yaklaşılmalı?",
    a: "Ergenlik döneminde aşırı kısıtlayıcı ve estetik odaklı diyetler ciddi riskler taşır (yeme bozukluğu, büyümede gecikme, demir/D vitamini eksiklikleri). Burada aileyle birlikte; sağlıklı vücut algısı, dengeli beslenme ve bilinçli seçim üzerine kurulu bir yaklaşım önerilir.",
  },
  {
    q: "Çocukluk obezitesi nasıl yönetilir?",
    a: "Hedef, kilo verdirmek değil — büyüme sürecinde kilo seyrini stabilize etmek ve yaşam tarzı değişikliği yerleştirmektir. Aile katılımı kritik; çünkü çocuk tek başına değişemez. Plan, evdeki tüm bireyleri kapsayacak şekilde kurgulanır.",
  },
  {
    q: "Okul yemekleri ve atıştırmalıklar planda nasıl yer alıyor?",
    a: "Plan, ev dışı yeme gerçeğini içeren bir tasarımla yapılır. Okul kantininde olanlar, beslenme çantasına alternatifler ve haftada birkaç kez yenebilecek esnek seçimler (pizza, fast food vs.) plana entegre edilir. Mutlak yasak değil, denge yaklaşımı esastır.",
  },
  {
    q: "Çocuk için online görüşme uygun mu?",
    a: "Evet, özellikle ergenlerde çoğu zaman daha rahattır. Küçük çocuklarda ilk görüşmenin yüz yüze yapılması (çocukla tanışma, ortam algısı) tercih edilir; sonraki takipler online sürdürülebilir.",
  },
];

const body: SpecialtyParagraph[] = [
  { kind: "h2", text: "Çocuk ve ergen beslenmesi neden ayrı bir yaklaşım ister?" },
  {
    kind: "p",
    text: "Çocuklar yetişkin değildir; küçük yetişkin olarak da değerlendirilmemelidir. Büyüme döneminde olan bir bedenin enerji ve besin ögesi ihtiyacı, yetişkinden hem nitel hem nicel olarak farklıdır. Aynı zamanda yeme davranışı; aile dinamikleri, okul ortamı, akran etkisi ve duygusal süreçlerle iç içe geçmiştir. Doğru yaklaşım, sadece besinleri değil bu bağlamı da görmektir.",
  },
  {
    kind: "p",
    text: "Çocuğa “diyet yaptırmak” yerine, ailenin tamamını içine alan bir beslenme kültürü oluşturmak amaçlanır. Çünkü çocuk evde ne görürse onu içselleştirir. Kısıtlama, cezalandırma ve etiketleme (örn. “şişman”, “zayıf”) uzun vadede yeme bozukluğu ve psikolojik travma riski yaratır.",
  },
  { kind: "h2", text: "Hangi durumlar için danışmanlık alınabilir?" },
  {
    kind: "ul",
    items: [
      "Çocuğun yaşına göre kilo seyri (alt veya üst persentil) değerlendirilmesi",
      "Seçici yeme ve yeni besinlere kapalılık",
      "Yetersiz büyüme veya iştahsızlık",
      "Çocukluk veya ergenlik obezitesi",
      "Ergenlik döneminde sağlıksız diyet eğilimi veya yeme davranışında değişim",
      "Doktor tanılı durumlar (insülin direnci, çölyak, alerjiler, vb.)",
      "Aile beslenme alışkanlıklarını topyekûn değiştirme isteği",
    ],
  },
];

const principles = [
  {
    icon: Users,
    title: "Aile odaklı yaklaşım",
    description:
      "Çocuk tek başına değişemez. Plan; aile mutfak alışkanlıkları, kardeşler, anne-baba modeli üzerinden tasarlanır.",
  },
  {
    icon: Smile,
    title: "Baskısız ve sevgi dolu",
    description:
      "Yasak liste, cezalandırma veya etiketleme yok. Çocukla iletişim, süreç boyunca olumlu pekiştirme ve katılım üzerine kurulur.",
  },
  {
    icon: Apple,
    title: "Yaş ve aktiviteye göre",
    description:
      "Okul öncesi, ilkokul, ortaokul ve ergenlik dönemleri farklıdır. Plan yaşa ve günlük aktivite düzeyine özel ayarlanır.",
  },
  {
    icon: Salad,
    title: "Çeşitlilik ve sunum",
    description:
      "Aynı besinin farklı sunum ve pişirme biçimi denenir. Çocuğun mutfakta sürece katılması bağ kurmasını sağlar.",
  },
  {
    icon: Clock,
    title: "Öğün düzeni",
    description:
      "Düzenli ana ve ara öğünler; okul, uyku ve aktiviteyle uyumlu kurgulanır. Atlama veya geç öğünlerden kaçınılır.",
  },
  {
    icon: Baby,
    title: "Büyümeye saygı",
    description:
      "Hedef “zayıflatmak” değil, sağlıklı büyüme eğrisini korumaktır. Pediatri takibiyle uyumlu, gelişimi destekleyen bir plan.",
  },
];

const process: SpecialtyParagraph[] = [
  { kind: "h2", text: "Süreç nasıl ilerliyor?" },
  {
    kind: "strongP",
    lead: "İlk görüşme:",
    text: "Çocuğun yaşı, persentil tablosu, varsa doktor takibi, aile beslenme alışkanlıkları, okul rutini ve psikososyal bağlam değerlendirilir. Mümkünse anne-baba ile birlikte (uygun yaş için çocukla beraber) yapılır.",
  },
  {
    kind: "strongP",
    lead: "İlk 2–4 hafta:",
    text: "Plan uygulanırken aile içi etkileşim, çocuğun tepkileri ve pratik zorluklar haftalık görüşmelerle değerlendirilir. Mutfak alışkanlığı değişimleri adım adım eklenir.",
  },
  {
    kind: "strongP",
    lead: "2.–3. ay:",
    text: "Büyüme seyri, beslenme çeşitliliği ve yeme davranışındaki gelişim takip edilir. Aileyle birlikte yeni hedefler belirlenir.",
  },
  {
    kind: "strongP",
    lead: "Süreklilik:",
    text: "Çocuklar büyüdükçe ihtiyaçları değişir; planın da büyümeye paralel güncellenmesi gerekir. Düzenli kontrol görüşmeleriyle uzun vadeli takip sürdürülür.",
  },
];

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı — Çocuk Beslenmesi",
  description:
    "Çocuk ve ergen beslenmesi için kişiye özel danışmanlık, aile odaklı yaklaşım. Ankara Eryaman ve online.",
  url: PAGE_URL,
});

const faqJsonLd = buildFaqJsonLd(faqs);

export default function CocukPage() {
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
          { name: "Çocuk Beslenmesi Diyetisyeni", item: PAGE_URL },
        ]}
      />
      <SpecialtyPage
        heroBadge="Aile odaklı, baskısız plan · Ankara & online"
        heroBadgeIcon={Baby}
        titleLead="Çocuk Beslenmesi Diyetisyeni"
        titleHighlight="— Ankara"
        intro="Çocuk ve ergen beslenmesinde hedef “diyet” değil; sağlıklı büyüme, doğru alışkanlık ve sevgi dolu bir yemek ilişkisi kurmaktır. Ankara Eryaman ofisinde yüz yüze veya Türkiye genelinde online; aileyi de içine alan, çocuğunuza özel kurgulanmış bir beslenme planıyla süreci birlikte yürütüyoruz."
        whatsappLink={whatsappLink}
        body={body}
        principlesIntro="Çocuk beslenmesinde &quot;ne yiyeceği&quot; kadar &quot;nasıl bir ilişki kuracağı&quot; da önemlidir. Plan, çocuğun yaşına ve ailenin günlük rutinine göre kurgulanır."
        principles={principles}
        process={process}
        faqs={faqs}
        ctaTitle="Çocuğunuz için sağlıklı bir beslenme yolculuğu başlatalım"
        ctaText="WhatsApp'tan ulaşın, kısa bir ön görüşmeyle çocuğunuzun ihtiyaçlarını ve sürecinizi birlikte değerlendirelim."
        related={[
          { href: "/eryaman-diyetisyen", label: "Eryaman ofisi" },
          { href: "/online-diyet-ankara", label: "Online diyet" },
          { href: "/hamilelik-beslenmesi-ankara", label: "Hamilelik beslenmesi" },
          { href: "/ankara-diyetisyen", label: "Ankara diyetisyen" },
          { href: "/programlar", label: "Programlar" },
        ]}
      />
    </>
  );
}
