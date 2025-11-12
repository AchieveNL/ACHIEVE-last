import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "nl"],
  // Used when no locale matches
  defaultLocale: "nl",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": "/",

    // Main pages
    "/over-ons": {
      en: "/about",
    },
    "/projecten": {
      en: "/projects",
    },
    "/projecten/[slug]": {
      en: "/projects/[slug]",
    },
    "/prijzen": {
      en: "/pricing",
    },
    "/carriere": {
      en: "/careers",
    },
    "/contact": {
      en: "/contact",
    },
    // Services main page
    "/diensten": {
      en: "/services",
    },

    // Individual service pages
    "/diensten/brand-strategy": {
      en: "/services/brand-strategy",
    },
    "/diensten/brand-book": {
      en: "/services/brand-book",
    },
    "/diensten/web-development": {
      en: "/services/web-development",
    },
    "/diensten/video-marketing": {
      en: "/services/video-marketing",
    },
    "/diensten/search-engine-advertising": {
      en: "/services/search-engine-advertising",
    },
    "/diensten/social-media-management": {
      en: "/services/social-media-management",
    },
    "/diensten/email-marketing": {
      en: "/services/email-marketing",
    },
    "/diensten/ugc-marketing": {
      en: "/services/ugc-marketing",
    },
    "/diensten/social-media-advertising": {
      en: "/services/social-media-advertising",
    },
    "/diensten/dashboard": {
      en: "/services/dashboard",
    },
  },
});
