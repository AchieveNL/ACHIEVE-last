/* eslint-disable no-console */
import { MongoService } from "@/lib/mongoService";
import { Service } from "@/types/dbdatas";
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

const ServicesSections = async () => {
  const services = await getServicesData();

  return <ServicesSectionsClient services={services} />;
};

export default ServicesSections;
