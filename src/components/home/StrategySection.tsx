"use client";
import { useClientTranslations } from "../hooks/useClientTranslations";
import CustomButton from "../ui/CustomButton";
import AnimatedText from "../ui/AnimatedText";
import { useState, useEffect } from "react";

type StrategySectionProps = {
  primarybg?: boolean;
};

export default function StrategySection({
  primarybg = true,
}: StrategySectionProps) {
  const { t, locale } = useClientTranslations("strategySection");

  // Total number of phrase variations
  const TOTAL_PHRASES = 6;

  // State to track current phrase index
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Change phrase on component mount (each refresh)
  useEffect(() => {
    // Generate random index on mount
    const randomIndex = Math.floor(Math.random() * TOTAL_PHRASES);
    setCurrentPhraseIndex(randomIndex);
  }, []);

  // Get current phrase parts from translations
  const phraseBefore = t(`phrase${currentPhraseIndex}Before`);
  const phraseHighlight = t(`phrase${currentPhraseIndex}Highlight`);
  const phraseAfter = t(`phrase${currentPhraseIndex}After`);

  return (
    <section className={primarybg ? "bg-achieve-background" : "bg-white"}>
      <div
        className="py-12 md:py-16 lg:py-20"
        style={
          primarybg
            ? {
                backgroundImage: `linear-gradient(rgba(248,245,255,0.4), rgba(248,245,255,0.4)), url("/backgrounds/pattern.svg")`,
                backgroundSize: "125px 125px",
              }
            : {
                backgroundImage: `url("/backgrounds/pattern.svg")`,
                backgroundSize: "125px 125px",
              }
        }
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8">
            <h2 className="text-achieve-navy leading-tight text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left max-w-[35ch]">
              {phraseBefore}
              <AnimatedText
                animationType="gradient"
                className="text-achieve-purple font-bold"
              >
                {phraseHighlight}
              </AnimatedText>
              {phraseAfter}
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
