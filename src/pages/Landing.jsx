import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import backgroundImageUrl from "../assets/image/BG.webp"; // Path to your background image
import About from './About';
import Skills from './Skills';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function LandingPage() {
  // Cloud background effect variants
  const cloudBackgroundVariants = {
    initial: {
      filter: 'blur(4px)',
      opacity: 0.5,
    },
    animate: {
      filter: ['blur(4px)', 'blur(2px)', 'blur(4px)'],
      opacity: [0.5, 0.7, 0.5],
    },
  };

  // Background motion variants (for the parallax effect)
  const backgroundVariants = {
    initial: {
      backgroundPosition: 'center center',
    },
    animate: {
      backgroundPosition: 'center 100%',
    },
  };

  return (
    <React.Fragment>
      {/* Main Container */}
      <div
        className="relative flex items-center font-sans justify-center h-screen font-"
      >
        {/* Background Image with Motion */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={backgroundVariants}
          transition={{
            duration: 15, // Speed of the background motion
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed', // Optional: add fixed attachment for parallax
          }}
        />

        {/* Background Cloud Effect */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={cloudBackgroundVariants}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="absolute inset-0"
        />

        {/* Dark overlay for effect */}
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white">
          {/* Developer Name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="text-lg font-bold tracking-widest mb-2"
          >
            JASPER P
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="text-5xl md:text-7xl font-extrabold tracking-wide"
          >
            Full Stack Developer <br />
            & Freelancer
          </motion.h1>

          {/* Optional: Add subtle cloud-like floating elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: Math.random() * window.innerWidth,
                  y: -100,
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                  ],
                  y: window.innerHeight + 100,
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: index * 2,
                }}
                className="absolute w-32 h-16 bg-white/20 rounded-full blur-2xl"
              />
            ))}
          </div>
        </div>
      </div>
      <About/>
      <Skills/>
      <Education/>
      <WorkExperience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  );
}

export default LandingPage;
