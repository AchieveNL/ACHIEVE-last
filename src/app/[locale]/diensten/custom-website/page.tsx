import SectionTwo from "@/components/diensten/custom-website/SectionTwo";
import StepSection from "@/components/diensten/custom-website/StepSection";
import StrategyQuoteSection from "@/components/diensten/custom-website/StrategyQuoteSection";
import PricingSection from "@/components/home/pricing/PricingSection";
import StrategySection from "@/components/home/StrategySection";
import TestimonialsSection from "@/components/home/testimonial/TestimonialsSection";
import { Locale } from "@/types/dbdatas";
import ProjectSection from "@/components/diensten/custom-website/ProjectSection";
import SectionThird from "@/components/diensten/brand-strategy/SectionThird";
import ServicesDiscount from "@/components/diensten/custom-website/ServicesDiscount";
import CustomWebsiteSection from "@/components/diensten/custom-website/ImageTextSection";

export default async function brandBookPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const resolvedLocale = locale || "en";
  return (
    <div>
      <CustomWebsiteSection />
      <SectionTwo />
      <SectionThird />
      <StrategyQuoteSection />
      <StepSection />
      <ProjectSection locale={locale} />
      <ServicesDiscount />
      <PricingSection isPrimaryBackground={false} />
      <TestimonialsSection bgPrimary={false} locale={resolvedLocale} />
      <StrategySection primarybg />
    </div>
  );
}
