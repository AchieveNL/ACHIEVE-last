"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

const SectionTwo = () => {
  const { t, locale } = useClientTranslations("page-brand-book.sectionTwo");

  return (
    <section className="bg-achieve-background lg:py-24 py-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="relative w-full lg:h-full h-[320px] lg:order-1 order-2">
            <Image
              src="/diesten/brand-book/brand-strategy-section.png"
              width={591.5}
              height={644}
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
                      Brand Book
                    </AnimatedText>
                  </>
                ) : (
                  <>
                    De kracht van een{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      Brand Book
                    </AnimatedText>
                  </>
                )}
              </h1>
            </div>
            <h2 className="font-bold text-achieve-navy text-[18px]">
              {t("section1.title")}
            </h2>
            <p className="text-achieve-navy mb-8">{t("section1.content")}</p>
            <div className="mb-8">
              <h2 className="font-bold text-achieve-navy text-[18px]">
                {t("section2.title")}
              </h2>
              <p className="text-achieve-navy">{t("section2.content")}</p>
            </div>
            <div className="mb-8">
              <h2 className="font-bold text-achieve-navy text-[18px]">
                {t("section3.title")}
              </h2>
              <p className="text-achieve-navy">{t("section3.content")}</p>
            </div>
            <Button className="w-[280px]">{t("buttonText")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
