import { Locale } from "@/types/dbdatas";

export const translateHelperFunc = (
  textEn: string | HTMLElement,
  textNl: string | HTMLElement,
  locale: Locale,
) => {
  if (locale === "en") {
    return textEn;
  }
  return textNl;
};
