"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

const SectionTwo = () => {
  const { t, locale } = useClientTranslations("page-ugc-marketing.sectionTwo");

  return (
    <section className="bg-achieve-background py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 items-center">
          <div className="relative w-full h-[300px] md:h-[420px] lg:h-[644px] flex items-center justify-center lg:order-1 order-2">
            <div className="relative w-full h-full max-w-[591.5px]">
              <Image
                src="/diesten/ugc-marketing/ugc-marketing-special.png"
                fill
                alt="Video Marketing Special Approach"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 591px"
              />
            </div>
          </div>

          <div className="text-start flex flex-col gap-6 lg:order-2 order-1">
            <div className="flex flex-col gap-3 md:gap-4">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight text-achieve-navy">
                {locale === "en" ? (
                  <>
                    This is probably{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      familiar
                    </AnimatedText>
                  </>
                ) : (
                  <>
                    Dit is vast{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      herkenbaar
                    </AnimatedText>
                  </>
                )}
              </h1>
            </div>

            <div className="flex flex-col gap-5 text-achieve-navy text-sm md:text-base leading-relaxed">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
              <p>
                {t("paragraph4")}
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>{t("paragraph4item1")}</li>
                  <li>{t("paragraph4item2")}</li>
                  <li>{t("paragraph4item3")}</li>
                  <li>{t("paragraph4item4")}</li>
                </ul>
              </p>
            </div>

            <Button clickFor="calendly" className="w-[280px] mt-2">
              {t("buttonText")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
