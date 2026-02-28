import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-auto"
            src="LOGO2.png"
            alt="Logo"
          />
          <h1 className="hidden lg:block font-semibold text-lg">
            INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY

          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-semibold text-lg">
          <Link className="hover:text-black transition" to="/">Home</Link>
          <Link className="hover:text-black transition" to="/course">Course</Link>
          <Link className="hover:text-black transition" to="/contact">Contact</Link>
          <Link className="hover:text-black transition" to="/know-more">Know More</Link>
          <Link className="hover:text-black transition" to="/about">About</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-3xl cursor-pointer">
          {isOpen ? (
            <HiX onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 font-semibold text-lg bg-blue-700">
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