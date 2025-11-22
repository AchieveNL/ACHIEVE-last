/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
import { getTranslations } from "next-intl/server";
import type { CaseDocument, Locale } from "@/types/dbdatas";
import { MongoService } from "@/lib/mongoService";
import { Link } from "@/i18n/navigation";
import HighlightedText from "@/components/ui/HighlightedText";
import AnimatedText from "@/components/ui/AnimatedText";

interface ProjectsSectionServerProps {
  locale?: Locale;
  limit?: number;
}

// Helper function to get localized content
const getLocalizedText = (
  text: { en: string; nl: string },
  locale: Locale = "en",
) => {
  return text[locale] || text.en;
};

// Helper function to determine category from expertise
const getCategoryFromExpertise = (expertise: string[] = []) => {
  if (expertise.includes("web-development") || expertise.includes("web-app")) {
    return "Web-app";
  }
  if (expertise.includes("sea") || expertise.includes("google-ads")) {
    return "SEA";
  }
  if (expertise.includes("branding") || expertise.includes("brand-book")) {
    return "Brand Book";
  }
  return expertise[0] || "General";
};

// Server Component - fetches data on server
const ProjectsSectionServer = async ({
  locale = "en",
  limit = 3,
}: ProjectsSectionServerProps) => {
  const t = await getTranslations("page-brand-book.projectsSection");

  let cases: CaseDocument[] = [];
  let error: string | null = null;

  try {
    cases = await MongoService.getCases({
      enabled: true,
      limit: limit,
      filterFunction(val, i) {
        return (
          typeof val.expertiseForCasesList === "string" &&
          val.expertiseForCasesList.includes("Brand Book")
        );
      },
    });
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch projects";
    console.error("Error fetching cases:", err);
  }

  // Error state
  if (error || cases.length === 0) {
    return (
      <div className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <section className="flex flex-col gap-y-8 md:gap-y-12 relative">
          <div className="flex justify-center items-center flex-col gap-3 md:gap-4">
            <HighlightedText className="text-achieve-purple">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center px-4">
                {t("title")}
              </h2>
            </HighlightedText>
          </div>

          <div className="container mx-auto">
            <div className="text-center py-8 md:py-12">
              <p className="text-gray-600 text-sm md:text-base">
                {t("noProjectsMessage")}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-0">
      <section className="flex flex-col gap-y-8 md:gap-y-12 relative">
        {/* Header */}
        <div className="flex justify-center items-center flex-col gap-3 md:gap-4 mb-4 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-achieve-navy text-center px-4">
            {locale === "en" ? (
              <>
                Nice story, nice and short! Now show us an{" "}
                <HighlightedText className="text-achieve-purple">
                  <AnimatedText
                    animationType="gradient"
                    className="text-achieve-purple font-bold"
                  >
                    example
                  </AnimatedText>
                </HighlightedText>
                !
              </>
            ) : (
              <>
                Mooi verhaal, lekker kort! Laat ons nu maar een{" "}
                <HighlightedText className="text-achieve-purple">
                  <AnimatedText
                    animationType="gradient"
                    className="text-achieve-purple font-bold"
                  >
                    voorbeeld
                  </AnimatedText>{" "}
                </HighlightedText>{" "}
                zien!
              </>
            )}
          </h2>
          <p className="text-base md:text-lg lg:text-[20px] mt-2 text-center max-w-[1105px] font-semibold text-achieve-navy px-4">
            {t("description")}
          </p>
        </div>

        <div className="container mx-auto">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cases.map((project) => (
              <Link
                key={project._id}
                href={`/projecten/${project.slug}` as any}
                className="group h-full"
              >
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-700 h-full flex flex-col">
                  <div className="relative h-[200px] md:h-[240px] overflow-hidden">
                    <img
                      src={project.previewImage || project.bannerImage}
                      alt={getLocalizedText(project.bannerTitle, locale)}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                      {getLocalizedText(project.bannerTitle, locale)}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2 flex-grow">
                      {getLocalizedText(project.description, locale)}
                    </p>
                    <div className="flex justify-between items-center mt-auto pt-3 md:pt-4 border-t border-gray-100">
                      <span className="text-xs md:text-sm font-medium text-gray-500 truncate pr-2">
                        {getCategoryFromExpertise(project.expertise)}
                      </span>
                      <span className="text-xs md:text-sm text-gray-400 flex items-center gap-1 flex-shrink-0">
                        <svg
                          className="w-3.5 h-3.5 md:w-4 md:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                        {project.views || 0}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-8 md:mt-12">
            <Link
              className="inline-flex items-center px-6 md:px-8 py-2.5 md:py-3 bg-purple-600 text-white text-sm md:text-base font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 group w-full sm:w-auto justify-center"
              href="/projecten"
            >
              {t("viewMoreButton")}
              <svg
                className="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSectionServer;
