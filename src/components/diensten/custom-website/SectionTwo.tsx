"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

const SectionTwo = () => {
  const { t, locale } = useClientTranslations("page-custom-website.sectionTwo");

  const problems = [
    "problem1",
    "problem2",
    "problem3",
    "problem4",
    "problem5",
    "problem6",
    "problem7",
  ];

  return (
    <section className="bg-achieve-background py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 items-center">
          <div className="relative w-full h-[300px] md:h-[420px] lg:h-[644px] flex items-center justify-center lg:order-1 order-2">
            <div className="relative w-full h-full max-w-[591.5px]">
              <Image
                src="/diesten/custom-website/website-problems.png"
                fill
                alt="Website Problems"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 591px"
              />
            </div>
          </div>

          <div className="text-start flex flex-col gap-6 lg:order-2 order-1">
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
                {locale === "en" ? (
                  <>
                    A poorly{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      functioning
                    </AnimatedText>{" "}
                    website
                  </>
                ) : (
                  <>
                    Een niet goed{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      functionerende
                    </AnimatedText>{" "}
                    website
                  </>
                )}
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-achieve-navy">
                {t("subtitle")}
              </h3>
            </div>

            <ul className="flex flex-col gap-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="text-red-500 text-xl font-bold mt-0.5 flex-shrink-0">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.79871 1.70129C2.65653 1.56881 2.46849 1.49669 2.27419 1.50012C2.07988 1.50355 1.8945 1.58226 1.75709 1.71967C1.61967 1.85708 1.54096 2.04247 1.53753 2.23677C1.5341 2.43107 1.60623 2.61912 1.73871 2.76129L5.45871 6.48129L1.73871 10.2013C1.66502 10.27 1.60592 10.3528 1.56493 10.4448C1.52394 10.5368 1.50189 10.6361 1.50012 10.7368C1.49834 10.8375 1.51686 10.9375 1.55459 11.0309C1.59231 11.1243 1.64845 11.2091 1.71967 11.2803C1.79089 11.3515 1.87572 11.4077 1.96911 11.4454C2.0625 11.4831 2.16253 11.5017 2.26323 11.4999C2.36393 11.4981 2.46325 11.4761 2.55525 11.4351C2.64725 11.3941 2.73005 11.335 2.79871 11.2613L6.51871 7.54129L10.2387 11.2613C10.3074 11.335 10.3902 11.3941 10.4822 11.4351C10.5742 11.4761 10.6735 11.4981 10.7742 11.4999C10.8749 11.5017 10.9749 11.4831 11.0683 11.4454C11.1617 11.4077 11.2465 11.3515 11.3177 11.2803C11.389 11.2091 11.4451 11.1243 11.4828 11.0309C11.5206 10.9375 11.5391 10.8375 11.5373 10.7368C11.5355 10.6361 11.5135 10.5368 11.4725 10.4448C11.4315 10.3528 11.3724 10.27 11.2987 10.2013L7.57871 6.48129L11.2987 2.76129C11.4312 2.61912 11.5033 2.43107 11.4999 2.23677C11.4965 2.04247 11.4177 1.85708 11.2803 1.71967C11.1429 1.58226 10.9575 1.50355 10.7632 1.50012C10.5689 1.49669 10.3809 1.56881 10.2387 1.70129L6.51871 5.42129L2.79871 1.70129Z"
                        fill="#DC2626"
                        stroke="#DC2626"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                  <p className="text-achieve-navy text-sm md:text-base leading-relaxed">
                    {t(problem)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 text-achieve-navy text-sm md:text-base leading-relaxed">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p className="font-semibold">{t("paragraph3")}</p>
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
