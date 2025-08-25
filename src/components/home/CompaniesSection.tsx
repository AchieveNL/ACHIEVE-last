import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Company } from "@/types/dbdatas";
import { MongoService } from "@/lib/mongoService";
import { getTranslations } from "next-intl/server";

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

  // Transform companies data to match InfiniteMovingCards format
  const transformedCompanies = companies.map((company) => ({
    quote: "",
    name: company.company,
    title: "",
    logo: company.image,
  }));

  if (hasError) {
    return (
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center text-achieve-red-500">
            {t("serverError")}
          </div>
        </div>
      </section>
    );
  }

  if (transformedCompanies.length === 0) {
    return (
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center">{t("loading")}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-achieve-navy mb-4">
            {t("title.prefix")}{" "}
            <span className="text-achieve-purple relative">
              {t("title.companies")}
              {/* Underline decoration */}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-achieve-purple"></span>
            </span>{" "}
            {t("title.suffix")}
          </h2>
        </div>

        {/* Companies Carousel */}
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={transformedCompanies}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={transformedCompanies}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
