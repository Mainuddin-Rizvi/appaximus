// src/components/Header.js
import React from "react";

const Header = () => (
  <header
    className="h-screen w-full bg-cover bg-center md:h-[75vh] sm:h-[50vh] xs:h-[50vh]"
    style={{
      backgroundImage: `url(${require("../assets/header-background.jpeg")})`,
    }}
  >
    <h1 className="text-white text-center text-5xl pt-40 sm:pt-20 sm:text-3xl">
      Welcome to Our IT Services
    </h1>
  </header>
);

export default Header;
