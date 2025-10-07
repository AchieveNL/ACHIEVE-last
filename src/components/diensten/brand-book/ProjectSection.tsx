/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
import { getTranslations } from "next-intl/server";
import type { CaseDocument, Locale } from "@/types/dbdatas"; // Adjust path as needed
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
        return val.expertiseForCasesList.includes("Brand Book");
      },
    });
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch projects";
    console.error("Error fetching cases:", err);
  }

  // Error state
  if (error || cases.length === 0) {
    return (
      <div className="pt-4">
        <section className="flex flex-col gap-y-12 relative">
          <div
            className="flex justify-center items-center flex-col"
            style={{ marginBottom: "20px", gap: "4px" }}
          >
            <HighlightedText className="text-achieve-purple">
              <h2 className="text-4xl font-bold text-gray-800">{t("title")}</h2>
            </HighlightedText>{" "}
          </div>

          <div className="container mx-auto px-4">
            <div className="text-center py-12">
              <p className="text-gray-600">{t("noProjectsMessage")}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-12 ">
      <section className="flex flex-col gap-y-12 relative">
        {/* Header */}
        <div
          className="flex justify-center items-center flex-col"
          style={{ marginBottom: "20px", gap: "4px" }}
        >
          <HighlightedText className="text-achieve-purple">
            <h2 className="text-4xl font-bold text-achieve-navy">
              {locale === "en" ? (
                <>
                  Nice story, nice and short! Now show us an{" "}
                  <AnimatedText
                    animationType="gradient"
                    className="text-achieve-purple font-bold"
                  >
                    example
                  </AnimatedText>
                  !
                </>
              ) : (
                <>
                  Mooi verhaal, lekker kort! Laat ons nu maar een{" "}
                  <AnimatedText
                    animationType="gradient"
                    className="text-achieve-purple font-bold"
                  >
                    voorbeeld
                  </AnimatedText>{" "}
                  zien!
                </>
              )}
            </h2>
          </HighlightedText>{" "}
          <p className="text-[20px] mt-2 text-center max-w-[1105px] font-semibold text-achieve-navy">
            {t("description")}
          </p>
        </div>

        <div className="container mx-auto px-4">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((project) => (
              <Link
                key={project._id}
                href={`/projecten/${project.slug}` as any}
                className="group h-full"
              >
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-700 h-full flex flex-col">
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      src={project.previewImage || project.bannerImage}
                      alt={getLocalizedText(project.bannerTitle, locale)}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">
                      {getLocalizedText(project.bannerTitle, locale)}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                      {getLocalizedText(project.description, locale)}
                    </p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-500">
                        {getCategoryFromExpertise(project.expertise)}
                      </span>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
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
          <div className="flex justify-center mt-12">
            <Link
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 group"
              href="/projecten"
            >
              {t("viewMoreButton")}
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
