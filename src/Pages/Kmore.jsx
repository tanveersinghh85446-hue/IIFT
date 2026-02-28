import React from "react";

export default function Kmore() {
  return (
    <div className="bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-r from-blue-700 via-indigo-700 to-blue-900 text-white py-24 px-6 text-center">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Shaping The Future With{" "}
          <span className="text-yellow-300 font-serif">
            IIFT
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
          International Institute of Futuristic Technology is committed to delivering
          industry-ready skills, innovation-driven learning, and career-focused programs.
        </p>

      </section>


      {/* ================= VISION & MISSION ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">
          Our Core Foundation
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-green-600">
            <h3 className="text-3xl font-bold mb-6 text-green-600">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become a globally recognized institute empowering students with
              next-generation technical expertise and leadership qualities.
            </p>
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-600">
            <h3 className="text-3xl font-bold mb-6 text-blue-600">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To provide practical, industry-aligned training that prepares students
              for real-world challenges and successful professional careers.
            </p>
          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-linear-to-r from-indigo-50 to-blue-100">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <div>
            <h2 className="text-4xl font-bold text-blue-700">
              Why Choose Our Institute?
              <span className="text-yellow-300 text-6xl font-serif">
                IIFT
              </span>
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-10">

            <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Expert Faculty
              </h3>
              <p className="text-gray-600">
                Learn from certified industry professionals with real-world experience.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                Modern Infrastructure
              </h3>
              <p className="text-gray-600">
                Advanced labs, smart classrooms, and latest technology tools.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">
                Career Support
              </h3>
              <p className="text-gray-600">
                Dedicated placement cell guiding students toward top companies.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="bg-blue-500 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-serif font-bold mb-12">Meet Our <span className="text-white text-5xl font-serif">
            IIFT
          </span> Team</h2>

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

            {/* <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition duration-500">
              <img className="h-35 w-35 bg-gray-200 rounded-full mx-auto mb-4" src="Minder Devi.jpeg" alt="img" />
              <h3 className="font-semibold text-lg">Minder Devi</h3>
              <p className="text-gray-500">Marketing Head</p>
            </div> */}

            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition duration-500">
              <img className="h-35 w-35 bg-gray-200 rounded-full mx-auto mb-4" src="Vinay Soni.jpeg" alt="img" />
              <h3 className="font-semibold text-lg">Vinay Rojha</h3>
              <p className="text-gray-500"> Marketing Head & Managing Director</p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition duration-500">
              <img className="h-35 w-35 bg-gray-200 rounded-full mx-auto mb-4" src="Akash Soni.jpeg" alt="img" />
              <h3 className="font-semibold text-lg">Akash Soni</h3>
              <p className="text-gray-500">Teachnical Head</p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition duration-500">
              <img className="h-35 w-35 bg-gray-200 rounded-full mx-auto mb-4" src="Anjali.jpeg" alt="img" />
              <h3 className="font-semibold text-lg">Anjali Singh</h3>
              <p className="text-gray-500">Career & Placement Codinator</p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CALL TO ACTION ================= */}
      <section className="py-28 bg-linear-to-r from-blue-800 to-indigo-900 text-center text-white px-6">

        <h2 className="text-4xl md:text-5xl font-bold">
          Start Your Future Today
        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
          Take the first step toward a successful career in technology with
          International Institute of Futurisitc Technology.
        </p>

      </section>


      {/* ================= FOOTER BAR ================= */}
      <div className="bg-blue-950 text-sm flex justify-center h-12 items-center mt-4">
        <p className="text-white">
          © 2026 IIFT | All Rights Reserved | Designed by Web Developer
        </p>
      </div>

    </div>
  );
}