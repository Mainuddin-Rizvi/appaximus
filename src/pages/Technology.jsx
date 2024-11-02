// pages/Technology.js
import React from "react";

const technologies = [
  { id: 1, name: "Tech 1", image: "https://dummyimage.com/300x200/000/fff" },
  { id: 2, name: "Tech 2", image: "https://dummyimage.com/300x200/000/fff" },
  // Add more technologies as needed
];

function Technology() {
  return (
    <div className="technology-page p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {technologies.map((tech) => (
        <div
          key={tech.id}
          className="tech-card bg-white shadow-lg rounded-lg p-4"
        >
          <img
            src={tech.image}
            alt={tech.name}
            className="w-full h-32 object-cover rounded-lg"
          />
          <h2 className="text-xl mt-4">{tech.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Technology;
