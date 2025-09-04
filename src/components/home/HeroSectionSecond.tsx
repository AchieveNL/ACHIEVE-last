"use client";
import React from "react";
import AnimatedText from "../ui/AnimatedText";
import LottieHelper from "../ui/LottieHelper";
import { useHomePageAnimation } from "../../hooks/useHomePageAnimation";
import AnimatedLinkWithArrow from "./AnimatedLinkWithArrowProps";
import { useClientTranslations } from "../hooks/useClientTranslations";
import HighlightedText from "../ui/HighlightedText";

const HeroSectionSecond = () => {
  const { animationData, loading } = useHomePageAnimation("WeAchieve");
  const { t, locale } = useClientTranslations("secondaryHero");

  return (
    <section className="relative   flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-1">
            {/* Main Heading */}
            <div className="relative">
              <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
                {locale === "en" ? (
                  <>
                    Hello! We are{" "}
                    <HighlightedText className="text-achieve-purple">
                      <AnimatedText
                        animationType="gradient"
                        className="text-achieve-purple font-bold"
                      >
                        Achieve
                      </AnimatedText>{" "}
                    </HighlightedText>{" "}
                  </>
                ) : (
                  <>
                    Hallo! Wij zijn{" "}
                    <HighlightedText className="text-achieve-purple">
                      <AnimatedText
                        animationType="gradient"
                        className="text-achieve-purple font-bold"
                      >
                        Achieve
                      </AnimatedText>{" "}
                    </HighlightedText>{" "}
                  </>
                )}
              </h1>
            </div>

            {/* Description */}
            <p className="text-base text-achieve-gray-600 leading-relaxed max-w-xl">
              {t("description")}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <AnimatedLinkWithArrow
                textClassName="text-semi-bold text-md"
                href={"/"}
                text={t("cta")}
              />
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-achieve-purple"></div>
              </div>
            ) : animationData ? (
              <LottieHelper jsonFile={animationData} />
            ) : (
              <div className="text-achieve-gray-600">
                Animation failed to load
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSecond;
