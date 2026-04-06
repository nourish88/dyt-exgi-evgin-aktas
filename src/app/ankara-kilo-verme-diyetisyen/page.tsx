import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, TrendingDown, Salad, Activity } from "lucide-react";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Ankara Kilo Verme Diyetisyeni | Ezgi Evgin Aktaş",
  description:
    "Ankara'da kilo verme diyetisyeni desteği ile sürdürülebilir beslenme. Online ve yüz yüze danışmanlık, kişiye özel plan ve düzenli takip.",
  keywords: [
    "ankara kilo verme diyetisyeni",
    "ankara kilo verme",
    "online diyetisyen ankara",
    "eryaman diyetisyen",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com/ankara-kilo-verme-diyetisyen",
  },
};

const whatsappLink = buildWhatsAppApiUrl(
  "Merhaba, Ankara kilo verme programı için randevu almak istiyorum.",
  "ankara-kilo-verme-diyetisyen"
);

export default function AnkaraKiloVermeDiyetisyenPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Ankara&apos;da{" "}
            <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              Kilo Verme Diyetisyeni
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hızlı değil kalıcı sonuç hedefleyen, kişiye özel ve uygulanabilir
            beslenme programlarıyla sağlıklı kilo yönetimi.
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
            <Card className="p-6">
              <TrendingDown className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
              <h2 className="font-semibold mb-2">Kilo Yönetimi</h2>
              <p className="text-sm text-muted-foreground">
                Hedefe göre planlanan, sürdürülebilir ve ölçülebilir süreç.
              </p>
            </Card>
            <Card className="p-6">
              <Salad className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
              <h2 className="font-semibold mb-2">Kişiye Özel Plan</h2>
              <p className="text-sm text-muted-foreground">
                Yaşam düzeninize göre esnek ve uygulanabilir diyet yaklaşımı.
              </p>
            </Card>
            <Card className="p-6">
              <Activity className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
              <h2 className="font-semibold mb-2">Düzenli Takip</h2>
              <p className="text-sm text-muted-foreground">
                Haftalık kontrol, motivasyon desteği ve gerekli revizyonlar.
              </p>
            </Card>
          </div>

          <div className="mt-14 max-w-prose mx-auto px-4 text-center space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              Ankara&apos;da kilo verme diyetisyeni ile çalışmak; sadece liste
              vermek değil, haftalık revizyon ve günlük iletişimle süreci
              sürdürmektir. Yüz yüze{" "}
              <Link href="/eryaman-diyetisyen" className="text-primary font-medium hover:underline">
                Eryaman diyetisyen
              </Link>{" "}
              ofisinde veya{" "}
              <Link href="/online-diyet-ankara" className="text-primary font-medium hover:underline">
                online diyet
              </Link>{" "}
              ile şehrin her yerinden aynı takip modelini kullanabilirsiniz.
            </p>
            <p>
              Tüm hizmet profili için{" "}
              <Link href="/ankara-diyetisyen" className="text-primary font-medium hover:underline">
                Ankara diyetisyen
              </Link>{" "}
              ve{" "}
              <Link href="/ezgi-evgin-diyetisyen" className="text-primary font-medium hover:underline">
                Ezgi Evgin Aktaş
              </Link>{" "}
              sayfalarımıza bakın.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
