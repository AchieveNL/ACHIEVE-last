"use client";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import HighlightedText from "@/components/ui/HighlightedText";

const SectionThird = () => {
  return (
    <section className="bg-achieve-background lg:py-24 py-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="text-start flex flex-col gap-4 lg:order-2 order-1">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
                Wat maakt ons{" "}
                <HighlightedText className="text-achieve-purple">
                  <AnimatedText
                    animationType="gradient"
                    className="text-achieve-purple font-bold"
                  >
                    anders
                  </AnimatedText>
                </HighlightedText>
              </h1>
            </div>

            <h2 className="font-bold text-achieve-navy text-[18px]">
              Een gemis dat opgelost kan worden
            </h2>
            <p className="text-achieve-navy mb-8">
              De meedenkende samenwerking is wat ons uniek maakt. Wij leveren
              niet alleen een product, maar zorgen er ook voor dat het hele
              proces eromheen prettig verloopt. Zo willen we eerst dat jouw
              wensen volledig duidelijk zijn, daarna gaan we pas aan de slag met
              een voorstel waarvan wij denken dat het bij jullie past.
            </p>
            <div className="mb-8">
              <p className="text-achieve-navy">
                Daarbij doen we niet alleen wat van ons gevraagd wordt, maar
                denken we ook altijd verder mee bij het proces. Door onze
                expertise zijn we in staat om voorstellen te doen waar je zelf
                vaak nog niet eerder aan hebt gedacht. We zetten altijd een
                stapje extra.
              </p>
            </div>
            <div className="mb-8">
              <p className="text-achieve-navy">
                Ook krijg je bij ons ontwerpen van verschillende ontwerpers,
                waardoor er veel meer diversiteit aan ideeën op tafel komt te
                liggen. Dit zorgt voor een eindresultaat dat tot stand is
                gekomen uit jouw wensen en onze expertise en adviezen.
                Klanttevredenheid, dat is voor ons het belangrijkste en daar
                werken we samen aan!
              </p>
            </div>

            <div className="mb-8">
              <p className="text-achieve-navy">
                Tenslotte zijn we ook transparant over onze tarieven.
              </p>
            </div>

            <Button className="w-[280px]">Ontdek onze pakketen!</Button>
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
