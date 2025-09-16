import React from "react";
import "./Services.css";
import webDevIcon from "../assets/webD.webp";
import mobileAppIcon from "../assets/appD.avif";

const services = [
  {
    title: "Web Development",
    description:
      "Build responsive and modern websites using the latest technologies.",
    icon: webDevIcon,
  },
  {
    title: "Android App Development",
    description:
      "Create high-performance mobile apps for iOS and Android platforms.",
    icon: mobileAppIcon,
  },
  {
    title: "iOS App Development",
    description:
      "Create high-performance mobile apps for iOS and Android platforms.",
    icon: mobileAppIcon,
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <img
                src={service.icon}
                alt={service.title}
                className="service-image"
              />
              <div className="service-overlay">
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
