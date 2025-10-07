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
      className="bg-achieve-background py-24 px-4"
      style={{
        backgroundImage: `url("/backgrounds/effective.png")`,
      }}
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-achieve-navy">
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
          <p className="text-achieve-navy max-w-2xl mx-auto">
            {t("description")}
          </p>

          <div className="timerContainer text-achieve-purple flex justify-center items-center gap-4">
            <div className="timerSegment flex flex-col items-center">
              <span className="timerNumber text-4xl font-bold">
                {timeLeft.days}
              </span>
              <span className="timerLabel font-bold text-sm">{t("days")}</span>
            </div>
            <span className="timerSeparator text-2xl">
              <svg
                width="21"
                height="4"
                viewBox="0 0 21 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="20" height="4" rx="2" fill="#8D33FC" />
              </svg>
            </span>
            <div className="timerSegment flex flex-col items-center">
              <span className="timerNumber text-4xl font-bold">
                {timeLeft.hours}
              </span>
              <span className="timerLabel font-bold text-sm">{t("hours")}</span>
            </div>
            <span className="timerSeparator text-2xl">
              <svg
                width="21"
                height="4"
                viewBox="0 0 21 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="20" height="4" rx="2" fill="#8D33FC" />
              </svg>
            </span>
            <div className="timerSegment flex flex-col items-center">
              <span className="timerNumber text-4xl font-bold">
                {timeLeft.minutes}
              </span>
              <span className="timerLabel font-bold text-sm">
                {t("minutes")}
              </span>
            </div>
            <span className="timerSeparator text-2xl">
              <svg
                width="21"
                height="4"
                viewBox="0 0 21 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="20" height="4" rx="2" fill="#8D33FC" />
              </svg>
            </span>
            <div className="timerSegment flex flex-col items-center">
              <span className="timerNumber text-4xl font-bold">
                {timeLeft.seconds}
              </span>
              <span className="timerLabel font-bold text-sm">
                {t("seconds")}
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="py-6 px-8">{t("buttonText")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDiscount;
