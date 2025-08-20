"use client";
import React from "react";

// Types
type CarouselItem = {
  _id: string;
  title: { en: string };
  link: string;
};

type CarouselSliderProps = {
  carouselData: CarouselItem[];
  to: "left" | "right";
};

type TextCarouselProps = {
  carouselDataTop?: CarouselItem[];
  carouselDataBottom?: CarouselItem[];
};

// Sample data structure
const sampleCarouselDataTop: CarouselItem[] = [
  { _id: "1", title: { en: "Breaking News: Latest Updates" }, link: "/news/1" },
  { _id: "2", title: { en: "Technology Trends 2025" }, link: "/tech/2" },
  { _id: "3", title: { en: "Market Analysis Report" }, link: "/market/3" },
  { _id: "4", title: { en: "Innovation in AI Development" }, link: "/ai/4" },
  { _id: "5", title: { en: "Global Economic Outlook" }, link: "/economy/5" },
  {
    _id: "6",
    title: { en: "Sustainable Energy Solutions" },
    link: "/energy/6",
  },
];

const sampleCarouselDataBottom: CarouselItem[] = [
  { _id: "7", title: { en: "Sports Championship Results" }, link: "/sports/7" },
  {
    _id: "8",
    title: { en: "Entertainment Industry News" },
    link: "/entertainment/8",
  },
  { _id: "9", title: { en: "Health and Wellness Tips" }, link: "/health/9" },
  { _id: "10", title: { en: "Travel Destinations Guide" }, link: "/travel/10" },
  { _id: "11", title: { en: "Fashion Week Highlights" }, link: "/fashion/11" },
  { _id: "12", title: { en: "Food and Recipe Trends" }, link: "/food/12" },
];

// CarouselSlider component
function CarouselSlider({ carouselData, to }: CarouselSliderProps) {
  const [isPaused, setIsPaused] = React.useState(false);

  // Duplicate the data to create seamless loop
  const duplicatedData = [...carouselData, ...carouselData];

  const carouselStyle = {
    animation: `carousel 10s linear infinite ${to === "right" ? "reverse" : ""}`,
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
            <a href={data.link}>
              <h1 className="text-left font-bold text-[54px] italic cursor-pointer py-[15px] px-[20px] block text-[#5fb1ee] hover:text-purple-600">
                {data.title.en}
              </h1>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main TextCarousel component
export default function TextCarousel({
  carouselDataTop = sampleCarouselDataTop,
  carouselDataBottom = sampleCarouselDataBottom,
}: TextCarouselProps) {
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
      <section className="bg-gray-50 mx-auto px-4 py-8">
        <div className="">
          <div>
            <CarouselSlider carouselData={carouselDataTop} to="left" />
          </div>
          <div>
            <CarouselSlider carouselData={carouselDataBottom} to="right" />
          </div>
        </div>
      </section>
    </>
  );
}
