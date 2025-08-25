import React from "react";
import Underline from "./Underline";

interface TextWithUnderlineProps {
  children: React.ReactNode;
  marginBottom?: number;
  gapY?: number;
}

export default async function TextWithUnderline({
  children,
  marginBottom = 20,
  gapY = 4,
}: TextWithUnderlineProps) {
  return (
    <div
      style={{ marginBottom: marginBottom, gap: gapY }}
      className={`flex justify-center items-center flex-col`}
    >
      {children}
      <Underline />
    </div>
  );
}
