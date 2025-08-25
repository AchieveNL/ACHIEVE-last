/* eslint-disable no-console */
import dbConnect from "@/lib/mongodb";
import type {
  Locale,
  CaseDocument,
  FaqData,
  Company,
  Service,
  Price,
  CustomerTestimonial,
  CarouselDataResponse,
  QueryOptions,
  CaseQueryOptions,
  CompanyQueryOptions,
  ServiceQueryOptions,
  Team,
  Vacancy,
  AboutUs,
  SiteInfo,
  HeroSection,
  SocialMediaManagement,
  StaffTestimonial,
  FaqCategory,
  Faq,
} from "@/types/dbdatas";

export class MongoService {
  private static async getDb() {
    const db = await dbConnect();
    return db.connection.useDb("frontendData");
  }

  // Cases/Projects with proper typing
  static async getCases(
    options: CaseQueryOptions = {},
  ): Promise<CaseDocument[]> {
    try {
      const db = await this.getDb();
      let cases = (await db
        .collection("newcases")
        .find({})
        .sort({ _id: -1 })
        .toArray()) as unknown as CaseDocument[];

      // Filter by enabled status
      cases = cases.filter((value) => {
        return options.enabled !== false ? value.enabled === true : true;
      });

      // Apply custom filter function
      if (options.filterFunction) {
        cases = cases.filter(options.filterFunction);
      }

      // Add fake views if not present
      cases = cases.map((project) => ({
        ...project,
        views:
          project.views || Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
      }));

      // Apply limit
      if (options.limit) {
        cases = cases.slice(0, options.limit);
      }

      return cases;
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error fetching cases:", error);
      }
      throw new Error("Failed to fetch cases");
    }
  }

  // Get single case by slug
  static async getCaseBySlug(slug: string): Promise<CaseDocument | null> {
    try {
      const db = await this.getDb();
      const caseDoc = (await db
        .collection("newcases")
        .findOne({ slug })) as unknown as CaseDocument | null;

      if (caseDoc && !caseDoc.views) {
        caseDoc.views = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      }

      return caseDoc;
    } catch (error) {
      console.error("Error fetching case by slug:", error);
      throw new Error("Failed to fetch case");
    }
  }

  // FAQ Categories and FAQs with proper typing
  static async getFaqData(): Promise<FaqData> {
    try {
      const db = await this.getDb();

      const [faqCategoriesRaw, faqsRaw] = await Promise.all([
        db.collection("faqCategories").find({}).toArray(),
        db.collection("faqs").find({}).toArray(),
      ]);

      const faqCategories = faqCategoriesRaw as unknown as FaqCategory[];
      const faqs = faqsRaw as unknown as Faq[];

      // Process categories
      faqCategories.forEach((value: any) => {
        if (value.order === undefined) {
          value.order = 10000;
        }
      });

      // Sort categories by order
      faqCategories.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));

      return {
        faqCategories,
        faqs,
      };
    } catch (error) {
      console.error("Error fetching FAQ data:", error);
      throw new Error("Failed to fetch FAQ data");
    }
  }

  // Companies with proper typing
  static async getCompanies(
    options: CompanyQueryOptions = {},
  ): Promise<Company[]> {
    try {
      const db = await this.getDb();
      const companies = (await db
        .collection("companies")
        .find({})
        .toArray()) as unknown as Company[];

      if (options.shuffle) {
        // Fisher-Yates shuffle
        for (let i = companies.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [companies[i], companies[j]] = [companies[j], companies[i]];
        }
      }

      return companies;
    } catch (error) {
      console.error("Error fetching companies:", error);
      throw new Error("Failed to fetch companies");
    }
  }

  // Services with proper typing
  static async getServices(
    options: ServiceQueryOptions = {},
  ): Promise<Service[]> {
    try {
      const db = await this.getDb();
      const sortOrder = options.sortBy === "desc" ? -1 : 1;

      const services = (await db
        .collection("services")
        .find({})
        .sort({ _id: sortOrder })
        .toArray()) as unknown as Service[];

      return services;
    } catch (error) {
      console.error("Error fetching services:", error);
      throw new Error("Failed to fetch services");
    }
  }

  // Prices with proper typing
  static async getPrices(): Promise<Price[]> {
    try {
      const db = await this.getDb();
      const prices = (await db
        .collection("prices")
        .find({})
        .toArray()) as unknown as Price[];

      prices.forEach((value: any) => {
        if (value.order === undefined) {
          value.order = 10000;
        }
      });

      // Sort by order
      prices.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));

      return prices;
    } catch (error) {
      console.error("Error fetching prices:", error);
      throw new Error("Failed to fetch prices");
    }
  }

  // Customer Testimonials with proper typing
  static async getTestimonials(): Promise<CustomerTestimonial[]> {
    try {
      const db = await this.getDb();
      const testimonials = (await db
        .collection("customerTestimonials")
        .find({})
        .toArray()) as unknown as CustomerTestimonial[];

      return testimonials;
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      throw new Error("Failed to fetch testimonials");
    }
  }

  // Staff Testimonials with proper typing
  static async getStaffTestimonials(): Promise<StaffTestimonial[]> {
    try {
      const db = await this.getDb();
      const testimonials = (await db
        .collection("staffTestimonials")
        .find({})
        .toArray()) as unknown as StaffTestimonial[];

      return testimonials;
    } catch (error) {
      console.error("Error fetching staff testimonials:", error);
      throw new Error("Failed to fetch staff testimonials");
    }
  }

  // Carousel Data with proper typing
  static async getCarouselData(): Promise<CarouselDataResponse> {
    try {
      const db = await this.getDb();

      const [carouselDataTop, carouselDataBottom] = await Promise.all([
        db.collection("carouselDataTop").find({}).toArray(),
        db.collection("carouselDataBottom").find({}).toArray(),
      ]);

      return {
        carouselDataTop: carouselDataTop as any[],
        carouselDataBottom: carouselDataBottom as any[],
      };
    } catch (error) {
      console.error("Error fetching carousel data:", error);
      throw new Error("Failed to fetch carousel data");
    }
  }

  // Team members with proper typing
  static async getTeam(): Promise<Team[]> {
    try {
      const db = await this.getDb();
      const team = (await db
        .collection("teams")
        .find({})
        .toArray()) as unknown as Team[];

      return team;
    } catch (error) {
      console.error("Error fetching team:", error);
      throw new Error("Failed to fetch team");
    }
  }

  // Vacancies with proper typing
  static async getVacancies(): Promise<Vacancy[]> {
    try {
      const db = await this.getDb();
      const vacancies = (await db
        .collection("vacancies")
        .find({})
        .toArray()) as unknown as Vacancy[];

      return vacancies;
    } catch (error) {
      console.error("Error fetching vacancies:", error);
      throw new Error("Failed to fetch vacancies");
    }
  }

  // About Us with proper typing
  static async getAboutUs(): Promise<AboutUs | null> {
    try {
      const db = await this.getDb();
      const aboutUs = (await db
        .collection("aboutUs")
        .findOne({})) as unknown as AboutUs | null;

      return aboutUs;
    } catch (error) {
      console.error("Error fetching about us:", error);
      throw new Error("Failed to fetch about us");
    }
  }

  // Site Info with proper typing
  static async getSiteInfo(): Promise<SiteInfo | null> {
    try {
      const db = await this.getDb();
      const siteInfo = (await db
        .collection("siteInfo")
        .findOne({})) as unknown as SiteInfo | null;

      return siteInfo;
    } catch (error) {
      console.error("Error fetching site info:", error);
      throw new Error("Failed to fetch site info");
    }
  }

  // Hero Section with proper typing
  static async getHeroSection(): Promise<HeroSection | null> {
    try {
      const db = await this.getDb();
      const heroSection = (await db
        .collection("heroSection")
        .findOne({})) as unknown as HeroSection | null;

      return heroSection;
    } catch (error) {
      console.error("Error fetching hero section:", error);
      throw new Error("Failed to fetch hero section");
    }
  }

  // Social Media Management with proper typing
  static async getSocialMediaManagement(
    slug?: string,
  ): Promise<SocialMediaManagement[]> {
    try {
      const db = await this.getDb();
      const filter = slug ? { slug } : {};
      const socialMedia = (await db
        .collection("socialMediaManagementNew")
        .find(filter)
        .toArray()) as unknown as SocialMediaManagement[];

      return socialMedia;
    } catch (error) {
      console.error("Error fetching social media management:", error);
      throw new Error("Failed to fetch social media management");
    }
  }

  // Generic method for custom queries with proper typing
  static async getCollection<T = any>(
    collectionName: string,
    options: QueryOptions = {},
  ): Promise<T[]> {
    try {
      const db = await this.getDb();
      let query = db.collection(collectionName).find(options.filter || {});

      if (options.projection) {
        query = query.project(options.projection);
      }

      if (options.sort) {
        query = query.sort(options.sort);
      }

      if (options.limit) {
        query = query.limit(options.limit);
      }

      return (await query.toArray()) as unknown as T[];
    } catch (error) {
      console.error(`Error fetching ${collectionName}:`, error);
      throw new Error(`Failed to fetch ${collectionName}`);
    }
  }

  // Get single document from any collection
  static async getDocument<T = any>(
    collectionName: string,
    filter: any = {},
  ): Promise<T | null> {
    try {
      const db = await this.getDb();
      const document = (await db
        .collection(collectionName)
        .findOne(filter)) as unknown as T | null;

      return document;
    } catch (error) {
      console.error(`Error fetching document from ${collectionName}:`, error);
      throw new Error(`Failed to fetch document from ${collectionName}`);
    }
  }

  // Utility method to get localized content
  static getLocalizedContent<T extends Record<string, any>>(
    content: T,
    locale: Locale = "en",
  ): T {
    const result = { ...content } as any;

    Object.keys(result).forEach((key) => {
      const value = result[key];
      if (
        value &&
        typeof value === "object" &&
        "en" in value &&
        "nl" in value
      ) {
        result[key] = value[locale];
      }
    });

    return result as T;
  }
}
