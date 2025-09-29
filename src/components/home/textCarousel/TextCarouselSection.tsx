/* eslint-disable no-console */
import { MongoService } from "@/lib/mongoService";
import TextCarouselClient from "./TextCarouselClient";
import type { Locale } from "@/types/dbdatas";

interface TextCarouselSectionProps {
  locale?: Locale;
  className?: string;
  bgPrimary?: boolean;
}

export default async function TextCarouselSection({
  locale = "en",
  className = "",
  bgPrimary = false,
}: TextCarouselSectionProps) {
  try {
    // Fetch carousel data from MongoDB using MongoService
    const carouselData = await MongoService.getCarouselData();

    return (
      <section className={`  ${className}`}>
        <TextCarouselClient
          bgPrimary={bgPrimary}
          carouselDataTop={carouselData.carouselDataTop}
          carouselDataBottom={carouselData.carouselDataBottom}
          locale={locale}
        />
      </section>
    );
  } catch (error) {
    console.error("Error loading carousel data:", error);

    // Fallback UI
    return (
      <section
        className={`${bgPrimary ? "bg-achieve-background" : "bg-white"} mx-auto px-4 py-8 ${className}`}
      >
        <div className="text-center">
          <p className="text-gray-600">
            {locale === "en"
              ? "Unable to load carousel data at this time."
              : "Kan carrouselgegevens op dit moment niet laden."}
          </p>
        </div>
      </section>
    );
  }
}
