import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application",
      institution: "RVS College of Arts and Science, Sulur, Coimbatore",
      date: "April 2023",
      grade: "Graduated with 89%, no backlogs",
      description:
        "Specialized in full-stack development, focusing on modern web technologies and frameworks.",
      skills: [
        "JavaScript",
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "React Native",
      ],
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Nazareth College of Arts and Science, Avadi, Chennai",
      date: "April 2021",
      grade: "Graduated with 75%, no backlogs",
      description:
        "Focused on foundational programming concepts and database management.",
      skills: ["Java", "C++", "VB", "Data Structures"],
    },
    {
      degree: "Higher Secondary Certificate",
      institution:
        "St. Joseph's Boy's Higher Secondary School, Coonoor, The Nilgiris",
      date: "April 2018",
      grade: "Excelled in academic performance with a strong focus on mathematics and computer science.",
      skills: [],
    },
  ];

  // Initialize AOS with reset animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: false, // Allow animations to trigger multiple times
      mirror: true, // Enable animation when scrolling back up
    });
  }, []);

  return (
    <section id="education" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up" // Title animation
        >
          Education
        </h2>
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 md:flex md:items-center md:space-x-8 hover:shadow-xl transition duration-300"
              data-aos="fade-up" // Animate each education card
              data-aos-delay={index * 200} // Stagger animation delay
            >
              <div className="md:flex-shrink-0">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 mt-1">{edu.institution}</p>
                <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                <p className="text-gray-700 mt-3">{edu.grade}</p>
              </div>
              <div className="mt-6 md:mt-0 md:flex-grow">
                <p className="text-gray-600">{edu.description}</p>
                {edu.skills.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-medium text-gray-800 mb-2">
                      Technical Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
