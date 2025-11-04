import SectionTwo from "@/components/diensten/video-marketing/SectionTwo";
import StepSection from "@/components/diensten/video-marketing/StepSection";
import StrategyQuoteSection from "@/components/diensten/video-marketing/StrategyQuoteSection";
import PricingSection from "@/components/home/pricing/PricingSection";
import StrategySection from "@/components/home/StrategySection";
import TestimonialsSection from "@/components/home/testimonial/TestimonialsSection";
import { Locale } from "@/types/dbdatas";
// import ProjectSection from "@/components/diensten/video-marketing/ProjectSection";
import SectionThird from "@/components/diensten/brand-strategy/SectionThird";
import ServicesDiscount from "@/components/diensten/video-marketing/ServicesDiscount";
import VideoMarketingSection from "@/components/diensten/video-marketing/ImageTextSection";
import FeaturesSection from "@/components/diensten/video-marketing/FeaturesSection";
import SectionFourth from "@/components/diensten/video-marketing/SectionFourth";
import CarouselSection from "@/components/diensten/video-marketing/CarouselSection";
import ProjectSection from "@/components/diensten/video-marketing/ProjectSection";

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
      <PricingSection isPrimaryBackground={false} />
      <TestimonialsSection bgPrimary={false} locale={resolvedLocale} />
      <StrategySection primarybg />
    </div>
  );
}
