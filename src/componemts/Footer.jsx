import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Text */}
        <div className="text-center md:text-left text-white mb-4 md:mb-0">
          © {new Date().getFullYear()} Nay Myo Maung (Izumi). All rights reserved.
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/izumi-dev98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/share/1JNH2J246J/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/izu.mi1113?igsh=cXAwOGZqdmk2N3li"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition-colors"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
