import { MongoService } from "@/lib/mongoService";
import FAQClient from "./FAQClient";
import type { Locale } from "@/types/dbdatas";

interface FAQSectionProps {
  locale?: Locale;
  className?: string;
  title?: {
    en: string;
    nl: string;
  };
}

export default async function FAQSection({
  locale = "en",
  className = "",
  title = {
    en: "Frequently Asked Questions",
    nl: "Veelgestelde vragen",
  },
}: FAQSectionProps) {
  try {
    // Fetch FAQ data from MongoDB using MongoService
    const faqData = await MongoService.getFaqData();

    return (
      <section className={`bg-gray-50 mx-auto px-4 py-16 pb-8 ${className}`}>
        <div className="container  mx-auto px-4 !pb-[70px]">
          {/* Header */}
          <div
            className="flex justify-center  items-center flex-col"
            style={{ marginBottom: "20px", gap: "4px" }}
          >
            <h2 className="text-4xl font-bold text-gray-800">
              {title[locale]}
            </h2>
            <div className="flex gap-x-2">
              <div className="bg-purple-600 h-[5px] w-16 rounded-md"></div>
              <div className="bg-purple-600 h-[5px] w-24 rounded-md"></div>
            </div>
          </div>

          {/* FAQ Client Component */}
          <FAQClient
            faqCategories={faqData.faqCategories}
            faqs={faqData.faqs}
            locale={locale}
          />
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error loading FAQ data:", error);

    return (
      <section className={`bg-gray-50 mx-auto px-4 py-16 pb-8 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {title[locale]}
            </h2>
            <p className="text-gray-600">
              {locale === "en"
                ? "Unable to load FAQ data at this time."
                : "Kan FAQ-gegevens op dit moment niet laden."}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
