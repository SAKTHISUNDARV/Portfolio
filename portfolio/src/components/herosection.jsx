import React from "react";

const HeroSection = () => {
  return (
    <div>
    <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in">
        Crafting Digital Experiences
      </h1>
      <p className="mt-4 text-xl text-gray-400 max-w-2xl animate-fade-in-delay">
        I design and build beautiful, functional, and user-friendly interfaces that leave a lasting impression.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-8 flex space-x-4 animate-fade-in-delay-2">
        <a
          href="#work"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-purple-500 rounded-lg text-purple-500 font-semibold hover:bg-purple-500 hover:text-white transition-colors duration-300"
        >
          Contact Me
        </a>
      </div>

      {/* Subtle Animation (Optional) */}
      <div className="mt-12 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      </div>
  );
};

export default HeroSection;
