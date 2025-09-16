import React, { useEffect, useState } from "react";
import hero_img from "../assets/Na5.jpeg";
import "./Header.css";
import { toast } from "react-toastify";

const fileUrl = process.env.PUBLIC_URL + "/Nishar_Ahmad_Resume.pdf";

const Header = () => {
  const [text, setText] = useState("");
  const fullText = "MERN Stack and Flutter Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index += 1;
      if (index === fullText.length) {
        setTimeout(() => {
          setText("MERN");
          index = 3;
        }, 3000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const openFileInNewTab = (url) => {
    toast.success(
      "Please fill contact form in contact section, I will send you.",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  return (
    <header className="header">
      <div className="header-cont">
        <div className="header-content">
          <h1>Hi, I'm Nishar Ahmad</h1>
          <div className="header-intro-wrapper">
            <div className="header-intro">{text}</div>
          </div>
          <p className="header-description">
            I craft beautiful, responsive web and mobile applications that bring
            ideas to life.
          </p>
          <div className="header-buttons">
            <button
              className="cta-btn"
              onClick={() => openFileInNewTab(fileUrl)}
            >
              Download Resume
            </button>
          </div>
        </div>
        <div className="header-image">
          <img src={hero_img} alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
