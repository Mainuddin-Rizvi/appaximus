// components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Client 1",
    message: "Great service!",
    image: "https://dummyimage.com/50x50/000/fff",
  },
  {
    id: 2,
    name: "Client 2",
    message: "Highly recommend!",
    image: "https://dummyimage.com/50x50/000/fff",
  },
  {
    id: 3,
    name: "Client 3",
    message: "Excellent support!",
    image: "https://dummyimage.com/50x50/000/fff",
  },
  {
    id: 4,
    name: "Client 4",
    message: "Very satisfied!",
    image: "https://dummyimage.com/50x50/000/fff",
  },
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <div className="testimonials-section p-4">
      <h1 className="text-3xl mb-8 text-center">Our Clients Speak</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-xl mb-2">{testimonial.message}</p>
              <p className="text-gray-500">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
