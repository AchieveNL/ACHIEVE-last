"use client";
import React, { useState } from "react";

interface PricingFeature {
  name: string;
  basic: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
}

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    "Dashboard",
    "Brand strategy",
    "Brand Book",
    "Custom website",
    "Shopify webshop",
    "Email marketing",
    "UGC marketing",
    "Video marketing",
    "Search Engine Advertising",
    "Social Media Advertising",
    "Social Media Management",
  ];

  const features: PricingFeature[] = [
    {
      name: "Dashboards",
      basic: "1",
      standard: "Max. 2",
      premium: "Max 3.",
    },
    {
      name: "Data source connectivity",
      basic: "1",
      standard: "Max. 2",
      premium: "Max 4.",
    },
    {
      name: "Interactive/animated visuals",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      name: "Web embedding",
      basic: false,
      standard: false,
      premium: true,
    },
    {
      name: "Teampresentation",
      basic: false,
      standard: false,
      premium: true,
    },
    {
      name: "Extra online consultancy",
      basic: false,
      standard: false,
      premium: "Up to 3 guided sessions",
    },
    {
      name: "Correction rounds",
      basic: "1",
      standard: "Max. 2",
      premium: "Max. 3",
    },
    {
      name: "Delivery time",
      basic: "2 weeks",
      standard: "3 weeks",
      premium: "From 4 weeks",
    },
    {
      name: "Additional work",
      basic: "130 ex VAT p/hour",
      standard: "130 ex VAT p/hour",
      premium: "130 ex VAT p/hour",
    },
  ];

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

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? <CheckIcon /> : <XIcon />;
    }
    return <span className="text-gray-600">{value}</span>;
  };

  return (
    <div className="  mx-auto px-4 py-16 pb-8">
      <section className="flex container flex-col gap-y-12">
        {/* Header */}
        <div
          className="flex justify-center items-center flex-col"
          style={{ marginBottom: "20px", gap: "4px" }}
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Select one of our services
          </h2>
          <div className="flex gap-x-2">
            <div className="bg-purple-600 h-[5px] w-16 rounded-md"></div>
            <div className="bg-purple-600 h-[5px] w-24 rounded-md"></div>
          </div>
        </div>

        <div className="relative">
          {/* Tabs */}
          <div>
            <ul className="text-center">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={`inline-block cursor-pointer rounded-[30px] p-4 duration-500 mb-4 ml-2 mr-[-1px] font-medium capitalize text-lg py-[10px] px-[30px] hover:shadow-lg ${
                    activeTab === tab
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Table */}
          <div className="hover:shadow-lg pb-[30px] rounded-[10px] overflow-x-auto w-full block duration-500 bg-white">
            <table
              className="w-full text-center bg-white duration-500 border-collapse border-spacing-0"
              border={1}
            >
              <thead>
                <tr>
                  <th className="w-[200px]">
                    <h3 className="leading-[1.2]">Choose your package deal</h3>
                    <p className="text-[15px] font-normal mt-2">
                      A fixed amount, no surprises afterwards
                    </p>
                  </th>
                  <th>
                    <div className="pt-[25px] pb-[20px]">
                      <h3>Basic</h3>
                    </div>
                    <div className="flex justify-center text-gray-700 duration-500 pt-2 pb-[5px] font-semibold text-[28px] border-y-[2px] border-dashed border-gray-100">
                      <p className="flex gap-x-[2px] mr-1 justify-center text-gray-700 items-center relative text-[24px] font-medium align-baseline">
                        <span>€</span> 997
                      </p>
                      <span className="flex mr-1 justify-center text-blue-600 items-center relative text-[14px] font-medium align-baseline">
                        ex VAT.
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="pt-[25px] pb-[20px]">
                      <h3>Standard</h3>
                    </div>
                    <div className="flex justify-center text-gray-700 duration-500 pt-2 pb-[5px] font-semibold text-[28px] border-y-[2px] border-dashed border-gray-100">
                      <p className="flex gap-x-[2px] mr-1 justify-center text-gray-700 items-center relative text-[24px] font-medium align-baseline">
                        <span>€</span> 1497
                      </p>
                      <span className="flex mr-1 justify-center text-blue-600 items-center relative text-[14px] font-medium align-baseline">
                        ex VAT.
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="pt-[25px] pb-[20px]">
                      <h3>Premium</h3>
                    </div>
                    <div className="flex justify-center text-gray-700 duration-500 pt-2 pb-[5px] font-semibold text-[28px] border-y-[2px] border-dashed border-gray-100">
                      <p className="flex gap-x-[2px] mr-1 justify-center text-gray-700 items-center relative text-[24px] font-medium align-baseline">
                        <span>€</span> 2497
                      </p>
                      <span className="flex mr-1 justify-center text-blue-600 items-center relative text-[14px] font-medium align-baseline">
                        ex VAT.
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index}>
                    <th className="text-gray-700 max-w-[300px] flex justify-center items-center gap-x-3">
                      <span className="font-medium">{feature.name}</span>
                    </th>
                    <td className="p-[15px] max-w-[200px] border-t-[1px] border-gray-200">
                      {renderFeatureValue(feature.basic)}
                    </td>
                    <td className="p-[15px] max-w-[200px] border-t-[1px] border-gray-200">
                      {renderFeatureValue(feature.standard)}
                    </td>
                    <td className="p-[15px] max-w-[200px] border-t-[1px] border-gray-200">
                      {renderFeatureValue(feature.premium)}
                    </td>
                  </tr>
                ))}
                {/* CTA Row */}
                <tr>
                  <th></th>
                  <td className="h-[100px] border-t-[1px] border-gray-200">
                    <div className="w-full h-full flex justify-center items-center">
                      <div className="flex w-[200px] justify-center">
                        <button className="ease-out flex justify-center items-center gap-x-1 origin-center bg-gradient-to-r from-purple-600 to-purple-700 text-white border border-purple-600 hover:bg-none duration-300 hover:bg-white hover:text-purple-600 px-2 py-4 font-semibold rounded-[5px] whitespace-normal hover:scale-105">
                          <div className="overflow-hidden">
                            <FireIcon />
                          </div>
                          More information
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="h-[100px] border-t-[1px] border-gray-200">
                    <div className="w-full h-full flex justify-center items-center">
                      <div className="flex w-[200px] justify-center">
                        <button className="ease-out flex justify-center items-center gap-x-1 origin-center bg-gradient-to-r from-purple-600 to-purple-700 text-white border border-purple-600 hover:bg-none duration-300 hover:bg-white hover:text-purple-600 px-2 py-4 font-semibold rounded-[5px] whitespace-normal hover:scale-105">
                          <div className="overflow-hidden">
                            <FireIcon />
                          </div>
                          More information
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="h-[100px] border-t-[1px] border-gray-200">
                    <div className="w-full h-full flex justify-center items-center">
                      <div className="flex w-[200px] justify-center">
                        <button className="ease-out flex justify-center items-center gap-x-1 origin-center bg-gradient-to-r from-purple-600 to-purple-700 text-white border border-purple-600 hover:bg-none duration-300 hover:bg-white hover:text-purple-600 px-2 py-4 font-semibold rounded-[5px] whitespace-normal hover:scale-105">
                          <div className="overflow-hidden">
                            <FireIcon />
                          </div>
                          More information
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
