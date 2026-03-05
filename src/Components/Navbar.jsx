import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-blue-600 text-white shadow-md w-full">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-5 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            className="max-h-12 w-auto object-contain"
            src="Logo.png"
            alt="Logo"
          />
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="font-bold text-base sm:text-lg md:text-2xl lg:text-3xl leading-tight">
            INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
          </h1>
        </div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-semibold text-sm sm:text-base md:text-lg"
        >

          {[
            { path: "/", name: "Home" },
            { path: "/course", name: "Course" },
            { path: "/contact", name: "Contact" },
            { path: "/know-more", name: "Know More" },
            { path: "/about", name: "About" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition duration-300 ${location.pathname === item.path
                ? "text-black"
                : "hover:text-black"
                }`}
            >
              {item.name}
            </Link>
          ))}

        </motion.div>

      </div>
    </nav>
  );
}

export default Navbar;