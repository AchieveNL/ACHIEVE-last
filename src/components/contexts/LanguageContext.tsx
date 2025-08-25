"use client";
import { createContext, useContext } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "nl",
  setLocale: (_locale: string) => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = (newLocale: string) => {
    // Use next-intl's router which handles locale prefixing automatically
    // This will respect the 'as-needed' configuration
    router.push(pathname, { locale: newLocale });
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
