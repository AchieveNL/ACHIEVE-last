"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";

export default function BodyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuroraBackground>{children}</AuroraBackground>;
}
