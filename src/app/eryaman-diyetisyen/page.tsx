import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Eryaman Diyetisyen | Ezgi Evgin Aktaş",
  description:
    "Eryaman diyetisyen arayışınız için online ve yüz yüze beslenme danışmanlığı. Kişiye özel kilo verme ve sağlıklı beslenme programları.",
  keywords: [
    "eryaman diyetisyen",
    "eryaman online diyetisyen",
    "eryaman kilo verme",
    "etimesgut diyetisyen",
  ],
};

const whatsappLink =
  "https://api.whatsapp.com/send?phone=905462650440&text=Merhaba,%20Eryaman%20i%C3%A7in%20diyetisyen%20randevusu%20almak%20istiyorum.";

export default function EryamanDiyetisyenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/40 to-cyan-50/40">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-5">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Eryaman&apos;da{" "}
              <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Diyetisyen Desteği
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kilo verme, sürdürülebilir beslenme ve online takip sistemiyle
              Eryaman/Etimesgut bölgesinde kişiye özel diyetisyen danışmanlığı.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Randevu Al
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              "Kişiye özel beslenme planı",
              "Haftalık takip ve güncelleme",
              "Online + yüz yüze danışmanlık",
            ].map((item) => (
              <Card key={item} className="p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand-success)] mt-0.5" />
                  <p className="text-sm">{item}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/programlar" className="text-primary hover:underline">
              Programları incele
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
