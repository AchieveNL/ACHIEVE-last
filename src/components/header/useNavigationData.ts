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
        dashboard: {
          title: t("services.links.dashboard.title"),
          description: t("services.links.dashboard.description"),
        },
        "brand-book": {
          title: t("services.links.brandBook.title"),
          description: t("services.links.brandBook.description"),
        },
        "web-development": {
          title: t("services.links.webDevelopment.title"),
          description: t("services.links.webDevelopment.description"),
        },
        "email-marketing": {
          title: t("services.links.emailMarketing.title"),
          description: t("services.links.emailMarketing.description"),
        },
        "video-marketing": {
          title: t("services.links.videoMarketing.title"),
          description: t("services.links.videoMarketing.description"),
        },
        "search-engine-advertising": {
          title: t("services.links.searchEngineAdvertising.title"),
          description: t("services.links.searchEngineAdvertising.description"),
        },
        "social-media-advertising": {
          title: t("services.links.socialMediaAdvertising.title"),
          description: t("services.links.socialMediaAdvertising.description"),
        },
        "social-media-management": {
          title: t("services.links.socialMediaManagement.title"),
          description: t("services.links.socialMediaManagement.description"),
        },
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
        dashboard: {
          title: t("pricing.links.dashboard.title"),
          description: t("pricing.links.dashboard.description"),
        },
        "brand-book": {
          title: t("pricing.links.brandBook.title"),
          description: t("pricing.links.brandBook.description"),
        },
        "custom-website": {
          title: t("pricing.links.customWebsite.title"),
          description: t("pricing.links.customWebsite.description"),
        },
        "email-marketing": {
          title: t("pricing.links.emailMarketing.title"),
          description: t("pricing.links.emailMarketing.description"),
        },
        "video-marketing": {
          title: t("pricing.links.videoMarketing.title"),
          description: t("pricing.links.videoMarketing.description"),
        },
        "search-engine-advertising": {
          title: t("pricing.links.searchEngineAdvertising.title"),
          description: t("pricing.links.searchEngineAdvertising.description"),
        },
        "social-media-advertising": {
          title: t("pricing.links.socialMediaAdvertising.title"),
          description: t("pricing.links.socialMediaAdvertising.description"),
        },
        "social-media-management": {
          title: t("pricing.links.socialMediaManagement.title"),
          description: t("pricing.links.socialMediaManagement.description"),
        },
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
