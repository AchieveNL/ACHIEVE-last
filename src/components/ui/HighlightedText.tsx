import React, { ReactNode } from "react";
import { SVGProps } from "react";
import { UnderLineMark } from "../icons/UnderLineMark";

// Props interface for HighlightedText component
interface HighlightedTextProps {
  children: ReactNode;
  className?: string;
  underlineHeight?: string;
  bottomOffset?: string;
  variant?:
    | "default"
    | "blue"
    | "purple"
    | "green"
    | "orange"
    | "pink"
    | "white";
}

// HighlightedText component with TypeScript
const HighlightedText: React.FC<HighlightedTextProps> = ({
  children,
  className = "",
  underlineHeight = "h-3",
  bottomOffset = "-5%",
  variant = "default",
}) => (
  <span className={`relative inline-block ${className}`}>
    {children}
    <UnderLineMark
      variant={variant}
      className={`absolute left-0 w-full ${underlineHeight} pointer-events-none`}
      style={{
        bottom: bottomOffset,
        transform: "translateY(100%)",
      }}
    />
  </span>
);

export default HighlightedText;
