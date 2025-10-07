"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import HighlightedText from "@/components/ui/HighlightedText";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

const SectionThird = () => {
  const { t, locale } = useClientTranslations("page-brand-book.sectionFourth");

  return (
    <section className=" lg:py-24 py-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="text-start flex flex-col gap-4 lg:order-2 order-1">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
                {locale === "en" ? (
                  <>
                    What makes us{" "}
                    <HighlightedText className="text-achieve-purple">
                      <AnimatedText
                        animationType="gradient"
                        className="text-achieve-purple font-bold"
                      >
                        different
                      </AnimatedText>
                    </HighlightedText>
                  </>
                ) : (
                  <>
                    Wat maakt ons{" "}
                    <HighlightedText className="text-achieve-purple">
                      <AnimatedText
                        animationType="gradient"
                        className="text-achieve-purple font-bold"
                      >
                        anders
                      </AnimatedText>
                    </HighlightedText>
                  </>
                )}
              </h1>
            </div>
            <h2 className="font-bold text-achieve-navy text-[18px]">
              {t("subtitle")}
            </h2>
            <p className="text-achieve-navy mb-8">{t("paragraph1")}</p>
            <div className="mb-8">
              <p className="text-achieve-navy">{t("paragraph2")}</p>
            </div>
            <div className="mb-8">
              <p className="text-achieve-navy">{t("paragraph3")}</p>
            </div>
            <div className="mb-8">
              <p className="text-achieve-navy">{t("paragraph4")}</p>
            </div>
            <Button className="w-[280px]">{t("buttonText")}</Button>
          </div>
          <div className="relative w-full lg:h-full h-[320px] lg:order-1 order-2">
            <Image
              src="/diesten/brand-book/brand-book-section-fourth.png"
              width={591.5}
              height={479}
              alt="Brand Book Section"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThird;
