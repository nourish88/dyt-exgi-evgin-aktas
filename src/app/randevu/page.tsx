import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CalendarDays,
  Clock,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Laptop,
  ExternalLink,
} from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { DOKTORTAKVIMI_PROFILE_URL } from "@/lib/external-links";

export const metadata: Metadata = {
  title: "Randevu Al — Online & Yüz Yüze Görüşme",
  description: "Ankara Eryaman ve online beslenme danışmanlığı için randevu alın. İlk görüşme tamamen ücretsizdir. Hemen WhatsApp'tan iletişime geçin.",
  alternates: {
    canonical: "https://ezgievginaktas.com/randevu" ,
    languages: {
      "tr-TR": "https://ezgievginaktas.com/randevu" ,
      "x-default": "https://ezgievginaktas.com/randevu" ,
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com/randevu",
    title: "Randevu Al | Ezgi Evgin Beslenme ve Diyet Danışmanlığı",
    description:
      "Ankara Eryaman ve online beslenme danışmanlığı için randevu alın.",
  },
};

const DOKTOR_TAKVIMI_URL = DOKTORTAKVIMI_PROFILE_URL;
const WA_RANDEVU = buildWhatsAppApiUrl(
  "Merhaba, randevu almak istiyorum.",
  "randevu_sayfasi"
);

const steps = [
  { step: "1", title: "Tarih & Saat Seçin", desc: "Uygun olduğunuz gün ve saati seçin." },
  { step: "2", title: "Bilgilerinizi Girin", desc: "Ad-soyad ve iletişim bilgilerinizi doldurun." },
  { step: "3", title: "Onay Alın", desc: "Randevunuz onaylanır, hatırlatma gönderilir." },
];

const sessionTypes = [
  {
    icon: MapPin,
    title: "Yüz Yüze Seans",
    desc: "Eryaman Altay Mah. — Ata Yıldız Plaza Kat:8",
    duration: "50 dakika",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: Laptop,
    title: "Online Seans",
    desc: "WhatsApp, Zoom veya Google Meet üzerinden",
    duration: "50 dakika",
    color: "from-cyan-500 to-blue-400",
  },
];

const randevuFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Randevu nasıl alınır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web sitesinden DoktorTakvimi üzerinden online randevu alabilir, WhatsApp ile mesaj gönderebilir veya 0546 265 04 40 numarasını arayabilirsiniz. Tarih ve saat seçimi sonrası onay mesajı gönderilir.",
      },
    },
    {
      "@type": "Question",
      name: "Görüşme süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İlk değerlendirme görüşmesi ortalama 50 dakika sürer. Devam görüşmeleri programınıza göre 30-45 dakika arasında planlanır.",
      },
    },
    {
      "@type": "Question",
      name: "Online görüşme hangi platformlardan yapılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online görüşmeler WhatsApp görüntülü arama, Zoom veya Google Meet üzerinden yapılmaktadır. Tercihinizi randevu sırasında bildirebilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Yüz yüze görüşme nerede yapılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eryaman Altay Mahallesi, Orhan Bey Caddesi, Ata Yıldız Plaza Kat:8 adresindeki ofisimizde yüz yüze görüşme yapılmaktadır.",
      },
    },
    {
      "@type": "Question",
      name: "Randevumu iptal veya erteleyebilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Randevu saatinden en az 24 saat önce WhatsApp veya telefon ile bildirmeniz koşuluyla iptal veya erteleme yapılabilir.",
      },
    },
  ],
};

export default function RandevuPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(randevuFaqJsonLd) }}
      />
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-pink-50 via-cyan-50 to-green-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <CalendarDays className="w-4 h-4" />
            Randevu Al
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sağlıklı Yaşama{" "}
            <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent">
              İlk Adımı Atın
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Yüz yüze veya online — size en uygun şekilde görüşelim.
          </p>
        </div>
      </section>

      {/* Seans tipleri */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {sessionTypes.map((s) => (
              <Card key={s.title} className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${s.color} flex items-center justify-center mb-4`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-500">
                  <Clock className="w-3.5 h-3.5" />
                  {s.duration}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Randevu al CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-2">Randevu Almak Çok Kolay</h2>
          <p className="text-muted-foreground mb-8">
            Doktor Takvimi üzerinden uygun saati seçip anında randevu oluşturabilirsiniz veya doğrudan ofisimin WhatsApp hattından asistanımla görüşerek randevu ayarlayabilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href={DOKTOR_TAKVIMI_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="h-13 px-8 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) text-white hover:opacity-90 gap-2 text-base"
              >
                <CalendarDays className="w-5 h-5" />
                Doktor Takvimi'nden Randevu Al
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <a href={WA_RANDEVU} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-13 px-8 gap-2 text-base">
                <MessageCircle className="w-5 h-5 text-green-600" />
                WhatsApp ile İletişim
              </Button>
            </a>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 font-bold text-sm flex items-center justify-center shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">{s.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {[
              { q: "İlk görüşme ne kadar sürer?", a: "İlk değerlendirme seansı yaklaşık 50–60 dakika sürer. Beslenme alışkanlıklarınız, sağlık geçmişiniz ve hedefleriniz detaylı olarak ele alınır." },
              { q: "Programım ne zaman hazır olur?", a: "İlk görüşmenin ardından 24–48 saat içinde kişiye özel beslenme programınız hazırlanır." },
              { q: "Online seans yüz yüze kadar etkili mi?", a: "Evet. Online seanslarda aynı içerik ve takip süreci uygulanır. Türkiye'nin her yerinden danışanlarımız mevcut." },
              { q: "Ödeme nasıl yapılır?", a: "Banka havalesi veya EFT ile ödeme yapabilirsiniz. Detaylar randevu sonrası iletilir." },
            ].map(({ q, a }) => (
              <Card key={q} className="p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">{q}</p>
                    <p className="text-sm text-muted-foreground mt-1">{a}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
