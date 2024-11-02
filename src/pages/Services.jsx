import React from "react";

const services = [
  { id: 1, name: "DevOps", image: require("../assets/services/devops.jpg") },
  {
    id: 2,
    name: "Data Engineering",
    image: require("../assets/services/data-engineering.jpeg"),
  },
  {
    id: 3,
    name: "Enterprise Resource Planning",
    image: require("../assets/services/erp.jpeg"),
  },
  {
    id: 4,
    name: "Cloud Optimization",
    image: require("../assets/services/cloud.png"),
  },
  {
    id: 5,
    name: "Digital Marketing",
    image: require("../assets/services/digital-marketing.jpg"),
  },
  {
    id: 6,
    name: "Agritech",
    image: require("../assets/services/agritech.jpeg"),
  },
  {
    id: 7,
    name: "Data Analytics",
    image: require("../assets/services/data-analytics.jpeg"),
  },
];

function Services() {
  return (
    <div className="services-page p-4">
      <h1 className="text-center text-3xl font-bold mb-4">
        Our Digital Transformation Services
      </h1>
      <p className="text-center mx-auto w-[65%]">
        APPAXIMUS is a digital technology firm providing digital transformation
        and product engineering services to ISVs, Consumer Internet, and large
        enterprises across the globe. We design & build digital platforms and
        products with Cloud and Data at the focal point.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card bg-white shadow-lg rounded-lg p-4"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-32 object-cover rounded-lg"
            />
            <h2 className="text-xl mt-4">{service.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
