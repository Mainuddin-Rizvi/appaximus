// pages/Services.js
import React from "react";

const services = [
  { id: 1, name: "Service 1", image: "https://dummyimage.com/300x200/000/fff" },
  { id: 2, name: "Service 2", image: "https://dummyimage.com/300x200/000/fff" },
  // Add more services as needed
];

function Services() {
  return (
    <div className="services-page p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
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
  );
}

export default Services;
