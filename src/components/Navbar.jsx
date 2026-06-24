import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg md:text-3xl font-bold text-blue-700 max-w-[140px] md:max-w-none">
            Uttaranchal Heart-Care Centre
          </h1>

          <button
            className="md:hidden text-2xl text-blue-700 font-bold transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <ul className="hidden md:flex gap-8 font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          <button className="hidden md:block bg-blue-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-blue-700">
            Book Appointment
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-b-2xl border-t border-gray-100 z-50 md:hidden">
            <a
              href="#home"
              className="block px-6 py-4 border-b hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
            >
              Home
            </a>

            <a
              href="#services"
              className="block px-6 py-4 border-b hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
            >
              Services
            </a>

            <a
              href="#about"
              className="block px-6 py-4 border-b hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
            >
              About
            </a>

            <a
              href="#contact"
              className="block px-6 py-4 border-b hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
