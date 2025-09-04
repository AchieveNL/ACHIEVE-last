import React from "react";
import { Locale, Service } from "@/types/dbdatas";
import { useClientTranslations } from "../hooks/useClientTranslations";
import { MongoService } from "@/lib/mongoService";
import CollapsibleDescription from "./CollapsibleDescription";
import Image from "next/image";
import AnimatedText from "../ui/AnimatedText";
import HighlightedText from "../ui/HighlightedText";

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
    <div className="flex items-start rounded-xl flex-col gap-y-4 p-4 sm:p-6 lg:p-7 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group min-h-64 sm:min-h-72 lg:min-h-80">
      {/* Image */}
      <div className="flex justify-center items-center w-full">
        <Image
          className="object-contain"
          width="80"
          height="80"
          src={service.image}
          alt={`${title} icon`}
          loading="lazy"
          sizes="(max-width: 640px) 80px, (max-width: 1024px) 88px, 96px"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "80px",
            maxHeight: "80px",
          }}
        />
      </div>

      {/* Title */}
      <h4 className="text-center font-bold mt-2 sm:mt-3 text-base sm:text-lg lg:text-xl w-full leading-tight">
        {title}
      </h4>

      {/* Collapsible Description - Client Component */}
      <div className="flex-grow w-full flex flex-col justify-between">
        <CollapsibleDescription
          textFirst={t("strategy_meeting") || "Strategy Meeting"}
          textSecond={t("prices") || "Prices"}
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
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 pb-12 sm:pb-14 lg:pb-16 bg-achieve-background relative">
      {/* Background Image */}
      <div
        className="absolute w-full h-full left-0 top-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/tretrak/image/upload/v1651468156/achieve/bg1_st0d5t.png')",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <section className="flex container mx-auto flex-col gap-y-8 sm:gap-y-10 lg:gap-y-12 relative z-10 max-w-7xl">
        {/* Header */}
        {showTitle && (
          <div className="flex justify-center items-center flex-col mb-3 sm:mb-4 lg:mb-5 gap-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 text-center px-4">
              {t("titleOur")}{" "}
              <HighlightedText className="text-achieve-purple">
                <AnimatedText
                  animationType="gradient"
                  className="text-achieve-purple font-bold"
                >
                  {t("titleServices")}
                </AnimatedText>{" "}
              </HighlightedText>{" "}
            </h2>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid z-50 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-start">
          {services.length === 0 ? (
            <div className="col-span-full flex justify-center items-center min-h-[300px] sm:min-h-[400px]">
              <div className="text-gray-500 text-center px-4">
                No services available
              </div>
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
