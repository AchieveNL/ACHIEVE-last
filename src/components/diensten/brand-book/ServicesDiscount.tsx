/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { useClientTranslations } from "@/components/hooks/useClientTranslations";
import { Button } from "@/components/ui/button";

const ServicesDiscount = () => {
  const { t, locale } = useClientTranslations(
    "page-brand-book.discountSection",
  );
  const [currentMonth, setCurrentMonth] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const monthNames = {
    nl: [
      "januari",
      "februari",
      "maart",
      "april",
      "mei",
      "juni",
      "juli",
      "augustus",
      "september",
      "oktober",
      "november",
      "december",
    ],
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  };

  useEffect(() => {
    const now = new Date();
    const month = monthNames[locale][now.getMonth()];
    setCurrentMonth(month);

    // Calculate time remaining until end of current month
    const endOfMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0,
      23,
      59,
      59,
    );

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endOfMonth.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate initial time
    calculateTimeLeft();

    // Update timer every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [locale]);

  return (
    <section
      className="bg-achieve-background py-12 md:py-20 lg:py-24 px-4 md:px-6"
      style={{
        backgroundImage: `url("/backgrounds/effective.png")`,
      }}
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-achieve-navy px-2">
              {locale === "en" ? (
                <>
                  Only in{" "}
                  {currentMonth && (
                    <span className="capitalize">{currentMonth}</span>
                  )}{" "}
                  <span className="text-achieve-purple">10%</span> discount!
                </>
              ) : (
                <>
                  Alleen in{" "}
                  {currentMonth && (
                    <span className="capitalize">{currentMonth}</span>
                  )}{" "}
                  <span className="text-achieve-purple">10%</span> korting!
                </>
              )}
            </h2>
          </div>
          <p className="text-achieve-navy text-sm md:text-base max-w-2xl mx-auto px-2">
            {t("description")}
          </p>

          <div className="timerContainer text-achieve-purple flex justify-center items-center gap-2 md:gap-4 flex-wrap">
            <div className="timerSegment flex flex-col items-center min-w-[60px] md:min-w-[80px]">
              <span className="timerNumber text-2xl md:text-3xl lg:text-4xl font-bold tabular-nums">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="timerLabel font-bold text-xs md:text-sm mt-1">
                {t("days")}
              </span>
            </div>
            <span className="timerSeparator hidden sm:block">
              <svg
                width="21"
                height="4"
                viewBox="0 0 21 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-1 md:w-[21px] md:h-1"
              >
                <rect x="0.5" width="20" height="4" rx="2" fill="#8D33FC" />
              </svg>
            </span>
            <div className="timerSegment flex flex-col items-center min-w-[60px] md:min-w-[80px]">
              <span className="timerNumber text-2xl md:text-3xl lg:text-4xl font-bold tabular-nums">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="timerLabel font-bold text-xs md:text-sm mt-1">
                {t("hours")}
              </span>
            </div>
            <span className="timerSeparator hidden sm:block">
              <svg
                width="21"
                height="4"
                viewBox="0 0 21 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-1 md:w-[21px] md:h-1"
              >
                <rect x="0.5" width="20" height="4" rx="2" fill="#8D33FC" />
              </svg>
            </span>
            <div className="timerSegment flex flex-col items-center min-w-[60px] md:min-w-[80px]">
              <span className="timerNumber text-2xl md:text-3xl lg:text-4xl font-bold tabular-nums">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="timerLabel font-bold text-xs md:text-sm mt-1">
                {t("minutes")}
              </span>
            </div>
            <span className="timerSeparator hidden sm:block">
              <svg
                width="21"
                height="4"
                viewBox="0 0 21 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-1 md:w-[21px] md:h-1"
              >
                <rect x="0.5" width="20" height="4" rx="2" fill="#8D33FC" />
              </svg>
            </span>
            <div className="timerSegment flex flex-col items-center min-w-[60px] md:min-w-[80px]">
              <span className="timerNumber text-2xl md:text-3xl lg:text-4xl font-bold tabular-nums">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="timerLabel font-bold text-xs md:text-sm mt-1">
                {t("seconds")}
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-2 md:mt-4">
            <Button
              clickFor="calendly"
              className="w-full sm:w-auto py-3 md:py-6 px-6 md:px-8 text-sm md:text-base"
            >
              {t("buttonText")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDiscount;
