import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { CheckMarkIcon } from "@/components/icons/CheckMarkIcon";
import AnimatedText from "@/components/ui/AnimatedText";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";
import { Button } from "@/components/ui/button";

const BrandBookSection = () => {
  const { t, locale } = useClientTranslations(
    "page-brand-strategy.heroSection",
  );
  const benefits = [
    "page-professional-impression",
    "page-trust-credibility",
    "page-customer-choice",
    "page-brand-associations",
    "page-unity-recognition",
    "page-memorability",
    "page-efficiency-revenue",
    "page-guidelines-overview",
  ];
  return (
    <div className="py-24 lg:py-32 px-4 lg:px-0">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-4">
          <div className="flex flex-col gap-4 lg:gap-4">
            <div className="flex flex-col gap-3 lg:gap-4">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-achieve-navy">
                {locale === "en" ? (
                  <>
                    Give your brand{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      direction
                    </AnimatedText>{" "}
                    and{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      strength
                    </AnimatedText>
                  </>
                ) : (
                  <>
                    Geef je merk{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      richting
                    </AnimatedText>{" "}
                    en{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      kracht
                    </AnimatedText>
                  </>
                )}
              </h1>
              <p className="font-bold text-lg lg:text-[20px] leading-relaxed max-w-xl">
                {t("titleDescription")}
              </p>
            </div>
            <ul className="flex flex-col items-start gap-3 lg:gap-4 mb-4 mt-2 lg:mt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckMarkIcon />
                  </div>
                  <p className="text-sm lg:text-base font-sans">{t(benefit)}</p>
                </li>
              ))}
            </ul>
            <Button className="w-full sm:w-[280px]">
              No-brainer, let&apos;s go!
            </Button>
          </div>
          <div className="relative w-full h-[320px] lg:h-full flex items-center justify-center lg:justify-start">
            <Image
              src="/diesten/brand-strategy/brand-book-hero.png"
              width={466.93}
              height={475.99}
              alt="Brand Book Hero"
              className="object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBookSection;
