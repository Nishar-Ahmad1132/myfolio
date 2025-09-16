import React from "react";
import "./Testimonials.css";
import photo from "../assets/Na3.jpeg"


const testimonialsData = [
  {
    text: "A dedicated developer with a keen eye for detail, consistently delivering high-quality code and creative solutions.",
    name: "Tech Enthusiast",
    photo: photo,
  },
  {
    text: "Their commitment to learning and improving is truly impressive. Always willing to tackle new challenges with enthusiasm.",
    name: "Peer Developer",
    photo: photo, 
  },
  {
    text: "An up-and-coming talent in the tech world, demonstrating excellent problem-solving skills and technical expertise.",
    name: "Industry Observer",
    photo: photo,
  },
  {
    text: "A promising developer with a strong foundation in modern technologies and a drive to succeed in every project.",
    name: "Mentor",
    photo: photo,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <div className="testimonial-photo">
              <img
                src={testimonial.photo}
                alt={`${testimonial.name}'s testimonial`}
              />
            </div>
            <div className="testimonial-text">
              <p>{`"${testimonial.text}"`}</p>
              <h4>{`- ${testimonial.name}`}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;