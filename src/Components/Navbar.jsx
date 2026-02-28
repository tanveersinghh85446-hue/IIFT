import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex flex-col lg:flex-row justify-between items-center px-4 lg:px-8 py-4">

      {/* Logo */}
      <div className="flex justify-center items-center">
        <img className="h-20 md:h-20 lg:h-30 w-auto" src="LOGO2.png" alt="Logo" />
      </div>

      {/* Title */}
      <div className="font-serif text-lg md:text-3xl lg:text-4xl">
        INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mt-3 lg:mt-0">
        <Link className="font-semibold text-base md:text-lg lg:text-2xl pb-1 border-b-2 border-transparent hover:border-gray-800 hover:text-black transition duration-300" to="/">Home</Link>

        <Link className="font-semibold text-base md:text-lg lg:text-2xl pb-1 border-b-2 border-transparent hover:border-gray-800 hover:text-black transition duration-300" to="/course">Course</Link>

        <Link className="font-semibold text-base md:text-lg lg:text-2xl pb-1 border-b-2 border-transparent hover:border-gray-800 hover:text-black transition duration-300" to="/contact">Contact</Link>

        <Link className="font-semibold text-base md:text-lg lg:text-2xl pb-1 border-b-2 border-transparent hover:border-gray-800 hover:text-black transition duration-300" to="/know-more">Know More</Link>

        <Link className="font-semibold text-base md:text-lg lg:text-2xl pb-1 border-b-2 border-transparent hover:border-gray-800 hover:text-black transition duration-300" to="/about">About</Link>

      </div>

    </nav>
  );
}

export default Navbar;