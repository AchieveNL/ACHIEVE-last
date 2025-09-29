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
              src="/diesten/brand-book/brand-strategy-section.png"
              width={591.5}
              height={644}
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
                  Brand Book
                </AnimatedText>
              </h1>
            </div>
            <h2 className="font-bold text-achieve-navy text-[18px]">
              Merken zijn erg belangrijk voor bedrijven
            </h2>
            <p className="text-achieve-navy mb-8">
              Branding zorgt ervoor dat een bedrijf of een product wordt
              herkend. Deze herkenbaarheid is belangrijk en wanneer dit goed is
              toegepast kan het ervoor zorgen dat klanten - huidige en
              potentiële - vertrouwen krijgen of, nog beter, onderdeel willen
              uitmaken van het merk.
            </p>
            <div className="mb-8">
              <h2 className="font-bold text-achieve-navy text-[18px]">
                Consistentie
              </h2>
              <p className="text-achieve-navy">
                Branding is een breed begrip en bestaat uit verschillende zaken
                (logo, kleurstellingen, lettertype) die met elkaar samenwerken
                om de uitstraling van het bedrijf of het product te bepalen. Het
                is belangrijk dat erover nagedacht wordt en dat alle
                beslissingen over de branding worden vastgelegd. Zo kun je
                ervoor zorgen dat wat er besloten is ook consequent wordt
                toegepast.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="font-bold text-achieve-navy text-[18px]">
                Herkenning
              </h2>
              <p className="text-achieve-navy">
                Alle beslissingen met betrekking tot de branding komen samen in
                de huisstijl. En de huisstijl wordt vastgelegd in het Brand
                Book. Een eenduidige huisstijl is van belang, want elke
                medewerker moet zich kunnen herkennen in je merk. Dus zo nu en
                dan is verduidelijking van de visualisatie van het merk nodig.
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
