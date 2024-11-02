// components/NavBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-2xl">APPAXIMUS</div>
      <div
        className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} md:block`}
      >
        <Link
          to="/"
          className="text-white"
          onClick={() => scrollToSection("home")}
        >
          Home
        </Link>
        <Link
          to="/"
          className="text-white"
          onClick={() => scrollToSection("services")}
        >
          Services
        </Link>
        <Link
          to="/"
          className="text-white"
          onClick={() => scrollToSection("technology")}
        >
          Technology
        </Link>
        <Link to="/career" className="text-white">
          Career
        </Link>
        <Link to="/gallery" className="text-white">
          Gallery
        </Link>
        <Link to="/contact" className="text-white">
          Contact
        </Link>
        <Link to="/about" className="text-white">
          About
        </Link>
        <Link to="/teams" className="text-white">
          Teams
        </Link>
      </div>
      <div
        className="md:hidden text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
