"use client";
import HighlightedText from "@/components/ui/HighlightedText";
import React from "react";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

const StrategyQuoteSection = () => {
  const { t } = useClientTranslations("page-brand-strategy.quoteSection");

  return (
    <section
      className="bg-achieve-purple min-h-[385px] flex flex-col items-center justify-center  bgquote"
      style={{
        backgroundImage: `url("/backgrounds/quote.png")`,
      }}
    >
      <div className="container mx-auto text-white text-center">
        <div className="space-y-8 px-4 sm:px-6 lg:px-8">
          <HighlightedText
            bottomOffset="-5"
            variant="white"
            className="text-achieve-purple"
          >
            <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-white">
              {t("quote")}
            </h1>
          </HighlightedText>{" "}
          <p className="text-white text-2xl">{t("author")}</p>
        </div>
      </div>
    </section>
  );
};

export default StrategyQuoteSection;
