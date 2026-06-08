import type { Metadata } from "next";
import { HeroSlider } from "@/components/home/hero-slider";
import { AnkaraPillarSection } from "@/components/home/ankara-pillar-section";
import { TrustStrip } from "@/components/home/trust-strip";
import { StatsSection } from "@/components/home/stats-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ExploreLinksSection } from "@/components/home/explore-links-section";
import { MobileAppPromoSection } from "@/components/home/mobile-app-promo-section";
import { prisma } from "@/lib/prisma";

// Ana sayfa "Ankara Diyetisyen" keyword'ünü sahiplenir (eski /ankara-diyetisyen
// buraya 301). Layout default title'ı yerine sayfaya özel absolute title.
export const metadata: Metadata = {
  title: {
    absolute:
      "Ankara Diyetisyen | Dyt. Ezgi Evgin Aktaş — Beslenme ve Diyet Danışmanlığı",
  },
  description:
    "Ankara diyetisyen Ezgi Evgin: Eryaman ofisinde yüz yüze beslenme danışmanlığı, kişiye özel diyet planı, haftalık takip ve danışan portalı desteği.",
  keywords: [
    "ankara diyetisyen",
    "diyetisyen ankara",
    "ankara beslenme uzmanı",
    "eryaman diyetisyen",
    "eryaman beslenme uzmanı",
  ],
  alternates: {
    canonical: "https://ezgievginaktas.com",
  },
  openGraph: {
    type: "website",
    url: "https://ezgievginaktas.com",
    title: "Ankara Diyetisyen | Dyt. Ezgi Evgin Aktaş",
    description:
      "Ankara Eryaman'da yüz yüze beslenme danışmanlığı. Kişiye özel, yasaksız ve sürdürülebilir diyet programları.",
  },
};

export default async function HomePage() {
  const heroImages = await prisma.siteImage.findMany({
    where: { key: { startsWith: "hero-" }, active: true },
  });

  const imageOverrides: Record<number, string> = {};
  for (const img of heroImages) {
    const match = img.key.match(/^hero-(\d+)$/);
    if (match) imageOverrides[parseInt(match[1])] = img.url;
  }

  return (
    <>
      <HeroSlider imageOverrides={imageOverrides} />
      <AnkaraPillarSection />
      <TrustStrip />
      <StatsSection />
      <ProgramsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ExploreLinksSection />
      <InstagramSection />
      <MobileAppPromoSection />
    </>
  );
}
