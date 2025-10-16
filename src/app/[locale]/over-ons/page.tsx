import StrategySection from "@/components/home/StrategySection";
import TestimonialsSection from "@/components/home/testimonial/TestimonialsSection";
import TextCarouselSection from "@/components/home/textCarousel/TextCarouselSection";
import Banner from "@/components/layout/Banner";
import AboutUsSection from "@/components/over-ons/AboutUsSection";
import MeetTheTeam from "@/components/over-ons/MeetTheTeam";
import Promise from "@/components/over-ons/Promise";
import { Locale } from "@/types/dbdatas";

const AboutUsPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const resolvedLocale = locale || "en";
  return (
    <>
      <Banner title="Over ons" />
      <AboutUsSection locale={resolvedLocale} />
      <TextCarouselSection bgPrimary locale={resolvedLocale} />
      <Promise locale={resolvedLocale} />
      <MeetTheTeam locale={resolvedLocale} />
      <TestimonialsSection bgPrimary={false} locale={resolvedLocale} />
      <StrategySection />
    </>
  );
};

export default AboutUsPage;
