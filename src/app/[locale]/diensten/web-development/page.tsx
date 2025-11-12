import SectionTwo from "@/components/diensten/web-development/SectionTwo";
import StepSection from "@/components/diensten/web-development/StepSection";
import StrategyQuoteSection from "@/components/diensten/web-development/StrategyQuoteSection";
import PricingSection from "@/components/home/pricing/PricingSection";
import StrategySection from "@/components/home/StrategySection";
import TestimonialsSection from "@/components/home/testimonial/TestimonialsSection";
import { Locale } from "@/types/dbdatas";
import ProjectSection from "@/components/diensten/web-development/ProjectSection";
import SectionThird from "@/components/diensten/brand-strategy/SectionThird";
import ServicesDiscount from "@/components/diensten/web-development/ServicesDiscount";
import CustomWebsiteSection from "@/components/diensten/web-development/ImageTextSection";

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
