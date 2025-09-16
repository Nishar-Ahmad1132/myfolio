import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo" onClick={handleHomeClick}>
        Nishar Ahmad
      </Link>

      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-tab" : ""}
            onClick={handleHomeClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active-tab" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active-tab" : ""}
          >
            Projects
          </Link>
        </li>
        {/* <li>
          <Link
            to="/education"
            className={location.pathname === "/education" ? "active-tab" : ""}
          >
            Education
          </Link>
        </li> */}
        {/* <li>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active-tab" : ""}
          >
            Services
          </Link>
        </li> */}
        <li>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active-tab" : ""}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-tab" : ""}
          >
            Contact
          </Link>
        </li>
        {/* <li>
          <Link
            to="/testimonials"
            className={
              location.pathname === "/testimonials" ? "active-tab" : ""
            }
          >
            Testimonials
          </Link>
        </li> */}
      </ul>

      <a
        href="http://34.227.148.51/"
        className="blog-web-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-globe"></i>  Visit Blog
      </a>

      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </div>
  );
};

export default Navbar;
