"use client";
import FireIcon from "@/components/icons/FireIcon";
import { useCalendly } from "@/components/contexts/CalendlyContext";

interface CustomButtonProps {
  text: string;
  width?: number;
  height?: number;
  fontSize?: number;
  paddingY?: number;
  paddingX?: number;
  borderRadius?: number;
  fontWeight?: number;
  iconSize?: number;
  scaleNum?: number;
  clickFor?: undefined | "calendly";
  whitespace?: "normal" | "nowrap";
  takeFullWidth?: boolean;
  disabled?: boolean;
  clickFunction?: () => void;
}

export default function CustomButton({
  text,
  fontSize,
  paddingY = 0,
  paddingX = 0,
  borderRadius = 5,
  fontWeight = 600,
  iconSize = 20,
  clickFor = undefined,
  whitespace = "normal",
  takeFullWidth = false,
  disabled = false,
  clickFunction,
}: CustomButtonProps) {
  const { openCalendly } = useCalendly();

  const handleClick = () => {
    if (clickFor === "calendly") {
      openCalendly();
    } else {
      if (typeof clickFunction === "function") {
        clickFunction();
      }
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      style={{
        width: takeFullWidth ? "100%" : "auto",
        padding: `${paddingY}px ${paddingX}px`,
        fontWeight: fontWeight,
        borderRadius: borderRadius,
        fontSize: fontSize,
        whiteSpace: whitespace,
        filter: disabled ? "grayscale(1)" : "none",
      }}
      className={
        "CustomButton group hover:scale-125 hover:bg-white hover:text-achieve-purple ease-out flex justify-center bg-achieve-purple hover:bg-none items-center gap-x-1 origin-center CustomButton text-white border-[1px] border-mainPurple duration-300"
      }
    >
      <FireIcon iconSize={iconSize} />

      {text}
    </button>
  );
}
