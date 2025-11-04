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
    <section className="py-12 bg-achieve-background md:py-20 lg:py-24 px-4 md:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
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

          {/* Images Grid - 1 large left, 2 stacked right */}
          <div className="w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-[1.36fr_1fr] gap-4 md:gap-l6">
              {/* Left Image - Large (506px width) */}
              <div className="relative w-full aspect-[506/556] bg-white rounded-xl shadow-sm overflow-hidden">
                <Image
                  src="/diesten/video-marketing/stats-large.png"
                  fill
                  alt="Video gebruik door de jaren heen"
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 506px"
                />
              </div>

              {/* Right Images - Two Stacked (373px width each) */}
              <div className="flex flex-row gap-4 ">
                {/* Top Right Image */}
                <div className="relative w-[373px]   rounded-xl shadow-sm overflow-hidden">
                  <Image
                    src="/diesten/video-marketing/stats-small-1.png"
                    fill
                    alt="Marketeers die zeggen dat video de marketsnelheid heeft vergroot"
                    sizes="(max-width: 1024px) 100vw, 373px"
                  />
                </div>

                {/* Bottom Right Image */}
                <div className="relative w-[373px]   rounded-xl shadow-sm overflow-hidden">
                  <Image
                    src="/diesten/video-marketing/stats-small-2.png"
                    fill
                    alt="Heeft videokwaliteit invloed op uw vertrouwen in het merk"
                    className=""
                    sizes="(max-width: 1024px) 100vw, 373px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFourth;
