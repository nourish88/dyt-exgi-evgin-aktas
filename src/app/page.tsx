import { HeroSlider } from "@/components/home/hero-slider";
import { StatsSection } from "@/components/home/stats-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { BMICalculatorSection } from "@/components/home/bmi-calculator-section";
import { BlogPreviewSection } from "@/components/home/blog-preview-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { ImageSlider } from "@/components/ui/image-slider";
import { placeholderImages } from "@/lib/placeholder-images";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <ImageSlider
        images={placeholderImages.successStories}
        title="Başarı Hikayeleri"
        autoplay={true}
        autoplayInterval={5000}
      />
      <ProgramsSection />
      <InstagramSection />
      <TestimonialsSection />
      <BMICalculatorSection />
      <BlogPreviewSection />
      <NewsletterSection />
    </>
  );
}
