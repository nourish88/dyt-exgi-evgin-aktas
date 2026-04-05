import { HeroSlider } from "@/components/home/hero-slider";
import { StatsSection } from "@/components/home/stats-section";
import { SuccessStoriesSection } from "@/components/home/success-stories-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ReviewCtaSection } from "@/components/home/review-cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
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
