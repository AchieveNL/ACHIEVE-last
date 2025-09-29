/* eslint-disable no-console */
import { AboutUs, Locale } from "@/types/dbdatas";
import PromisesClient from "./PromiseClient";
import { MongoService } from "@/lib/mongoService";

async function fetchAboutUsData(): Promise<AboutUs | null> {
  try {
    const aboutUs = await MongoService.getAboutUs();
    return aboutUs;
  } catch (error) {
    console.error("Failed to load About Us data:", error);
    return null;
  }
}

export default async function Promise({ locale }: { locale: Locale }) {
  const aboutUs = await fetchAboutUsData();
  return <PromisesClient data={aboutUs} locale={locale} />;
}
