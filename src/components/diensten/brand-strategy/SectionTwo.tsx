"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

const SectionTwo = () => {
  const { t, locale } = useClientTranslations("page-brand-strategy.sectionTwo");

  return (
    <section className="bg-achieve-background lg:py-24 py-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="relative w-full lg:h-full h-[320px] lg:order-1 order-2">
            <Image
              src="/diesten/brand-strategy/brand-strategy-section.png"
              width={466.93}
              height={475.99}
              alt="Brand Strategy Section"
            />
          </div>
          <div className="text-start flex flex-col gap-4 lg:order-2 order-1">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
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
              </h1>
            </div>
            <p className="text-achieve-navy mb-8">{t("paragraph1")}</p>
            <div className="mb-8">
              <p className="text-achieve-navy">{t("paragraph2")}</p>
            </div>
            <div className="mb-8">
              <p className="text-achieve-navy">{t("paragraph3")}</p>
            </div>
            <Button className="w-[280px]">{t("buttonText")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
