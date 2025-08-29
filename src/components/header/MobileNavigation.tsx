import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Logo from "./Logo";
import { NavigationData } from "./types";

interface MobileNavigationProps {
  navigationData: NavigationData[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileNavigation({
  navigationData,
  open,
  setOpen,
}: MobileNavigationProps) {
  return (
    <div className="lg:hidden flex items-center gap-2">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="mt-8">
            <div className="flex justify-center mb-6">
              <Logo width={120} height={120} />
            </div>
            <Accordion type="multiple" className="w-full space-y-2">
              {navigationData.map((item) => {
                const hasSubLinks = Object.keys(item.links).length > 0;
                if (!hasSubLinks) {
                  // Simple navigation link without accordion
                  return (
                    <div
                      key={item.id}
                      className="rounded-lg border border-gray-200 bg-white"
                    >
                      <Link
                        href={item.slug}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 text-lg font-medium text-gray-900 hover:text-achieve-purple hover:bg-gray-50 transition-all duration-200 rounded-lg"
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
                    className="border border-gray-200 rounded-lg bg-white"
                  >
                    <AccordionTrigger className="px-4 py-3 text-lg font-medium text-gray-900 hover:text-achieve-purple hover:bg-gray-50 transition-all duration-200 rounded-t-lg data-[state=open]:rounded-b-none data-[state=open]:border-b border-gray-200">
                      {item.value}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3">
                      <div className="space-y-3 pt-2">
                        <Link
                          href={item.slug}
                          onClick={() => setOpen(false)}
                          className="block text-sm font-semibold text-achieve-purple hover:text-achieve-purple/80 transition-colors py-2 px-3 bg-achieve-purple/5 rounded-md hover:bg-achieve-purple/10"
                        >
                          View All {item.value}
                        </Link>
                        <div className="space-y-1">
                          {Object.entries(item.links).map(([key, linkText]) => (
                            <Link
                              key={key}
                              href={`${item.slug}/${key}`}
                              onClick={() => setOpen(false)}
                              className="block text-sm text-gray-600 hover:text-achieve-purple hover:bg-gray-50 transition-all duration-200 py-2 px-3 rounded-md"
                            >
                              {linkText.title as string}
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
