// pages/Home.jsx
import React from "react";
import Services from "./Services";
import Technology from "./Technology";
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import Clients from "../components/Clients";

function Home() {
  return (
    <div className="home-page" id="home">
      <Header />
      <div id="services">
        <Services />
      </div>
      <div id="technology">
        <Technology />
      </div>
      <Testimonials />
      <Clients />
    </div>
  );
}

export default Home;
