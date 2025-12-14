import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import heroImg from "../assets/profileImage3.jpg";

const fileUrl = process.env.PUBLIC_URL + "/Nishar_m.pdf";

const Header = () => {
  const roles = [
    "MERN Stack Developer",
    "Flutter Developer",
    "Full Stack Engineer",
  ];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const interval = setInterval(() => {
      setText(roles[roleIndex].slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === roles[roleIndex].length) {
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setText("");
        }, 1800);
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [roleIndex]);

  const openResume = () => {
    window.open(fileUrl, "_blank", "noopener,noreferrer");
    toast.success("Resume opened!", { autoClose: 2000 });
  };

  return (
    <section
      className="
    min-h-screen
    bg-gradient-to-br from-[#0b0c10] via-[#121418] to-[#0b0c10]
    flex items-center
    px-6
    pt-28 sm:pt-32 lg:pt-0
  "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Nishar Ahmad
            </span>
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl font-medium text-emerald-300 min-h-[2.2rem]">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build scalable full-stack web and mobile applications with clean
            UI, strong backend logic, and real-world performance in mind.
          </p>

          <button
            onClick={openResume}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold
            bg-gradient-to-r from-cyan-400 to-emerald-400 text-black
            hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/20"
          >
            View Resume
          </button>
        </div>

  
        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end lg:pr-20">
          <div
            className="
      relative
      w-[280px] sm:w-[320px]
      aspect-[4/5]
      rounded-2xl
      overflow-hidden
      bg-black/20
      backdrop-blur-md
      border border-white/15
      shadow-2xl
      lg:-translate-x-10
    "
          >
            <img
              src={heroImg}
              alt="Nishar Ahmad"
              className="
        w-full h-full
        object-cover
        object-top
        contrast-110
        brightness-105
      "
            />

            {/* Glow / outline */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-emerald-400/40 shadow-[0_0_40px_rgba(16,185,129,0.25)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
