import Link from "next/link";
import { Star, MapPin, Stethoscope, ExternalLink } from "lucide-react";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place/Diyetisyen+Ezgi+Evgin/@39.9669753,32.6332346,17z/data=!3m1!4b1!4m6!3m5!1s0x14d330d2f71d4659:0x83b8bf59458d8408!8m2!3d39.9669753!4d32.6358095!16s%2Fg%2F11dymr8nhs?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D";

const DOKTORTAKVIM_URL =
  "https://www.doktortakvimi.com/ezgi-evgin/diyetisyen-beslenme-uzmani/ankara";

const items = [
  {
    icon: Star,
    title: "Google yorumları",
    description: "Deneyiminizi paylaşın; doğru diyetisyeni arayanlara yardımcı olun.",
    href: GOOGLE_REVIEW_URL,
    external: true,
  },
  {
    icon: Stethoscope,
    title: "DoktorTakvimi",
    description: "Profil ve randevu bilgilerinizi tek tıkla görün.",
    href: DOKTORTAKVIM_URL,
    external: true,
  },
  {
    icon: MapPin,
    title: "Eryaman ofis · Online Türkiye",
    description: "Etimesgut–Eryaman’da yüz yüze; tüm illerden online danışmanlık.",
    href: "/iletisim",
    external: false,
  },
] as const;

export function TrustStrip() {
  return (
    <section
      className="border-y border-slate-200/80 bg-gradient-to-r from-slate-50/90 via-white to-pink-50/40"
      aria-label="Güven ve iletişim"
    >
      <div className="container mx-auto px-4 py-6 md:py-8">
        <ul className="flex flex-col gap-4 md:flex-row md:items-stretch md:justify-center md:gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            const inner = (
              <>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100 text-[var(--brand-primary)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0 text-left space-y-0.5">
                  <p className="text-sm font-semibold text-[var(--brand-dark)] flex items-center gap-1.5">
                    {item.title}
                    {item.external && (
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
                    )}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                    {item.description}
                  </p>
                </div>
              </>
            );

            const className =
              "flex gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 min-h-[44px] items-start transition-colors hover:border-[var(--brand-primary)]/30 hover:bg-white md:flex-1 md:max-w-sm";

            return (
              <li key={item.title} className="list-none">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={item.href} className={className}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
          1000+ danışan deneyimi ve sürekli online destek ile sürecinizi birlikte yönetiyoruz.
        </p>
      </div>
    </section>
  );
}
