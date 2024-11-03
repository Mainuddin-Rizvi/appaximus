import React from "react";
import Card from "./Card";

const Clients = () => {
  const clients = [
    {
      heading: "India",
      images: [
        require("../assets/technology/mongodb.png"),
        require("../assets/technology/mongodb.png"),
        require("../assets/technology/mongodb.png"),
        require("../assets/technology/mongodb.png"),
        require("../assets/technology/mongodb.png"),
        require("../assets/technology/mongodb.png"),
      ],
    },
    {
      heading: "International",
      images: [
        require("../assets/technology/mongodb.png"),
        require("../assets/technology/mongodb.png"),
        require("../assets/technology/mongodb.png"),
        require("../assets/technology/mongodb.png"),
        require("../assets/technology/mongodb.png"),
        require("../assets/technology/mongodb.png"),
      ],
    },
    // Add more clients as needed
  ];

  return (
    <section
      className="relative p-8 bg-center bg-cover"
      style={{
        backgroundImage: `url(${require("../assets/clients/background-clients.jpg")})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-700 to-yellow-900 opacity-70"></div>
      <h2 className="relative text-2xl font-bold text-center mb-8">
        Our Clients
      </h2>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <Card key={index} heading={client.heading} images={client.images} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
