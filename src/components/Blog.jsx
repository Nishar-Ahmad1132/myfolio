import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Blog.css";
import blog1 from "../assets/mern1.jpg";
import blog2 from "../assets/ui_ux.jpg";
import blog3 from "../assets/appD.jpg";
import blog4 from "../assets/webD.webp";

const blogs = [
  {
    title: "Back-End Development",
    description:
      "Exploring Frontend Development and Its Essential Technologies.",
    image: blog4,
    date: "9 Sep, 2024",
    category: "Software Development",
    author: "Nishar Ahmad",
    link: "http://34.227.148.51/post/diving-into-backend-development-essential-technologies-and-concepts",
  },
  {
    title: "Front-End Development",
    description:
      "Elevate your coding game with our 30-day program. Daily challenges and exercises to boost your skills fast!",
    image: blog2,
    date: "9 Sep, 2024",
    category: "Software Development",
    author: "Nishar Ahmad",
    link: "http://34.227.148.51/post/exploring-frontend-development-and-its-essential-technologies",
  },

  {
    title: "Flutter Development",
    description:
      "Building a Content-Driven Mobile App with Flutter: A Comprehensive Guide.",
    image: blog3,
    date: "9 Sep, 2024",
    category: "Flutter Development",
    author: "Nishar Ahmad",
    link: "http://34.227.148.51/post/building-a-content-driven-mobile-app-with-flutter-a-comprehensive-guide",
  },
  {
    title: "MERN STACK",
    description: "Understanding the MERN Stack: A Comprehensive Guide.",
    image: blog1,
    date: "9 Sep, 2024",
    category: "Software Development",
    author: "Nishar Ahmad",
    link: "http://34.227.148.51/post/understanding-the-mern-stack-a-comprehensive-guide",
  },
];


const Blog = () => {

  const handleButtonClick = (link) => {
    window.location.href = link;
  };

  return (
    <section className="blog">
      <div className="container">
        <h2>Blogs</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => {
            const allSlides = document.querySelectorAll(".swiper-slide");
            allSlides.forEach((slide) => {
              slide.classList.remove("swiper-slide-active-scale");
            });
            const activeSlide = swiper.slides[swiper.activeIndex];
            if (activeSlide)
              activeSlide.classList.add("swiper-slide-active-scale");
          }}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="blog-item">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-details">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <div className="blog-meta">
                    <p>
                      Published {blog.date}
                    </p>
                    <p>By {blog.author}</p>
                  </div>
                  <button
                    className="blog-btn"
                    onClick={() => handleButtonClick(blog.link)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
