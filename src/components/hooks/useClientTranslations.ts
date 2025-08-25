import { Locale } from "@/types/dbdatas";
import { useTranslations, useLocale } from "next-intl";

export function useClientTranslations(namespace?: string) {
  const locale = useLocale() as Locale;

  // If no namespace provided, use the root level translations
  const t = useTranslations(namespace);

  return { t, locale };
}
