import React from "react";
import { motion } from "framer-motion";
// import "./index.css"; // Make sure this CSS includes the updated styles below

function Projects() {
  const projects = [
    {
      title: "Apartment Management App",
      description:
        "A full-stack application designed to streamline apartment rental processes.",
      link: "#",
    },
    {
      title: "Live Logistics App",
      description:
        "A real-time logistics application designed to optimize supply chain operations.",
      link: "#",
    },
    {
      title: "HR Management System",
      description:
        "A Human Resource Management System (HRMS) to manage employee data.",
      link: "#",
    },
    {
      title: "BookMark (Movie Details)",
      description:
        "A movie cataloging app to bookmark and retrieve movie details easily.",
      link: "#",
    },
    {
      title: "BeamTech",
      description:
        "A technology solutions app designed for streamlined IT processes.",
      link: "#",
    },
    {
      title: "Edthi",
      description:
        "An educational platform to enhance online learning and management.",
      link: "#",
    },
    {
      title: "Invusprop",
      description:
        "A property management app for investors and landlords.",
      link: "#",
    },
    {
      title: "Launchpad",
      description:
        "An innovative platform to assist startups in their journey.",
      link: "#",
    },
    {
      title: "FMS (Fine Management System - React Native App)",
      description:
        "A mobile app for managing fines efficiently using React Native.",
      link: "#",
    },
    {
      title: "Jstream",
      description:
        "A streaming service offering seamless video content delivery.",
      link: "#",
    },
    {
      title: "BadBank",
      description:
        "A simulated banking application for educational and demonstration purposes.",
      link: "#",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: { scale: 1.05, boxShadow: "0px 12px 30px rgba(0,0,0,0.2)" },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    // <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-6 min-h-screen overflow-hidden">
    <div className="relative bg-[#171717] py-16 px-6 min-h-screen overflow-hidden">
    {/* Background Animation */}
      <div className="background">
        <motion.div
          className="circle gradient-circle"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="circle gradient-circle-2"
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        ></motion.div>
      </div>

      {/* Project Section */}
      <div className="max-w-screen-xl mx-auto relative z-10">
        <motion.h1
          className="text-5xl font-extrabold text-white mb-16 text-center leading-tight"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          My Works
        </motion.h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
  <motion.div
    key={index}
    className="relative bg-[#1E1E1E] rounded-lg shadow-lg overflow-hidden transform z-10 hover:shadow-2xl hover:glow-card"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    custom={index}
  >
    <div className="p-6">
      <motion.h3
        className="text-2xl font-semibold text-white mb-4 leading-snug hover:glow-text"
      >
        {project.title}
      </motion.h3>
      <p className="text-[#878787] mb-6">{project.description}</p>
      <a
        href={project.link}
        className="inline-block px-4 py-2 text-sm font-bold text-white bg-[#0057E7] rounded-lg hover:bg-blue-600 transition duration-300"
      >
        View Details
      </a>
    </div>
  </motion.div>
))}

        </div>
      </div>
    </div>
  );
}

export default Projects;
