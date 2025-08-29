"use client";
import React, { useState, useMemo } from "react";
import type { FaqCategory, Faq, Locale } from "@/types/dbdatas";

interface FAQClientProps {
  faqCategories: FaqCategory[];
  faqs: Faq[];
  locale: Locale;
}

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

export default function FAQClient({
  faqCategories,
  faqs,
  locale,
}: FAQClientProps) {
  // Set initial active category to first category if available
  const [activeCategory, setActiveCategory] = useState<string>(
    faqCategories.length > 0 ? faqCategories[0]._id.toString() : "",
  );
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (faqId: number) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  // Group FAQs by category
  const faqsByCategory = useMemo(() => {
    const grouped: { [key: string]: Faq[] } = {};
    faqs.forEach((faq) => {
      if (!grouped[faq.category_id]) {
        grouped[faq.category_id] = [];
      }
      grouped[faq.category_id].push(faq);
    });
    return grouped;
  }, [faqs]);

  const currentFAQs = faqsByCategory[activeCategory] || [];

  // If no data available
  if (!faqCategories.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">
          {locale === "en"
            ? "No FAQ categories available."
            : "Geen FAQ-categorieën beschikbaar."}
        </p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-y-12">
      <div>
        <div className="flex flex-col gap-y-4">
          {/* Category Tabs */}
          <div>
            <ul className="text-center">
              {faqCategories.map((category) => (
                <li
                  key={category._id}
                  className={`inline-block cursor-pointer rounded-[30px] p-4 duration-500 mb-[1rem] ml-2 mr-[-1px] font-[500] capitalize text-[18px] py-[10px] px-[30px] hover:shadow-lg ${
                    activeCategory === category._id.toString()
                      ? "bg-purple-600 text-white"
                      : "bg-white text-[#8d8fb4]"
                  }`}
                  onClick={() => {
                    setActiveCategory(category._id.toString());
                    setOpenFAQ(null); // Close any open FAQ when switching categories
                  }}
                >
                  {category.title[locale]}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Items */}
          <div className="flex flex-col gap-y-4">
            {currentFAQs.map((faq) => (
              <article
                key={faq._id}
                className="bg-white hover:shadow-lg rounded-[8px] duration-500"
              >
                {/* FAQ Question */}
                <div
                  className="flex p-3 justify-between items-center rounded-[8px] bg-white cursor-pointer"
                  onClick={() => toggleFAQ(Number(faq._id))}
                >
                  <h5 className="font-bold text-gray-900 pr-4">
                    {faq.question[locale]}
                  </h5>
                  <div className="bg-purple-600  flex justify-center items-center w-[30px] h-[30px] rounded-[6px] flex-shrink-0">
                    <PlusIcon isOpen={openFAQ === Number(faq._id)} />
                  </div>
                </div>

                {/* FAQ Answer */}
                <div
                  className={`rounded-[8px] bg-white duration-200 overflow-hidden transition-all ${
                    openFAQ === Number(faq._id)
                      ? "max-h-96 opacity-100 pb-4 px-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-2 text-gray-600 leading-relaxed">
                    {faq.answer[locale]}
                  </div>
                </div>
              </article>
            ))}

            {/* No FAQs message */}
            {currentFAQs.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                {locale === "en"
                  ? `No frequently asked questions available for ${
                      faqCategories.find(
                        (cat) => cat._id.toString() === activeCategory,
                      )?.title[locale] || "this category"
                    }`
                  : `Geen veelgestelde vragen beschikbaar voor ${
                      faqCategories.find(
                        (cat) => cat._id.toString() === activeCategory,
                      )?.title[locale] || "deze categorie"
                    }`}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
