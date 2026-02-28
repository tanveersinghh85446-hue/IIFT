import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GiEarthAmerica } from "react-icons/gi";

import {
  FaFacebookF,
  FaInstagramSquare,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegLightbulb,
} from "react-icons/fa";
import { FaLinkedin, FaHandshakeSimple, FaUserGraduate } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BsPersonVcardFill, BsWhatsapp } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  const images = ["AB.jpeg", "Bulding.jpeg", "Graduation.jpeg", "Student.jpeg", "Hero1.jpeg", "Hero2.jpeg", "Hero3.jpeg", "Hero4.jpeg"];
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState({
    labs: 0,
    faculty: 0,
    placement: 0,
    students: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        students: prev.students < 2000 ? prev.students + 18 : 2000,
        faculty: prev.faculty < 80 ? prev.faculty + 1 : 80,
        labs: prev.labs < 10 ? prev.labs + 1 : 10,
        placement: prev.placement < 100 ? prev.placement + 1 : 100,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);


  const logos = [
    "Google.png", "Alcoa.png", "Accenture.png", "Genpact.png", "GoldManSachs.png",
    "Hcl.png", "Ibm.png", "Microsoft.png", "NielsenIQ.png", "Ramboll.png",
    "Wipro.png", "Wsp.png"
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Sliding Image */}
        <motion.img
          key={index}
          src={images[index]}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/40"></div>

        {/* TOP BADGE */}

        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20">
          <span
            className="flex items-center gap-2 px-6 py-2 text-sm md:text-base font-semibold tracking-wider 
    bg-white/10 backdrop-blur-md border border-white/20 
    rounded-full text-white shadow-lg "
            >
            <GiEarthAmerica className="text-3xl" />
            World’s Best Institution
          </span>
        </div>

        <div className="absolute inset-0 flex items-center  justify-center text-white text-center z-10 px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-6xl font-bold leading-tight">
              INTERNATIONAL INSTITUTE OF <br />
              <span className="text-blue-600">FUTURISTIC TECHNOLOGY</span>
            </h2>

            {/* TAGLINE SECTION */}
            <div className="mt-6 space-y-3">

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
  font-bold tracking-wide">
                <span className="bg-linear-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                  Think Smart
                </span>
                <span className="mx-2 text-white">|</span>
                <span className="bg-linear-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                  Learn Smart
                </span>
              </h3>

              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-linear-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                  Skill Up with
                </span>
                <span className="ml-3 text-blue-500 font-serif font-extrabold">
                  IIFT
                </span>
              </h4>

            </div>

            <p className="mt-6 text-lg md:text-xl">
              Empowering the next generation with advanced education and innovation.
            </p>

            <div className="mt-8 flex justify-center gap-6">
              <Link to="/course">
                <button className="px-8 py-3 bg-blue-600 font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300">
                  Explore Courses
                </button>
              </Link>

              <Link to="/apply">
                <button className="px-8 py-3 bg-blue-600 font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300">
                  Apply
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY LOGO MARQUEE */}
      <div className="overflow-hidden py-10 bg-white">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="logo"
              className="h-16 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>

      <div>

        {/* HEADING */}
        <div className="flex items-center justify-center mt-12 md:mt-16 px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            The <span className="text-blue-600 font-serif">IIFT</span> pro's
          </h2>
        </div>

        {/* CARDS */}
        <div className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: <FaUserGraduate />, title: "Globally Recognized Certification" },
              { icon: <FaRegLightbulb />, title: "Hands-On Training" },
              { icon: <FaHandshakeSimple />, title: "Strong Brand Reputation" },
              { icon: <BsPersonVcardFill />, title: "Real-World Projects" },
              { icon: <RiGalleryFill />, title: "360° Career Support" },
              { icon: <FaGlobe />, title: "BIA® Alumni Status" },
            ].map((item, i) => (
              <div key={i} className="bg-blue-500 rounded-2xl p-6 md:p-8 shadow-lg text-center hover:scale-105 transition duration-300">
                <div className="text-4xl md:text-5xl mx-auto mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-black">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* COUNTER */}
        <div className="py-16 md:py-20 mb-10">
          <div className="text-center mb-12">
            <h2 id="milestones-heading" className="text-3xl md:text-4xl font-bold text-blue-600">
              Our Milestones
            </h2>
            <p className="mt-3 text-black max-w-xl mx-auto">
              A quick look at our achievements and growth in numbers.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-blue-600 px-4">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">{count.labs}+</h2>
              <p className="mt-2 text-sm md:text-lg  text-black">Advanced Labs</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">{count.faculty}+</h2>
              <p className="mt-2 text-sm md:text-lg text-black">Expert Faculty</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">{count.placement}%</h2>
              <p className="mt-2 text-sm md:text-lg text-black">Placement Rate</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">{count.students}+</h2>
              <p className="mt-2 text-sm md:text-lg text-black">Students Enrolled</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden py-10 bg-white">
          <motion.div
            className="flex gap-16"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="logo"
                className="h-16 w-auto object-contain"
              />
            ))}
          </motion.div>
        </div>

        {/* FOOTER */}
        <div className="bg-blue-600 flex flex-col lg:flex-row justify-between items-start px-6 md:px-12 lg:px-32 py-12 gap-10 text-white">

          <div className="max-w-md">
            <img className="h-20 md:h-28 mb-4" src="LOGO2.png" alt="logo" />
            <p className="text-xl">
              International Institute of Futurisitc Technology (IIFT) prepares students with practical skills and advanced knowledge.
            </p>

            {/* ICONS */}
            <div className="flex flex-col items-start justify-start mt-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Connect With Us !
              </h2>

              <div className=" lg:flex gap-4 grid grid-cols-4">

                <a href="https://www.facebook.com/profile.php?id=61588547045586"><button className="bg-white transition-transform duration-300 hover:scale-150 h-12 w-12 rounded-full items-center flex justify-center">
                  <FaFacebookF className="text-blue-600 text-2xl" />
                </button></a>

                <a href="https://www.instagram.com/iift.official/"><button className="bg-white transition-transform duration-300 hover:scale-150 h-12 w-12 rounded-full items-center flex justify-center">
                  <FaInstagramSquare className="text-pink-600 text-2xl" />
                </button></a>

                <a href="https://www.youtube.com/@IIFT_Academy"><button className="bg-white transition-transform duration-300 hover:scale-150 h-12 w-12 rounded-full items-center flex justify-center">
                  <FaYoutube className="text-red-600 text-2xl" />
                </button></a>

                <a href=""><button className="bg-white transition-transform duration-300 hover:scale-150 h-12 w-12 rounded-full items-center flex justify-center">
                  <FaLinkedin className="text-blue-800 text-2xl" />
                </button></a>

                <a href="https://x.com/IIFT367437"><button className="bg-white transition-transform duration-300 hover:scale-150 h-12 w-12 rounded-full items-center flex justify-center">
                  <FaXTwitter className=" text-black text-2xl" />
                </button></a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=iift.education01@gmail.com&su=Inquiry&body=Hello%20IIFT%20Team"
                  target="_blank" rel="noopener noreferrer" className="bg-white transition-transform duration-300 hover:scale-150 h-12 w-12 rounded-full flex items-center justify-center"><IoIosMailUnread className="text-yellow-300 text-2xl" /></a>

                <a
                  href="https://wa.me/919560307098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white transition-transform duration-300 hover:scale-150 h-12 w-12 rounded-full flex items-center justify-center"><BsWhatsapp className="text-green-600 text-2xl" /></a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-2xl font-bold mb-4">
              India-Based. Globally Focused
            </h3>

            {[
              { name: "Delhi, India", link: "https://www.google.com/maps/search/?api=1&query=Kochhar+Plaza+H3MC+XVF+Ramphal+Chowk+Sector+7+Palam+Delhi+110077" },
              { name: "Banglore, India", link: "https://maps.app.goo.gl/X1jBeHhow9cDK1qG8?g_st=aw" },
              { name: "Gujrat, India", link: "https://maps.app.goo.gl/HP72h9DCfNQjeUfTA?g_st=aw" },
              { name: "Hyderabad, India", link: "https://maps.app.goo.gl/bdL2hZgcMKuAtfxE9?g_st=aw" },
              { name: "Pune, India", link: "https://maps.app.goo.gl/gyt6TCVYwRRpr4Fr8?g_st=aw" },
              { name: "Capetown, South Africa", link: "https://maps.app.goo.gl/aqUSTiutzfPv7EYE7?g_st=aw" },
              { name: "London, United Kingdom", link: "https://maps.app.goo.gl/mswfsuEuiDnDwmRB8?g_st=aw" },
              { name: "Toronto, Canada", link: "https://maps.app.goo.gl/yhSD6dUpi9eoaK149?g_st=aw" },
              { name: "New York, United States", link: "https://maps.app.goo.gl/Yr8xWz4MY8f9aM8U9?g_st=aw" },
              { name: "Paris, France", link: "https://maps.app.goo.gl/yNFMHZTgRBuZbQSE8?g_st=aw" },
              { name: "Sydney, Australia", link: "https://maps.app.goo.gl/NMCKRFoAP8gqNDRK7?g_st=aw" },
              { name: "Perth, Australia", link: "https://maps.app.goo.gl/Rzd2LHerrhH2t1vu6?g_st=aw" },
              { name: "Adelaide, Australia", link: "https://maps.app.goo.gl/Rzd2LHerrhH2t1vu6?g_st=aw" }
            ].map((loc, index) => (
              <p
                key={index}
                className="cursor-pointer hover:text-black"
                onClick={() => window.open(loc.link, "_blank")}
              >
                {loc.name}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xl flex-col flex">
              <Link className="hover:text-black" to="/">Home</Link>
              <Link className="hover:text-black" to="/contact">Contact</Link>
              <Link className="hover:text-black" to="/course">Course</Link>
              <Link className="hover:text-black" to="/about">About</Link>
              <Link className="hover:text-black" to="/know-more">Know More</Link>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-2xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-xl">
              <p className="flex items-center gap-2"><FaPhoneAlt /> +91 9217661339 +91 9560307098</p>
              <p className="flex items-center gap-2"><FaEnvelope /> iift.education01@gmail.com</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> India, Dwarka</p>
            </div>

            <Link to="/apply">
              <button className="mt-8 px-8 py-3 bg-white font-semibold rounded-lg transition text-black  text-2xl duration-300">
                Apply
              </button>
            </Link>
          </div>

        </div>

        <div className="bg-blue-950 text-sm flex justify-center h-12 items-center mt-4">
          <p className="text-white">
            © 2026 IIFT | All Rights Reserved | Designed by Web Developer
          </p>
        </div>
      </div>



    </div>
  );
}