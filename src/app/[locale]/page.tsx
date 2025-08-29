import HeroSection from "@/components/home/HeroSection";
import CompaniesSection from "@/components/home/CompaniesSection";
import HeroSectionSecond from "@/components/home/HeroSectionSecond";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PricingSection from "@/components/home/pricing/PricingSection";
import FAQSection from "@/components/home/faq/FAQSection";
import StrategySection from "@/components/home/StrategySection";
import { Locale } from "@/types/dbdatas";
import TestimonialsSection from "@/components/home/testimonial/TestimonialsSection";
import TextCarouselSection from "@/components/home/textCarousel/TextCarouselSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const resolvedLocale = locale || "en";

  return (
    <div>
      <HeroSection />
      <CompaniesSection />
      <HeroSectionSecond />
      <ServicesSection />
      <ProjectsSection locale={resolvedLocale} />
      <PricingSection />
      <TestimonialsSection locale={resolvedLocale} />
      <FAQSection locale={resolvedLocale} />
      <TextCarouselSection locale={resolvedLocale} />
      <StrategySection />
    </div>
  );
}
