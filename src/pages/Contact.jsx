import React from "react";
import { motion } from "framer-motion";
import contactImage from "../assets/image/contact-BG.jpg";

function Contact() {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
  className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6"
  style={{
    backgroundImage:`url(${contactImage})`
    // backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${contactImage})`,
  }}
>
  <div className="max-w-4xl mx-auto">
    {/* Title Section */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-center mb-12"
    >
      Contact Me
    </motion.h1>

    {/* Form Section */}
    <motion.div
      className="rounded-lg shadow-2xl p-8  bg-opacity-20 "
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      {/* <form action="#" method="POST" className="space-y-6">
       
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-800"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 shadow-sm bg-gray-100 bg-opacity-90"
          />
        </div>

        
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 shadow-sm bg-gray-100 bg-opacity-90"
          />
        </div>

        
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 shadow-sm bg-gray-100 bg-opacity-90"
          ></textarea>
        </div>

      
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 focus:ring-4 focus:ring-blue-300"
        >
          Send Message
        </button>
      </form> */}
    </motion.div>
  </div>
</div>

  );
}

export default Contact;
