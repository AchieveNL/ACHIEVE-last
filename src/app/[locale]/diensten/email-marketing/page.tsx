import SectionTwo from "@/components/diensten/email-marketing/SectionTwo";
import StepSection from "@/components/diensten/email-marketing/StepSection";
import StrategyQuoteSection from "@/components/diensten/email-marketing/StrategyQuoteSection";
import PricingSection from "@/components/home/pricing/PricingSection";
import StrategySection from "@/components/home/StrategySection";
import TestimonialsSection from "@/components/home/testimonial/TestimonialsSection";
import { Locale } from "@/types/dbdatas";
// import ProjectSection from "@/components/diensten/email-marketing/ProjectSection";
import SectionThird from "@/components/diensten/brand-strategy/SectionThird";
import ServicesDiscount from "@/components/diensten/email-marketing/ServicesDiscount";
import EmailMarketingSection from "@/components/diensten/email-marketing/ImageTextSection";
import FeaturesSection from "@/components/diensten/email-marketing/FeaturesSection";
import SectionFourth from "@/components/diensten/email-marketing/SectionFourth";
import CarouselSection from "@/components/diensten/email-marketing/CarouselSection";

export default async function EmailMarketingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const resolvedLocale = locale || "en";
  return (
    <div>
      <EmailMarketingSection />
      <SectionTwo />
      <SectionThird />
      <FeaturesSection />
      <StrategyQuoteSection />
      <StepSection />
      <SectionFourth />
      <CarouselSection />
      {/* <ProjectSection locale={locale} /> */}
      <ServicesDiscount />
      <PricingSection isPrimaryBackground={false} />
      <TestimonialsSection bgPrimary={false} locale={resolvedLocale} />
      <StrategySection primarybg />
    </div>
  );
}
