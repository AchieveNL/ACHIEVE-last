// src/hooks/useClientTranslations.ts
import { useLanguage } from "@/components/contexts/LanguageContext";
import enMessages from "@/messages/en.json";
import nlMessages from "@/messages/nl.json";

const messages = { en: enMessages, nl: nlMessages };

export function useClientTranslations(namespace?: string) {
  const { locale } = useLanguage();

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = messages[locale as keyof typeof messages];

    if (namespace) {
      value = (value as Record<string, unknown>)?.[namespace];
    }

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }

    return (value as string) || key;
  };

  return { t, locale };
}
