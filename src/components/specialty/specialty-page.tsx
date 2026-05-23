import Link from "next/link";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";

export type SpecialtyFaq = { q: string; a: string };

export type SpecialtyPrinciple = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export type SpecialtyParagraph =
  | { kind: "p"; text: string }
  | { kind: "strongP"; lead: string; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "h2"; text: string };

export type SpecialtyInternalLink = { href: string; label: string };

export type SpecialtyPageProps = {
  /** Hero badge metni — örn: "Tanı sonrası kişiye özel plan" */
  heroBadge?: string;
  /** Hero badge ikonu */
  heroBadgeIcon?: ComponentType<{ className?: string }>;
  /** H1 başlık — beraber renderlanır: "{titleLead} {titleHighlight}" */
  titleLead: string;
  titleHighlight: string;
  /** Hero altındaki kısa açıklama (lead paragraph) */
  intro: string;
  /** WhatsApp link */
  whatsappLink: string;
  /** Açıklama bölümü: H2 + paragraflar (kimler için, nedir vb.) */
  body: SpecialtyParagraph[];
  /** Yaklaşım/ilkeler kart sistemi */
  principlesTitle?: string;
  principlesIntro?: string;
  principles: SpecialtyPrinciple[];
  /** Süreç bölümünün serbest paragrafları */
  processTitle?: string;
  process?: SpecialtyParagraph[];
  /** SSS */
  faqs: SpecialtyFaq[];
  /** CTA alt başlık + metin */
  ctaTitle: string;
  ctaText: string;
  /** İç linkler */
  related?: SpecialtyInternalLink[];
};

export function SpecialtyPage({
  heroBadge,
  heroBadgeIcon: BadgeIcon,
  titleLead,
  titleHighlight,
  intro,
  whatsappLink,
  body,
  principlesTitle = "Beslenme yaklaşımı — temel ilkeler",
  principlesIntro,
  principles,
  processTitle = "Süreç nasıl ilerliyor?",
  process,
  faqs,
  ctaTitle,
  ctaText,
  related,
}: SpecialtyPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/30 to-cyan-50/30">
      <article>
        {/* HERO */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center space-y-5">
              {heroBadge && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs md:text-sm font-medium text-[var(--brand-dark)]">
                  {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
                  {heroBadge}
                </div>
              )}
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[var(--brand-dark)]">
                {titleLead}{" "}
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-12 px-8 min-h-[44px]">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp&apos;tan Randevu Al
                  </Button>
                </a>
                <a href="tel:+905462650440">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 min-h-[44px]"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    0546 265 04 40
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BODY (Nedir / Kimler için ...) */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
            <BodyRenderer items={body} />
          </div>
        </section>

        {/* İLKELER */}
        <section className="py-12 bg-white/60 border-y border-pink-100/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)]">
                {principlesTitle}
              </h2>
              {principlesIntro && (
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                  {principlesIntro}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {principles.map((p) => (
                <Card
                  key={p.title}
                  className="p-5 hover:shadow-md transition-shadow"
                >
                  <p.icon className="w-6 h-6 text-[var(--brand-primary)] mb-3" />
                  <h3 className="font-semibold text-[var(--brand-dark)] mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SÜREÇ */}
        {process && process.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)]">
                {processTitle}
              </h2>
              <BodyRenderer items={process} skipFirstH2 />
            </div>
          </section>
        )}

        {/* SSS */}
        <section className="py-12 bg-white/60">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)] text-center mb-8">
              Sıkça sorulan sorular
            </h2>
            <div className="space-y-3">
              {faqs.map((f, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-[var(--brand-primary)]/30 transition-colors"
                >
                  <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none">
                    <span className="font-semibold text-[var(--brand-dark)] flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                      {f.q}
                    </span>
                    <span className="text-[var(--brand-primary)] text-xl shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pl-12 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="p-8 md:p-10 text-center bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-secondary)]/5 border-[var(--brand-primary)]/20">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)] mb-3">
                {ctaTitle}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                {ctaText}
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 px-8 min-h-[44px]">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp&apos;tan Yaz
                </Button>
              </a>
            </Card>

            {related && related.length > 0 && (
              <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
                {related.map((l, idx) => (
                  <span key={l.href} className="flex items-center gap-4">
                    <Link
                      href={l.href}
                      className="text-primary hover:underline font-medium"
                    >
                      {l.label}
                    </Link>
                    {idx < related.length - 1 && (
                      <span className="text-muted-foreground" aria-hidden>
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      </article>
    </div>
  );
}

function BodyRenderer({
  items,
  skipFirstH2 = false,
}: {
  items: SpecialtyParagraph[];
  skipFirstH2?: boolean;
}) {
  let firstH2Seen = false;
  return (
    <>
      {items.map((item, idx) => {
        switch (item.kind) {
          case "h2":
            if (skipFirstH2 && !firstH2Seen) {
              firstH2Seen = true;
              return null;
            }
            return (
              <h2
                key={idx}
                className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)] mt-10"
              >
                {item.text}
              </h2>
            );
          case "p":
            return <p key={idx}>{item.text}</p>;
          case "strongP":
            return (
              <p key={idx}>
                <strong className="text-foreground">{item.lead}</strong>{" "}
                {item.text}
              </p>
            );
          case "ul":
            return (
              <ul key={idx} className="list-disc pl-6 space-y-2">
                {item.items.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            );
        }
      })}
    </>
  );
}

/** MedicalBusiness JSON-LD üreten yardımcı (her uzmanlık sayfası için). */
export function buildLocalBusinessJsonLd(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    telephone: "+90 546 265 04 40",
    image: "https://ezgievginaktas.com/images/instagram/profile.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Altay Mah. Orhan Bey Cad. Atayıldız Plaza No:1/70 Kat:8",
      addressLocality: "Etimesgut",
      addressRegion: "Ankara",
      postalCode: "06820",
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "City", name: "Ankara" },
      { "@type": "Country", name: "Türkiye" },
    ],
    medicalSpecialty: "Nutrition",
    priceRange: "₺₺",
  };
}

/** FAQPage JSON-LD üreten yardımcı. */
export function buildFaqJsonLd(faqs: SpecialtyFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
