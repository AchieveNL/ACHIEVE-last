"use client";
import React, { useState } from "react";
import { Price } from "@/types/dbdatas";
import { useClientTranslations } from "../hooks/useClientTranslations";

interface PricingContentProps {
  prices: Price[];
  showTitle: boolean;
}

const PricingContent: React.FC<PricingContentProps> = ({
  prices = [],
  showTitle,
}) => {
  const { t, locale } = useClientTranslations("pricing");

  // Extract unique service categories from prices data with safety checks
  const serviceCategories = React.useMemo(() => {
    if (!prices || !Array.isArray(prices) || prices.length === 0) {
      return [];
    }

    return prices
      .map((price) => {
        if (!price || !price.name) return "";
        return typeof price.name === "string"
          ? price.name
          : price.name?.[locale] || price.name?.en || "";
      })
      .filter(Boolean);
  }, [prices, locale]);

  const [activeTab, setActiveTab] = useState("");
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Set initial tab when serviceCategories changes
  React.useEffect(() => {
    if (serviceCategories.length > 0 && !activeTab) {
      setActiveTab(serviceCategories[0]);
    }
  }, [serviceCategories, activeTab]);

  // Find the active price data
  const activePriceData = React.useMemo(() => {
    if (!prices || !Array.isArray(prices) || !activeTab) return null;

    return prices.find((price) => {
      if (!price || !price.name) return false;
      const priceName =
        typeof price.name === "string"
          ? price.name
          : price.name?.[locale] || price.name?.en;
      return priceName === activeTab;
    });
  }, [prices, activeTab, locale]);

  const CheckIcon = () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className="text-green-600 inline-block text-lg"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
    </svg>
  );

  const XIcon = () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="text-red-600 inline-block text-xl"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
    </svg>
  );

  const FireIcon = () => (
    <svg
      className="origin-center overflow-hidden align-middle"
      color="white"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      preserveAspectRatio="xMidYMin"
      viewBox="0 0 24 24"
    >
      <path d="M16.5,8c0,1.5-0.5,3.5-2.9,4.3c0.7-1.7,0.8-3.4,0.3-5c-0.7-2.1-3-3.7-4.6-4.6C8.9,2.4,8.2,2.8,8.3,3.4c0,1.1-0.3,2.7-2,4.4  C4.1,10,3,12.3,3,14.5C3,17.4,5,21,9,21c-4-4-1-7.5-1-7.5c0.8,5.9,5,7.5,7,7.5c1.7,0,5-1.2,5-6.4c0-3.1-1.3-5.5-2.4-6.9  C17.3,7.2,16.6,7.5,16.5,8"></path>
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg
      className="w-5 h-5 transition-transform duration-200"
      style={{
        transform: isMobileDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
      }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  const renderFeatureValue = (value: string) => {
    if (!value) return <span className="text-gray-400">-</span>;

    // Check if it's a boolean-like value
    if (value.toLowerCase() === "true" || value === "✓") {
      return <CheckIcon />;
    }
    if (value.toLowerCase() === "false" || value === "✗") {
      return <XIcon />;
    }
    return <span className="text-gray-600 text-sm sm:text-base">{value}</span>;
  };

  const getLocalizedText = (text: any): string => {
    if (!text) return "";
    if (typeof text === "string") return text;
    return text?.[locale] || text?.en || "";
  };

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
    setIsMobileDropdownOpen(false);
  };

  // Safety check for rendering
  if (!activePriceData || !prices || prices.length === 0) {
    return (
      <div className="bg-achieve-gray-50 mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto">
          <div className="text-center text-gray-500">
            No pricing data available
          </div>
        </div>
      </div>
    );
  }

  // Safe services array
  const safeServices = activePriceData?.services || [];

  return (
    <div className="bg-achieve-gray-50 mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <section className="flex container mx-auto flex-col gap-y-8 sm:gap-y-10 lg:gap-y-12 max-w-7xl">
        {/* Header */}
        {showTitle && (
          <div className="flex justify-center items-center flex-col mb-4 sm:mb-6 lg:mb-8 gap-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center px-4">
              {t("select_service") || "Select one of our services"}
            </h2>
            <div className="flex gap-x-2 mt-2">
              <div className="bg-purple-600 h-[5px] w-12 sm:w-16 rounded-md"></div>
              <div className="bg-purple-600 h-[5px] w-16 sm:w-24 rounded-md"></div>
            </div>
          </div>
        )}

        <div className="relative">
          {/* Mobile Dropdown */}
          <div className="block lg:hidden mb-6">
            <div className="relative">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 flex items-center justify-between shadow-sm"
              >
                <span className="font-medium text-gray-900 truncate">
                  {activeTab}
                </span>
                <ChevronDownIcon />
              </button>

              {isMobileDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {serviceCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleTabSelect(category)}
                      className={`w-full text-left px-4 py-3 hover:bg-purple-50 focus:outline-none focus:bg-purple-50 text-sm ${
                        activeTab === category
                          ? "bg-purple-100 text-purple-700 font-medium"
                          : "text-gray-900"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:block">
            <div className="overflow-x-auto">
              <ul className="text-center mb-8 flex flex-wrap justify-center">
                {serviceCategories.map((category) => (
                  <li
                    key={category}
                    className={`cursor-pointer rounded-[30px] duration-500 mb-4 mx-1 font-medium capitalize text-base lg:text-lg py-[10px] px-4 lg:px-[30px] hover:shadow-lg whitespace-nowrap ${
                      activeTab === category
                        ? "bg-purple-600 text-white"
                        : "bg-white text-gray-500"
                    }`}
                    onClick={() => setActiveTab(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Cards Layout */}
          <div className="block lg:hidden">
            <div className="space-y-6">
              {/* Basic Package */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {getLocalizedText(activePriceData?.b_name)}
                  </h3>
                  <div className="flex justify-center items-baseline">
                    <span className="text-2xl font-bold text-gray-700">€</span>
                    <span className="text-3xl font-bold text-gray-700 mx-1">
                      {getLocalizedText(activePriceData?.b_price)}
                    </span>
                    <span className="text-sm text-blue-600">
                      {t("ex_vat") || "ex VAT"}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {safeServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700 text-sm flex-1 pr-2">
                        {getLocalizedText(service?.title)}
                      </span>
                      <div className="text-right flex-shrink-0">
                        {renderFeatureValue(getLocalizedText(service?.seb))}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full flex justify-center items-center gap-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 px-6 py-4 font-semibold rounded-lg duration-300 transform hover:scale-105 shadow-md">
                  <FireIcon />
                  {t("more_info") || "More information"}
                </button>
              </div>

              {/* Standard Package */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-2 border-purple-200">
                <div className="text-center mb-6">
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    {t("popular") || "Most Popular"}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {getLocalizedText(activePriceData?.s_name)}
                  </h3>
                  <div className="flex justify-center items-baseline">
                    <span className="text-2xl font-bold text-gray-700">€</span>
                    <span className="text-3xl font-bold text-gray-700 mx-1">
                      {getLocalizedText(activePriceData?.s_price)}
                    </span>
                    <span className="text-sm text-blue-600">
                      {t("ex_vat") || "ex VAT"}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {safeServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700 text-sm flex-1 pr-2">
                        {getLocalizedText(service?.title)}
                      </span>
                      <div className="text-right flex-shrink-0">
                        {renderFeatureValue(getLocalizedText(service?.ses))}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full flex justify-center items-center gap-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 px-6 py-4 font-semibold rounded-lg duration-300 transform hover:scale-105 shadow-md">
                  <FireIcon />
                  {t("more_info") || "More information"}
                </button>
              </div>

              {/* Premium Package */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {getLocalizedText(activePriceData?.p_name)}
                  </h3>
                  <div className="flex justify-center items-baseline">
                    <span className="text-2xl font-bold text-gray-700">€</span>
                    <span className="text-3xl font-bold text-gray-700 mx-1">
                      {getLocalizedText(activePriceData?.p_price)}
                    </span>
                    <span className="text-sm text-blue-600">
                      {t("ex_vat") || "ex VAT"}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {safeServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700 text-sm flex-1 pr-2">
                        {getLocalizedText(service?.title)}
                      </span>
                      <div className="text-right flex-shrink-0">
                        {renderFeatureValue(getLocalizedText(service?.sep))}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full flex justify-center items-center gap-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 px-6 py-4 font-semibold rounded-lg duration-300 transform hover:scale-105 shadow-md">
                  <FireIcon />
                  {t("more_info") || "More information"}
                </button>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Table Layout */}
          <div className="hidden lg:block">
            <div className="hover:shadow-lg rounded-xl overflow-hidden w-full duration-500 bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-center bg-white duration-500 border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="w-[200px] sm:w-[250px] p-4 sm:p-6 text-left">
                        <h3 className="text-base sm:text-lg font-bold leading-[1.2] mb-2">
                          {t("choose_package") || "Choose your package deal"}
                        </h3>
                        <p className="text-sm sm:text-[15px] font-normal text-gray-600">
                          {t("fixed_amount") ||
                            "A fixed amount, no surprises afterwards"}
                        </p>
                      </th>
                      <th className="p-4 sm:p-6 min-w-[150px] sm:min-w-[200px]">
                        <div className="pb-4">
                          <h3 className="text-base sm:text-lg font-bold text-gray-800">
                            {getLocalizedText(activePriceData?.b_name)}
                          </h3>
                        </div>
                        <div className="border-t-2 border-dashed border-gray-200 pt-4">
                          <div className="flex justify-center items-baseline">
                            <span className="text-xl sm:text-2xl font-bold text-gray-700">
                              €
                            </span>
                            <span className="text-2xl sm:text-3xl font-bold text-gray-700 mx-1">
                              {getLocalizedText(activePriceData?.b_price)}
                            </span>
                            <span className="text-xs sm:text-sm text-blue-600">
                              {t("ex_vat") || "ex VAT"}
                            </span>
                          </div>
                        </div>
                      </th>
                      <th className="p-4 sm:p-6 min-w-[150px] sm:min-w-[200px]">
                        <div className="pb-4">
                          <h3 className="text-base sm:text-lg font-bold text-gray-800">
                            {getLocalizedText(activePriceData?.s_name)}
                          </h3>
                        </div>
                        <div className="border-t-2 border-dashed border-gray-200 pt-4">
                          <div className="flex justify-center items-baseline">
                            <span className="text-xl sm:text-2xl font-bold text-gray-700">
                              €
                            </span>
                            <span className="text-2xl sm:text-3xl font-bold text-gray-700 mx-1">
                              {getLocalizedText(activePriceData?.s_price)}
                            </span>
                            <span className="text-xs sm:text-sm text-blue-600">
                              {t("ex_vat") || "ex VAT"}
                            </span>
                          </div>
                        </div>
                      </th>
                      <th className="p-4 sm:p-6 min-w-[150px] sm:min-w-[200px]">
                        <div className="pb-4">
                          <h3 className="text-base sm:text-lg font-bold text-gray-800">
                            {getLocalizedText(activePriceData?.p_name)}
                          </h3>
                        </div>
                        <div className="border-t-2 border-dashed border-gray-200 pt-4">
                          <div className="flex justify-center items-baseline">
                            <span className="text-xl sm:text-2xl font-bold text-gray-700">
                              €
                            </span>
                            <span className="text-2xl sm:text-3xl font-bold text-gray-700 mx-1">
                              {getLocalizedText(activePriceData?.p_price)}
                            </span>
                            <span className="text-xs sm:text-sm text-blue-600">
                              {t("ex_vat") || "ex VAT"}
                            </span>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {safeServices.map((service, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <th className="text-gray-700 p-4 sm:p-6 text-left">
                          <span className="font-medium text-sm sm:text-base">
                            {getLocalizedText(service?.title)}
                          </span>
                        </th>
                        <td className="p-4 sm:p-6">
                          {renderFeatureValue(getLocalizedText(service?.seb))}
                        </td>
                        <td className="p-4 sm:p-6">
                          {renderFeatureValue(getLocalizedText(service?.ses))}
                        </td>
                        <td className="p-4 sm:p-6">
                          {renderFeatureValue(getLocalizedText(service?.sep))}
                        </td>
                      </tr>
                    ))}
                    {/* CTA Row */}
                    <tr>
                      <th className="p-4 sm:p-6"></th>
                      <td className="p-4 sm:p-6">
                        <button className="flex justify-center items-center gap-x-1 sm:gap-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 px-3 sm:px-6 py-2 sm:py-3 font-semibold rounded-lg duration-300 transform hover:scale-105 shadow-md mx-auto text-sm sm:text-base">
                          <FireIcon />
                          {t("more_info") || "More information"}
                        </button>
                      </td>
                      <td className="p-4 sm:p-6">
                        <button className="flex justify-center items-center gap-x-1 sm:gap-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 px-3 sm:px-6 py-2 sm:py-3 font-semibold rounded-lg duration-300 transform hover:scale-105 shadow-md mx-auto text-sm sm:text-base">
                          <FireIcon />
                          {t("more_info") || "More information"}
                        </button>
                      </td>
                      <td className="p-4 sm:p-6">
                        <button className="flex justify-center items-center gap-x-1 sm:gap-x-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 px-3 sm:px-6 py-2 sm:py-3 font-semibold rounded-lg duration-300 transform hover:scale-105 shadow-md mx-auto text-sm sm:text-base">
                          <FireIcon />
                          {t("more_info") || "More information"}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingContent;
