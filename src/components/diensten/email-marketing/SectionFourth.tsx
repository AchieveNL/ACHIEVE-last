"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";
import HighlightedText from "@/components/ui/HighlightedText";

const SectionFourth = () => {
  const { t, locale } = useClientTranslations(
    "page-email-marketing.sectionFourth",
  );

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Title and Subtitle */}
          <div className="flex flex-col gap-4 md:gap-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy px-2">
              {t("title")}{" "}
              <HighlightedText className="text-achieve-purple">
                <AnimatedText
                  animationType="gradient"
                  className="text-achieve-purple font-bold"
                >
                  {t("titleHighlight")}
                </AnimatedText>
              </HighlightedText>{" "}
              {locale === "nl" && ` ${t("titleEnd")}`}
            </h2>
            <p className=" font-bold text-sm md:text-base lg:text-lg px-4">
              {t("subtitle")}{" "}
              <AnimatedText
                animationType="gradient"
                className="text-achieve-purple font-bold"
              >
                {t("subtitleHighlight")}
              </AnimatedText>{" "}
              {t("subtitleEnd")}
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-6xl h-[400px] md:h-[600px] lg:h-[700px]">
            <Image
              src="/diesten/email-marketing/automation-example.webp"
              fill
              alt="Email Marketing Automation Example"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFourth;
