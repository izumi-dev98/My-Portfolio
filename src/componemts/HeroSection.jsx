import React from "react";
import Me from "../assets/me.jpg"; // adjust path based on your file location

const HeroSection = () => {
  return (
    <section className="relative py-28 px-6 sm:px-8 md:px-0 bg-black/50 backdrop-blur-md" id="home">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-20">

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end md:order-last mb-10 md:mb-0" >
          <img
            src={Me}
            alt="Hero"
            className="rounded-full shadow-2xl w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left" >
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Nay Myo Maung (Izumi)
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
            Laravel Developer experienced in building dynamic, high-performance web applications using PHP, Laravel, and MySQL. Skilled in backend development, API integration, and modern web architecture with a focus on clean, maintainable code and responsive UI.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-3xl text-gray-300">
            <a
              href="https://github.com/izumi-dev98"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/share/1JNH2J246J/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500 transition"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/izu.mi1113?igsh=cXAwOGZqdmk2N3li"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
