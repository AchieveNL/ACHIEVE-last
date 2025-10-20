"use client";
import * as React from "react";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import ConsultationButton from "./ConsultationButton";
import LanguageSwitcher from "../LanguageSwitcher";
import { useNavigationData } from "./useNavigationData";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const navigationData = useNavigationData();

  return (
    <nav className="z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 fixed">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - Left */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation Menu - Hidden on lg and below */}
          <DesktopNavigation navigationData={navigationData} />

          {/* Right Side Elements */}
          <div className="gap-2 flex items-center">
            <LanguageSwitcher />

            {/* Desktop CTA - Hidden on mobile */}
            <div className="hidden lg:block">
              <ConsultationButton />
            </div>

            {/* Mobile Navigation - Only visible on lg and below */}
            <MobileNavigation
              navigationData={navigationData}
              open={open}
              setOpen={setOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
