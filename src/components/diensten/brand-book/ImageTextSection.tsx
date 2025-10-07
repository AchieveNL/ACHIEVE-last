import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { CheckMarkIcon } from "@/components/icons/CheckMarkIcon";
import AnimatedText from "@/components/ui/AnimatedText";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";
import { Button } from "@/components/ui/button";

const BrandBookSection = () => {
  const { t, locale } = useClientTranslations("page-brand-book.heroSection");
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
    <div className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-achieve-navy">
                {locale === "en" ? (
                  <>
                    Essential for every organization;{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      The Brand Book
                    </AnimatedText>{" "}
                  </>
                ) : (
                  <>
                    Onmisbaar voor elke organisatie;{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      Het Brand Book
                    </AnimatedText>{" "}
                  </>
                )}
              </h1>
              <p className="font-bold text-base md:text-lg lg:text-[20px] leading-relaxed">
                {t("titleDescription")}
              </p>
            </div>
            <ul className="flex flex-col items-start gap-3 md:gap-4 my-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckMarkIcon />
                  </div>
                  <p className="text-sm md:text-base font-sans">{t(benefit)}</p>
                </li>
              ))}
            </ul>
            <Button className="w-full md:w-[280px]">{t("buttonText")}</Button>
          </div>
          <div className="relative w-full h-[280px] md:h-[400px] lg:h-full flex items-center justify-center">
            <Image
              src="/diesten/brand-book/brand-book-hero.png"
              width={591.5}
              height={558}
              alt="Brand Book Hero"
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBookSection;
