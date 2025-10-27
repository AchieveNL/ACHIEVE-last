/* eslint-disable no-console */
import { MongoService } from "@/lib/mongoService";
import { Locale, Service } from "@/types/dbdatas";
import ServicesSectionsClient from "./ServicesSectionsClient";

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

const ServicesSections = async ({ locale }: { locale: Locale }) => {
  const services = await getServicesData();

  return <ServicesSectionsClient locale={locale} services={services} />;
};

export default ServicesSections;
