"use client";
import React from "react";
import Lottie from "lottie-react";

type LottieHelperProps = {
  jsonFile: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
};

export default function LottieHelper({
  jsonFile,
  className = "bg-transparent",
  loop = true,
  autoplay = true,
}: LottieHelperProps) {
  if (!jsonFile) {
    return null;
  }

  return (
    <Lottie
      className={className}
      animationData={jsonFile}
      loop={loop}
      autoplay={autoplay}
    />
  );
}
