"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Locale, Service } from "@/types/dbdatas";
import AnimatedLinkWithArrow from "../home/AnimatedLinkWithArrowProps";
import { useClientTranslations } from "../hooks/useClientTranslations";
import Image from "next/image";

// Animated Text Component
interface AnimatedTextProps {
  children: React.ReactNode;
  animationType?: "gradient";
  className?: string;
}

const AnimatedText = ({
  children,
  animationType,
  className,
}: AnimatedTextProps) => {
  if (animationType === "gradient") {
    return (
      <motion.span
        className={`bg-gradient-to-r from-achieve-purple via-blue-500 to-purple-600 bg-clip-text text-transparent bg-size-200 ${className}`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        {children}
      </motion.span>
    );
  }
  return <span className={className}>{children}</span>;
};

// Service Item Component
interface ServiceItemProps {
  service: Service;
  isExpanded: boolean;
  locale: Locale;
  onToggle: () => void;
}

const ServiceItem = ({
  service,
  isExpanded,
  onToggle,
  locale,
}: ServiceItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const { t } = useClientTranslations("secondaryHero");

  // Function to convert title to URL-friendly format
  const createSlugFromTitle = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <motion.div
      className="border-b border-2  md:border-4 border-achieve-background last:border-b-0"
      initial={false}
      animate={{
        backgroundColor: isExpanded ? "var(--achieve-background)" : "#fff",
      }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <motion.div
        className="py-4 md:py-8 container  px-4 md:px-6 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onToggle}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex   lg:flex-row items-center justify-between gap-2 md:gap-4 lg:gap-8">
          <motion.div
            className={`text-gray-400 font-semibold leading-tight transition-all duration-300 ${
              isExpanded || isHovered
                ? "text-2xl md:text-3xl lg:text-4xl"
                : "text-base md:text-lg"
            }`}
            animate={{
              scale: isExpanded || isHovered ? 1.05 : 1,
            }}
            transition={{
              duration: isExpanded || isHovered ? 0.2 : 0.5,
              ease: isExpanded || isHovered ? "easeOut" : "easeIn",
            }}
          >
            {isHovered || isExpanded ? (
              <AnimatedText
                animationType="gradient"
                className="text-achieve-purple font-bold"
              >
                {service.title.en}
              </AnimatedText>
            ) : (
              service.title.en
            )}
          </motion.div>

          {/* Desktop close icon */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className=""
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.374 37.1228L37.1228 12.3741"
                  stroke="#223155"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.375 12.3738L37.1237 37.1225"
                  stroke="#223155"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4  container md:px-6">
              <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:justify-between lg:gap-8 pb-4 md:pb-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex-1 max-w-none lg:max-w-lg"
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                    {service.description[locale]}
                  </p>

                  {/* CTA Button */}
                  <div className="pt-4 md:pt-8">
                    <AnimatedLinkWithArrow
                      textClassName="text-semi-bold text-sm md:text-base"
                      href={`/diensten/${createSlugFromTitle(service.title.en)}`}
                      text={t("cta")}
                    />
                  </div>
                </motion.div>

                {service.image && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center lg:justify-end mt-4 lg:mt-0"
                  >
                    <Image
                      width={320}
                      height={400}
                      src={service.image}
                      alt={service.title.en}
                      className="rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-sm object-cover"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface ServicesClientProps {
  services: Service[];
  locale: Locale;
}

const ServicesSectionsClient = ({ services, locale }: ServicesClientProps) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-none">
      <div className="flex flex-col">
        {/* Services List */}
        <div className="w-full">
          {services.map((service, index) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full"
            >
              <ServiceItem
                locale={locale}
                service={service}
                isExpanded={expandedItem === service._id}
                onToggle={() => toggleExpanded(service._id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionsClient;
