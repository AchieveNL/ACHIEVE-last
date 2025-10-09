"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

const SectionTwo = () => {
  const { t, locale } = useClientTranslations("page-brand-strategy.sectionTwo");
  return (
    <section className="bg-achieve-background py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 items-center">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[476px] flex items-center justify-center lg:order-1 order-2">
            <div className="relative w-full h-full max-w-[467px]">
              <Image
                src="/diesten/brand-strategy/brand-strategy-section.png"
                fill
                alt="Brand Strategy Section"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 467px"
              />
            </div>
          </div>
          <div className="text-start flex flex-col gap-6 lg:order-2 order-1">
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-3xl md:text-4xl  font-bold leading-tight text-achieve-navy">
                {locale === "en" ? (
                  <>
                    The power of a{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      Brand Strategy
                    </AnimatedText>
                  </>
                ) : (
                  <>
                    De kracht van een{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      Brand Strategy
                    </AnimatedText>
                  </>
                )}
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:gap-5">
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
            <Button className="w-full sm:w-auto sm:min-w-[280px] mt-2">
              {t("buttonText")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
