/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import proj1 from "../assets/webD1.jpg";
import proj2 from "../assets/webD2.jpg";
import proj4 from "../assets/appD.jpg";
import lockboot from "../assets/lockboot.png";
import ai_career from "../assets/ai_career.png";

const projects = [
  {
    name: "AI Career Matcher",
    image: ai_career,
    description: "AI Career Matcher– AI/ML Job Recommendation System.",
    category: "Web Development",
    date: "10 Sep, 2025",
    creator: "Nishar Ahmad",
    link: "https://github.com/Nishar-Ahmad1132/ai_career_matcher",
  },
  {
    name: "Portfolio Website",
    image: proj1,
    description: "Built a portfolio website to showcase projects and blogs.",
    category: "Web Development",
    date: "05 March, 2024",
    creator: "Nishar Ahmad",
    link: "https://nisharahmad.vercel.app/",
  },
  {
    name: "Ahmad's Blog",
    image: proj2,
    description: "Developed a full-featured blog website using the MERN stack.",
    category: "Web Development",
    date: "08 June, 2024",
    creator: "Nishar Ahmad",
    link: "https://ahmadblog.vercel.app/",
  },
  {
    name: "Chatbot App",
    image: proj4,
    description: "Flutter-based chatbot app using the OpenAI API.",
    category: "App",
    date: "29 May, 2024",
    creator: "Nishar Ahmad",
    link: "https://github.com/Nishar-Ahmad1132/chatbot",
  },
  {
    name: "Lockboot",
    image: lockboot,
    description: "An innovative way to invest in digital media.",
    category: "App",
    date: "13 May, 2024",
    creator: "Nishar Ahmad",
    link: "https://github.com/Nishar-Ahmad1132/lockboot",
  },
  {
    name: "Expense Tracker",
    image: proj4,
    description: "Track daily expenses with a clean UI/UX experience.",
    category: "App",
    date: "10 July, 2024",
    creator: "Nishar Ahmad",
    link: "https://github.com/Nishar-Ahmad1132/expenses_tracker",
  },
];

const tabs = ["Latest Projects", "Apps Projects", "Web Projects"];

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("Latest Projects");

  const filteredProjects = projects.filter((project) => {
    if (selectedTab === "Latest Projects") return true;
    if (selectedTab === "Apps Projects") return project.category === "App";
    if (selectedTab === "Web Projects")
      return project.category === "Web Development";
    return true;
  });

  return (
    <section className="bg-[#1e1e1e] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#66fcf1] mb-10">
          My Projects
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                ${
                  selectedTab === tab
                    ? "bg-[#66fcf1] text-[#1e1e2e]"
                    : "text-white hover:text-[#66fcf1]"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-[#2a2a3c]"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Category badge */}
              <span className="absolute top-4 left-4 bg-[#66fcf1] text-[#1e1e2e] text-xs px-3 py-1 rounded-full">
                {project.category}
              </span>

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                flex items-center justify-center"
              >
                <div className="text-center px-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[#66fcf1] hover:scale-110 transition-transform"
                    >
                      {project.link.includes("github.com") ? (
                        <>
                          <FaGithub size={26} />
                          <span className="text-sm">Source Code</span>
                        </>
                      ) : (
                        <>
                          <FaExternalLinkAlt size={22} />
                          <span className="text-sm">Live Demo</span>
                        </>
                      )}
                    </a>
                  )}

                  <p className="mt-4 text-xs text-gray-400">
                    Created by {project.creator}
                  </p>
                </div>
              </div>

              {/* Name footer (visible without hover) */}
              <div className="p-4 text-center">
                <h4 className="text-sm font-medium text-white">
                  {project.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
