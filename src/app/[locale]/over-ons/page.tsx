import Banner from "@/components/layout/Banner";
import AboutUsSection from "@/components/over-ons/AboutUsSection";
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
      <AboutUsSection locale={locale} />
    </>
  );
};

export default AboutUsPage;
