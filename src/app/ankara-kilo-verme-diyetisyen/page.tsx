import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, TrendingDown, Salad, Activity } from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Ankara Kilo Verme Diyetisyeni — Kalıcı Sonuç | Ezgi Evgin Aktaş",
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
    canonical: "https://ezgievginaktas.com/ankara-kilo-verme-diyetisyen",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, kilo verme programı hakkında bilgi almak istiyorum.",
  "ankara-kilo-verme-diyetisyen"
);

const features = [
  {
    icon: TrendingDown,
    title: "Hızlı Değil, Kalıcı Sonuç",
    description:
      "Şok diyetler yerine metabolizmanıza ve yaşam tempounuza uygun, adım adım ilerleyen bir süreç.",
  },
  {
    icon: Salad,
    title: "Yasaksız Beslenme Planı",
    description:
      "Sevdiğiniz besinleri tamamen çıkarmak yerine porsiyon ve zamanlama dengesine dayalı, uygulanabilir bir yaklaşım.",
  },
  {
    icon: Activity,
    title: "Haftalık Ölçüm ve Revizyon",
    description:
      "Her hafta birlikte değerlendirme; hedefler güncellenur, plan ihtiyaca göre şekillendirilir.",
  },
];

export default function AnkaraKiloVermeDiyetisyenPage() {
  return (
    <div className="min-h-screen bg-white">
      <article>
        <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-cyan-50">
          <div className="container mx-auto px-4 max-w-5xl text-center space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--brand-dark)]">
              Ankara&apos;da Kilo Vermek:{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Sürdürülebilir ve Kişiye Özel
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kilo vermek çoğu zaman &ldquo;ne yememem lazım&rdquo; sorusuyla
              başlar, oysa doğru soru &ldquo;nasıl bir düzen kurabilirim&rdquo;
              olmalı. Ankara&apos;da kilo verme diyetisyeni olarak yaklaşımımız
              tam da bu: yasak listesi değil, günlük hayatınıza uyan
              sürdürülebilir bir beslenme planı. Haftalık görüşmeler ve danışan
              portalıyla süreci birlikte yönetiyoruz.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 px-8 min-h-[44px]">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Randevu Al
              </Button>
            </a>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="p-6 hover:shadow-lg transition-shadow">
                  <f.icon className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
                  <h2 className="font-semibold mb-2">{f.title}</h2>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-14 max-w-prose mx-auto space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
                Profesyonel destek neden fark yaratır?
              </h2>
              <p>
                İnternetteki genel listeler herkese aynı şeyi söyler; oysa
                kilonuzu etkileyen faktörler — uyku düzeniniz, iş temponuz, stres
                kaynaklarınız, metabolik geçmişiniz — size özeldir. Başkent
                Üniversitesi Beslenme ve Diyetetik mezunu Ezgi Evgin Aktaş, bu
                değişkenleri ilk görüşmede analiz eder ve planı doğrudan sizin
                yaşamınıza göre şekillendirir. 2016&apos;dan bu yana bin&apos;den
                fazla danışan bu yaklaşımla kalıcı sonuç elde etmiştir.
              </p>
              <p>
                Yüz yüze görüşmeler{" "}
                <Link
                  href="/eryaman-diyetisyen"
                  className="text-primary font-medium hover:underline"
                >
                  Eryaman–Etimesgut ofisinde
                </Link>
                ; şehrin her yerinden veya Ankara dışından{" "}
                <Link
                  href="/online-diyet-ankara"
                  className="text-primary font-medium hover:underline"
                >
                  online diyet
                </Link>{" "}
                ile aynı kalitede takip yapılır. Genel hizmet profili için{" "}
                <Link
                  href="/ankara-diyetisyen"
                  className="text-primary font-medium hover:underline"
                >
                  Ankara diyetisyen
                </Link>{" "}
                ve uzman hakkında detay için{" "}
                <Link
                  href="/ezgi-evgin-diyetisyen"
                  className="text-primary font-medium hover:underline"
                >
                  Ezgi Evgin Aktaş
                </Link>{" "}
                sayfalarına göz atabilirsiniz.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
