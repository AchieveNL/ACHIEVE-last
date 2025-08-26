"use client";

import { IoCloseOutline as Close } from "react-icons/io5";

interface CloseCalendlyPopupButtonProps {
  onClose: () => void;
}

export default function CloseCalendlyPopupButton({
  onClose,
}: CloseCalendlyPopupButtonProps) {
  return (
    <div className={"absolute inline-block top-[20px] z-[9999] right-[20px]"}>
      <Close
        onClick={onClose}
        cursor={"pointer"}
        className={"!h-[40px] !w-[40px] font-bold"}
        color={"white"}
      />
    </div>
  );
}
