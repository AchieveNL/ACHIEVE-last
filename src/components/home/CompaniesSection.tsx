"use client";
import React from "react";
import { useClientTranslations } from "../hooks/useClientTranslations";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const CompaniesSection = () => {
  const { t, locale } = useClientTranslations("companies");

  // Company logos data
  const testimonials = [
    {
      quote: "",
      name: "Company 1",
      title: "",
      logo: "/logos/company_logos/4051b13f-c48f-41a1-aa24-157274a2135dfc.png",
    },
    {
      quote: "",
      name: "Era Contour",
      title: "",
      logo: "/logos/company_logos/7ce89770-1a2c-4684-bcf9-015963f4529fEra Contour.png",
    },
    {
      quote: "",
      name: "Company 3",
      title: "",
      logo: "/logos/company_logos/algemene_qfx2l3.png",
    },
    {
      quote: "",
      name: "Company 4",
      title: "",
      logo: "/logos/company_logos/apjpc0ejdcvmokws5lpm.svg",
    },
    {
      quote: "",
      name: "Company 5",
      title: "",
      logo: "/logos/company_logos/bmucilhapgmva67li2td.svg",
    },
    {
      quote: "",
      name: "Company 6",
      title: "",
      logo: "/logos/company_logos/c11rhio42s1kpup81vee.webp",
    },
    {
      quote: "",
      name: "Company 7",
      title: "",
      logo: "/logos/company_logos/cfbomnstexbnxmbniqoh.svg",
    },
    {
      quote: "",
      name: "Company 8",
      title: "",
      logo: "/logos/company_logos/cucjej0ayaki1cqolbtj.webp",
    },
    {
      quote: "",
      name: "Company 9",
      title: "",
      logo: "/logos/company_logos/cvilsmhjfb0wiicst0ku.webp",
    },
    {
      quote: "",
      name: "Company 10",
      title: "",
      logo: "/logos/company_logos/cw30pedhruzbgsqqvkum.webp",
    },
    {
      quote: "",
      name: "Company 11",
      title: "",
      logo: "/logos/company_logos/czgftfxmdbxwnwa3lket.svg",
    },
    {
      quote: "",
      name: "Company 12",
      title: "",
      logo: "/logos/company_logos/ejbs7y8qtfor1ljtfv7l.svg",
    },
  ];
  return (
    <section className="py-16 bg-achieve-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-achieve-navy mb-4">
            {locale === "en" ? (
              <>
                These{" "}
                <span className="text-achieve-purple relative">
                  companies
                  {/* Underline decoration */}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-achieve-purple"></span>
                </span>{" "}
                preceded you
              </>
            ) : (
              <>
                Deze{" "}
                <span className="text-achieve-purple relative">
                  bedrijven
                  {/* Underline decoration */}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-achieve-purple"></span>
                </span>{" "}
                gingen je voor
              </>
            )}
          </h2>
        </div>

        {/* Companies Grid */}

        <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>

        {/* Optional: Add more companies indicator */}
      </div>
    </section>
  );
};

export default CompaniesSection;
