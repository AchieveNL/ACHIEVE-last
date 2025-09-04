"use client";
import React from "react";
import type { CarouselData, Locale } from "@/types/dbdatas";
import { Link } from "@/i18n/navigation";

interface CarouselSliderProps {
  carouselData: CarouselData[];
  to: "left" | "right";
  locale: Locale;
}

interface TextCarouselClientProps {
  carouselDataTop: CarouselData[];
  carouselDataBottom: CarouselData[];
  locale: Locale;
}

// CarouselSlider component
function CarouselSlider({ carouselData, to, locale }: CarouselSliderProps) {
  const [isPaused, setIsPaused] = React.useState(false);

  // If no data, return null
  if (!carouselData || carouselData.length === 0) {
    return null;
  }

  // Duplicate the data to create seamless loop
  const duplicatedData = [...carouselData, ...carouselData];

  const carouselStyle = {
    animation: `carousel 20s linear infinite ${to === "right" ? "reverse" : ""}`,
    animationPlayState: isPaused ? "paused" : "running",
  };

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex whitespace-nowrap" style={carouselStyle}>
        {duplicatedData.map((data, index) => (
          <div key={`${data._id}-${index}`} className="flex-shrink-0">
            <Link href={data.link}>
              <h1 className="text-left font-bold text-[54px] italic cursor-pointer py-[15px] px-[20px] block text-[#5fb1ee] hover:text-purple-600 transition-colors duration-300">
                {data.title[locale]}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main TextCarouselClient component
export default function TextCarouselClient({
  carouselDataTop,
  carouselDataBottom,
  locale,
}: TextCarouselClientProps) {
  // Check if we have any data to display
  const hasTopData = carouselDataTop && carouselDataTop.length > 0;
  const hasBottomData = carouselDataBottom && carouselDataBottom.length > 0;

  // If no data at all, show fallback
  if (!hasTopData && !hasBottomData) {
    return (
      <section className="bg-achieve-background mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600">
            {locale === "en"
              ? "No carousel content available."
              : "Geen carrouselinhoud beschikbaar."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <style>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <section className="bg-achieve-background mx-auto px-4 py-8">
        <div className="">
          {/* Top carousel */}
          {hasTopData && (
            <div>
              <CarouselSlider
                carouselData={carouselDataTop}
                to="left"
                locale={locale}
              />
            </div>
          )}

          {/* Bottom carousel */}
          {hasBottomData && (
            <div>
              <CarouselSlider
                carouselData={carouselDataBottom}
                to="right"
                locale={locale}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
