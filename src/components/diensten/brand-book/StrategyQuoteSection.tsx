"use client";
import HighlightedText from "@/components/ui/HighlightedText";
import React from "react";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

const StrategyQuoteSection = () => {
  const { t } = useClientTranslations("page-brand-book.quoteSection");
  return (
    <section
      className="bg-achieve-purple min-h-[300px] md:min-h-[350px] lg:min-h-[385px] flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 bgquote"
      style={{
        backgroundImage: `url("/backgrounds/quote.png")`,
      }}
    >
      <div className="container mx-auto text-white text-center">
        <div className="space-y-6 md:space-y-8 px-4 sm:px-6 lg:px-8">
          <HighlightedText
            bottomOffset="-5"
            variant="white"
            className="text-achieve-purple"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
              {t("quote")}
            </h2>
          </HighlightedText>
          <p className="text-white text-lg md:text-xl lg:text-2xl font-medium">
            {t("author")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategyQuoteSection;
