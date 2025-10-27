import ServicesSections from "@/components/diensten/ServicesSections";
import FAQSection from "@/components/home/faq/FAQSection";
import StrategySection from "@/components/home/StrategySection";
import Banner from "@/components/layout/Banner";
import { Locale } from "@/types/dbdatas";

const dienstenPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  return (
    <section className="relative z-10">
      <Banner className="bg-white" title="Onze diensten" />
      <ServicesSections locale={locale} />
      <FAQSection locale={locale} />
      <StrategySection primarybg={false} />
    </section>
  );
};

export default dienstenPage;
