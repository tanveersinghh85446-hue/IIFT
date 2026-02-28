import { FaShippingFast, FaLeaf, FaLock } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
const About = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">

      {/* Header */}
      <header className="py-8 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          International Institute of Futuristic Technology (IIFT)
        </h1>
        <p className="mt-2 text-base md:text-lg">
          Shaping minds for tomorrow's technology
        </p>
      </header>

      {/* Mission & Vision */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <div className="p-6 bg-blue-500 text-white rounded-lg shadow text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Mission</h2>
            <p className="font-semibold text-base md:text-lg">
              To nurture innovative minds and prepare students for future technologies.
            </p>
          </div>

          <div className="p-6 bg-blue-500 text-white rounded-lg shadow text-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Vision</h2>
            <p className="font-semibold text-base md:text-lg">
              To be a leading hub for cutting-edge research and futuristic education.
            </p>
          </div>

        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-blue-500 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          About <span className="text-white font-serif">(IIFT)</span>
        </h2>
        <p className="font-medium text-base md:text-xl max-w-4xl mx-auto">
          International Institute of Futuristic Technology (IIFT) is dedicated to equipping students with knowledge and skills for emerging technologies and global challenges.
        </p>
      </section>

      {/* image */}
      <section className="py-16 bg-blue-500">
        <div className="mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="overflow-hidden rounded-2xl shadow-xl group">
              <img
                src="/AB.jpeg"
                alt="Campus View"
                className="w-full h-96 md:h-120 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl group">
              <img
                src="/AB2.jpeg"
                alt="Students Learning"
                className="w-full h-96 md:h-120 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl group">
              <img
                src="/Team.jpeg"
                alt="Our Team"
                className="w-full h-96 md:h-120 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>

          </div>

        </div>
      </section>

      <section className="bg-blue-500 t py-20 px-4 mt-10">
        <div className="max-w-6xl mx-auto text-center">

          <div className="flex justify-center items-center gap-4 mb-10">
            <MdOndemandVideo className="text-white text-4xl md:text-5xl" />
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Our Learning Environment
            </h2>
            <MdOndemandVideo className="text-white text-4xl md:text-5xl" />
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <video
                className="w-full aspect-video object-cover"
                controls
              >
                <source src="VIDEO.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <h3 className="mt-10 text-2xl md:text-4xl font-serif text-white">
            Hands On Skill Development
          </h3>

        </div>
      </section>

      {/* USP */}
      <section className="py-12 bg-blue-500 mt-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Choose <span className="text-white font-serif">(IIFT)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

          <div className="p-6 bg-blue-50 rounded-lg text-center">
            <h3 className="font-semibold text-lg md:text-xl mb-2">
              Advanced Curriculum
            </h3>
            <p className="text-base md:text-lg">
              Designed for future industries.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg text-center">
            <h3 className="font-semibold text-lg md:text-xl mb-2">
              State-of-the-Art Labs
            </h3>
            <p className="text-base md:text-lg">
              Modern research for hands-on learning.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 className="font-semibold text-lg md:text-xl mb-2">
              Expert Faculty
            </h3>
            <p className="text-base md:text-lg">
              Learn from professionals from top tech backgrounds.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 className="font-semibold text-lg md:text-xl mb-2">
              Global Opportunities
            </h3>
            <p className="text-base md:text-lg">
              International collaborations and internships.
            </p>
          </div>

        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-gray-50 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Achievements
        </h2>
        <ul className="text-base md:text-xl space-y-2 max-w-3xl mx-auto">
          <li>Partnerships with tech leaders and universities worldwide.</li>
          <li>Student projects featured in international competitions.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Shape Your Future with IIFT
          </h2>
          <p className="text-base md:text-lg">
            Explore our programs and admissions to take the first step towards a technology-driven career.
          </p>
        </div>
      </section>

      <div className="bg-blue-950 text-sm flex justify-center h-12 items-center mt-4">
        <p className="text-white">
          © 2026 IIFT | All Rights Reserved | Designed by Web Developer
        </p>
      </div>

    </div>
  );
};

export default About;