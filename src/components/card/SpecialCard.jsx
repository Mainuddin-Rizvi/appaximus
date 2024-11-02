import React from "react";

const SpecialCard = ({
  coverImage,
  logoImage,
  location,
  description,
  keywords,
}) => {
  return (
    <div className="max-w-[310px] max-h-[390px] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-[140px] w-full">
        <img
          src={coverImage}
          alt="cover"
          className="w-full h-full object-cover"
        />
        <img
          src={logoImage}
          alt="logo"
          className="absolute left-2 -mt-7 w-[35%] h-[60px] object-cover bg-white"
        />
      </div>
      <div className="pt-12 p-4">
        <h2 className="text-xl font-bold mb-2">{location}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
