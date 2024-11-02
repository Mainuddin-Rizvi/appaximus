// pages/Technology.js
import React from "react";

const technologies = [
  { id: 1, name: "React", image: require("../assets/technology/react.png") },
  { id: 2, name: "Vue", image: require("../assets/technology/vue.jpeg") },
  {
    id: 3,
    name: "Angular",
    image: require("../assets/technology/angular.png"),
  },
  { id: 4, name: "Node.js", image: require("../assets/technology/node.jpeg") },
  {
    id: 5,
    name: "Express",
    image: require("../assets/technology/express.webp"),
  },
  { id: 6, name: "Django", image: require("../assets/technology/django.png") },
  { id: 7, name: "Flask", image: require("../assets/technology/flask.jpg") },
  {
    id: 8,
    name: "Ruby on Rails",
    image: require("../assets/technology/rails.jpeg"),
  },
  { id: 9, name: "Spring", image: require("../assets/technology/spring.jpeg") },
  {
    id: 10,
    name: "TensorFlow",
    image: require("../assets/technology/tensorflow.png"),
  },
  {
    id: 11,
    name: "PyTorch",
    image: require("../assets/technology/pytorch.png"),
  },
  { id: 12, name: "Pandas", image: require("../assets/technology/pandas.png") },
  { id: 13, name: "NumPy", image: require("../assets/technology/numpy.png") },
  {
    id: 14,
    name: "Scikit-Learn",
    image: require("../assets/technology/scikit.jpeg"),
  },
  { id: 15, name: "Keras", image: require("../assets/technology/keras.png") },
  {
    id: 16,
    name: "GraphQL",
    image: require("../assets/technology/graphql.png"),
  },
  { id: 17, name: "REST", image: require("../assets/technology/rest.jpeg") },
  {
    id: 18,
    name: "PostgreSQL",
    image: require("../assets/technology/postgres.png"),
  },
  {
    id: 19,
    name: "MongoDB",
    image: require("../assets/technology/mongodb.png"),
  },
  { id: 20, name: "Redis", image: require("../assets/technology/redis.png") },
];

function Technology() {
  return (
    <div className="services-page p-4">
      <h1 className="text-center text-3xl font-bold mb-4">
        Our Tools & Technology
      </h1>
      <div className="technology-page p-4 grid grid-cols-1 md:grid-cols-8 gap-4 mt-8">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="tech-card bg-white shadow-lg rounded-lg p-4"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-full h-32 object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technology;
