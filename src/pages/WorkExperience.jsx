import React from "react";
import { motion } from "framer-motion";

function WorkExperience() {
  const experiences = [
    {
      company: "Kittivaasal Technologies Pvt Ltd",
      role: "Software Developer",
      location: "Chennai, India",
      duration: "Feb 2024 - Present",
      details:
        "I have successfully completed the Apartment Management Application project, which involved developing a comprehensive platform to streamline rental processes and enhance user experience. Currently, I am actively working on an exciting live logistics application project designed to optimize supply chain operations in real time. My expertise in this work includes utilizing a variety of modern technologies such as ReactJS for building dynamic user interfaces, Node.js and Express.js for backend development, SQL for database management, and Firebase for real-time data synchronization. I am also proficient in Redux for state management, TypeScript for ensuring code quality, Docker for containerization, and Google Maps for location-based functionalities. Additionally, I have conducted in-depth analyses of user engagement data, allowing me to identify areas for improvement and implement enhancements that significantly boost the app's overall functionality and user satisfaction.",
    },
    {
      company: "CODIIS - Connected Digital Systems",
      role: "Software Developer - Intern",
      location: "Chennai, India",
      duration: "Jan 2023 - March 2023",
      details:
        "I led the development of the second iteration of the Human Resource Management System (HRMS), a comprehensive solution designed to streamline the management of employee data within the Human Resources department. This project utilized a robust technology stack that included ReactJS for the front-end interface, Node.js and Express.js for the server-side application, MongoDB as the database, and Redux for state management. As a Full-stack developer, I played a pivotal role in shaping the system's architecture and functionality, ensuring the project met the needs of its users and contributed significantly to its overall success. My contributions encompassed everything from designing user-friendly interfaces to optimizing backend processes, which ultimately enhanced the efficiency and effectiveness of HR operations.",
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2 },
    }),
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-screen-lg mx-auto">
        {/* Section Header */}
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Work Experience
        </motion.h1>

        {/* Work Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={fadeInVariants}
            >
              {/* Role and Company */}
              <h2 className="text-2xl font-semibold text-gray-800">
                {exp.role} <span className="text-gray-600">- {exp.company}</span>
              </h2>

              {/* Location and Duration */}
              <p className="text-gray-500 italic text-sm">
                {exp.location} | {exp.duration}
              </p>

              {/* Details as Paragraph */}
              <p className="text-gray-700">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
