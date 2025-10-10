"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

const SectionThird = () => {
  const { t, locale } = useClientTranslations("page-brand-book.sectionThird");
  return (
    <section className="bg-achieve-background py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 items-center">
          <div className="text-start flex flex-col gap-6 lg:order-1 order-2">
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
                {locale === "en" ? (
                  <>
                    Your business isn&apos;t getting enough{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      noticed?
                    </AnimatedText>
                  </>
                ) : (
                  <>
                    Je bedrijf wordt niet voldoende{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      opgemerkt?
                    </AnimatedText>
                  </>
                )}
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:gap-5">
              <h3 className="font-bold text-achieve-navy text-base md:text-lg">
                {t("subtitle")}
              </h3>
              <p className="text-achieve-navy text-sm md:text-base leading-relaxed">
                {t("paragraph1")}
              </p>
              <p className="text-achieve-navy text-sm md:text-base leading-relaxed">
                {t("paragraph2")}
              </p>
              <p className="text-achieve-navy text-sm md:text-base leading-relaxed">
                {t("paragraph3")}
              </p>
            </div>
            <Button
              clickFor="calendly"
              className="w-full sm:w-auto sm:min-w-[280px] mt-2"
            >
              {t("buttonText")}
            </Button>
          </div>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[482px] flex items-center justify-center lg:order-2 order-1">
            <div className="relative w-full h-full max-w-[591.5px]">
              <Image
                src="/diesten/brand-book/brand-book-section-third.png"
                fill
                alt="Brand Book Section"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 591px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThird;
