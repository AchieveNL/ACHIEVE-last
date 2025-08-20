/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  views: number;
  href: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Buru Construction – All-in-one renovation service",
      description:
        "Buru Construction is a renowned renovation company in Rotterdam, specialized in complete home renovations. With a passion for the craft, we transform homes into modern, comfortable living spaces every day. Our expertise lies mainly in bathroom and toilet renovations, but we also handle full home transformations, taking care of every detail. What makes our work unique is the combination of traditional craftsmanship with modern techniques.",
      image:
        "https://res.cloudinary.com/achievenl/image/upload/v1745403735/achieve/lc8kwr8lek8fbyx2v7y1.webp",
      category: "Web-app",
      views: 698,
      href: "/projecten/buru-construction",
    },
    {
      id: 2,
      title: "Horlogewinkel.com - Watches of A-brand quality",
      description:
        "Horlogewinkel.com is the ultimate online destination for watch enthusiasts, offering an extensive range of high-quality brands and models. Whether you're looking for a classic, timeless design or a modern, trendy style, we have something for everyone. We are committed to providing an excellent customer experience, with fast delivery and a service-oriented approach. At Horlogewinkel.com, you can rely on top quality and the best care for your watch purchase.",
      image:
        "https://res.cloudinary.com/achievenl/image/upload/v1745411549/achieve/ymljydjji0dhi0kw8u0q.webp",
      category: "SEA",
      views: 262,
      href: "/projecten/horloge-winkel",
    },
    {
      id: 3,
      title: "Sequoiaclinic - Health, Skin & Body",
      description:
        "At Sequoia Clinic, we started with the desire to create a place where high-quality treatments come together with personalized care and a holistic approach to skincare. Our mission is to help people feel confident, beautiful, and healthy through skin improvement and holistic care. We combine the latest technology and effective treatments to solve skin problems and improve the overall well-being of our clients. Our vision is to be the leading skincare clinic, known for innovation, expertise, and personal attention, so everyone can feel radiant and beautiful, regardless of their skin challenges!",
      image:
        "https://res.cloudinary.com/achievenl/image/upload/v1744365405/achieve/gepjib2lfzwnzfkauogw.webp",
      category: "SEA",
      views: 945,
      href: "/projecten/sequoiaclinic",
    },
    {
      id: 4,
      title: "WinkWing - Personal AI-Powered Home Matchmaker",
      description:
        "WinkWing is a smart platform that simplifies the rental home search. By scanning over 750 rental websites every minute, it delivers real-time alerts directly to your email or WhatsApp. This automated service helps you find your ideal apartment faster, reducing the stress of house-hunting. Whether you're looking for a pet-friendly place or a specific neighborhood, WinkWing makes finding a home easier and quicker.",
      image:
        "https://res.cloudinary.com/achievenl/image/upload/v1745397516/achieve/pjjcpalpio4btjjp9qk4.webp",
      category: "Web-app",
      views: 184,
      href: "/projecten/winkwing",
    },
    {
      id: 5,
      title: "Crypto Architect - Exclusive crypto network",
      description:
        "Crypto Architect is a community focused on achieving long-term success in the crypto market. Since 2022, the community has provided a platform for sharing knowledge, strategic insights, and collaboration. Members gain access to exclusive content, such as market analyses, portfolio updates, and live sessions, and are supported by a network of like-minded individuals. The focus is on sustainable growth and developing strategic skills to stay successful in a rapidly changing market. Crypto Architect is the place for those who want to invest seriously in crypto and grow together with the community.",
      image:
        "https://res.cloudinary.com/achievenl/image/upload/v1745828512/achieve/twwexml6iotdufnhp9kj.webp",
      category: "Web-app",
      views: 593,
      href: "/projecten/crypto-architect",
    },
    {
      id: 6,
      title: "WRPPN - Interior and exterior restyling",
      description:
        "At WRPPN, we help customers bring their dream interiors to life with affordable, custom-made interior wraps. We work closely with them to understand their personal style and needs, offering innovative solutions that meet the highest quality standards. Our experienced team follows the latest trends and is always ready to explore unique ideas for an interior that perfectly suits the customer.",
      image:
        "https://res.cloudinary.com/achievenl/image/upload/v1741173244/achieve/p3oerc3ygd516nhcpihl.webp",
      category: "Brand Book",
      views: 101,
      href: "/projecten/wrppn",
    },
  ];

  return (
    <div className="pt-4 bg-achieve-gray-50">
      <section className="flex flex-col gap-y-12 relative">
        {/* Header */}
        <div
          className="flex justify-center items-center flex-col"
          style={{ marginBottom: "20px", gap: "4px" }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Projecten</h2>
          <div className="flex gap-x-2">
            <div className="bg-purple-600 h-[5px] w-16 rounded-md"></div>
            <div className="bg-purple-600 h-[5px] w-24 rounded-md"></div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a key={project.id} className="group h-full" href={project.href}>
                <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-700 h-full flex flex-col">
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-500">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                        {project.views}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-12">
            <a
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 group"
              href="/projecten"
            >
              View more projects
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
