/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationData, NavigationLink } from "./types";
import ListItem from "./ListItem";
import { Link } from "@/i18n/navigation";

interface DesktopNavigationProps {
  navigationData: NavigationData[];
}

// Service images mapping - only paths and alt text, descriptions come from translations
const serviceImages = {
  "brand-strategy": {
    src: "/images/services/brand-strategy.png",
    alt: "Brand Strategy Services",
  },
  "custom-website": {
    src: "/images/services/custom-website.png",
    alt: "Custom Website Services",
  },
  "video-marketing": {
    src: "/images/services/video-marketing.png",
    alt: "Video Marketing Services",
  },
  "search-engine-advertising": {
    src: "/images/services/sea.png",
    alt: "Search Engine Advertising",
  },
  "social-media-management": {
    src: "/images/services/social-management.png",
    alt: "Social Media Management",
  },
  "brand-book": {
    src: "/images/services/brand-book.png",
    alt: "Brand Book Services",
  },
  "email-marketing": {
    src: "/images/services/email-marketing.png",
    alt: "Email Marketing Services",
  },
  "ugc-marketing": {
    src: "/images/services/ugc-marketing.png",
    alt: "UGC Marketing Services",
  },
  "social-media-advertising": {
    src: "/images/services/social-ads.png",
    alt: "Social Media Advertising",
  },
  dashboard: {
    src: "/images/services/dashboard.png",
    alt: "Dashboard Services",
  },
} as const;

// Route mapping using pathname keys (Dutch keys that will be auto-localized by next-intl)
const serviceRoutes: Record<string, string> = {
  "brand-strategy": "/diensten/brand-strategy",
  "brand-book": "/diensten/brand-book",
  "web-development": "/diensten/web-development",
  "email-marketing": "/diensten/email-marketing",
  "video-marketing": "/diensten/video-marketing",
  "ugc-marketing": "/diensten/ugc-marketing",
  "search-engine-advertising": "/diensten/search-engine-advertising",
  "social-media-advertising": "/diensten/social-media-advertising",
  "social-media-management": "/diensten/social-media-management",
  dashboard: "/diensten/dashboard",
} as const;

// Main navigation routes using pathname keys (Dutch keys that will be auto-localized)
const mainRoutes: Record<string, string> = {
  home: "/",
  about: "/over-ons", // Will become /about in EN
  services: "/diensten", // Will become /services in EN
  projects: "/projecten", // Will become /projects in EN
  pricing: "/prijzen", // Will become /pricing in EN
  careers: "/carriere", // Will become /careers in EN
  contact: "/contact", // Will remain /contact in EN
} as const;

// Default image for services
const defaultServiceImage = serviceImages["brand-strategy"];

// Helper function to get service route
const getServiceRoute = (serviceKey: string): string => {
  return serviceRoutes[serviceKey] || "/diensten/brand-book";
};

// Helper function to get main route
const getMainRoute = (routeId: string): string => {
  return mainRoutes[routeId] || "/";
};

// Helper function to get description from navigation data
const getServiceDescription = (
  serviceKey: string | null,
  navigationData: NavigationData[],
): string => {
  const servicesNav = navigationData.find((item) => item.id === "services");
  if (!servicesNav || !serviceKey) {
    // Return default (brand-book) description
    const defaultKey = "brand-book";
    const defaultLink = servicesNav?.links[defaultKey] as NavigationLink;
    return defaultLink.title
      ? `Professional ${defaultLink.title.toLowerCase()} services.`
      : defaultLink?.description ||
          "Comprehensive brand identity and guidelines";
  }

  const linkData = servicesNav.links[serviceKey] as NavigationLink;
  return linkData?.title
    ? `Professional ${linkData.title.toLowerCase()} services.`
    : linkData?.description || "Professional services for your business";
};

export default function DesktopNavigation({
  navigationData,
}: DesktopNavigationProps) {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="hidden lg:flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          {navigationData.map((item) => {
            const hasSubLinks = Object.keys(item.links).length > 0;
            if (!hasSubLinks) {
              // Simple navigation link without dropdown
              return (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-achieve-purple focus:bg-transparent focus:text-achieve-purple`}
                  >
                    <Link href={getMainRoute(item.id) as any}>
                      {item.value}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }

            // Navigation item with dropdown - different layouts based on item
            return (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuTrigger className="hover:bg-transparent hover:text-achieve-purple focus:bg-transparent focus:text-achieve-purple data-[state=open]:bg-transparent data-[state=open]:text-achieve-purple">
                  <Link href={getMainRoute(item.id) as any}>{item.value}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.id === "services" || item.id === "pricing" ? (
                    // Enhanced Services dropdown with image callout
                    <div className="flex w-[800px]">
                      {/* Left side - Image callout */}
                      <div
                        className="flex-shrink-0 w-[280px] rounded-l-lg"
                        style={{ gridRow: "span 3" }}
                      >
                        <NavigationMenuLink asChild>
                          <Link
                            href={
                              getServiceRoute(
                                hoveredService || "brand-book",
                              ) as any
                            }
                            className="Callout block h-full"
                          >
                            <div className="relative rounded-lg overflow-hidden">
                              <img
                                src={
                                  hoveredService &&
                                  serviceImages[
                                    hoveredService as keyof typeof serviceImages
                                  ]
                                    ? serviceImages[
                                        hoveredService as keyof typeof serviceImages
                                      ].src
                                    : defaultServiceImage.src
                                }
                                alt={
                                  hoveredService &&
                                  serviceImages[
                                    hoveredService as keyof typeof serviceImages
                                  ]
                                    ? serviceImages[
                                        hoveredService as keyof typeof serviceImages
                                      ].alt
                                    : defaultServiceImage.alt
                                }
                                className="w-full min-h-[401px] object-cover transition-all duration-300"
                              />
                              {/* Text overlay positioned at bottom of image */}
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <p className="CalloutText text-sm text-white leading-relaxed">
                                  {getServiceDescription(
                                    hoveredService,
                                    navigationData,
                                  )}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>

                      {/* Right side - Service links grid */}
                      <ul className="grid gap-2 p-4 md:grid-cols-2 flex-1">
                        {Object.entries(item.links).map(([key, linkData]) => (
                          <div
                            key={key}
                            onMouseEnter={() => setHoveredService(key)}
                            onMouseLeave={() => setHoveredService(null)}
                          >
                            <ListItem
                              title={
                                typeof linkData === "string"
                                  ? linkData
                                  : linkData.title
                              }
                              href={getServiceRoute(key) as any}
                            ></ListItem>
                          </div>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    // Simple layout for other dropdowns
                    <ul className="grid w-[300px] gap-4 p-4">
                      <li>
                        {Object.entries(item.links).map(([key, linkData]) => (
                          <NavigationMenuLink asChild key={key}>
                            <Link
                              href={getServiceRoute(key) as any}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-achieve-purple focus:bg-transparent focus:text-achieve-purple"
                            >
                              <div className="text-sm font-medium leading-none">
                                {typeof linkData === "string"
                                  ? linkData
                                  : linkData.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {typeof linkData === "string"
                                  ? `Professional ${(linkData as string).toLowerCase()} services.`
                                  : linkData.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </li>
                    </ul>
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
