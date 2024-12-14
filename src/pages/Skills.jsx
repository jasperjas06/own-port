import React, { useEffect } from "react";
import { FaJsSquare, FaReact, FaNode, FaPython, FaBootstrap, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiHtml5, SiCss3, SiVuedotjs, SiFirebase } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth animations
      once: false, // Animation will trigger again on re-scroll
    });
    AOS.refresh(); // Refresh AOS to apply animations on render
  }, []);

  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", icon: <FaJsSquare />, description: "Expert in JavaScript-based front-end development." },
        { name: "React.js", icon: <FaReact />, description: "Building dynamic web apps with React." },
        { name: "Vue.js", icon: <SiVuedotjs />, description: "Experience in Vue.js for modern UIs." },
        { name: "HTML", icon: <SiHtml5 />, description: "Crafting accessible web structures." },
        { name: "CSS", icon: <SiCss3 />, description: "Designing responsive, beautiful layouts." },
        { name: "Bootstrap", icon: <FaBootstrap />, description: "Quick styling with the Bootstrap framework." },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNode />, description: "Efficient backend development with Node.js." },
        { name: "Express.js", icon: <SiExpress />, description: "Building robust RESTful APIs." },
        { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL database expertise with MongoDB." },
        { name: "Firebase", icon: <SiFirebase />, description: "Real-time database and authentication with Firebase." },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, description: "Proficient in Python for scripting and backend." },
        { name: "Java", icon: <FaJava />, description: "Experienced in Java for object-oriented programming." },
      ],
    },
  ];

  return (
    <div
      className="relative min-h-screen font-sans flex items-center justify-center bg-[#171717] text-white"
      id="skills-section"
    >
      <div className="max-w-screen-lg mx-auto px-6 py-16">
        {/* Title Section */}
        <div
          className="text-center mb-12"
          data-aos="fade-up" // AOS animation for title
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-400">A glimpse into my expertise and technical capabilities.</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] rounded-lg shadow-md p-6"
              data-aos="fade-up" // AOS animation for each skill category
              data-aos-delay={index * 200} // Add delay for staggered effect
            >
              <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="text-4xl text-blue-500">{skill.icon}</div>
                    <div>
                      <h4 className="text-xl font-medium">{skill.name}</h4>
                      <p className="text-gray-400 text-sm">{skill.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
