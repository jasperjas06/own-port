import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth easing
      once: false, // Allow animations to re-trigger
    });

    // Refresh AOS when component is rendered
    AOS.refresh();
  }, []);

  return (
    <div className="relative bg-[#171717] min-h-screen font-sans flex items-center justify-center">
      <div className="relative z-10">
        <div
          id="about-section"
          className="flex flex-col md:flex-row items-center justify-center py-12 px-6 max-w-screen-xl mx-auto"
        >
          {/* Profile Picture */}
          <div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
            data-aos="zoom-in" // AOS animation for the profile picture
          >
            <img
              src="https://wallpapers.com/images/high/dot-notch-venom-and-spider-man-xzbq7agz4ebuu0zz.webp"
              alt="Jasper P"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div
            className="mt-6 md:mt-0 md:ml-12 text-center md:text-left text-white"
            data-aos="fade-up" // AOS animation for the text content
          >
            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Jasper P
            </h1>

            {/* Role */}
            <p className="text-xl md:text-2xl mt-2 text-gray-400">
              Full Stack Developer & Freelancer
            </p>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              My name is Jasper P, and I am a dedicated Full Stack Developer and
              freelance professional with a strong interest in technology and
              web development. I completed my education in the scenic Nilgiris,
              a region renowned for its breathtaking landscapes and rich
              educational heritage.
            </p>

            {/* More Info Button */}
            <a
              href="/about"
              className="mt-6 inline-block py-2 px-4 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-500 transition-colors"
              data-aos="fade-up" // AOS animation for the button
              data-aos-delay="200" // Delayed animation for better effect
            >
              More About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
