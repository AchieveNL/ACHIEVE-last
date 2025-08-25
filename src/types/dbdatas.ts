/* eslint-disable @typescript-eslint/no-wrapper-object-types */
export type Locale = "en" | "nl";
export interface Company {
  _id: number;
  image: string;
  company: string;
}
export interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface Service {
  _id: number;
  image: string;
  pictures?: string;
  title: {
    en: string;
    nl: string;
  };
  description: {
    en: string;
    nl: string;
  };
}
export interface YtbLink {
  link: string;
}
export interface OldCase {
  _id: number;
  slug: string;
  title: {
    en: string;
    nl: string;
  };
  aboutCase: {
    en: string;
    nl: string;
  };
  WhoClient: {
    en: string;
    nl: string;
  };
  youtube: YtbLink[];
  faq: {
    en: {
      aklantvraag: string;
      bstrategie: string;
      doelstelling: string;
    };
    nl: {
      aklantvraag: string;
      bstrategie: string;
      doelstelling: string;
    };
  };
  image: string;
  GeleverdeDiensten: any;
  caseLogo: {
    url: string;
  };
  testimonial: {
    en: {
      testititle: string;
      text: string;
    };
    nl: {
      testititle: string;
      text: string;
    };
  };
}
interface Case {
  slug: string;
  enabled: boolean;
  logo?: {
    src: string;
    title?: string;
  };
  bannerImage: string;
  bannerTitle: {
    en: string;
    nl: string;
  };
  bannerSubtitle: {
    en: string;
    nl: string;
  };
  previewImage: string;
  expertise?: string[]; // Assuming `ExpertiseInput` maps to a string or a custom object type.
  clientName: string;
  location: {
    en: string;
    nl: string;
  };
  targetGroup: string;
  sector: {
    en: string;
    nl: string;
  };
  workArea: {
    en: string;
    nl: string;
  };
  website?: string;
  displaydwebsiteurl?: string;
  description: {
    en: string;
    nl: string;
  };
  challenge: {
    en: string;
    nl: string;
  };
  solution: {
    en: string;
    nl: string;
  };
  impact: {
    en: string;
    nl: string;
  };
  imageGallery?: {
    image: {
      image: string;
      title?: string;
    };
  }[];
  videoLinks?: {
    url: string;
    thumbnail?: string;
  }[];
  reviews?: CaseReviews[];
  bannerFadeColor: string;
  expertiseForCasesList?: string;
  dateProjectStart: string;
  dateProjectEnd: string;
}

export interface CaseReviews {
  picture: string;
  date: string; //iso-format
  stars: number;
  name: string;
  review: {
    en: string;
    nl: string;
  };
}

export interface CaseDetails {
  name: {
    en: string;
    nl: string;
  };
  image: string;
  value: {
    en: string;
    nl: string;
  };
}

export interface PriceService {
  info: {
    en: string;
    nl: string;
  };
  seb: {
    en: string;
    nl: string;
  };
  sep: {
    en: string;
    nl: string;
  };
  ses: {
    en: string;
    nl: string;
  };
  title: {
    en: string;
    nl: string;
  };
}
export interface Price {
  _id: number;
  b_name: {
    en: string;
    nl: string;
  };
  b_price: {
    en: string;
    nl: string;
  };
  s_name: {
    en: string;
    nl: string;
  };
  s_price: {
    en: string;
    nl: string;
  };
  p_name: {
    en: string;
    nl: string;
  };
  p_price: {
    en: string;
    nl: string;
  };
  name: {
    en: string;
    nl: string;
  };
  order?: Number;
  services: PriceService[];
}

export interface CustomerTestimonial {
  _id: number;
  fullName: string;
  date: string;
  profession: {
    en: string;
    nl: string;
  };
  message: {
    en: string;
    nl: string;
  };
}

export interface FaqCategory {
  _id: number;
  title: {
    en: string;
    nl: string;
  };
}

export interface Faq {
  _id: number;
  question: {
    en: string;
    nl: string;
  };
  answer: {
    en: string;
    nl: string;
  };
  category_id: string;
}

export interface CarouselData {
  _id: number;
  title: {
    en: string;
    nl: string;
  };
  link: string;
}

export interface SiteInfo {
  _id: number;
  title: string;
  email: string;
  phone: string;
  address: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  caseLogo: {
    url: string;
  };
  image: string;
  logo: string;
  pictures: string;
  youtube: string;
}

export interface AboutUs {
  _id: number;
  title: {
    en: string;
    nl: string;
  };
  introduction: {
    en: string;
    nl: string;
  };
  communicatie: {
    communicatieText: {
      en: string;
      nl: string;
    };
    communicatieIcon: string;
    title: {
      en: string;
      nl: string;
    };
  };
  transparantie: {
    transparantieText: {
      en: string;
      nl: string;
    };
    transparantieIcon: string;
    title: {
      en: string;
      nl: string;
    };
  };
  professionaliteit: {
    professionaliteitText: {
      en: string;
      nl: string;
    };
    professionaliteitIcon: string;
    title: {
      en: string;
      nl: string;
    };
  };
  passie: {
    passieText: {
      en: string;
      nl: string;
    };
    passieIcon: string;
    title: {
      en: string;
      nl: string;
    };
  };
  teamDescription: {
    en: string;
    nl: string;
  };
  teamTitle: {
    en: string;
    nl: string;
  };
}

export interface Team {
  _id: number;
  email: string;
  name: string;
  profession: {
    en: string;
    nl: string;
  };
  image: string;
}

export interface VacancyItem {
  title: {
    en: string;
    nl: string;
  };
}

export interface VacancyData {
  heading: {
    en: string;
    nl: string;
  };
  vacancyItem: VacancyItem[];
}

export interface Vacancy {
  _id: number;
  title: {
    en: string;
    nl: string;
  };
  employmentType: {
    en: string;
    nl: string;
  };
  location: string;
  description: {
    en: string;
    nl: string;
  };
  slug: {
    current: string;
  };
  data: VacancyData[];
}
export interface Plus {
  _id: number;
  desc: {
    en: string;
    nl: string;
  };
  heading: string;
  img: string;
}
export interface Privacy {
  _id: number;
  body: {
    en: string;
    nl: string;
  };
  title: string;
}
export interface Terms {
  _id: number;
  body: {
    nl: string;
    en: string;
  };
  title: string;
}
interface hostingDataPackage {
  name: string;
  service:
    | string
    | {
        en: string;
        nl: string;
      };
}
export interface hostingData {
  _id: number;
  type: string;
  desc: string;
  packages: hostingDataPackage[][];
  order: number;
  pricing: {
    Monthly: string[];
    Yearly: string[];
    ThreeYears: string[];
  };
  timeframes: {
    monthly: {
      en?: string;
      nl?: string;
    };
    yearly: {
      en?: string;
      nl?: string;
    };
    threeyears: {
      en?: string;
      nl?: string;
    };
  };
}

export interface socialMediaManagementPost {
  state: "approved" | "rejected" | "unset";
  rating: string | null;
  image: {
    url: string;
  }[];
  feedback: string | null;
  postText: string | null;
  prevPostText: string | null;
}
export interface socialMediaManagement {
  _id: number;
  slug: string;
  enabled: boolean;
  category: string;
  posts: socialMediaManagementPost[];
}
export interface ManualSection {
  title: string;
  body: string;
  mainImage: string | null;
  picture?: string | null;
}

export interface Manual {
  _id: number;
  pageName: string;
  slug: string;
  heading: string;
  section: ManualSection[];
}

export interface LocalizedText {
  en: string;
  nl: string;
}

export interface BaseDocument {
  _id: number | string;
  id?: number;
}

// Case/Project Types
export interface CaseDocument extends BaseDocument {
  enabled: boolean;
  slug: string;
  bannerTitle: LocalizedText;
  bannerSubtitle: LocalizedText;
  expertiseForCasesList: string;
  dateProjectStart: string;
  dateProjectEnd: string;
  clientName: string;
  location: LocalizedText;
  targetGroup: LocalizedText;
  sector: LocalizedText;
  workArea: LocalizedText;
  website: string;
  displaydwebsiteurl: string;
  description: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  impact: LocalizedText;
  bannerImage: string;
  imageGallery: Array<{ image: string }>;
  logo: string;
  bannerFadeColor: string;
  expertise: string[];
  previewImage: string;
  views?: number;
}

// FAQ Types
export interface FaqCategory extends BaseDocument {
  title: LocalizedText;
  order?: number;
}

export interface Faq extends BaseDocument {
  question: LocalizedText;
  answer: LocalizedText;
  category_id: string;
}

export interface FaqData {
  faqCategories: FaqCategory[];
  faqs: Faq[];
}

// Company Types
export interface Company extends BaseDocument {
  company: string;
  image: string;
}

// Service Types
export interface Service extends BaseDocument {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
}

// Price Types
export interface PriceService {
  title: LocalizedText;
  info: LocalizedText;
  seb: LocalizedText;
  ses: LocalizedText;
  sep: LocalizedText;
}

export interface Price extends BaseDocument {
  name: LocalizedText;
  b_name: LocalizedText;
  s_name: LocalizedText;
  p_name: LocalizedText;
  b_price: LocalizedText;
  s_price: LocalizedText;
  p_price: LocalizedText;
  order?: Number;
  services: PriceService[];
}

// Testimonial Types
export interface CustomerTestimonial extends BaseDocument {
  fullName: string;
  profession: LocalizedText;
  message: LocalizedText;
  date: string;
}

export interface StaffTestimonial extends BaseDocument {
  fullName: string;
  profession: LocalizedText;
  message: LocalizedText;
}

// Carousel Types
export interface CarouselData extends BaseDocument {
  title: LocalizedText;
  link: string;
}

export interface CarouselDataResponse {
  carouselDataTop: CarouselData[];
  carouselDataBottom: CarouselData[];
}

// Team Types
export interface Team extends BaseDocument {
  name: string;
  image: string;
  profession: LocalizedText;
  email: string;
}

// Vacancy Types
export interface VacancyItem {
  title: LocalizedText;
}

export interface VacancyData {
  heading: LocalizedText;
  vacancyItem: VacancyItem[];
}

export interface Vacancy extends BaseDocument {
  title: LocalizedText;
  employmentType: LocalizedText;
  location: string;
  description: LocalizedText;
  slug: {
    current: string;
  };
  data: VacancyData[];
}

// About Us Types
export interface AboutUsValue {
  title: LocalizedText;
  [key: string]: any; // For dynamic text and icon fields
}

export interface AboutUs extends BaseDocument {
  title: LocalizedText;
  introduction: LocalizedText;
  communicatie: {
    communicatieText: { en: string; nl: string };
    communicatieIcon: string;
    title: { en: string; nl: string };
  };
  transparantie: {
    transparantieText: { en: string; nl: string };
    transparantieIcon: string;
    title: { en: string; nl: string };
  };
  professionaliteit: {
    professionaliteitText: { en: string; nl: string };
    professionaliteitIcon: string;
    title: { en: string; nl: string };
  };
  passie: {
    passieText: { en: string; nl: string };
    passieIcon: string;
    title: { en: string; nl: string };
  };
  teamDescription: LocalizedText;
  teamTitle: LocalizedText;
}

// Site Info Types
export interface SiteInfo extends BaseDocument {
  title: string;
  email: string;
  phone: string;
  address: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  logo: string;
  pictures: string;
  caseLogo: {
    url: string;
  };
  image: string;
}

// Hero Section Types
export interface HeroItem {
  items: LocalizedText;
}

export interface HeroSection extends BaseDocument {
  title: LocalizedText;
  subtitle: LocalizedText;
  category_id: number;
  image: string;
  items: {
    en: HeroItem[];
    nl: HeroItem[];
  };
}

// Social Media Management Types
export interface SocialMediaPost {
  state: "approved" | "pending" | "rejected" | "unset";
  postText?: string;
  rating?: number | null;
  feedback?: string | null;
  image: Array<{ url: string }>;
  prevPostText?: string;
}

export interface SocialMediaManagement extends BaseDocument {
  enabled: boolean;
  category: string;
  slug: string;
  posts: SocialMediaPost[];
}

// MongoDB Query Options
export interface QueryOptions {
  filter?: any;
  sort?: any;
  limit?: number;
  projection?: any;
}

export interface CaseQueryOptions {
  locale?: Locale;
  filterFunction?: (val: CaseDocument, i: number) => boolean;
  limit?: number;
  enabled?: boolean;
}

export interface CompanyQueryOptions {
  shuffle?: boolean;
}

export interface ServiceQueryOptions {
  sortBy?: "asc" | "desc";
}

// Updated MongoService with proper types
