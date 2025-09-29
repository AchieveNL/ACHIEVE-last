import BrandBookSection from "@/components/diensten/brand-book/ImageTextSection";
import SectionTwo from "@/components/diensten/brand-book/SectionTwo";
import StepSection from "@/components/diensten/brand-book/StepSection";
import StrategyQuoteSection from "@/components/diensten/brand-book/StrategyQuoteSection";
import ServicesDiscount from "@/components/diensten/ServicesDiscount";
import PricingSection from "@/components/home/pricing/PricingSection";
import StrategySection from "@/components/home/StrategySection";
import TestimonialsSection from "@/components/home/testimonial/TestimonialsSection";
import { Locale } from "@/types/dbdatas";
import ProjectSection from "@/components/diensten/brand-book/ProjectSection";
import SectionThird from "@/components/diensten/brand-strategy/SectionThird";
import SectionFourth from "@/components/diensten/brand-strategy/SectionFourth";

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
      <StrategyQuoteSection />
      <SectionThird />
      <SectionFourth />
      <StepSection />
      <ProjectSection />
      <ServicesDiscount />
      <PricingSection />
      <TestimonialsSection locale={resolvedLocale} />
      <StrategySection />
    </div>
  );
}
