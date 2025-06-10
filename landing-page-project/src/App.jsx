// import { useState } from 'react'
import {services} from "./data";
import { user } from "./data.js";
import "./App.css";
import Header from "./componants/Header/Header.jsx";
import HeroSection from "./componants/HeroSection/HeroSection.jsx";
import About from "./componants/About/About.jsx";
import ServiceCard from "./componants/Services/ServiceCard.jsx";
import User from "./componants/User/User.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <About></About>
      <section className="Services-section" id="services">
        <div className="title">
          <h2>WHAT WE OFFER</h2>
          <p>We're committed to bringing you the best workout experience.</p>
        </div>
        <div className="Services">
          {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
        </div>
      </section>
      <section className="user-section" id="user">
        <div className="title">
          <h2>Before and After</h2>
        </div>
        <div className="users">
      {user.map((userData, index) => (
        <User key={index} {...userData} />
      ))}
      </div>
      </section>
    </div>
  );
}

export default App;
