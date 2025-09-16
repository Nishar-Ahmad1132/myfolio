import React from "react";
import "./Education.css";

const educationData = [
  {
    title:
      "INDIAN INSTITUTE OF INFORMATION AND TECHNOLOGY, DESIGN AND MANUFACTURING, KURNOOL",
    details: ["Computer Science and Engineering", "Nov 2022 - Apr 2026"],
  },
  {
    title: "Flutter and Dart - The Complete Guide",
    details: [
      "Mobile App Developer",
      <a
        href="https://www.udemy.com/certificate/UC-89790232-c382-46e6-98fb-3b22b2a4efe6/"
        target="_blank"
        rel="noreferrer"
      >
        Click Here to See Certificate!
      </a>,
    ],
  },
  {
    title: "MERN Stack Developer",
    details: [
      "Full-Stack Web Development",
      "Specializing in MongoDB, Express, React, and Node.js",
    ],
  },
];

const Education = () => {
  return (
    <section className="education">
      <div className="container">
        <h2>Educational Experiences</h2>
        <div className="education-content">
          {educationData.map((item, index) => (
            <div className="education-item" key={index}>
              <h4>{item.title}</h4>
              <ul>
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
