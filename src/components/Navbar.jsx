import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">
            Uttaranchal Heart-Care Centre
          </h1>

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

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Book Appointment
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
