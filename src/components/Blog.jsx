import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import blog1 from "../assets/mern1.jpg";
import blog2 from "../assets/ui_ux.jpg";
import blog3 from "../assets/appD.jpg";
import blog4 from "../assets/webD.webp";
import blog5 from "../assets/webD1.jpg";

const blogs = [
  {
    title: "Back-End Development",
    description: "Exploring backend development and essential technologies.",
    image: blog4,
    date: "9 Sep, 2024",
    author: "Nishar Ahmad",
    link: "https://ahmadblog.vercel.app/post/diving-into-backend-development-essential-technologies-and-concepts",
  },
  {
    title: "Front-End Development",
    description:
      "Frontend technologies in MERN for building modern web experiences.",
    image: blog2,
    date: "9 Sep, 2024",
    author: "Nishar Ahmad",
    link: "https://ahmadblog.vercel.app/post/-frontend-technology-in-mern-building-modern-web-experiences",
  },
  {
    title: "Flutter Development",
    description: "Building a content-driven mobile app with Flutter.",
    image: blog3,
    date: "9 Sep, 2024",
    author: "Nishar Ahmad",
    link: "https://ahmadblog.vercel.app/post/building-a-content-driven-mobile-app-with-flutter-a-comprehensive-guide",
  },
  {
    title: "MERN Stack",
    description: "Understanding the MERN Stack: A comprehensive guide.",
    image: blog1,
    date: "9 Sep, 2024",
    author: "Nishar Ahmad",
    link: "https://ahmadblog.vercel.app/post/understanding-the-mern-stack-a-comprehensive-guide",
  },
  {
    title: "From Development to Production",
    description: "Building & deploying a full-stack MERN blog platform.",
    image: blog5,
    date: "14 Dec, 2025",
    author: "Nishar Ahmad",
    link: "https://ahmadblog.vercel.app/post/building--deploying-a-full-stack-mern-blog-platform-from-development-to-production",
  },
];

const Blog = () => {
  return (
    <section className="bg-[#0d0d0d] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#66fcf1] mb-14">
          Blogs
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides
          loop
          speed={700}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000, // ✅ 10 seconds
            disableOnInteraction: false, // keep autoplay after manual swipe
            pauseOnMouseEnter: true, // pause on hover (desktop)
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  group
                  bg-[#1e1e1e]
                  rounded-2xl
                  overflow-hidden
                  shadow-lg
                  transition-all
                  duration-500
                  hover:scale-[1.03]
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="
                      w-full h-[220px]
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {blog.description}
                  </p>

                  <div className="text-xs text-gray-500 mb-5 flex justify-between">
                    <span>{blog.date}</span>
                    <span>{blog.author}</span>
                  </div>

                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-block
                      px-5 py-2
                      rounded-full
                      border border-[#66fcf1]
                      text-[#66fcf1]
                      text-sm font-medium
                      hover:bg-[#66fcf1]
                      hover:text-[#141414]
                      transition-all
                    "
                  >
                    Read More
                  </a>
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
