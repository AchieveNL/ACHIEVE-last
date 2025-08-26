import HeroSection from "@/components/home/HeroSection";
import CompaniesSection from "@/components/home/CompaniesSection";
import HeroSectionSecond from "@/components/home/HeroSectionSecond";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PricingSection from "@/components/home/PricingSection";
import Testimonial from "@/components/home/Testimonial";
import FAQSection from "@/components/home/FAQSection";
import TextCarousel from "@/components/home/TextCarousel";
import StrategySection from "@/components/home/StrategySection";
import { Locale } from "@/types/dbdatas";

export default function Home({ params }: { params: { locale: Locale } }) {
  const locale = params.locale || "en";
  return (
    <div>
      <HeroSection />
      <CompaniesSection />
      <HeroSectionSecond />
      <ServicesSection />
      <ProjectsSection locale={locale} />
      <PricingSection />
      <Testimonial />
      <FAQSection />
      <TextCarousel />
      <StrategySection />
    </div>
  );
}
