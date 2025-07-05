// components/LocalBusinessSchema.tsx
interface LocalBusinessSchemaProps {
  name?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
  url?: string;
  description?: string;
  openingHours?: string[];
  priceRange?: string;
  image?: string;
}

export default function LocalBusinessSchema({
  name = "Your Agency Name",
  address = {
    streetAddress: "123 Main Street",
    addressLocality: "City",
    addressRegion: "State",
    postalCode: "12345",
    addressCountry: "US",
  },
  telephone = "+1-555-123-4567",
  email = "info@youragency.com",
  url = "https://youragency.com",
  description = "Professional digital marketing and web development agency",
  openingHours = ["Mo-Fr 09:00-17:00", "Sa 09:00-12:00"],
  priceRange = "$$",
  image = "https://youragency.com/logo.jpg",
}: LocalBusinessSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    telephone,
    email,
    url,
    description,
    openingHours,
    priceRange,
    image,
    sameAs: [
      "https://www.facebook.com/youragency",
      "https://www.linkedin.com/company/youragency",
      "https://twitter.com/youragency",
    ],
    // Add aggregateRating if you have reviews
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "4.8",
    //   reviewCount: "127"
    // }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
