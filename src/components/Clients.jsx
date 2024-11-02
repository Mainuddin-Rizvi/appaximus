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
    <section className="p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Our Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <Card key={index} heading={client.heading} images={client.images} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
