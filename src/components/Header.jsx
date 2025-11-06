import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import hero_img1 from "../assets/profileImage3.jpg";
import "./Header.css";

const fileUrl = process.env.PUBLIC_URL + "/Nishar_m.pdf";

const Header = () => {
  const [text, setText] = useState("");
  const fullText = "MERN Stack & Flutter Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index += 1;
      if (index === fullText.length) {
        setTimeout(() => {
          setText("MERN");
          index = 3;
        }, 2500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const openFileInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Resume opened in new tab!", {
      position: "top-center",
      autoClose: 2500,
    });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I’m <span className="highlight">Nishar Ahmad</span>
          </h1>
          <h2 className="hero-subtitle">{text}</h2>
          <p className="hero-description">
            I build full-stack digital experiences with clean design and
            efficient code. Passionate about bridging UI and logic through
            modern web & mobile technologies.
          </p>
          <button
            className="hero-btn"
            onClick={() => openFileInNewTab(fileUrl)}
          >
            View Resume
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image-container">
          <div className="image-card">
            <img src={hero_img1} alt="Nishar Ahmad" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
