import { HeroSlider } from "@/components/home/hero-slider";
import { TrustStrip } from "@/components/home/trust-strip";
import { StatsSection } from "@/components/home/stats-section";
import { SuccessStoriesSection } from "@/components/home/success-stories-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ReviewCtaSection } from "@/components/home/review-cta-section";
import { prisma } from "@/lib/prisma";

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
      <TrustStrip />
      <StatsSection />
      <SuccessStoriesSection />
      <ProgramsSection />
      <WhyChooseSection />
      <InstagramSection />
      <TestimonialsSection />
      <ReviewCtaSection />
    </>
  );
}
