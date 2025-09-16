
import React from "react";
import profilePic from "../assets/Na7.jpeg";
import "./About_aside.css";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aside = () => {
  return (
    <aside className="profile-card">
      <div className="profile-img-section">
        <div className="profile-image">
          <img src={profilePic} alt="Profile" />
        </div>
        <h2 className="profile-name">Nishar Ahmad</h2>
        <div className="profile-role-container">
          <p className="profile-role">Web and App Developer</p>
        </div>
      </div>

      <div className="profile-info">
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} size="lg" color="#17a2b8" />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmadnishar1132@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ahmadnishar1132@gmail.com
          </a>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faPhone} size="lg" color="#28a745" />
          <a href="tel:+917084127062">+91 7084127062</a>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faLinkedin} size="lg" color="#0077b5" />
          <a
            href="https://linkedin.com/in/nishar-ahmad-47b368215"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/nishar-ahmad
          </a>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faGithub} size="lg" color="#333" />
          <a
            href="https://github.com/Nishar-Ahmad1132"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/nishar-ahmad
          </a>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faInstagram} size="lg" color="#e1306c" />
          <a
            href="https://www.instagram.com/nisharahmad.1132/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram.com/nishar_ahmad
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
