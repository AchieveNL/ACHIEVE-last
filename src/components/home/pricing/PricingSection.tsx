/* eslint-disable no-console */
import React from "react";
import { Price } from "@/types/dbdatas";
import { MongoService } from "@/lib/mongoService";
import PricingContent from "./PricingContent";

interface PricingSectionProps {
  font?: string;
  showTitle?: boolean;
  isPrimaryBackground?: boolean;
}

// Main server component
const PricingSection: React.FC<PricingSectionProps> = async ({
  font,
  showTitle = true,
  isPrimaryBackground = false,
}) => {
  // Fetch data directly using MongoService
  let prices: Price[] = [];

  try {
    prices = await MongoService.getPrices();
  } catch (error) {
    console.error("Failed to load prices:", error);
    return (
      <div className="bg-achieve-gray-50 mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto text-center">
          <div className="text-gray-500">Failed to load pricing data</div>
        </div>
      </div>
    );
  }

  // Ensure we have data before rendering
  if (!prices || prices.length === 0) {
    return (
      <div className="bg-achieve-gray-50 mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto text-center">
          <div className="text-gray-500">No pricing data available</div>
        </div>
      </div>
    );
  }

  return (
    <PricingContent
      isPrimaryBackground={isPrimaryBackground}
      prices={prices}
      showTitle={showTitle}
    />
  );
};

export default PricingSection;
