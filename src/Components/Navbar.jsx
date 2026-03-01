import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md w-full">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">

        {/* Left Logo */}
        <div className="flex items-center gap-3">
          <img
            className="h-16 sm:h-20 md:h-24 w-auto"
            src="LOGO2.png"
            alt="Logo"
          />
        </div>
        {/* Center Heading */}
        <div className="flex-1 text-center">
          <h1 className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-tight">
            INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-semibold text-xl">
          <Link className="hover:text-black transition" to="/">Home</Link>
          <Link className="hover:text-black transition" to="/course">Course</Link>
          <Link className="hover:text-black transition" to="/contact">Contact</Link>
          <Link className="hover:text-black transition" to="/know-more">Know More</Link>
          <Link className="hover:text-black transition" to="/about">About</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-4xl cursor-pointer ml-2">
          {isOpen ? (
            <HiX onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-end pr-6 gap-2 pb-4 font-semibold text-base bg-blue-700">
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/course">Course</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link>
          <Link onClick={() => setIsOpen(false)} to="/know-more">Know More</Link>
          <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;