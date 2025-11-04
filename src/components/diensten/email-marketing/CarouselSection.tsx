"use client";
import React, { useState } from "react";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";
import HighlightedText from "@/components/ui/HighlightedText";

const CarouselSection = () => {
  const { t } = useClientTranslations("page-email-marketing.carouselSection");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add your carousel images here
  const slides = [
    {
      src: "/diesten/email-marketing/stats-1.png",
      alt: "Email Marketing Statistics 1",
    },
    {
      src: "/diesten/email-marketing/stats-2.webp",
      alt: "Email Marketing Statistics 2",
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-achieve-background py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-0">
      <div className="container mx-auto">
        {/* Title and Subtitle */}
        <div className="flex flex-col gap-4 md:gap-6 text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy px-2">
            {t("title")}{" "}
            <HighlightedText className="text-achieve-purple">
              <AnimatedText
                animationType="gradient"
                className="text-achieve-purple font-bold"
              >
                {t("titleHighlight")}
              </AnimatedText>
            </HighlightedText>{" "}
            ?
          </h2>
          <p className="font-bold text-sm md:text-base lg:text-lg px-4">
            {t("subtitle")}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative  mx-auto">
          {/* Carousel Images */}
          <div className="relative mx-auto max-w-[832px] h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-achieve-purple rounded-full"
            aria-label={t("prevSlide")}
          >
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-[45px] lg:h-[45px]"
            >
              <path
                d="M0 22.5C0 34.9264 10.0736 45 22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5Z"
                fill="#1F2471"
              />
              <path
                d="M16.8266 21.3279C16.2407 21.9138 16.2407 22.8654 16.8266 23.4513L24.3266 30.9513C24.9126 31.5372 25.8641 31.5372 26.4501 30.9513C27.036 30.3654 27.036 29.4138 26.4501 28.8279L20.0095 22.3872L26.4454 15.9466C27.0313 15.3607 27.0313 14.4091 26.4454 13.8232C25.8595 13.2372 24.9079 13.2372 24.322 13.8232L16.822 21.3232L16.8266 21.3279Z"
                fill="white"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-achieve-purple rounded-full"
            aria-label={t("nextSlide")}
          >
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-[45px] lg:h-[45px] rotate-180"
            >
              <path
                d="M0 22.5C0 34.9264 10.0736 45 22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5Z"
                fill="#1F2471"
              />
              <path
                d="M16.8266 21.3279C16.2407 21.9138 16.2407 22.8654 16.8266 23.4513L24.3266 30.9513C24.9126 31.5372 25.8641 31.5372 26.4501 30.9513C27.036 30.3654 27.036 29.4138 26.4501 28.8279L20.0095 22.3872L26.4454 15.9466C27.0313 15.3607 27.0313 14.4091 26.4454 13.8232C25.8595 13.2372 24.9079 13.2372 24.322 13.8232L16.822 21.3232L16.8266 21.3279Z"
                fill="white"
              />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-achieve-purple focus:ring-offset-2 ${
                  index === currentSlide
                    ? "bg-achieve-purple scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`${t("goToSlide")} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
