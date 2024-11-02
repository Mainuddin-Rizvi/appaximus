// src/components/Header.js
import React from "react";

const Header = () => (
  <header
    className="h-screen w-full bg-cover bg-center"
    style={{
      backgroundImage: "url('https://dummyimage.com/1600x900/000/fff')",
    }}
  >
    <h1 className="text-white text-center text-5xl pt-40">
      Welcome to Our IT Services
    </h1>
  </header>
);

export default Header;
