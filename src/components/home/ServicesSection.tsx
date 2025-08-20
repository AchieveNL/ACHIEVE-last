/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Branding",
      description:
        "Branding is the conscious creation and reinforcement of a desired image of ...",
      image:
        "https://storage.googleapis.com/achieve-bucket/0ee00e2e-73ce-4acb-b91b-07e9848831ddbranding.webp",
      imageAlt: "Branding icon",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "A website can have different objectives. There are websites that inform, we...",
      image:
        "https://storage.googleapis.com/achieve-bucket/99baa157-2c91-4538-b97a-c4a2189ed268website.webp",
      imageAlt: "Web Development icon",
    },
    {
      id: 3,
      title: "Email Marketing",
      description:
        "With e-mail marketing, you use a mailing list with interested parties who ...",
      image:
        "https://storage.googleapis.com/achieve-bucket/369830cf-44f1-484d-a985-1c09350fc0ecemail.webp",
      imageAlt: "Email Marketing icon",
    },
    {
      id: 4,
      title: "Content Creation",
      description:
        "Content generally refers to (online) expressions such as texts, images and ...",
      image:
        "https://storage.googleapis.com/achieve-bucket/95514170-9260-4e24-b982-3dc60f373bd1content.webp",
      imageAlt: "Content Creation icon",
    },
    {
      id: 5,
      title: "Social Media Advertising",
      description:
        "With Social Advertising you make paid advertising on social media such as F...",
      image:
        "https://storage.googleapis.com/achieve-bucket/e4c6bbca-57e9-48d8-b99d-fb9d551c05e6social ad.webp",
      imageAlt: "Social Media Advertising icon",
    },
    {
      id: 6,
      title: "Search Engine Advertising",
      description:
        "In Search Engine Advertising (SEA) heb je de mogelijkheid om betaald reclam...",
      image:
        "https://storage.googleapis.com/achieve-bucket/search-engine-icon.webp",
      imageAlt: "Search Engine Advertising icon",
    },
  ];

  return (
    <div className=" bg-achieve-gray-50 mx-auto px-4 py-8 pb-16 relative">
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
        <div className="flex justify-center items-center flex-col mb-5 gap-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Our services
          </h2>
          <div className="flex gap-x-2">
            <div className="bg-purple-600 h-1.5 w-16 rounded-md"></div>
            <div className="bg-purple-600 h-1.5 w-24 rounded-md"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid z-50 grid-cols-3 gap-6 lg:grid-cols-3 md:grid-cols-1">
          {services.map((service) => (
            <div
              key={service.id}
              className="h-80 flex items-center rounded-xl flex-col gap-y-4 p-7 bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="flex justify-center items-center">
                <img
                  className="w-24 h-24 object-contain"
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h4 className="text-center font-bold mt-3 whitespace-nowrap text-lg">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-center max-w-xs text-gray-600 flex-grow">
                {service.description}
              </p>

              {/* Read More Button */}
              <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
                Read more...
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
