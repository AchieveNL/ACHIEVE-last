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
      className={`text-white text-[20px] duration-300 transform ${isOpen ? "rotate-45" : "rotate-0"}`}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z" />
    </svg>
  );
}

// Desktop FAQ Component
function FAQDesktop({
  faqCategories,
  faqsByCategory,
  activeCategory,
  setActiveCategory,
  openFAQ,
  toggleFAQ,
  locale,
}: {
  faqCategories: FaqCategory[];
  faqsByCategory: { [key: string]: Faq[] };
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  openFAQ: number | null;
  toggleFAQ: (id: number) => void;
  locale: Locale;
}) {
  const currentFAQs = faqsByCategory[activeCategory] || [];

  return (
    <section className="hidden lg:flex flex-row gap-8 min-h-[500px]">
      {/* Left Side - Categories */}
      <div className="lg:w-[465px] w-full">
        <div className="rounded-lg p-6">
          <ul className="space-y-2">
            {faqCategories.map((category) => (
              <li key={category._id}>
                <button
                  className={`w-full text-left p-4 rounded-lg duration-300 font-medium text-[16px] flex items-center justify-between group hover:shadow-sm ${
                    activeCategory === category._id.toString()
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setActiveCategory(category._id.toString());
                    toggleFAQ(-1); // Close any open FAQ when switching categories
                  }}
                >
                  <span className="capitalize">{category.title[locale]}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      activeCategory === category._id.toString()
                        ? "text-white rotate-0"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - FAQ Accordion */}
      <div className="lg:w-[646px] mt-2 w-full">
        <div className="rounded-lg min-h-full p-6">
          {currentFAQs.length > 0 ? (
            <div className="space-y-3">
              {currentFAQs.map((faq) => (
                <article
                  key={faq._id}
                  className={`border rounded-lg hover:shadow-sm transition-all duration-200 ${
                    openFAQ === Number(faq._id)
                      ? "border-purple-200 bg-purple-600"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer"
                    onClick={() => toggleFAQ(Number(faq._id))}
                  >
                    <span
                      className={`font-medium text-base pr-4 flex-1 transition-colors duration-200 ${
                        openFAQ === Number(faq._id)
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      {faq.question[locale]}
                    </span>
                    <div className="bg-purple-600 flex justify-center items-center w-[25px] h-[25px] rounded-md flex-shrink-0">
                      <PlusIcon isOpen={openFAQ === Number(faq._id)} />
                    </div>
                  </div>

                  {/* Answer inside the card for desktop */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === Number(faq._id)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-4 pt-2">
                      <div className="text-white leading-relaxed text-[15px]">
                        {faq.answer[locale]}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>
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
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Mobile FAQ Component
function FAQMobile({
  faqCategories,
  faqsByCategory,
  activeCategory,
  setActiveCategory,
  openFAQ,
  toggleFAQ,
  locale,
}: {
  faqCategories: FaqCategory[];
  faqsByCategory: { [key: string]: Faq[] };
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  openFAQ: number | null;
  toggleFAQ: (id: number) => void;
  locale: Locale;
}) {
  const currentFAQs = faqsByCategory[activeCategory] || [];

  return (
    <section className="flex lg:hidden flex-col gap-8 min-h-[500px]">
      {/* Categories */}
      <div className="w-full">
        <div className="rounded-lg p-6">
          <ul className="space-y-2">
            {faqCategories.map((category) => (
              <li key={category._id}>
                <button
                  className={`w-full text-left p-4 rounded-lg duration-300 font-medium text-[16px] flex items-center justify-between group hover:shadow-sm ${
                    activeCategory === category._id.toString()
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setActiveCategory(category._id.toString());
                    toggleFAQ(-1); // Close any open FAQ when switching categories
                  }}
                >
                  <span className="capitalize">{category.title[locale]}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      activeCategory === category._id.toString()
                        ? "text-white rotate-0"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* FAQ List - Answer appears below question on mobile */}
                <div
                  className={`${activeCategory === category._id.toString() ? "" : "hidden"}`}
                >
                  <div className="rounded-lg min-h-full pl-3 pt-4">
                    {currentFAQs.length > 0 ? (
                      <div className="space-y-3">
                        {currentFAQs.map((faq) => (
                          <article
                            key={faq._id}
                            className={`border rounded-lg hover:shadow-sm transition-all duration-200 ${
                              openFAQ === Number(faq._id)
                                ? "border-purple-200 bg-purple-600"
                                : "border-gray-200 bg-white"
                            }`}
                          >
                            <div
                              className="flex items-center justify-between p-4 cursor-pointer"
                              onClick={() => toggleFAQ(Number(faq._id))}
                            >
                              <span
                                className={`font-medium text-base pr-4 flex-1 transition-colors duration-200 ${
                                  openFAQ === Number(faq._id)
                                    ? "text-white"
                                    : "text-gray-800"
                                }`}
                              >
                                {faq.question[locale]}
                              </span>
                              <div className="bg-purple-600 flex justify-center items-center w-[25px] h-[25px] rounded-md flex-shrink-0">
                                <PlusIcon
                                  isOpen={openFAQ === Number(faq._id)}
                                />
                              </div>
                            </div>

                            {/* Answer inside the card for desktop */}
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openFAQ === Number(faq._id)
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="px-4 pb-4 pt-2">
                                <div className="text-white leading-relaxed text-[15px]">
                                  {faq.answer[locale]}
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <p>
                          {locale === "en"
                            ? `No frequently asked questions available for ${
                                faqCategories.find(
                                  (cat) =>
                                    cat._id.toString() === activeCategory,
                                )?.title[locale] || "this category"
                              }`
                            : `Geen veelgestelde vragen beschikbaar voor ${
                                faqCategories.find(
                                  (cat) =>
                                    cat._id.toString() === activeCategory,
                                )?.title[locale] || "deze categorie"
                              }`}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Main Component
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
    <>
      {/* Desktop Version */}
      <FAQDesktop
        faqCategories={faqCategories}
        faqsByCategory={faqsByCategory}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        openFAQ={openFAQ}
        toggleFAQ={toggleFAQ}
        locale={locale}
      />

      {/* Mobile Version */}
      <FAQMobile
        faqCategories={faqCategories}
        faqsByCategory={faqsByCategory}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        openFAQ={openFAQ}
        toggleFAQ={toggleFAQ}
        locale={locale}
      />
    </>
  );
}
