import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./Contact.css";
import contactImage from "../assets/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name) newErrors.from_name = "Name is required.";
    if (!formData.email_id) newErrors.email_id = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }

    emailjs
      .send(
        "service_4gsf7e5",
        "template_imkj20g",
        formData,
        "aU7ahcaqW3Gg7kx3i"
      )
      .then((response) => {
        toast.success("Message sent successfully! Thanks for contacting us", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFormData({ from_name: "", email_id: "", message: "" });
        setErrors({});
      })
      .catch((error) => {
        toast.error("Error sending message. Please try again later.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1> {/* Centered Heading */}
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImage} alt="Contact Us" />
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
            {errors.from_name && <p className="error">{errors.from_name}</p>}
            <input
              type="email"
              name="email_id"
              placeholder="Email"
              value={formData.email_id}
              onChange={handleChange}
              required
            />
            {errors.email_id && <p className="error">{errors.email_id}</p>}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
