import React from "react";
import "./OrbitingCircles.css";
import SQLIcon from "../assets/sql.svg";
import NodeJSIcon from "../assets/nodejs.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import dart from "../assets/dart.svg";
import FlutterIcon from "../assets/flutter.svg";
import FirebaseIcon from "../assets/firebase.svg";
import MongoDBIcon from "../assets/mongodb.svg";
import ExpressIcon from "../assets/expressjs.svg";

const SkillsOrbit = () => {
  return (
    <div className="skills-orbit">
      <div className="orbit orbit1">
        <img src={SQLIcon} alt="Skill 1" />
      </div>
      <div className="orbit orbit2">
        <img src={NodeJSIcon} alt="Skill 2" />
      </div>
      <div className="orbit orbit3">
        <img src={javascript} alt="Skill 3" />
      </div>
      <div className="orbit orbit4">
        <img src={react} alt="Skill 4" />
      </div>
      <div className="orbit orbit5">
        <img src={dart} alt="Skill 5" />
      </div>
      <div className="orbit orbit6">
        <img src={FlutterIcon} alt="Skill 6" />
      </div>
      <div className="orbit orbit7">
        <img src={FirebaseIcon} alt="Skill 7" />
      </div>
      <div className="orbit orbit8">
        <img src={MongoDBIcon} alt="Skill 8" />
      </div>
      <div className="orbit orbit9">
        <img src={ExpressIcon} alt="Skill 9" />
      </div>
    </div>
  );
};

export default SkillsOrbit;
