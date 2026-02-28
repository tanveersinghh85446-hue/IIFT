import React from "react";
import { motion } from "framer-motion";
import { CgPlayButtonR } from "react-icons/cg";

export default function Apply() {
  const logos = [
    "DATA ANALYSIS.png",
    "FINANCE.png",
    "DATA SCIENCE.png",
    "DIPLOMA IHRM.png",
    "WEB DEVELOPMENT.png",
    "EATHICAL HACKING.png",
    "DIGITAL MARKETING.png",
    "DIPLOMA IID.png",
  ];

  return (
    <div className="bg-linear-to-b from-white to-blue-50">

      {/* 🔹 Moving Logos Section */}
      <div className="overflow-hidden py-14">
        <motion.div
          className="flex gap-20"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="course logo"
              className="h-40 md:h-48 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col justify-center items-center text-center px-4 py-16">

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Ready to Start Your Tech Journey?
        </h2>

        <p className="text-gray-600 max-w-2xl mb-8 text-lg">
          Join IIFT and build industry-ready skills that top companies are looking for.
        </p>

        <a
          href="https://docs.google.com/forms/d/19Zf-RLRlerLWgnbczZBoAUfuhdVV20xs-WngXYC4rbw/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <CgPlayButtonR size={22} />
            Apply Now
          </button>
        </a>

      </div>

      {/* <section className="bg-blue-500 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-serif font-bold mb-12">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition duration-500">
              <img className="h-35 w-35 bg-gray-200 rounded-full mx-auto mb-4" src="Rampal.jpeg" alt="img" />
              <h3 className="font-semibold text-lg">Rampal Soni</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition duration-500">
              <img className="h-35 w-35 bg-gray-200 rounded-full mx-auto mb-4" src="Manoj Soni.jpeg" alt="img" />
              <h3 className="font-semibold text-lg">Manoj Soni</h3>
              <p className="text-gray-500">Head of Department</p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition duration-500">
              <img className="h-35 w-35 bg-gray-200 rounded-full mx-auto mb-4" src="Minder Devi.jpeg" alt="img" />
              <h3 className="font-semibold text-lg">Minder Devi</h3>
              <p className="text-gray-500">Marketing Head</p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition duration-500">
              <img className="h-35 w-35 bg-gray-200 rounded-full mx-auto mb-4" src="Vinay Soni.jpeg" alt="img" />
              <h3 className="font-semibold text-lg">Vinay Rojha</h3>
              <p className="text-gray-500">Career Counselor</p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition duration-500">
              <img className="h-35 w-35 bg-gray-200 rounded-full mx-auto mb-4" src="Akash Soni.jpeg" alt="img" />
              <h3 className="font-semibold text-lg">Akash Soni</h3>
              <p className="text-gray-500">Teachnical Head</p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition duration-500">
              <img className="h-35 w-35 bg-gray-200 rounded-full mx-auto mb-4" src="Anjali.jpeg" alt="img" />
              <h3 className="font-semibold text-lg">Anjali Singh</h3>
              <p className="text-gray-500">Placement Codinator</p>
            </div>

          </div>

        </div>
      </section> */}
      {/* ================= PROGRAMS SECTION ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-green-600">
          Our Flagship Programs
        </h2>

        <div className="mt-16 grid md:grid-cols-4 gap-8">

          {["Web Development", "App Development", "AI & Robotics", "Cyber Security"].map((program, index) => (
            <div
              key={index}
              className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{program}</h3>
            </div>
          ))}

        </div>

      </section>

      <div className="bg-blue-950 text-sm flex justify-center h-12 items-center mt-4">
        <p className="text-white">
          © 2026 IIFT | All Rights Reserved | Designed by Web Developer
        </p>
      </div>

    </div>
  );
}