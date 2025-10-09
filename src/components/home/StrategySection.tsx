import { useClientTranslations } from "../hooks/useClientTranslations";
import CustomButton from "../ui/CustomButton";

export default function StrategySection() {
  const { t, locale } = useClientTranslations("strategySection");
  return (
    <section className="bg-achieve-background">
      <div
        className="py-12 md:py-16 lg:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(248,245,255,0.4), rgba(248,245,255,0.4)), url("/backgrounds/pattern.svg")`,
          backgroundSize: "125px 125px",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8">
            <h2 className="text-achieve-navy leading-tight text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left max-w-[35ch]">
              {t("title")}
            </h2>
            <div className="w-full sm:w-auto flex justify-center lg:justify-end">
              <CustomButton
                clickFor={"calendly"}
                text={t("consultationButton")}
                whitespace={"nowrap"}
                paddingY={15}
                paddingX={32}
                fontSize={16}
                scaleNum={1.15}
                iconSize={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
