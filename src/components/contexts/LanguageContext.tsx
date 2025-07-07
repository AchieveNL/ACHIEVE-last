// src/contexts/LanguageContext.tsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({
  locale: "en",
  setLocale: (_locale: string) => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") || "en";
    setLocaleState(saved);
  }, []);

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
