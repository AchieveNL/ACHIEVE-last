"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";

const SectionThird = () => {
  return (
    <section className="bg-achieve-background lg:py-24 py-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="text-start flex flex-col gap-4 lg:order-1 order-2">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
                Je bedrijf wordt niet voldoende{" "}
                <AnimatedText
                  animationType="gradient"
                  className="text-achieve-purple font-bold"
                >
                  opgemerkt?
                </AnimatedText>
              </h1>
            </div>

            <h2 className="font-bold text-achieve-navy text-[18px]">
              Een gemis dat opgelost kan worden
            </h2>
            <p className="text-achieve-navy mb-8">
              Dat een bedrijf niet voldoende wordt opgemerkt is een
              veelvoorkomend probleem. Dit komt voor bij starters, maar ook bij
              bedrijven die geen eenduidige houvast hebben. Omdat een sterk
              bedrijfsimago ontbreekt, zal de doelgroep het bedrijf of merk niet
              herkennen.
            </p>
            <div className="mb-8">
              <p className="text-achieve-navy">
                Een huisstijl stelt een bedrijf in staat om een sterk
                bedrijfsimago op te bouwen bij de doelgroep en beïnvloedt de
                houding en het gedrag van de organisatie. Het zorgt voor een
                betere herkenbaarheid, waardoor het bedrijf zich onderscheidt
                ten opzichte van concurrenten. Een professionele huisstijl wekt
                vertrouwen in de diensten en producten die worden aangeboden, en
                dat is vaak precies wat je nodig hebt!
              </p>
            </div>
            <div className="mb-8">
              <p className="text-achieve-navy">
                Kortom: een goede huisstijl vertegenwoordigt niet alleen de
                identiteit van een organisatie, maar versterkt deze ook!
              </p>
            </div>

            <Button className="w-[280px]">Ontdek onze pakketen!</Button>
          </div>

          <div className="relative w-full lg:h-full h-[320px] lg:order-2 order-1">
            <Image
              src="/diesten/brand-book/brand-book-section-third.png"
              width={591.5}
              height={482}
              alt="Brand Book Section"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThird;
