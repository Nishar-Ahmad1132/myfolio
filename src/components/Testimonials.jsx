// import React from "react";
// import photo from "../assets/Na3.jpeg";

// const testimonialsData = [
//   {
//     text: "A dedicated developer with a keen eye for detail, consistently delivering high-quality code and creative solutions.",
//     name: "Tech Enthusiast",
//     photo,
//   },
//   {
//     text: "Their commitment to learning and improving is truly impressive. Always willing to tackle new challenges with enthusiasm.",
//     name: "Peer Developer",
//     photo,
//   },
//   {
//     text: "An up-and-coming talent in the tech world, demonstrating excellent problem-solving skills and technical expertise.",
//     name: "Industry Observer",
//     photo,
//   },
//   {
//     text: "A promising developer with a strong foundation in modern technologies and a drive to succeed in every project.",
//     name: "Mentor",
//     photo,
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="bg-[#1e1e1e] py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#66fcf1] mb-14">
//           Testimonials
//         </h2>

//         {/* Grid */}
//         <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
//           {testimonialsData.map((testimonial, index) => (
//             <div
//               key={index}
//               className="
//                 relative bg-[#2a2a2a]
//                 rounded-2xl
//                 px-6 pt-16 pb-8
//                 text-center
//                 shadow-lg
//                 transition-transform duration-300
//                 hover:-translate-y-2 hover:shadow-2xl
//               "
//             >
//               {/* Avatar */}
//               <div className="absolute -top-10 left-1/2 -translate-x-1/2">
//                 <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#66fcf1]">
//                   <img
//                     src={testimonial.photo}
//                     alt={testimonial.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Text */}
//               <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
//                 “{testimonial.text}”
//               </p>

//               {/* Name */}
//               <h4 className="text-[#66fcf1] font-medium text-sm">
//                 — {testimonial.name}
//               </h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-[#1e1e1e] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#66fcf1] mb-6">
          Testimonials
        </h2>

        {/* Placeholder Card */}
        <div
          className="
            bg-[#2a2a2a]
            rounded-2xl
            p-8 sm:p-10
            shadow-lg
            text-gray-300
            text-base sm:text-lg
            leading-relaxed
          "
        >
          <p>
            Testimonials will be added as I collaborate with teams, clients, and
            organizations on real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

