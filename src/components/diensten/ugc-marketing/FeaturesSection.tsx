"use client";
import React, { useState } from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";
import HighlightedText from "@/components/ui/HighlightedText";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  fullText: string;
  readMore: string;
  readLess: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
  fullText,
  readMore,
  readLess,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl px-6 py-6 flex flex-col items-center gap-6 transition-all duration-300 ${
        isExpanded ? "h-auto" : "h-[330px]"
      }`}
    >
      <div className="relative h-[110px] w-[120px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="120px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center text-achieve-navy">
        {title}
      </h3>
      <p className="text-achieve-navy text-center text-sm md:text-base leading-relaxed">
        {isExpanded ? fullText : description}
      </p>
      <button
        type="button"
        className="text-achieve-purple hover:underline font-medium transition-all"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? readLess : readMore}
      </button>
    </div>
  );
};

export default function EmailMarketingFeaturesSection() {
  const { t, locale } = useClientTranslations(
    "page-email-marketing.featuresSection",
  );

  const features = [
    {
      image: "/diesten/email-marketing/marketing.png",
      title: t("feature1.title"),
      description: t("feature1.description"),
      fullText: t("feature1.fullText"),
    },
    {
      image: "/diesten/email-marketing/person.png",
      title: t("feature2.title"),
      description: t("feature2.description"),
      fullText: t("feature2.fullText"),
    },
    {
      image: "/diesten/email-marketing/target.png",
      title: t("feature3.title"),
      description: t("feature3.description"),
      fullText: t("feature3.fullText"),
    },
    {
      image: "/diesten/email-marketing/judge.png",
      title: t("feature4.title"),
      description: t("feature4.description"),
      fullText: t("feature4.fullText"),
    },
  ];

  return (
    <section className="bg-achieve-background py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-achieve-navy">
            {t("title")}{" "}
            <HighlightedText>
              <AnimatedText
                animationType="gradient"
                className="text-achieve-purple font-bold"
              >
                {t("titleHighlight")}
              </AnimatedText>
            </HighlightedText>
            ?
          </h2>
          <p className="font-bold text-lg md:text-xl text-achieve-navy">
            {t("subtitle")} {t("subtitleHighlight")}
            {locale === "en" && ` ${t("subtitleEnd")}`}.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              fullText={feature.fullText}
              readMore={t("readMore")}
              readLess={t("readLess")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
