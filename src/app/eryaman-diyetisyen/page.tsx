import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, MapPin, CalendarCheck2, Smartphone } from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Eryaman Diyetisyen — Kişiye Özel Beslenme | Ezgi Evgin Aktaş",
  description:
    "Eryaman ve Etimesgut'ta diyetisyen arıyorsanız doğru yerdesiniz. Yüz yüze veya online beslenme danışmanlığı, haftalık takip ve kişiye özel plan.",
  keywords: [
    "eryaman diyetisyen",
    "eryaman beslenme danışmanı",
    "etimesgut diyetisyen",
    "eryaman kilo verme",
    "eryaman online diyetisyen",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/eryaman-diyetisyen",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Eryaman bölgesinde diyetisyen randevusu almak istiyorum.",
  "eryaman-diyetisyen"
);

const features = [
  {
    icon: MapPin,
    title: "Kolay Ulaşım, Tanıdık Semt",
    description:
      "Etimesgut ilçesi sınırlarında, Eryaman'a birkaç dakika mesafede ofis. Toplu taşıma ve araçla rahat erişim.",
  },
  {
    icon: CalendarCheck2,
    title: "Haftalık Birebir Görüşme",
    description:
      "Her hafta yüz yüze veya online; süreciniz değerlendirilir, planınız güncellenir, motivasyonunuz korunur.",
  },
  {
    icon: Smartphone,
    title: "Görüşme Arası Sürekli Destek",
    description:
      "Danışan portalından öğün paylaşımı, hatırlatıcılar ve gelişim grafikleriyle görüşmeler arasında da yalnız kalmazsınız.",
  },
];

export default function EryamanDiyetisyenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/40 to-cyan-50/40">
      <article>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--brand-dark)]">
                Eryaman Diyetisyen:{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  Yanı Başınızda Uzman Destek
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Eryaman veya Etimesgut&apos;ta diyetisyen arıyorsanız, ofisimiz
                tam size göre konumlanmış durumda. Kilo yönetimi, sağlıklı
                beslenme alışkanlığı veya kronik hastalıklarda diyet desteği —
                hangisi olursa olsun, süreci birlikte planlıyor ve haftalık
                görüşmelerle adım adım ilerliyoruz. Aynı disiplini online olarak
                da sürdürebilirsiniz.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 px-8 min-h-[44px]">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Randevu Al
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
              {features.map((f) => (
                <Card key={f.title} className="p-6 hover:shadow-lg transition-shadow">
                  <f.icon className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
                  <h2 className="font-semibold mb-2">{f.title}</h2>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-14 max-w-prose mx-auto text-left space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
                Eryaman&apos;da diyetisyen desteği neden fark yaratır?
              </h2>
              <p>
                Semt dışından uzak bir ofise gitmek, zaten yoğun bir günün
                üstüne ekstra yük demek. Eryaman–Etimesgut hattındaki
                kliniğimiz bu sorunu ortadan kaldırır; randevunuza kolay ulaşır,
                görüşme sonrası günlük rutininize hemen dönersiniz. Başkent
                Üniversitesi Beslenme ve Diyetetik mezunu uzman diyetisyen Ezgi
                Evgin Aktaş, 2016&apos;dan bu yana kendi merkezinde yasaksız ve
                sürdürülebilir beslenme yaklaşımıyla bin&apos;den fazla danışana
                rehberlik etmiştir.
              </p>

              <p>
                Eryaman dışından gelenler veya yoğun temposu olanlar için{" "}
                <Link
                  href="/online-diyet-ankara"
                  className="text-primary font-medium hover:underline"
                >
                  online diyet
                </Link>{" "}
                seçeneği de aynı kalite standardında sunulmaktadır. Genel Ankara
                aramaları için{" "}
                <Link
                  href="/ankara-diyetisyen"
                  className="text-primary font-medium hover:underline"
                >
                  Ankara diyetisyen
                </Link>{" "}
                sayfamıza, kilo verme odağı için{" "}
                <Link
                  href="/ankara-kilo-verme-diyetisyen"
                  className="text-primary font-medium hover:underline"
                >
                  Ankara kilo verme
                </Link>{" "}
                sayfamıza göz atabilirsiniz.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/programlar"
                className="text-primary hover:underline font-medium"
              >
                Takip sistemini incele
              </Link>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <Link
                href="/hakkimda"
                className="text-primary hover:underline font-medium"
              >
                Diyetisyen hakkında
              </Link>
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
              <Link
                href="/mobil-uygulamamiz"
                className="text-primary hover:underline font-medium"
              >
                Danışan uygulaması
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
