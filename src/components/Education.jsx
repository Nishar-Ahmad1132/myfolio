import React from "react";

const educationData = [
  {
    title:
      "Indian Institute of Information Technology, Design and Manufacturing (IIITDM), Kurnool",
    details: [
      "B.Tech in Computer Science and Engineering",
      "November 2022 – June 2026",
    ],
  },
  {
    title: "Intermediate (Class XII) – Science Stream",
    details: [
      "Uttar Pradesh Board of High School & Intermediate Education",
      "Physics, Chemistry, Mathematics (PCM)",
      "2018 – 2020",
    ],
  },
  {
    title: "High School (Class X)",
    details: [
      "Uttar Pradesh Board of High School & Intermediate Education",
      "2016 – 2018",
    ],
  },
];

const Education = () => {
  return (
    <section className="bg-[#141414] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#66fcf1] mb-14">
          Education & Certifications
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-[#66fcf1]/30 pl-6 space-y-12">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#1e1e1e] rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[38px] top-8 w-4 h-4 rounded-full bg-[#66fcf1]" />

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Details */}
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {item.details.map((detail, i) => (
                  <li key={i} className="leading-relaxed">
                    {detail}
                  </li>
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
