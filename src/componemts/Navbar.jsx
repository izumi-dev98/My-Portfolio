import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Progress Bar", id: "progressBar" },
    { name: "My Projects", id: "projects" },
    { name: "Work Experience", id: "experience" },
    { name: "Contact", id: "contact" },
    { name: "09671014148",  },

  ];

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            My Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/50 backdrop-blur-md flex flex-col border-t border-gray-700">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)} // <-- Close menu on click
                className="block py-3 px-4 text-white hover:bg-black/30 hover:text-blue-400 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
