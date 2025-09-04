import { MongoService } from "@/lib/mongoService";
import TextCarouselClient from "./TextCarouselClient";
import type { Locale } from "@/types/dbdatas";

interface TextCarouselSectionProps {
  locale?: Locale;
  className?: string;
}

export default async function TextCarouselSection({
  locale = "en",
  className = "",
}: TextCarouselSectionProps) {
  try {
    // Fetch carousel data from MongoDB using MongoService
    const carouselData = await MongoService.getCarouselData();

    return (
      <section className={`bg-achieve-background ${className}`}>
        <TextCarouselClient
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
        className={`bg-achieve-background mx-auto px-4 py-8 ${className}`}
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
