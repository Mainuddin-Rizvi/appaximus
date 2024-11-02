import React from "react";
import SpecialCard from "./card/SpecialCard";

const testimonials = [
  {
    coverImage: require("../assets/clients/cloud.webp"),
    logoImage: require("../assets/clients/company.png"),
    location: "San Francisco, CA",
    description:
      "This is a sample paragraph describing the location and services offered. It can span two to three lines.",
    keywords: ["Technology", "Innovation", "Development"],
  },
  {
    coverImage: require("../assets/clients/family.webp"),
    logoImage: require("../assets/clients/company.png"),
    location: "New York, NY",
    description:
      "A sample paragraph that describes the technology and location. It spans two to three lines.",
    keywords: ["Frontend", "Backend", "JavaScript"],
  },
  {
    coverImage: require("../assets/clients/laptop.webp"),
    logoImage: require("../assets/clients/company.png"),
    location: "Los Angeles, CA",
    description:
      "This is a brief description of the services offered and location. It can span a couple of lines.",
    keywords: ["Web Development", "Framework", "Full Stack"],
  },
  {
    coverImage: require("../assets/clients/plane.jpg"),
    logoImage: require("../assets/clients/company.png"),
    location: "Chicago, IL",
    description:
      "A paragraph that provides details about the technology and services. It spans two to three lines.",
    keywords: ["Framework", "API", "Server"],
  },
];

const Testimonials = () => {
  return (
    <div className="px-[10%] bg-gray-100">
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 min-h-screen ">
        {testimonials.map((item, index) => (
          <SpecialCard
            key={index}
            coverImage={item.coverImage}
            logoImage={item.logoImage}
            location={item.location}
            description={item.description}
            keywords={item.keywords}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
