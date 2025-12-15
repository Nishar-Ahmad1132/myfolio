import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name) newErrors.from_name = "Name is required";
    if (!formData.email_id) newErrors.email_id = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
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
        "service_s5ewgtq",
        "template_w1cco3h",
        formData,
        "tkb-ZaIT3YoVty2pr"
      )
      .then(() => {
        emailjs.send(
          "service_s5ewgtq",
          "template_vm8jm7n",
          formData,
          "tkb-ZaIT3YoVty2pr"
        );

        toast.success("Message sent successfully. I’ll get back to you soon!", {
          position: "top-center",
          autoClose: 4000,
        });

        setFormData({ from_name: "", email_id: "", message: "" });
        setErrors({});
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again later.", {
          position: "top-center",
        });
      });
  };

  return (
    <section className="bg-[#1e1e1e] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#66fcf1] mb-6">
          Let’s Connect
        </h2>

        {/* Quote */}
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14 text-sm sm:text-base">
          Have an idea, opportunity, or just want to talk tech? I’m always open
          to meaningful conversations and collaborations.
        </p>

        {/* Card */}
        <div
          className="
            max-w-3xl mx-auto
            bg-[#141414]
            rounded-3xl
            p-8 sm:p-12
            shadow-xl
            transition-all
            duration-500
            hover:shadow-2xl
          "
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#1e1e1e]
                  text-white
                  px-5 py-3
                  rounded-xl
                  outline-none
                  border border-transparent
                  focus:border-[#66fcf1]
                  transition-all
                "
              />
              {errors.from_name && (
                <p className="text-red-400 text-xs mt-1">{errors.from_name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email_id"
                placeholder="Your Email"
                value={formData.email_id}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#1e1e1e]
                  text-white
                  px-5 py-3
                  rounded-xl
                  outline-none
                  border border-transparent
                  focus:border-[#66fcf1]
                  transition-all
                "
              />
              {errors.email_id && (
                <p className="text-red-400 text-xs mt-1">{errors.email_id}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#1e1e1e]
                  text-white
                  px-5 py-3
                  rounded-xl
                  outline-none
                  border border-transparent
                  focus:border-[#66fcf1]
                  transition-all
                  resize-none
                "
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                mt-4
                bg-[#66fcf1]
                text-[#0b0c10]
                py-3
                rounded-full
                font-semibold
                transition-all
                duration-300
                hover:scale-105 hover:bg-[#45a29e]
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
