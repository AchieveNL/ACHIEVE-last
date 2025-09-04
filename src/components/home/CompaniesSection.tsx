import React from "react";
import { Marquee } from "../magicui/marquee";
import { Company } from "@/types/dbdatas";
import { MongoService } from "@/lib/mongoService";
import { getTranslations } from "next-intl/server";
import HighlightedText from "../ui/HighlightedText";
import AnimatedText from "../ui/AnimatedText";
import CompanyCard from "./company/companyCard";

const CompaniesSection = async () => {
  const t = await getTranslations("companies");
  let companies: Company[] = [];
  let hasError = false;

  try {
    // Use MongoService to fetch companies with shuffle enabled
    companies = await MongoService.getCompanies({ shuffle: true });
  } catch (error) {
    console.error("Error fetching companies:", error);
    hasError = true;
  }

  if (hasError) {
    return (
      <section className="py-16 bg-achieve-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-achieve-red-500">
            {t("serverError")}
          </div>
        </div>
      </section>
    );
  }

  if (companies.length === 0) {
    return (
      <section className="py-16 bg-achieve-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">{t("loading")}</div>
        </div>
      </section>
    );
  }

  // Split companies into two rows for alternating directions
  const firstRow = companies.slice(0, Math.ceil(companies.length / 2));
  const secondRow = companies.slice(Math.ceil(companies.length / 2));

  return (
    <section className="py-16 bg-achieve-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-achieve-navy mb-4">
            {t("title.prefix")}{" "}
            <HighlightedText className="text-achieve-purple">
              <AnimatedText
                animationType="gradient"
                className="text-achieve-purple font-bold"
              >
                {t("title.companies")}
              </AnimatedText>{" "}
            </HighlightedText>{" "}
            {t("title.suffix")}
          </h2>
        </div>

        {/* Companies Carousel */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:90s]">
            {firstRow.map((company) => (
              <CompanyCard
                key={`first-${company.company}`}
                name={company.company}
                logo={company.image}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:90s]">
            {secondRow.map((company) => (
              <CompanyCard
                key={`second-${company.company}`}
                name={company.company}
                logo={company.image}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-achieve-gray-50"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-achieve-gray-50"></div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
