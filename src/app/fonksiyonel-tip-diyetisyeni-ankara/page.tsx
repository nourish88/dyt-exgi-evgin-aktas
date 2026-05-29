import type { Metadata } from "next";
import {
  Sparkles,
  Dna,
  Flame,
  Leaf,
  Stethoscope,
  Brain,
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

const PAGE_URL = "https://ezgievginaktas.com/fonksiyonel-tip-diyetisyeni-ankara";

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, fonksiyonel tıp beslenme danışmanlığı hakkında bilgi almak istiyorum.",
  "fonksiyonel-tip-diyetisyeni-ankara"
);

const faqs: SpecialtyFaq[] = [
  {
    q: "Fonksiyonel tıp diyetisyeni ile klasik diyetisyen arasındaki fark nedir?",
    a: "Klasik diyetisyenlik genellikle kilo yönetimi ve kalori dengesine odaklanırken; fonksiyonel tıp diyetisyenliği vücutta gelişen kronik hastalıkların, sindirim problemlerinin veya hormonal dengesizliklerin altında yatan kök nedenleri bulmayı hedefler. Hücresel düzeyde beslenme, inflamasyonu azaltma ve bağırsak sağlığı ön plandadır.",
  },
  {
    q: "Fonksiyonel tıp beslenmesi için tahlil yaptırmak zorunlu mu?",
    a: "Zorunlu olmamakla birlikte, güncel kan tahlilleriniz (hemogram, tiroit paneli, vitamin/mineral düzeyleri, açlık insülini vb.) sürecin çok daha bilimsel ilerlemesini sağlar. Varsa geçmiş tahlillerinizi inceliyor, gerekirse doktorunuzla koordine olarak yeni tahliller yönlendiriyoruz.",
  },
  {
    q: "Eliminasyon diyeti nedir ve herkese uygulanır mı?",
    a: "Eliminasyon diyeti, vücutta inflamasyona veya hassasiyete yol açma ihtimali yüksek besinlerin (glüten, süt ürünleri, şeker vb.) belirli bir süre beslenmeden çıkarılması ve ardından tek tek geri tanıtılması sürecidir. Her danışana uygulanmaz; sindirim sorunu, otoimmün rahatsızlığı veya nedeni bilinmeyen kronik şikayetleri olan kişilere özel planlanır.",
  },
  {
    q: "Hangi hastalıklarda fonksiyonel tıp beslenmesi faydalı olur?",
    a: "İrritabl Bağırsak Sendromu (İBS), geçirgen bağırsak, Hashimoto ve diğer otoimmün tiroit hastalıkları, fibromiyalji, insülin direnci, egzama/sedef gibi cilt hastalıkları ve kronik yorgunluk gibi durumlarda bütüncül beslenme tedavisi oldukça etkilidir.",
  },
  {
    q: "Online görüşmelerle süreç takip edilebilir mi?",
    a: "Evet. Danışan portalımız üzerinden beslenme günlüğü takibi, tahlil incelemeleri ve haftalık görüşmelerle Türkiye'nin ve dünyanın her yerinden online olarak fonksiyonel tıp danışmanlığı alabilirsiniz.",
  },
  {
    q: "Süreç ne kadar devam eder?",
    a: "Süreç tamamen bireyseldir. Genellikle 6 ila 8 haftalık bir eliminasyon ve iyileşme protokolü ile başlanır. Hücresel yenilenme ve bağırsak mikrobiyotasının dengelenmesi için ideal süreç 3 ila 6 ay arasında değişiklik gösterebilir.",
  },
];

const body: SpecialtyParagraph[] = [
  { kind: "h2", text: "Fonksiyonel Tıp Beslenmesi Nedir?" },
  {
    kind: "p",
    text: "Fonksiyonel tıp beslenmesi; vücuttaki semptomları tek başına baskılamak yerine, bu semptomlara yol açan hormonal dengesizlikler, kronik inflamasyon, bağırsak florasındaki bozulmalar (disbiyozis) ve besin eksiklikleri gibi kök nedenleri saptayıp ortadan kaldırmayı amaçlayan bütüncül bir beslenme yaklaşımıdır.",
  },
  {
    kind: "p",
    text: "Amacımız sadece kilo kontrolü değil; hücrelerinizin ihtiyaç duyduğu mikrobesinleri sağlamak, bağışıklık sistemini dengelemek ve sindirim sistemini restore etmektir. Bu süreçte besinleri birer kalori kaynağı olarak değil, vücuda yön veren bilgi sinyalleri olarak ele alıyoruz.",
  },
  { kind: "h2", text: "Bütüncül Beslenme Hangi Sağlık Sorunlarında Destekleyicidir?" },
  {
    kind: "ul",
    items: [
      "Sindirim Sistemi Sorunları (Gaz, şişkinlik, İrritabl Bağırsak Sendromu - IBS, Geçirgen Bağırsak, SIBO)",
      "Otoimmün Hastalıklar (Hashimoto, Romatoid Artrit, Çölyak Dışı Glüten Hassasiyeti)",
      "Hormonal ve Metabolik Bozukluklar (İnsülin Direnci, PCOS, Tiroid Düzensizlikleri)",
      "Cilt Problemleri (Akne, Egzama, Sedef Hastalığı)",
      "Kronik Ağrı ve Yorgunluk Sendromları (Fibromiyalji, Geçmeyen Yorgunluk)",
    ],
  },
];

const principles = [
  {
    icon: Dna,
    title: "Kök neden analizi",
    description:
      "Semptomların kaynağına iniyoruz. Rahatsızlığınızın altındaki hormonal, hücresel veya mikrobiyota bazlı nedenleri tahlillerle ve detaylı anamnezle sorguluyoruz.",
  },
  {
    icon: Leaf,
    title: "Eliminasyon ve onarım protokolleri",
    description:
      "Sindirimi zorlayan ve bağışıklığı uyaran besinleri geçici olarak beslenmeden çıkarıyor, bağırsak duvarını onaracak beslenme adımlarını uyguluyoruz.",
  },
  {
    icon: Flame,
    title: "Anti-inflamatuar beslenme",
    description:
      "Vücuttaki kronik yangıyı (enflamasyonu) azaltacak antioksidanlar, sağlıklı yağlar ve fonksiyonel gıdalarla zenginleştirilmiş özel bir menü kurguluyoruz.",
  },
  {
    icon: Stethoscope,
    title: "Tahlil & doktor koordinasyonu",
    description:
      "Mevcut doktor tedaviniz ve tahlil parametrelerinizle tam uyumlu çalışıyoruz. Tıbbi tedaviyi beslenme desteği ile güçlendiriyoruz.",
  },
  {
    icon: Brain,
    title: "Bağırsak-beyin aksı & stres yönetimi",
    description:
      "Sadece ne yediğiniz değil, nasıl yediğiniz de önemlidir. Stres seviyesini düşürmeye ve vagus sinirini desteklemeye yönelik yaşam tarzı tavsiyeleri sunuyoruz.",
  },
  {
    icon: Sparkles,
    title: "Bireysel mikrobesin desteği",
    description:
      "Eksik olan vitamin, mineral veya probiyotik desteklerini kan tahlilleriniz ışığında kişiye özel ve nokta atışı olacak şekilde planlıyoruz.",
  },
];

const process: SpecialtyParagraph[] = [
  { kind: "h2", text: "Süreç nasıl ilerliyor?" },
  {
    kind: "strongP",
    lead: "İlk görüşme & detaylı analiz:",
    text: "Geçmiş sağlık öykünüz, kullandığınız ilaçlar, besin hassasiyetleriniz ve tahlilleriniz en ince ayrıntısına kadar incelenir. Size özel hedefler belirlenir.",
  },
  {
    kind: "strongP",
    lead: "Eliminasyon dönemi (4-6 hafta):",
    text: "Bedeninizi yoran besin gruplarını diyetten çıkarırken, yerlerine besleyici alternatifler koyuyoruz. Danışan portalımız üzerinden her öğününüzü ve semptomlarınızı günlük takip ediyoruz.",
  },
  {
    kind: "strongP",
    lead: "Geri tanıtma (Reintrodüksiyon):",
    text: "Çıkardığımız besinleri sistematik bir protokol dahilinde tek tek beslenmeye geri ekliyor, bedeninizin hangi gıdaya nasıl tepki verdiğini (gaz, şişkinlik, yorgunluk vb.) tespit ediyoruz.",
  },
  {
    kind: "strongP",
    lead: "Sürdürülebilir yaşam planı:",
    text: "Bedeninize dost besinleri netleştirdikten sonra, hayat boyu esneklikle uygulayabileceğiniz, yasaksız ve bütüncül bir beslenme düzenine geçiş yapıyoruz.",
  },
];

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  name: "Ezgi Evgin Beslenme ve Diyet Danışmanlığı — Fonksiyonel Tıp Diyetisyeni",
  description:
    "Ankara Eryaman'da bütüncül yaklaşımla fonksiyonel tıp diyetisyeni ve beslenme danışmanlığı.",
  url: PAGE_URL,
});

const faqJsonLd = buildFaqJsonLd(faqs);

export default function FonksiyonelTipPage() {
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
          { name: "Fonksiyonel Tıp Diyetisyeni", item: PAGE_URL },
        ]}
      />
      <SpecialtyPage
        heroBadge="Bütüncül Sağlık & Hücresel Beslenme · Ankara & Online"
        heroBadgeIcon={Sparkles}
        titleLead="Fonksiyonel Tıp"
        titleHighlight="Diyetisyeni"
        intro="Kronik hastalıkların, sindirim sorunlarının ve hormonal dengesizliklerin altında yatan kök nedenleri hedefleyen bütüncül beslenme danışmanlığı. Ankara Eryaman kliniğimizde yüz yüze veya online diyet süreçlerimizle bedeninizi hücresel boyutta destekliyoruz."
        whatsappLink={whatsappLink}
        body={body}
        principlesIntro="Fonksiyonel tıp yaklaşımımızda beslenme; semptomlarınızı hafifletmenin ötesinde, vücudunuzun biyokimyasal dengesini yeniden kurmayı amaçlar."
        principles={principles}
        process={process}
        faqs={faqs}
        ctaTitle="Kronik semptomlarınız varsa — bütüncül çözümü başlatın"
        ctaText="WhatsApp üzerinden bize ulaşarak sağlık öykünüzü paylaşabilir ve size en uygun beslenme protokolünü planlayabilirsiniz."
        related={[
          { href: "/pcos-diyetisyen-ankara", label: "PCOS diyetisyeni" },
          { href: "/insulin-direnci-diyeti-ankara", label: "İnsülin direnci" },
          { href: "/eryaman-diyetisyen", label: "Eryaman ofisi" },
          { href: "/online-diyet-ankara", label: "Online diyet" },
          { href: "/programlar", label: "Programlar" },
        ]}
      />
    </>
  );
}
