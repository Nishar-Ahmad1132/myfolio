import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import ScrollToTop from "./features/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* ⬇️ FULL HEIGHT FLEX LAYOUT */}
      <div className="min-h-screen flex flex-col bg-[rgb(33,32,32)] text-white">
        <Navbar />

        {/* ⬇️ EXPANDING CONTENT */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
