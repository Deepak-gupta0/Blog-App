"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  const blogs = [
    {
      id: "1a2b3c4d",
      name: "Deepak Gupta",
      createdAt: "2025-10-25T09:00:00Z",
      description:
        "Exploring how modern web frameworks like Next.js simplify full-stack development.",
      personImage: "https://randomuser.me/api/portraits/men/32.jpg",
      blogImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: "2b3c4d5e",
      name: "Aisha Sharma",
      createdAt: "2025-10-20T11:30:00Z",
      description:
        "Understanding the importance of clean UI and UX in web design.",
      personImage: "https://randomuser.me/api/portraits/women/45.jpg",
      blogImage:
        "https://images.unsplash.com/photo-1522204501790-03b60a85d8e0",
    },
    {
      id: "3c4d5e6f",
      name: "Ravi Verma",
      createdAt: "2025-10-18T15:15:00Z",
      description:
        "How AI is changing the future of web development and automation.",
      personImage: "https://randomuser.me/api/portraits/men/22.jpg",
      blogImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: "4d5e6f7g",
      name: "Sara Khan",
      createdAt: "2025-10-10T08:45:00Z",
      description:
        "Building responsive layouts with Tailwind CSS and React.",
      personImage: "https://randomuser.me/api/portraits/women/12.jpg",
      blogImage:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      id: "5e6f7g8h",
      name: "Aditya Patel",
      createdAt: "2025-10-05T17:00:00Z",
      description:
        "Mastering MongoDB and Mongoose for scalable backend systems.",
      personImage: "https://randomuser.me/api/portraits/men/19.jpg",
      blogImage:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [blogs.length]);

  return (
    <div className="relative w-full h-56 md:h-screen overflow-hidden bg-black">
      {/* Slides */}
      {blogs.map((blog, index) => (
        <div
          key={blog.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* Black layer to prevent white flicker */}
          <div className="absolute inset-0 bg-black" />

          <Image
            src={blog.blogImage}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            loading="eager"
            quality={90}
            style={{ transition: "opacity 0.5s ease-in-out" }}
          />

          {/* Optional dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute z-30 flex bottom-5 px-4 md:pl-8 space-x-2">
        {blogs.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 md:w-3 md:h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Carousel content */}
      <div className="absolute text-white px-4 z-30 flex md:flex-row flex-col md:justify-between items-left bottom-6 md:bottom-14 w-full md:px-8">
        <div className="py-2 max-w-[60%]">
          <h1 className="text-[12px] md:text-5xl font-bold">
            {blogs[current].description}
          </h1>
          <p className="text-[8px] md:text-2xl text-gray-300 font-semibold">
            An iconic landmark — this post unveils the secrets that make this
            destination a traveler’s paradise.
          </p>
        </div>

        <div className="flex flex-col md:justify-center md:items-center pb-3">
          <div className="flex md:gap-3 gap-1 items-center md:justify-center text-center">
            <div className="md:h-10 relative md:w-10 h-[15px] w-[15px] rounded-full overflow-hidden">
              <Image
                src={blogs[current].personImage}
                alt={blogs[current].name}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-bold text-[8px] md:text-xl">
              {blogs[current].name}
            </p>
          </div>
          <p className="font-semibold text-[8px] md:text-sm">
            {new Date(blogs[current].createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
