"use client";
import React, { useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import HighlightedText from "@/components/ui/HighlightedText";
import { Button } from "@/components/ui/button";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

interface ChevronIconProps {
  isExpanded: boolean;
}

interface Step {
  id: number;
  title: string;
  content: string;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ isExpanded }) => (
  <svg
    width="9"
    height="14"
    viewBox="0 0 9 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`duration-300 ${isExpanded ? "rotate-90" : ""}`}
  >
    <path
      d="M0.830267 13.6893C1.26517 14.1036 1.97036 14.1036 2.40526 13.6893L7.84838 8.49905C8.71751 7.67026 8.71716 6.32735 7.84761 5.49898L2.40125 0.310733C1.96635 -0.103578 1.26116 -0.103578 0.826257 0.310733C0.391248 0.725054 0.391248 1.39679 0.826257 1.81111L5.48774 6.2517C5.92264 6.6661 5.92264 7.33777 5.48774 7.75206L0.830267 12.1889C0.395369 12.6032 0.395369 13.275 0.830267 13.6893Z"
      fill="navy"
    />
  </svg>
);

const StepSection: React.FC = () => {
  const { t, locale } = useClientTranslations("page-brand-book.stepSection");
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: t("step1.title"),
      content: t("step1.content"),
    },
    {
      id: 2,
      title: t("step2.title"),
      content: t("step2.content"),
    },
    {
      id: 3,
      title: t("step3.title"),
      content: t("step3.content"),
    },
    {
      id: 4,
      title: t("step4.title"),
      content: t("step4.content"),
    },
  ];

  const toggleStep = (stepId: number): void => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <section
      className="bg-gray-50 py-24 px-4 bgeffective"
      style={{
        backgroundImage: `url("/backgrounds/effective.png")`,
      }}
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
            {locale === "en" ? (
              <>
                Our{" "}
                <HighlightedText className="text-achieve-purple">
                  <AnimatedText
                    animationType="gradient"
                    className="text-achieve-purple font-bold"
                  >
                    effective
                  </AnimatedText>{" "}
                </HighlightedText>{" "}
                four-step approach
              </>
            ) : (
              <>
                Onze{" "}
                <HighlightedText className="text-achieve-purple">
                  <AnimatedText
                    animationType="gradient"
                    className="text-achieve-purple font-bold"
                  >
                    effectieve
                  </AnimatedText>{" "}
                </HighlightedText>{" "}
                vier-stappen aanpak
              </>
            )}
          </h1>
        </div>
        <p className="mt-6 font-bold">{t("description")}</p>
        <div className="flex flex-col gap-y-4 my-8">
          {steps.map((step: Step) => (
            <article
              key={step.id}
              className="bg-white cursor-pointer hover:shadow-lg rounded-lg duration-500"
              onClick={() => toggleStep(step.id)}
            >
              <div className="flex p-3 justify-between items-center rounded-lg bg-white">
                <h5 className="font-bold">{step.title}</h5>
                <div className="text-achieve-navy z-50 flex justify-center items-center w-8 h-8 rounded-md">
                  <ChevronIcon isExpanded={expandedStep === step.id} />
                </div>
              </div>
              <div
                className={`rounded-lg bg-white duration-200 overflow-hidden ${
                  expandedStep === step.id ? "max-h-96 p-3 pt-0" : "max-h-0"
                }`}
              >
                {step.content && (
                  <p className="text-gray-600 text-left">{step.content}</p>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Button className="px-16">{t("buttonText")}</Button>
        </div>
      </div>
    </section>
  );
};

export default StepSection;
