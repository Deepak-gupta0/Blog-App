"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sandMountain from "@/public/sand-mountain.jpg";
import virtualHuman from "@/public/virtual-human.jpg";

export default function Carousel() {
  const images = [sandMountain,sandMountain,sandMountain,sandMountain,];
  const [current, setCurrent] = useState(0);
  console.log(sandMountain)

  // Auto-slide every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval); // cleanup on unmount
  // }, [images.length]);

  return (
    <div className="relative w-full h-56 md:h-screen  overflow-hidden ">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute z-30 flex bottom-5 px-4 md:pl-8 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 md:w-3 md:h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* crousel content */}
        <div className="absolute text-white px-4 z-30 flex md:flex-row flex-col  md:justify-between items-left  bottom-6 md:bottom-14 w-full  md:px-8">
          <div className="py-2  max-w-2/3 md:max-w-1/2 ">
          <h1 className="text-[12px] md:text-5xl font-bold">Exploring the Wonders of Hiking </h1>
          <p className="text-[8px] md:text-2xl text-gray-300 font-semibold">An iconic landmark this post unveils the secrets that this destination a travers paradise make your day beautiful.</p>
          </div>

          <div className=" flex flex-col md:justify-center md:items-center pb-3">
            <div className="flex md:gap-3 gap-1 items-center md:justify-center text-center">
              <div className="md:h-10 relative md:w-10 h-[15px] w-[15px] rounded-full overflow-hidden ">
                <Image src={virtualHuman} className="object-cover" alt="Landing Img" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 160px"  loading="eager"/>
              </div>
              <p className="font-bold text-[8px] md:text-xl ">Deepak Gupta</p>
            </div>
            <p className="font-semibold text-[8px] md:text-sm">24 Jan 2024</p>
          </div>
        </div>

    </div>
  );
}
