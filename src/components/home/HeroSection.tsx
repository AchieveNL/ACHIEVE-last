"use client";
import React from "react";
import { useRef } from "react";
import AnimatedText from "../ui/AnimatedText";
import LottieHelper from "../ui/LottieHelper";
import { useHomePageAnimation } from "../../hooks/useHomePageAnimation";
import AnimatedLinkWithArrow from "./AnimatedLinkWithArrowProps";
import { useClientTranslations } from "../hooks/useClientTranslations";

const HeroSection = () => {
  const { animationData, loading } = useHomePageAnimation();
  const { t, locale } = useClientTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="relative">
              <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
                {locale === "en" ? (
                  <>
                    Growing based on{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      data
                    </AnimatedText>{" "}
                    and the power of{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      creativity
                    </AnimatedText>
                  </>
                ) : (
                  <>
                    Groeien op basis van{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      data
                    </AnimatedText>{" "}
                    en de kracht van{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      creativiteit
                    </AnimatedText>
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

export default HeroSection;
