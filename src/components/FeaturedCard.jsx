import React from "react";

function FeaturedCard({ icon, title, description }) {
  return (
    <div
      className="
        relative group 
        bg-gradient-to-br from-white/60 to-white/40 
        backdrop-blur-lg border border-white/30 
        rounded-2xl p-6 
        shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
        transition-all duration-500 
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] 
        hover:scale-[1.02] hover:-rotate-[1deg]
        overflow-hidden
      "
    >
      {/* Gradient Overlay on Hover */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-br from-pink-400/50 via-transparent to-blue-300/50 
          opacity-50 group-hover:opacity-100 
          transition-opacity duration-500 rounded-2xl
        "
      />

      {/* Icon Box */}
      <div
        className="
          relative w-15 h-15 rounded-xl 
          bg-gradient-to-br from-pink-500 to-blue-500 
          flex items-center justify-center text-white 
          shadow-lg mb-4 
          transform transition-transform duration-500 
          group-hover:-translate-y-1 group-hover:rotate-6
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          relative mb-2 text-xl font-bold 
          text-gray-800 group-hover:text-blue-700 
          transition-colors duration-300
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          relative text-gray-600 text-base font-medium
        "
      >
        {description}
          </p>
           {/* Loading Bar */}
      <div className="mt-2 relative h-1 w-full bg-gray-200/20 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="
            absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 to-blue-500 
            rounded-full 
            w-0 group-hover:w-[6rem]
            transition-[width] duration-700 ease-in-out
          "
        ></div>
      </div>
    </div>
  );
}

export default FeaturedCard;
