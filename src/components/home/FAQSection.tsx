"use client";
import React, { useState } from "react";
import { SetStateAction } from "react";

// Mock FAQ data
const mockFAQData: {
  [key: string]: { id: number; question: string; answer: string }[];
} = {
  "Brand Book": [
    {
      id: 1,
      question: "Wat is een Brand Book?",
      answer:
        "Een Brand Book is een uitgebreide gids die alle visuele en communicatie-elementen van uw merk bevat. Het zorgt voor consistentie in uw merkidentiteit.",
    },
    {
      id: 2,
      question: "Wat bevat een Brand Book precies?",
      answer:
        "Een Brand Book bevat logo-richtlijnen, kleurpaletten, typografie, beeldstijl, tone of voice, en praktische voorbeelden van merktoepassing.",
    },
    {
      id: 3,
      question: "Hoe kan ik mijn merk consistent en professioneler maken?",
      answer:
        "Door alle merkrichtlijnen uit het Brand Book consequent toe te passen in al uw communicatiematerialen en marketingactiviteiten.",
    },
    {
      id: 4,
      question: "Hoe kan een Brand Book mijn bedrijf helpen?",
      answer:
        "Een Brand Book zorgt voor herkenning, vertrouwen en professionaliteit. Het helpt uw team om consistent te communiceren en vergroot de merkwaarde.",
    },
    {
      id: 5,
      question:
        "Hoe lang duurt het om een complete grafische handleiding te maken?",
      answer:
        "De ontwikkeling van een complete Brand Book duurt gemiddeld 4-6 weken, afhankelijk van de complexiteit en omvang van uw merk.",
    },
  ],
  "Web Development": [
    {
      id: 1,
      question: "Wat is web development?",
      answer:
        "Web development is het proces van het bouwen en onderhouden van websites en webapplicaties.",
    },
    {
      id: 2,
      question: "Welke technologieën gebruiken jullie?",
      answer:
        "We gebruiken moderne technologieën zoals React, Next.js, Node.js, en verschillende database oplossingen.",
    },
  ],
  "E-Mail Marketing": [
    {
      id: 1,
      question: "Hoe effectief is e-mail marketing?",
      answer:
        "E-mail marketing heeft een van de hoogste ROI's in digitale marketing, met gemiddelde returns van €42 per €1 investering.",
    },
  ],
  // Add more categories as needed
};

const categories = [
  "Brand Book",
  "Web Development",
  "E-Mail Marketing",
  "Video Marketing",
  "Search Engine Advertising",
  "Social Media Advertising",
  "Social Media Management",
  "Dashboard",
  "Branding",
  "Advertising",
  "Content Creation",
  "UGC Marketing",
];

// Plus icon component
function PlusIcon({ isOpen = false }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={`text-white text-[30px] duration-500 transform ${isOpen ? "rotate-45" : "rotate-0"}`}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z" />
    </svg>
  );
}

export default function FAQSection({
  title = "Veelgestelde vragen",
  faqData = mockFAQData,
  categoryList = categories,
}) {
  const [activeCategory, setActiveCategory] = useState(categoryList[0]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (faqId: number) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const currentFAQs = faqData[activeCategory] || [];

  return (
    <div className="bg-achieve-gray-50  mx-auto px-4 py-16 pb-8">
      <div className="container mx-auto px-4  !pb-[70px]">
        <section className="flex flex-col gap-y-12">
          {/* Header */}
          <div
            className="flex justify-center items-center flex-col"
            style={{ marginBottom: "20px", gap: "4px" }}
          >
            <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
            <div className="flex gap-x-2">
              <div className="bg-achieve-purple h-[5px] w-16 rounded-md"></div>
              <div className="bg-achieve-purple h-[5px] w-24 rounded-md"></div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-y-4">
              {/* Category Tabs */}
              <div>
                <ul className="text-center">
                  {categoryList.map((category) => (
                    <li
                      key={category}
                      className={`inline-block cursor-pointer rounded-[30px] p-4 duration-500 mb-[1rem] ml-2 mr-[-1px] font-[500] capitalize text-[18px] py-[10px] px-[30px] hover:shadow-serviceCardShadow ${
                        activeCategory === category
                          ? "bg-achieve-purple text-white"
                          : "bg-white text-[#8d8fb4]"
                      }`}
                      onClick={() => {
                        setActiveCategory(category);
                        setOpenFAQ(null); // Close any open FAQ when switching categories
                      }}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Items */}
              <div className="flex flex-col gap-y-4">
                {currentFAQs.map((faq) => (
                  <article
                    key={faq.id}
                    className="bg-white hover:shadow-serviceCardShadow rounded-[8px] duration-500"
                  >
                    {/* FAQ Question */}
                    <div
                      className="flex p-3 justify-between items-center rounded-[8px] bg-white cursor-pointer"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <h5 className="font-bold">{faq.question}</h5>
                      <div className="bg-achieve-purple z-[50] flex justify-center items-center w-[30px] h-[30px] rounded-[6px]">
                        <PlusIcon isOpen={openFAQ === faq.id} />
                      </div>
                    </div>

                    {/* FAQ Answer */}
                    <div
                      className={`rounded-[8px] bg-white duration-200 overflow-hidden transition-all ${
                        openFAQ === faq.id
                          ? "max-h-96 opacity-100 pb-4 px-3"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-2 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </article>
                ))}

                {/* No FAQs message */}
                {currentFAQs.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    Geen veelgestelde vragen beschikbaar voor {activeCategory}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
