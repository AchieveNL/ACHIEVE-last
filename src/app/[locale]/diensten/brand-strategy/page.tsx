import BrandBookSection from "@/components/diensten/brand-strategy/ImageTextSection";
import SectionTwo from "@/components/diensten/brand-strategy/SectionTwo";
import ServicesSection from "@/components/diensten/brand-strategy/ProjectSection";
import StepSection from "@/components/diensten/brand-strategy/StepSection";
import StrategyQuoteSection from "@/components/diensten/brand-strategy/StrategyQuoteSection";
import ServicesDiscount from "@/components/diensten/ServicesDiscount";
import PricingSection from "@/components/home/pricing/PricingSection";
import StrategySection from "@/components/home/StrategySection";
import TestimonialsSection from "@/components/home/testimonial/TestimonialsSection";
import { Locale } from "@/types/dbdatas";
import ProjectSection from "@/components/diensten/brand-strategy/ProjectSection";

export default async function BrandStrategyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const resolvedLocale = locale || "en";
  return (
    <div>
      <BrandBookSection />
      <SectionTwo />
      <StepSection />
      <StrategyQuoteSection />
      <ProjectSection />
      <ServicesDiscount />
      <PricingSection />
      <TestimonialsSection locale={resolvedLocale} />
      <StrategySection />
    </div>
  );
}
