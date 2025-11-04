"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

const SectionFourth = () => {
  const { t, locale } = useClientTranslations(
    "page-video-marketing.sectionThree",
  );

  return (
    <section className="py-12  md:py-20 lg:py-24 px-4 md:px-6 lg:px-0">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Title and Subtitle */}
          <div className="flex flex-col gap-4 md:gap-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
              {locale === "en" ? (
                <>
                  Still not{" "}
                  <AnimatedText
                    animationType="gradient"
                    className="text-achieve-purple font-bold"
                  >
                    convinced
                  </AnimatedText>
                  ?
                </>
              ) : (
                <>
                  Nog steeds niet{" "}
                  <AnimatedText
                    animationType="gradient"
                    className="text-achieve-purple font-bold"
                  >
                    overtuigd
                  </AnimatedText>
                  ?
                </>
              )}
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-semibold text-achieve-navy">
              {t("subtitle")}
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-6xl h-[400px] md:h-[600px] lg:h-[700px]">
            <Image
              src="/diesten/ugc-marketing/ugc-stats.png"
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
