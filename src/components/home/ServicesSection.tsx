import React from "react";
import { Locale, Service } from "@/types/dbdatas";
import { useClientTranslations } from "../hooks/useClientTranslations";
import TextWithUnderline from "../ui/TextWithUnderline";
import { MongoService } from "@/lib/mongoService";
import CollapsibleDescription from "./CollapsibleDescription";
import Image from "next/image";

interface ServicesSectionProps {
  font?: string;
  showTitle?: boolean;
}

// Server component that fetches data
async function getServicesData(): Promise<Service[]> {
  try {
    const services = await MongoService.getServices();
    return services;
  } catch (error) {
    console.error("Failed to load services:", error);
    return [];
  }
}

// Service Card Component (server component)
const ServiceCard: React.FC<{
  service: Service;
  locale: Locale;
  t: (key: string) => string;
}> = ({ service, locale, t }) => {
  const description =
    typeof service.description === "string"
      ? service.description
      : service.description?.[locale] ||
        service.description?.en ||
        "No description available";

  const title =
    typeof service.title === "string"
      ? service.title
      : service.title?.[locale] || service.title?.en || "Service";

  return (
    <div className="flex items-start rounded-xl flex-col gap-y-4 p-7 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group min-h-80">
      {/* Image */}
      <div className="flex justify-center items-center w-full">
        <Image
          className=" object-contain"
          width="96"
          height="96"
          src={service.image}
          alt={`${title} icon`}
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h4 className="text-center font-bold mt-3 whitespace-nowrap text-lg w-full">
        {title}
      </h4>

      {/* Collapsible Description - Client Component */}
      <div className="flex-grow w-full flex flex-col justify-between">
        <CollapsibleDescription
          description={description}
          showMoreText={t("show_more") || "Show more"}
          showLessText={t("show_less") || "Show less"}
        />
      </div>
    </div>
  );
};

// Client component for interactive parts
const ServicesContent: React.FC<{
  services: Service[];
  showTitle: boolean;
}> = ({ services, showTitle }) => {
  const { t, locale } = useClientTranslations("services");

  return (
    <div className=" mx-auto px-4 py-8 pb-16 relative">
      {/* Background Image */}
      <div
        className="absolute w-full h-full left-0 top-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/tretrak/image/upload/v1651468156/achieve/bg1_st0d5t.png')",
          backgroundPosition: "0px 100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <section className="flex container flex-col gap-y-12 relative z-10">
        {/* Header */}
        {showTitle && (
          <div className="flex justify-center items-center flex-col mb-5 gap-1">
            <TextWithUnderline>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                {t("title")}
              </h2>
            </TextWithUnderline>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid z-50 grid-cols-3 gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-start">
          {services.length === 0 ? (
            <div className="col-span-full flex justify-center items-center min-h-[400px]">
              <div className="text-gray-500">No services available</div>
            </div>
          ) : (
            services.map((service) => (
              <ServiceCard
                key={service._id}
                service={service}
                locale={locale}
                t={t}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

// Main server component
const ServicesSection: React.FC<ServicesSectionProps> = async ({
  font,
  showTitle = true,
}) => {
  const services = await getServicesData();

  return <ServicesContent services={services} showTitle={showTitle} />;
};

export default ServicesSection;
