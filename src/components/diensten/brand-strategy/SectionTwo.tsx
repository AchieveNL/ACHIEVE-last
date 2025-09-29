"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";

const SectionTwo = () => {
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
                De kracht van een{" "}
                <AnimatedText
                  animationType="gradient"
                  className="text-achieve-purple font-bold"
                >
                  Brand Strategy
                </AnimatedText>
              </h1>
            </div>
            <p className="text-achieve-navy mb-8">
              Met onze aanpak bouwen we een strategisch fundament dat alles bij
              elkaar brengt: jouw missie, visie, merkpersoonlijkheid, tone of
              voice en doelgroep. Zo weet je precies hoe je wilt dat jouw merk
              overkomt en zorg je dat elk contactmoment, van marketing tot
              klantenservice, consistent en krachtig is.
            </p>
            <div className="mb-8">
              <p className="text-achieve-navy">
                Daarbij kijken we naar je markt en concurrentie, bepalen we je
                positionering en maken we een concreet plan om je merk door te
                vertalen naar actie. Afhankelijk van het pakket dat je kiest,
                ontvang je een compleet strategisch document, een social media
                strategie, een planning en zelfs een onboarding deck om je hele
                team mee te nemen.
              </p>
            </div>
            <div className="mb-8">
              <p className="text-achieve-navy">
                Of je nu kiest voor Basic (focus op de kern en fundament),
                Standard (met analyse en positionering) of Premium (inclusief
                actieplan, strategie en teampresentatie), je krijgt altijd een
                strategie die jouw merk herkenbaar, geloofwaardig en
                onweerstaanbaar maakt.
              </p>
            </div>

            <Button className="w-[280px]">Ontdek onze pakketen!</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
