/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
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

interface DesktopNavigationProps {
  navigationData: NavigationData[];
}

// Service images mapping - only paths and alt text, descriptions come from translations
const serviceImages = {
  "brand-book": {
    src: "/images/services/brand-book.jpg",
    alt: "Brand Book Services",
  },
  "web-development": {
    src: "/images/services/web-development.jpg",
    alt: "Web Development Services",
  },
  "email-marketing": {
    src: "/images/services/email-marketing.jpg",
    alt: "Email Marketing Services",
  },
  "video-marketing": {
    src: "/images/services/video-marketing.jpg",
    alt: "Video Marketing Services",
  },
  "search-engine-advertising": {
    src: "/images/services/sea.jpg",
    alt: "Search Engine Advertising",
  },
  "social-media-advertising": {
    src: "/images/services/social-ads.jpg",
    alt: "Social Media Advertising",
  },
  "social-media-management": {
    src: "/images/services/social-management.jpg",
    alt: "Social Media Management",
  },
  dashboard: {
    src: "/images/services/dashboard.jpg",
    alt: "Dashboard Services",
  },
} as const;

// Default image for services
const defaultServiceImage = serviceImages["brand-book"];

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
                    <Link href={item.slug}>{item.value}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }

            // Navigation item with dropdown - different layouts based on item
            return (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuTrigger className="hover:bg-transparent hover:text-achieve-purple focus:bg-transparent focus:text-achieve-purple data-[state=open]:bg-transparent data-[state=open]:text-achieve-purple">
                  {item.value}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.id === "services" || item.id === "pricing" ? (
                    // Enhanced Services dropdown with image callout
                    <div className="flex w-[700px]">
                      {/* Left side - Image callout */}
                      <div
                        className="flex-shrink-0 w-[280px] rounded-l-lg"
                        style={{ gridRow: "span 3" }}
                      >
                        <NavigationMenuLink asChild>
                          <Link
                            href={`${item.slug}/${hoveredService || "brand-book"}`}
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
                                className="w-full min-h-80 object-cover transition-all duration-300"
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
                              href={`${item.slug}/${key}`}
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
                              href={`${item.slug}/${key}`}
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
