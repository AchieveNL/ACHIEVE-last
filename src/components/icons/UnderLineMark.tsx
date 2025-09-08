import * as React from "react";
import { SVGProps } from "react";

// Color variant type
export type UnderLineVariant =
  | "default"
  | "blue"
  | "purple"
  | "green"
  | "orange"
  | "pink"
  | "white";

// Color configurations
const colorVariants: Record<UnderLineVariant, { start: string; end: string }> =
  {
    default: { start: "#8639FA", end: "#5EAFED" },
    blue: { start: "#3B82F6", end: "#06B6D4" },
    purple: { start: "#8B5CF6", end: "#A855F7" },
    green: { start: "#10B981", end: "#34D399" },
    orange: { start: "#F59E0B", end: "#FB923C" },
    pink: { start: "#EC4899", end: "#F472B6" },
    white: { start: "#FFFFFF", end: "#F3F4F6" },
  };

interface UnderLineMarkProps extends SVGProps<SVGSVGElement> {
  variant?: UnderLineVariant;
}

const UnderLineMark = ({
  variant = "default",
  ...props
}: UnderLineMarkProps) => {
  const colors = colorVariants[variant];
  const gradientId = `underline-gradient-${variant}`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473 20" {...props}>
      <linearGradient
        id={gradientId}
        x1={197.56}
        x2={285.41}
        y1={85.88}
        y2={-90.32}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor={colors.start} />
        <stop offset={1} stopColor={colors.end} />
      </linearGradient>
      <path
        fill={`url(#${gradientId})`}
        fillRule="evenodd"
        d="M319.8 8c47.22.33 96.55 1 149.64 1.8 2.66 0 3.49-2.29 3.56-4.08s-.67-3.26-3.33-3.3C292.45-.35 161.16-1.88 6.18 4.27h-.37l-2.74.09C.64 4.47-.09 11.46 0 13.23s.85 5.32 3.28 5.24c.58 0 .85 0 1.12-.06s.54 0 1.12-.06a1.26 1.26 0 0 0 1-.46 1.3 1.3 0 0 1 1-.46c138.46-4.26 260.5-3.19 419.39 1.35 2.43.07 3.25-2.24 3.35-4s-.52-3.25-2.95-3.32c-37.74-1.09-73.22-2.3-107.26-3.46z"
      />
    </svg>
  );
};

export { UnderLineMark };
