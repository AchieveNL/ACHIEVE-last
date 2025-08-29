import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { useCalendly } from "../contexts/CalendlyContext";
import { useClientTranslations } from "../hooks/useClientTranslations";

interface ConsultationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ConsultationButton = forwardRef<
  HTMLButtonElement,
  ConsultationButtonProps
>(({ className, ...props }, ref) => {
  const { t, locale } = useClientTranslations("strategySection");
  const { openCalendly } = useCalendly();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openCalendly();
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        "group CustomButton ease-out flex justify-center items-center gap-x-1 origin-center bg-achieve-purple text-white border-[1px] border-achieve-purple hover:bg-none duration-300 hover:bg-white hover:text-achieve-purple px-4 py-2 rounded-md",
        className,
      )}
      {...props}
    >
      <svg
        className="Fire origin-center overflow-hidden align-middle group-hover:color-achieve-purple group-hover:fill-achieve-purple"
        color="white"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        preserveAspectRatio="xMidYMin"
        viewBox="0 0 24 24"
      >
        <path d="M16.5,8c0,1.5-0.5,3.5-2.9,4.3c0.7-1.7,0.8-3.4,0.3-5c-0.7-2.1-3-3.7-4.6-4.6C8.9,2.4,8.2,2.8,8.3,3.4c0,1.1-0.3,2.7-2,4.4  C4.1,10,3,12.3,3,14.5C3,17.4,5,21,9,21c-4-4-1-7.5-1-7.5c0.8,5.9,5,7.5,7,7.5c1.7,0,5-1.2,5-6.4c0-3.1-1.3-5.5-2.4-6.9  C17.3,7.2,16.6,7.5,16.5,8"></path>
      </svg>
      <p className="font-semibold">{t("consultationButton")}</p>
    </button>
  );
});

ConsultationButton.displayName = "ConsultationButton";
export default ConsultationButton;
