import * as React from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Logo from "./Logo";
import ConsultationButton from "./ConsultationButton";
import { NavigationData } from "./types";
import { Link } from "@/i18n/navigation";

interface MobileNavigationProps {
  navigationData: NavigationData[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

// Route mapping (same as DesktopNavigation for consistency)
const serviceRoutes: Record<string, string> = {
  "brand-strategy": "/diensten/brand-strategy",
  "brand-book": "/diensten/brand-book",
  "custom-website": "/diensten/custom-website",
  "email-marketing": "/diensten/email-marketing",
  "video-marketing": "/diensten/video-marketing",
  "ugc-marketing": "/diensten/ugc-marketing",
  "search-engine-advertising": "/diensten/search-engine-advertising",
  "social-media-advertising": "/diensten/social-media-advertising",
  "social-media-management": "/diensten/social-media-management",
  dashboard: "/diensten/dashboard",
} as const;

const mainRoutes: Record<string, string> = {
  home: "/",
  about: "/over-ons",
  services: "/diensten",
  projects: "/projecten",
  pricing: "/prijzen",
  careers: "/carriere",
  contact: "/contact",
} as const;

const getServiceRoute = (serviceKey: string): string => {
  return serviceRoutes[serviceKey] || "/diensten/brand-book";
};

const getMainRoute = (routeId: string): string => {
  return mainRoutes[routeId] || "/";
};

export default function MobileNavigation({
  navigationData,
  open,
  setOpen,
}: MobileNavigationProps) {
  return (
    <div className="lg:hidden flex items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full sm:w-[400px] p-0 flex flex-col"
        >
          {/* Header with Logo */}
          <div className="flex justify-center py-6 border-b border-gray-200 bg-white px-6">
            <Logo width={100} height={100} />
          </div>

          {/* Scrollable Navigation Area */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <Accordion type="multiple" className="w-full space-y-2">
              {navigationData.map((item) => {
                const hasSubLinks = Object.keys(item.links).length > 0;

                if (!hasSubLinks) {
                  // Simple navigation link without accordion
                  return (
                    <div key={item.id} className="rounded-lg overflow-hidden">
                      <Link
                        href={getMainRoute(item.id) as any}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3.5 text-base font-medium text-gray-900 hover:text-achieve-purple hover:bg-purple-50 transition-all duration-200 active:bg-purple-100"
                      >
                        {item.value}
                      </Link>
                    </div>
                  );
                }

                // Navigation item with accordion
                return (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-none"
                  >
                    <AccordionTrigger className="px-4 py-3.5 text-base font-medium text-gray-900 hover:text-achieve-purple hover:bg-purple-50 transition-all duration-200 rounded-lg hover:no-underline data-[state=open]:bg-purple-50 data-[state=open]:text-achieve-purple">
                      {item.value}
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-2">
                      <div className="space-y-1 pt-2">
                        {/* "View All" link */}
                        <Link
                          href={getMainRoute(item.id) as any}
                          onClick={() => setOpen(false)}
                          className="block text-sm font-semibold text-achieve-purple hover:text-achieve-purple/80 transition-colors py-2.5 px-4 bg-achieve-purple/5 rounded-md hover:bg-achieve-purple/10 active:bg-achieve-purple/15"
                        >
                          View All {item.value}
                        </Link>

                        {/* Sublinks */}
                        <div className="space-y-0.5 pt-1">
                          {Object.entries(item.links).map(([key, linkData]) => (
                            <Link
                              key={key}
                              href={getServiceRoute(key) as any}
                              onClick={() => setOpen(false)}
                              className="block text-sm text-gray-700 hover:text-achieve-purple hover:bg-purple-50 transition-all duration-200 py-2.5 px-4 rounded-md active:bg-purple-100"
                            >
                              {typeof linkData === "string"
                                ? linkData
                                : linkData.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Fixed CTA Button at Bottom */}
          <div className="border-t border-gray-200 bg-white p-6">
            <div onClick={() => setOpen(false)}>
              <ConsultationButton className="w-full justify-center" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
