import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { CheckMarkIcon } from "@/components/icons/CheckMarkIcon";
import AnimatedText from "@/components/ui/AnimatedText";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";
import { Button } from "@/components/ui/button";

const BrandBookSection = () => {
  const { t, locale } = useClientTranslations("hero");
  const benefits = [
    "Voor een goede professionele eerste indruk",
    "Zorgt voor vertrouwen en geloofwaardigheid",
    "De klant kiest sneller voor jouw dienst, product of bedrijf",
    "Het roept associaties op bij mensen",
    "Zorgt voor eenheid en herkenning",
    "De klant onthoudt je beter",
    "Bespaart tijd, kosten en zorgt voor meer omzet",
    "Alle richtlijnen in één overzicht",
  ];

  return (
    <div className="py-32   lg:px-0">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
                {locale === "en" ? (
                  <>
                    Growing based on{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      data
                    </AnimatedText>{" "}
                    and the power of{" "}
                    <AnimatedText
                      animationType="gradient"
                      className="text-achieve-purple font-bold"
                    >
                      creativity
                    </AnimatedText>
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
              <p className="font-bold text-[20px] leading-relaxed max-w-xl">
                Alle redenen waarom jouw bedrijf niet zonder kan
              </p>
            </div>

            <ul className="flex flex-col items-start gap-4 mb-4 mt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <CheckMarkIcon />
                  </div>
                  <p className="text-base font-sans">{benefit}</p>
                </li>
              ))}
            </ul>

            <Button className="w-[280px]">No-brainer, let’s go!</Button>
          </div>

          <div className="relative lg:h-full h-[320px]">
            <Image
              src="/diesten/brand-book/brand-book-hero.png"
              width={591.5}
              height={558}
              alt="Brand Book Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBookSection;
