import SectionTwo from "@/components/diensten/ugc-marketing/SectionTwo";
import StepSection from "@/components/diensten/ugc-marketing/StepSection";
import StrategyQuoteSection from "@/components/diensten/ugc-marketing/StrategyQuoteSection";
import PricingSection from "@/components/home/pricing/PricingSection";
import StrategySection from "@/components/home/StrategySection";
import TestimonialsSection from "@/components/home/testimonial/TestimonialsSection";
import { Locale } from "@/types/dbdatas";
// import ProjectSection from "@/components/diensten/ugc-marketing/ProjectSection";
import SectionThird from "@/components/diensten/brand-strategy/SectionThird";
import ServicesDiscount from "@/components/diensten/ugc-marketing/ServicesDiscount";
import VideoMarketingSection from "@/components/diensten/ugc-marketing/ImageTextSection";
import FeaturesSection from "@/components/diensten/ugc-marketing/FeaturesSection";
import SectionFourth from "@/components/diensten/ugc-marketing/SectionFourth";
import CarouselSection from "@/components/diensten/ugc-marketing/CarouselSection";
import ProjectSection from "@/components/diensten/ugc-marketing/ProjectSection";

export default async function EmailMarketingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const resolvedLocale = locale || "en";
  return (
    <div>
      <VideoMarketingSection />
      <SectionTwo />
      {/* <SectionThird /> */}
      {/* <FeaturesSection /> */}
      <StepSection />
      <StrategyQuoteSection />
      <ProjectSection />
      <SectionFourth />
      {/* <CarouselSection /> */}
      {/* <ProjectSection locale={locale} /> */}
      <ServicesDiscount />
      <PricingSection isPrimaryBackground />
      <TestimonialsSection bgPrimary locale={resolvedLocale} />
      <StrategySection primarybg={false} />
    </div>
  );
}
