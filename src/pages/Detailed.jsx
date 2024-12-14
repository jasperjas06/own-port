import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profile from "../assets/image/profile.jpg"
function AboutMe() {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  // Set up Intersection Observer to detect when the About section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true); // Trigger animation when the section is in view
          setHasAnimated(true); // Set flag to ensure animation only triggers once
        }
      },
      {
        threshold: 0.5, // Trigger animation when at least 50% of the section is in view
      }
    );

    const section = document.getElementById('about-section');
    observer.observe(section);

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://images6.alphacoders.com/134/thumb-1920-1349751.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 py-12 px-6 max-w-screen-xl mx-auto text-white">
        {/* Bio Section */}
        <motion.div
          id="about-section"
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={fadeInVariants}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center justify-center"
        >
          {/* Left Side - Profile Picture */}
          <motion.div
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={textVariants}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg"
          >
            <img
              src={profile}
              alt="Jasper P"
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Right Side - Text Content */}
          <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left">
            {/* Name */}
            <motion.h1
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              variants={textVariants}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-shadow-lg"
            >
              Jasper P
            </motion.h1>
            {/* Role */}
            <motion.p
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              variants={textVariants}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-2xl md:text-3xl mt-2 text-gray-300 text-shadow-lg"
            >
              Full Stack Developer & Freelancer
            </motion.p>

            {/* Bio Description */}
            <motion.p
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              variants={textVariants}
              transition={{ duration: 1, delay: 1 }}
              className="mt-6 text-lg text-gray-200 leading-relaxed text-shadow-lg"
            >
              My name is Jasper P, a passionate Full Stack Developer and freelance professional. I have a strong interest in web technologies, with expertise in both front-end and back-end development. My journey began in the Nilgiris, a region known for its natural beauty and rich educational history, which shaped my early years.
            </motion.p>
          </div>
        </motion.div>

        {/* Detailed Bio */}
        <motion.div
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={fadeInVariants}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-12 text-center md:text-left"
        >
          <h2 className="text-3xl font-semibold text-white mb-4 text-shadow-lg">Detailed Bio</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6 text-shadow-lg">
            I am a self-taught developer, starting with the basics of HTML and CSS, and gradually exploring the powerful world of JavaScript, Node.js, and React. I have worked on multiple freelance projects, building everything from simple websites to complex applications, and I continue to expand my skill set through constant learning.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-6 text-shadow-lg">
            Apart from coding, I am deeply interested in technology trends, AI, and cloud computing. My goal is to create scalable, user-friendly applications while ensuring a smooth and optimized experience for end users. I am also passionate about contributing to open-source projects and collaborating with like-minded developers.
          </p>
        </motion.div>

        {/* Footer - Contact & Links */}
        <motion.div
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={fadeInVariants}
          transition={{ duration: 1.5, delay: 2.2 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-200 text-shadow-lg">Interested in working with me? Let's connect!</p>
          <motion.a
            href="mailto:jasper.p@example.com"
            className="mt-4 inline-block py-2 px-4 bg-indigo-700 text-white font-semibold rounded-full hover:bg-indigo-600 transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
