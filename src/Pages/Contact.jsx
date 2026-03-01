import React from 'react'
import { FaHourglassHalf } from "react-icons/fa6";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Contact() {
    return (
        <div className="bg-linear-to-br from-blue-50 via-white to-blue-100">

            {/* Heading */}
            <div className='flex flex-col justify-center items-center text-center px-3 pt-8 sm:px-4 sm:pt-12'>
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold font-serif'>
                    Contact Us
                </h1>
                <p className='text-sm sm:text-base md:text-xl mt-2 sm:mt-4 max-w-xs sm:max-w-md md:max-w-3xl text-gray-600'>
                    We’d love to hear from you! Get in touch with IIFT for admissions, courses, or any queries
                </p>
            </div>

            {/* Map */}
            <div className='max-w-6xl mx-auto px-4 py-12'>
                <div className='rounded-2xl shadow-2xl overflow-hidden'>
                    <iframe
                        className='w-full h-120'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4946156940155!2d77.0695990750898!3d28.584934975690793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1640462c63%3A0x2773755cd2530ad8!2sKochhar%20Plaza!5e0!3m2!1sen!2sin!4v1771833625543!5m2!1sen!2sin" style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-6 sm:py-12 px-3 sm:px-6 md:px-12">
                <div className="max-w-4xl sm:max-w-3xl mx-auto space-y-6 sm:space-y-10">

                    {[
                        {
                            title: "Frequently Asked Questions",
                            subtitle: "Find answers to common questions about courses at IIFT.",
                            items: [
                                ["What courses are available at IIFT?", "IIFT offers Web Development, Data Science, AI, Cyber Security, Digital Marketing, and Software Development."],
                                ["What is the duration of the courses?", "The course duration ranges from 3 months to 1 year depending on the selected program."],
                                ["Can beginners apply?", "Yes, beginners can apply. We offer foundation-level courses."]
                            ]
                        },
                        {
                            title: "Certification & Placement",
                            subtitle: "Learn more about certification and career support at IIFT.",
                            items: [
                                ["Will I receive a certificate?", "Yes, students receive an official certificate after completion."],
                                ["Does IIFT provide placement assistance?", "Yes, we provide placement support and interview guidance."]
                            ]
                        },
                        {
                            title: "Mode of Learning",
                            subtitle: "Explore flexible learning options available at IIFT.",
                            items: [
                                ["Are classes online or offline?", "IIFT offers both online and offline learning modes."],
                                ["Are classes live or recorded?", "We provide live classes and recorded lectures."]
                            ]
                        }
                    ].map((section, index) => (
                        <div key={index}>
                            <h2 className="text-xl sm:text-3xl md:text-4xl py-4 sm:py-8 text-black font-serif text-center bg-blue-600 rounded-lg px-3 sm:px-6">
                                {section.title}
                            </h2>

                            <p className="text-center text-gray-700 text-xs sm:text-base mt-1 mb-3 sm:mb-6">
                                {section.subtitle}
                            </p>

                            <div className="space-y-3 sm:space-y-4">
                                {section.items.map((item, i) => (
                                    <details
                                        key={i}
                                        className="bg-white rounded-xl shadow-md p-3 sm:p-6 hover:shadow-xl transition duration-300 group"
                                    >
                                        <summary className="flex justify-between items-center cursor-pointer text-sm sm:text-base font-medium list-none">
                                            {item[0]}
                                            <span className="text-blue-600 text-lg sm:text-2xl transition-transform duration-300 group-open:rotate-45">
                                                +
                                            </span>
                                        </summary>
                                        <p className="mt-2 sm:mt-4 text-gray-600 text-xs sm:text-sm">
                                            {item[1]}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            {/* CTA */}
            <div className='bg-blue-600 text-white text-center py-6 sm:py-12 px-3 sm:px-6'>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold'>
                    Ready to Start Your Future With IIFT?
                </h2>
            </div>
            {/* Contact Info Cards */}
            <div className='max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>

                <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-2xl transition'>
                    <FaHourglassHalf className='text-2xl sm:text-3xl mx-auto text-blue-600 mb-3 sm:mb-4' />
                    <h3 className='text-base sm:text-xl font-semibold mb-1 sm:mb-2'>Office Hours</h3>
                    <p className='text-sm sm:text-base'>Monday – Saturday</p>
                    <p className='text-sm sm:text-base'>9:00 AM – 9:00 PM</p>
                </div>

                <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-2xl transition'>
                    <CiLocationOn className='text-2xl sm:text-3xl mx-auto text-blue-600 mb-3 sm:mb-4' />
                    <h3 className='text-base sm:text-xl font-semibold mb-1 sm:mb-2'>Location</h3>
                    <p className='text-sm sm:text-base'>IIFT Institute</p>
                    <p className='text-sm sm:text-base'>Delhi, Dwarka (India)</p>
                </div>

                <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-2xl transition'>
                    <CiPhone className='text-2xl sm:text-3xl mx-auto text-blue-600 mb-3 sm:mb-4' />
                    <h3 className='text-base sm:text-xl font-semibold mb-1 sm:mb-2'>Phone</h3>
                    <p className='text-sm sm:text-base'>+91 9217661339</p>
                    <p className='text-sm sm:text-base'>+91 9560307098</p>
                </div>

                <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-2xl transition'>
                    <MdOutlineMarkEmailRead className='text-2xl sm:text-3xl mx-auto text-blue-600 mb-3 sm:mb-4' />
                    <h3 className='text-base sm:text-xl font-semibold mb-1 sm:mb-2'>Email</h3>
                    <p className='text-sm sm:text-base'>iift.education01@gmail.com</p>
                </div>

            </div>
            <div className="bg-blue-950 flex justify-center items-center mt-4 h-10 md:h-12 px-2 md:px-0">
                <p className="text-white text-xs sm:text-sm md:text-sm text-center">
                    © 2026 IIFT | All Rights Reserved | Designed by Web Developer
                </p>
            </div>

        </div>
    )
}