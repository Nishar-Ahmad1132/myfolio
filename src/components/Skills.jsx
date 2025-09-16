import React from "react";
import "./Skills.css";
import FlutterIcon from "../assets/flutter.svg";
import FirebaseIcon from "../assets/firebase.svg";
import MongoDBIcon from "../assets/mongodb.svg";
import ExpressIcon from "../assets/expressjs.svg";
import SQLIcon from "../assets/sql.svg";
import NodeJSIcon from "../assets/nodejs.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import dart from "../assets/dart.svg";


const Skills = () => {
  const skills = [
    { name: "Flutter", icon: FlutterIcon },
    { name: "Dart", icon: dart },
    { name: "Firebase", icon: FirebaseIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "Express", icon: ExpressIcon },
    { name: "React", icon: react },
    { name: "Node.js", icon: NodeJSIcon },
    { name: "SQL", icon: SQLIcon },
    { name: "JavaScript", icon: javascript },

  ];

  return (
    <section className="skills">
      <div className="skill-container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon-image"
              />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
