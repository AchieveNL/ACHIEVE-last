"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";

export default function NavBar() {
  // Move useTranslations INSIDE the component
  const { t } = useClientTranslations("navigation");

  // Create internationalized navigation data using translations
  const navigationData = [
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

  return (
    <nav className="w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 fixed">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Achieve Logo"
                width={140}
                height={140}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation Menu - Right */}
          <div className="flex items-center space-x-4">
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
                        {item.id === "services" ? (
                          // Grid layout for Services dropdown
                          <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {Object.entries(item.links).map(
                              ([key, linkText]) => (
                                <ListItem
                                  key={key}
                                  title={linkText}
                                  href={`${item.slug}/${key}`}
                                >
                                  {key === "brand-book"}
                                  {key === "web-development"}
                                  {key === "email-marketing"}
                                  {key === "video-marketing"}
                                  {key === "search-engine-advertising"}
                                  {key === "social-media-advertising"}
                                </ListItem>
                              )
                            )}
                          </ul>
                        ) : item.id === "pricing" ? (
                          // Grid layout for Pricing dropdown
                          <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {Object.entries(item.links).map(
                              ([key, linkText]) => (
                                <ListItem
                                  key={key}
                                  title={linkText}
                                  href={`${item.slug}/${key}`}
                                >
                                  {key === "brand-book"}
                                  {key === "custom-website"}
                                  {key === "email-marketing"}
                                  {key === "video-marketing"}
                                  {key === "search-engine-advertising"}
                                  {key === "social-media-advertising"}
                                  {key === "social-media-management"}
                                </ListItem>
                              )
                            )}
                          </ul>
                        ) : (
                          // Simple layout for other dropdowns
                          <ul className="grid w-[300px] gap-4 p-4">
                            <li>
                              {Object.entries(item.links).map(
                                ([key, linkText]) => (
                                  <NavigationMenuLink asChild key={key}>
                                    <Link
                                      href={`${item.slug}/${key}`}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-achieve-purple focus:bg-transparent focus:text-achieve-purple"
                                    >
                                      <div className="text-sm font-medium leading-none">
                                        {linkText}
                                      </div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        Professional {linkText.toLowerCase()}{" "}
                                        services.
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                )
                              )}
                            </li>
                          </ul>
                        )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
            {/* Language Switcher */}
          </div>
          <div className="gap-2 flex items-center">
            <LanguageSwitcher />
            <button className=" group CustomButton ease-out flex justify-center items-center gap-x-1 origin-center bg-achieve-purple text-white border-[1px] border-achieve-purple hover:bg-none duration-300 hover:bg-white hover:text-achieve-purple px-4 py-2 rounded-md">
              <svg
                className={
                  "Fire origin-center overflow-hidden align-middle group-hover:color-achieve-purple group-hover:fill-achieve-purple"
                }
                color={"white"}
                fill={"white"}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                preserveAspectRatio="xMidYMin"
                viewBox={`0 0 24 24`}
              >
                <path d="M16.5,8c0,1.5-0.5,3.5-2.9,4.3c0.7-1.7,0.8-3.4,0.3-5c-0.7-2.1-3-3.7-4.6-4.6C8.9,2.4,8.2,2.8,8.3,3.4c0,1.1-0.3,2.7-2,4.4  C4.1,10,3,12.3,3,14.5C3,17.4,5,21,9,21c-4-4-1-7.5-1-7.5c0.8,5.9,5,7.5,7,7.5c1.7,0,5-1.2,5-6.4c0-3.1-1.3-5.5-2.4-6.9  C17.3,7.2,16.6,7.5,16.5,8"></path>
              </svg>
              <p className="font-semibold">Consultation</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; title: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-achieve-purple focus:bg-transparent focus:text-achieve-purple"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
