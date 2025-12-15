import React from "react";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Designing and building scalable web applications using React, Node.js, Express, and MongoDB with clean architecture and RESTful APIs.",
  },
  {
    title: "Backend & API Development",
    description:
      "Developing secure and efficient backend systems, authentication flows, database models, and performance-optimized APIs.",
  },
  {
    title: "Mobile App Development (Flutter)",
    description:
      "Building cross-platform mobile applications with Flutter, Firebase, and modern UI patterns for Android and iOS.",
  },
  {
    title: "Problem Solving & DSA",
    description:
      "Strong foundation in data structures and algorithms with consistent practice and competitive programming experience.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#141414] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#66fcf1] mb-12">
          What I Work On
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-[#1e1e1e]
                rounded-2xl
                p-6 sm:p-8
                shadow-lg
                transition-transform duration-300
                hover:-translate-y-1
              "
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
