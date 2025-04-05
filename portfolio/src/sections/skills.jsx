import React, { useState } from "react";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { FiAward, FiExternalLink } from 'react-icons/fi';
// ... rest of your component code remains the same ...
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, 
  FaPython, FaJava, FaNodeJs, FaCertificate,
  FaServer, FaDatabase, FaMobile,FaLaptopCode
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

import { 
  SiTailwindcss, SiC, SiExpress, SiMongodb, 
} from "react-icons/si";

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [layoutStyle, setLayoutStyle] = useState("grid"); // 'grid', 'cloud', or 'category'

  const skills = [
    { name: "React.js", icon: <FaReact />, category: "webdevelopment" },
    { name: "HTML5", icon: <FaHtml5 />, category: "webdevelopment" },
    { name: "CSS3", icon: <FaCss3Alt />, category: "webdevelopment" },
    { name: "JavaScript", icon: <FaJsSquare />, category: "webdevelopment" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "webdevelopment" },
    { name: "Node.js", icon: <FaNodeJs />, category: "webdevelopment" },
    { name: "Express.js", icon: <SiExpress />, category: "webdevelopment" },
    { name: "Python", icon: <FaPython />, category: "programming" },
    { name: "Java", icon: <FaJava />, category: "programming" },
    { name: "C Language", icon: <SiC />, category: "programming" },
    { name: "MongoDB", icon: <SiMongodb />, category: "webdevelopment" },
    { name: "Mysql", icon: <GrMysql />, category: "webdevelopment" },
  ];

  const certificates = [
    {
      title: 'Introduction to Generative Ai',
      issuer: 'Google Clouds',
      date: 'May 2024',
      image:"/images/certificates/introductiontogenai.png",
      link: 'https://www.cloudskillsboost.google/public_profiles/9601e7fd-2921-49b0-b9c1-d854977c49e3/badges/8879249',
    },
    {
      title: 'Prompt Design in Vertex Ai ',
      issuer: 'Google Clouds',
      date: 'May 2024',
      image:"/images/certificates/introductiontogenai.png",
      link: 'https://www.cloudskillsboost.google/public_profiles/9601e7fd-2921-49b0-b9c1-d854977c49e3/badges/9048023',
    },
    {
      title: 'Develop GenAi apps with Gemini and Streamlit',
      issuer: 'Google Clouds',
      date: 'May 2024',
      image:"/images/certificates/developgenaiaps.png",
      link: 'https://www.cloudskillsboost.google/public_profiles/9601e7fd-2921-49b0-b9c1-d854977c49e3/badges/9099796',
    },
    {
      title: 'Introduction to Node.js',
      issuer: 'Linux',
      date: 'sep 2024',
      image:"/images/certificates/introductiontonodejs.png",
      link: 'https://www.credly.com/badges/fff8b4be-e80f-4f25-947d-f353b3620e5a/linked_in?t=sjbovm',
    },
    {
      title: 'Free Maths for Machine Learning Course',
      issuer: 'Scaler',
      date: 'Apr 2025',
      image:"/images/certificates/mlcourse.png",
      link: 'https://moonshot.scaler.com/s/li/owO5CrKVdY',
    },
  ];

  const categoryIcons = {
    webdevelopment: <CgWebsite className="text-blue-400" />,
    programming: <FaLaptopCode className="text-purple-400" />  // Programming icon
};

  // Style 1: Grid View
  const GridView = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" id="skill">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-md border border-gray-700 hover:border-blue-400 transition-all"
        >
          <div className="text-4xl mb-2" style={{ color: getSkillColor(skill.name) }}>
            {skill.icon}
          </div>
          <span className="text-sm font-medium text-center">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );

  // Style 2: Tag Cloud View
  const CloudView = () => (
    <div className="flex flex-wrap justify-center gap-3 py-8">
      {skills.map((skill, index) => {
        const size = getRandomSize();
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className={`px-4 py-2 rounded-full flex items-center ${getRandomBgColor()} bg-opacity-20 border ${getRandomBorderColor()} transition-all`}
            style={{ fontSize: `${size}rem` }}
          >
            <span className="mr-2" style={{ color: getSkillColor(skill.name) }}>
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </motion.div>
        );
      })}
    </div>
  );

  // Style 3: Category View
  const CategoryView = () => (
    <div className="space-y-8">
      {Object.entries(groupByCategory(skills)).map(([category, categorySkills]) => (
        <div key={category} className="bg-gray-800 rounded-xl p-5 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="text-2xl mr-3">
              {categoryIcons[category]}
            </div>
            <h3 className="text-xl font-bold capitalize">{category}</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {categorySkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center bg-gray-700 rounded-lg p-3"
              >
                <div className="text-xl mr-3" style={{ color: getSkillColor(skill.name) }}>
                  {skill.icon}
                </div>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // Helper functions
  const groupByCategory = (skills) => {
    return skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});
  };

  const getSkillColor = (skillName) => {
    const colors = {
      'React.js': '#61DAFB',
      'HTML5': '#E34F26',
      'CSS3': '#1572B6',
      'JavaScript': '#F7DF1E',
      'Tailwind CSS': '#06B6D4',
      'Node.js': '#339933',
      'Express.js': '#000000',
      'Python': '#3776AB',
      'Java': '#007396',
      'C Language': '#A8B9CC',
      'MongoDB': '#47A248',
      'Mysql':'#00758f'
    };
    return colors[skillName] || '#6B7280';
  };

  const getRandomSize = () => {
    const sizes = [0.9, 1, 1.1, 1.2];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const getRandomBgColor = () => {
    const colors = [
      'bg-blue-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-indigo-500'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomBorderColor = () => {
    const colors = [
      'border-blue-400',
      'border-purple-400',
      'border-pink-400',
      'border-green-400',
      'border-yellow-400',
      'border-indigo-400'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-5 px-4 md:px-8 text-white" id="skill-section">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Skills & Certifications
          </h2>
        </motion.div>

        {/* Content Tabs - Moved up */}
        <div className="flex justify-center mb-4">
          <div className="relative inline-flex rounded-xl w-[280px] bg-gray-800/80 p-1 border border-gray-700/50 backdrop-blur-sm">
            <div className="relative flex items-center justify-center w-[300px]">
              {['skills', 'certificates'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative z-10 px-8 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex-1 text-center ${
                    activeTab === tab 
                      ? 'text-white font-semibold' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Background Slider */}
            <motion.div
              layout
              className="absolute top-1 bottom-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md shadow-md"
              initial={false}
              animate={{
                left: activeTab === 'skills' ? '0.25rem' : '50%',
                width: 'calc(50% - 0.5rem)',
                x: activeTab === 'skills' ? '0%' : '2%'
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 0.5
              }}
              style={{
                boxShadow: '0 4px 14px -2px rgba(59, 130, 246, 0.4)'
              }}
            />
          </div>
        </div>

        {/* Layout Selector - Only shown for skills tab */}
        {activeTab === "skills" && (
          <div className="flex justify-center mb-4 gap-1 p-1 rounded-md">
            {['grid', 'cloud', 'category'].map((style) => (
              <button
                key={style}
                onClick={() => setLayoutStyle(style)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  layoutStyle === style
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Skills Content */}
        {activeTab === "skills" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {layoutStyle === "grid" && <GridView />}
            {layoutStyle === "cloud" && <CloudView />}
            {layoutStyle === "category" && <CategoryView />}
          </motion.div>
        )}

        {/* Certificates Content */}
        {activeTab === "certificates" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-12"
  >
    {/* Certificates Section */}
          {/* Certifications Section */}
<div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {certificates.map((cert, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-800 transition-all group"
      >
        <div className="flex items-start gap-5">
          <div>
            <img 
              src={cert.image || '/default-certificate.jpg'} 
              alt={cert.title}
              className="w-20 h-20 object-contain rounded-lg border border-gray-600"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1 text-white group-hover:text-purple-400 transition-colors">
              {cert.title}
            </h3>
            <div className="flex items-center text-gray-300 text-sm mb-3">
              <span>{cert.issuer}</span>
              <span className="mx-2">•</span>
              <span>{cert.date}</span>
            </div>
            <div className="flex justify-between items-center">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                View Credential
                <FiExternalLink className="ml-1" />
              </a>
              {cert.badge && (
                <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
                  {cert.badge}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
  </motion.div>
)}
      </div>
    </section>
  );
};

export default SkillsPage;