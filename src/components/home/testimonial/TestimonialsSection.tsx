import { MongoService } from "@/lib/mongoService";
import type { Locale } from "@/types/dbdatas";
import TestimonialMarquee from "./TestimonialMarquee";

interface TestimonialsSectionProps {
  locale?: Locale;
  className?: string;
}

export default async function TestimonialsSection({
  locale = "en",
  className = "",
}: TestimonialsSectionProps) {
  try {
    // Fetch testimonials from MongoDB using MongoService
    const testimonials = await MongoService.getTestimonials();

    return (
      <section className={`mx-auto px-4 py-16 pb-8 ${className}`}>
        {/* Header */}
        <div
          className="flex justify-center items-center flex-col"
          style={{ marginBottom: "20px", gap: "4px" }}
        >
          <h2 className="text-4xl font-bold text-gray-800">
            {locale === "en" ? "Testimonials" : "Getuigenissen"}
          </h2>
          <div className="flex gap-x-2">
            <div className="bg-purple-600 h-[5px] w-16 rounded-md"></div>
            <div className="bg-purple-600 h-[5px] w-24 rounded-md"></div>
          </div>
        </div>

        {/* Testimonial Marquee */}
        <TestimonialMarquee testimonials={testimonials} locale={locale} />
      </section>
    );
  } catch (error) {
    console.error("Error loading testimonials:", error);

    return (
      <section className={`mx-auto px-4 py-16 pb-8 ${className}`}>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {locale === "en" ? "Testimonials" : "Getuigenissen"}
          </h2>
          <p className="text-gray-600">
            {locale === "en"
              ? "Unable to load testimonials at this time."
              : "Kan geen beoordelingen laden op dit moment."}
          </p>
        </div>
      </section>
    );
  }
}
