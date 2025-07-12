import { useClientTranslations } from "@/components/hooks/useClientTranslations";
import { NavigationData } from "./types";

export function useNavigationData(): NavigationData[] {
  const { t } = useClientTranslations("navigation");

  return [
    {
      id: "home",
      value: t("home.value"),
      slug: t("home.slug"),
      links: {},
    },
    {
      id: "about",
      value: t("about.value"),
      slug: t("about.slug"),
      links: {},
    },
    {
      id: "services",
      value: t("services.value"),
      slug: t("services.slug"),
      links: {
        "brand-book": t("services.links.brandBook"),
        "web-development": t("services.links.webDevelopment"),
        "email-marketing": t("services.links.emailMarketing"),
        "video-marketing": t("services.links.videoMarketing"),
        "search-engine-advertising": t(
          "services.links.searchEngineAdvertising"
        ),
        "social-media-advertising": t("services.links.socialMediaAdvertising"),
      },
    },
    {
      id: "projects",
      value: t("projects.value"),
      slug: t("projects.slug"),
      links: {},
    },
    {
      id: "pricing",
      value: t("pricing.value"),
      slug: t("pricing.slug"),
      links: {
        "brand-book": t("pricing.links.brandBook"),
        "custom-website": t("pricing.links.customWebsite"),
        "email-marketing": t("pricing.links.emailMarketing"),
        "video-marketing": t("pricing.links.videoMarketing"),
        "search-engine-advertising": t("pricing.links.searchEngineAdvertising"),
        "social-media-advertising": t("pricing.links.socialMediaAdvertising"),
        "social-media-management": t("pricing.links.socialMediaManagement"),
      },
    },
    {
      id: "careers",
      value: t("careers.value"),
      slug: t("careers.slug"),
      links: {},
    },
    {
      id: "contact",
      value: t("contact.value"),
      slug: t("contact.slug"),
      links: {},
    },
  ];
}
