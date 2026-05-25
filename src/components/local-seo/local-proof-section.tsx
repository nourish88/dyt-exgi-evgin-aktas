import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Star,
} from "lucide-react";
import {
  GOOGLE_BUSINESS_REVIEW_URL,
  GOOGLE_MAPS_DIRECTIONS_URL,
  INSTAGRAM_PROFILE_URL,
} from "@/lib/external-links";

type LocalProofSectionProps = {
  areaName: string;
  whatsappLink: string;
};

const proofCards = [
  {
    icon: Star,
    title: "Google yorumları",
    text: "Deneyiminizi paylaşarak Google'da doğru diyetisyeni arayanlara yol gösterebilirsiniz.",
    href: GOOGLE_BUSINESS_REVIEW_URL,
    label: "Google'da Yorum Yap",
  },
  {
    icon: Instagram,
    title: "Instagram içerikleri",
    text: "@dyt_ezgievgin hesabında ofis, beslenme ipuçları ve güncel paylaşımlar yer alır.",
    href: INSTAGRAM_PROFILE_URL,
    label: "Instagram'a Git",
  },
  {
    icon: Navigation,
    title: "Konum ve yol tarifi",
    text: "Altay Mahallesi Ata Yıldız Plaza, Optimum AVM karşısı. Harita üzerinden rotanızı açabilirsiniz.",
    href: GOOGLE_MAPS_DIRECTIONS_URL,
    label: "Haritada Aç",
  },
] as const;

export function LocalProofSection({
  areaName,
  whatsappLink,
}: LocalProofSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white/70">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-pink-100 text-xs md:text-sm font-medium text-[var(--brand-dark)]">
            <MapPin className="w-3.5 h-3.5 text-[var(--brand-primary)]" />
            Google Haritalar · Instagram · WhatsApp
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)]">
            {areaName} için güven sinyalleri tek yerde
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Yeni danışanlar randevu almadan önce genellikle Google yorumlarını,
            Instagram paylaşımlarını ve ofis konumunu birlikte kontrol eder.
            Bu bağlantılar karar sürecini hızlandırmak için görünür tutulur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {proofCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.title} className="p-5 flex flex-col">
                <Icon className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
                <h3 className="font-semibold text-[var(--brand-dark)]">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2 flex-1">
                  {card.text}
                </p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-4"
                >
                  {card.label}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--brand-primary)]/15 bg-gradient-to-br from-pink-50 to-cyan-50 p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5 items-center">
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">
                Randevu öncesi hızlı kontrol
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2">
                Google profilinden yorumları inceleyebilir, Instagram&apos;da
                ofis ve güncel içeriklere bakabilir, ardından WhatsApp&apos;tan
                size uygun görüşme modelini sorabilirsiniz.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm">
                <Link
                  href="/programlar"
                  className="text-primary hover:underline font-medium"
                >
                  Programlar
                </Link>
                <Link
                  href="/iletisim"
                  className="text-primary hover:underline font-medium"
                >
                  İletişim bilgileri
                </Link>
                <Link
                  href="/ezgi-evgin-diyetisyen"
                  className="text-primary hover:underline font-medium"
                >
                  Diyetisyen hakkında
                </Link>
              </div>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 px-7 min-h-[44px]">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Sor
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
