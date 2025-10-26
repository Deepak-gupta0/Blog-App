import React from 'react';

export default function TravelCard({title, desc, blogImg}) {
  return (
    <div className="flex items-center justify-center p-3 sm:p-4">
      <div
        className="
          w-full max-w-sm sm:max-w-md md:max-w-[30vw]
          bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl
          transition-shadow duration-300
        "
      >
        {/* 🏞️ Image Section */}
        <div className="relative">
          <img
            src={blogImg}
            alt="Mountain landscape"
            className="w-full aspect-[4/3] object-cover"
          />
          {/* Destination Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-gray-800/70 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
              Destination
            </span>
          </div>
        </div>

        {/* 📄 Content */}
        <div className="p-4 sm:p-5 md:p-6">
          {/* Date + Read Time */}
          <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
            <span>30 Jan 2024</span>
            <span className="mx-2">•</span>
            <span>10 mins read</span>
          </div>

          {/* Title */}
          <h2
            className="
              text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2
              hover:text-gray-700 transition-colors
            "
          >
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
           {desc}
          </p>

        </div>
      </div>
    </div>
  );
}
