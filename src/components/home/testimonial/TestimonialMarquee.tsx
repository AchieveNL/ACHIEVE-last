"use client";
import React from "react";
import type { CustomerTestimonial, Locale } from "@/types/dbdatas";
import { Marquee } from "@/components/magicui/marquee";

interface TestimonialMarqueeProps {
  testimonials: CustomerTestimonial[];
  locale?: Locale;
}

// Star component (replacing react-icons)
function FaStar({
  color = "#ffe435",
  size = 20,
  fontWeight = 900,
}: {
  color?: string;
  size?: number;
  fontWeight?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      strokeWidth="2"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

const ReviewCard = ({
  name,
  role,
  body,
  rating = 5,
  date,
}: {
  name: string;
  role: string;
  body: string;
  rating?: number;
  date?: string;
}) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <figure className="relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-row items-start gap-3">
        <div className="flex flex-col flex-1">
          <figcaption className="text-lg font-semibold text-gray-900">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-purple-600 mb-2">{role}</p>
          {date && (
            <p className="text-xs text-gray-500 mb-3">{formatDate(date)}</p>
          )}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                color={index < rating ? "#ffe435" : "#e4e5e9"}
                size={16}
                fontWeight={900}
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="text-sm text-gray-700 leading-relaxed line-clamp-4">
        &quot;{body}&quot;
      </blockquote>
    </figure>
  );
};

export default function TestimonialMarquee({
  testimonials,
  locale = "en",
}: TestimonialMarqueeProps) {
  // Transform CustomerTestimonial data to match ReviewCard props
  const transformedReviews = testimonials.map((testimonial) => ({
    name: testimonial.fullName,
    role: testimonial.profession[locale],
    body: testimonial.message[locale],
    rating: 5, // CustomerTestimonial doesn't have rating field, defaulting to 5
    date: testimonial.date,
  }));

  // If no testimonials, show fallback
  if (!transformedReviews || transformedReviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">
          {locale === "en"
            ? "No testimonials available."
            : "Geen beoordelingen beschikbaar."}
        </p>
      </div>
    );
  }

  // Split into two rows for the marquee effect
  const firstRow = transformedReviews.slice(
    0,
    Math.ceil(transformedReviews.length / 2),
  );
  const secondRow = transformedReviews.slice(
    Math.ceil(transformedReviews.length / 2),
  );

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:60s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} {...review} />
        ))}
      </Marquee>

      {/* Only show second row if we have enough testimonials */}
      {secondRow.length > 0 && (
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={`${review.name}-${index}-row2`} {...review} />
          ))}
        </Marquee>
      )}

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
    </div>
  );
}
