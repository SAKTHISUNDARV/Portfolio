import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { HiAcademicCap, HiCode } from "react-icons/hi";

const HomePage = () => {
  const stats = [
    { value: "5+", label: "Projects Built", gradient: "from-blue-400 to-purple-500" },
    { value: "5+", label: "Technologies", gradient: "from-purple-400 to-pink-500" },
    { value: "100%", label: "Passion", gradient: "from-pink-400 to-red-500" },
    { value: "∞", label: "Curiosity", gradient: "from-red-400 to-orange-500" }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4 sm:px-6 lg:px-8" id="home-section">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 mb-12 mt-5 md:mb-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hello, I'm
              </span>
              <br />
              <span className="text-white">Sakthi Sundar V</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 md:mb-6">
              AI & Data Science Student | Aspiring Developer
            </h2>
            
            <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 leading-relaxed">
              Passionate about building digital solutions while pursuing my degree. Currently exploring web development and software engineering concepts.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link 
                to="projects-section" 
                smooth={true} 
                duration={800}
                offset={-50}
                className="cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 sm:px-6 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium shadow-lg text-sm sm:text-base"
                >
                  My Projects
                </motion.div>
              </Link>
              
              <Link 
                to="contact-section" 
                smooth={true} 
                duration={900}
                offset={-50}
                className="cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 sm:px-6 sm:py-2 bg-gray-800 border border-gray-700 rounded-lg text-white font-medium text-sm sm:text-base"
                >
                  Get In Touch
                </motion.div>
              </Link>
            </div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-500/20 relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <img 
                    src="/images/certificates/prof.png" 
                    alt="Sakthi Sundar V" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <motion.div 
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  transition: { 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 4 
                  } 
                }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gray-800 p-2 sm:p-3 rounded-xl border-2 border-blue-500 shadow-lg"
              >
                <HiAcademicCap className="text-blue-400 text-lg sm:text-xl mb-1" />
                <p className="text-white text-xs sm:text-sm">AI & DS Student</p>
              </motion.div>
              <motion.div 
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  transition: { 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 5,
                    delay: 1 
                  } 
                }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gray-800 p-2 sm:p-3 rounded-xl border-2 border-purple-500 shadow-lg"
              >
                <HiCode className="text-purple-400 text-lg sm:text-xl mb-1" />
                <p className="text-white text-xs sm:text-sm">Learning</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="text-center p-2 sm:p-3"
                >
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;