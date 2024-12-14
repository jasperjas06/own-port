import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import LandingPage from './pages/Landing';
import AboutMe from './pages/Detailed';
import "aos/dist/aos.css";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <LandingPage />
            </motion.div>
          }
        />

        {/* About Page Route */}
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <AboutMe />
            </motion.div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
