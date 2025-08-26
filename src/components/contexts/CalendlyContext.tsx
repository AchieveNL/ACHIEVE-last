"use client";

import React, { createContext, useContext, useState } from "react";
import CalendlyPopup from "@/components/calendly/CalendlyPopup";
import CloseCalendlyPopupButton from "../calendly/CloseCalendlyPopupButton";

interface CalendlyContextType {
  isCalendlyOpen: boolean;
  openCalendly: () => void;
  closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(
  undefined,
);

export function CalendlyProvider({ children }: { children: React.ReactNode }) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  const value = {
    isCalendlyOpen,
    openCalendly,
    closeCalendly,
  };

  return (
    <CalendlyContext.Provider value={value}>
      {children}
      {isCalendlyOpen && (
        <div
          className={
            "fixed w-full h-full z-[9000] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          }
        >
          <CloseCalendlyPopupButton onClose={closeCalendly} />
          <CalendlyPopup />
        </div>
      )}
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (context === undefined) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
}
