import { useClientTranslations } from "../hooks/useClientTranslations";
import CustomButton from "../ui/CustomButton";

export default function StrategySection() {
  const { t, locale } = useClientTranslations("strategySection");

  return (
    <section className="bg-achieve-background">
      <div
        className="py-[5rem] "
        style={{
          backgroundImage: `linear-gradient(rgba(248,245,255,0.4), rgba(248,245,255,0.4)), url("/backgrounds/pattern.svg")`,
          backgroundSize: "125px 125px",
        }}
      >
        <div className="container mx-auto py-12 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center 1200:flex-col gap-y-4">
            <h2 className="800:text-center text-achieve-navy leading-[1.2] text-[35px] !font-[800] 800:!text-[30px] 600:!text-[25px] max-w-[35ch]">
              {t("title")}
            </h2>

            <CustomButton
              clickFor={"calendly"}
              text={t("consultationButton")}
              whitespace={"nowrap"}
              paddingY={19}
              paddingX={50}
              fontSize={20}
              scaleNum={1.25}
              iconSize={24}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
