import ServicesSections from "@/components/diensten/ServicesSections";
import FAQSection from "@/components/home/faq/FAQSection";
import StrategySection from "@/components/home/StrategySection";
import Banner from "@/components/layout/Banner";

const dienstenPage = () => {
  return (
    <section className="relative z-10">
      <Banner className="bg-white" title="Onze diensten" />
      <ServicesSections />
      <FAQSection />
      <StrategySection />
    </section>
  );
};

export default dienstenPage;
