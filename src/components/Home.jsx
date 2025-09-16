// src/components/Home.js
import React from "react";
import Header from "./Header";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
// import Pricing from "./Pricing";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Services />
      {/* <Pricing /> */}
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
