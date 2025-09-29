/* eslint-disable no-console */
import { MongoService } from "@/lib/mongoService";
import { AboutUs, Locale } from "@/types/dbdatas";
import AboutUsPage from "./AboutUsPage";

async function fetchAboutUsData(): Promise<AboutUs | null> {
  try {
    const aboutUs = await MongoService.getAboutUs();
    return aboutUs;
  } catch (error) {
    console.error("Failed to load About Us data:", error);
    // Return appropriate default value based on your AboutUs type
    // If AboutUs is an array, return empty array
    // If AboutUs is an object, return empty object or default structure
    return {} as AboutUs; // Adjust this based on your AboutUs type definition
  }
}

// Server Component
export default async function AboutUsSection({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const aboutUs = await fetchAboutUsData();
  return <AboutUsPage locale={locale} data={aboutUs} />;
}
