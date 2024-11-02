// pages/Gallery.js
import React from "react";

const images = [
  "https://dummyimage.com/600x400/000/fff",
  "https://dummyimage.com/600x400/000/fff",
  // Add more images as needed
];

function Gallery() {
  return (
    <div className="gallery-page p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index + 1}`}
          className="w-full h-48 object-cover rounded-lg"
        />
      ))}
    </div>
  );
}

export default Gallery;
