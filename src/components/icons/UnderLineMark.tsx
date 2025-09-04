import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473 20" {...props}>
    <linearGradient
      id="a"
      x1={197.56}
      x2={285.41}
      y1={85.88}
      y2={-90.32}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#8639FA" />
      <stop offset={1} stopColor="#5EAFED" />
    </linearGradient>
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M319.8 8c47.22.33 96.55 1 149.64 1.8 2.66 0 3.49-2.29 3.56-4.08s-.67-3.26-3.33-3.3C292.45-.35 161.16-1.88 6.18 4.27h-.37l-2.74.09C.64 4.47-.09 11.46 0 13.23s.85 5.32 3.28 5.24c.58 0 .85 0 1.12-.06s.54 0 1.12-.06a1.26 1.26 0 0 0 1-.46 1.3 1.3 0 0 1 1-.46c138.46-4.26 260.5-3.19 419.39 1.35 2.43.07 3.25-2.24 3.35-4s-.52-3.25-2.95-3.32c-37.74-1.09-73.22-2.3-107.26-3.46z"
    />
  </svg>
);
export { SvgComponent as UnderLineMark };
