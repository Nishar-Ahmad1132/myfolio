import React from "react";
import "./About.css";
import Aside from "./About_aside";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <Aside />
          <div className="about-text-cnt">
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I am a professional web developer with hands-on experience in
                personal projects, specializing in MERN stack and Flutter
                development. I excel at creating modern, dynamic web
                applications and beautiful, responsive mobile apps using the
                latest technologies.
              </p>
            </div>
            <hr className="separator" />
            <div className="about-text">
              <h2>My Development Approach</h2>
              <p>
                I believe in writing clean, maintainable, and scalable code. My
                goal is to create solutions that not only work efficiently but
                are also easy to extend and optimize over time. I am a firm
                advocate of the DRY (Don't Repeat Yourself) principle and love
                implementing innovative ideas to solve complex problems. By
                focusing on user experience and performance, I ensure that my
                web and mobile applications provide seamless interactions and
                quick load times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
