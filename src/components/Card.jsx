import React from "react";

const Card = ({ heading, images }) => {
  return (
    <div className="max-w-[396px] max-h-[355px] p-4 bg-transparent">
      <h1 className="w-full text-center bg-blue-500 py-2 mb-4">{heading}</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`image-${idx}`}
            className="w-full object-cover h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
