import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from 'react-icons/fi';
const projectsData = [
  {
    id: 1,
    title: "Gemini AI Clone",
    description: "A full-stack AI assistant with natural language processing capabilities",
    image: "https://picsum.photos/400/200",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    viewLink: "https://www.example.com/project1",
    sourceLink: "https://github.com/example/project1",
    tags: ["AI", "React", "Node.js"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing my work and skills",
    image: "https://placekitten.com/400/200",
    video: "https://www.w3schools.com/html/movie.mp4",
    viewLink: "https://www.example.com/project2",
    sourceLink: "https://github.com/example/project2",
    tags: ["React", "Tailwind", "Animation"]
  },
  {
    id: 3,
    title: "E-commerce App",
    description: "Complete online store with cart and payment integration",
    image: "https://picsum.photos/400/201",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    viewLink: "https://www.example.com/project3",
    sourceLink: "https://github.com/example/project3",
    tags: ["React", "Redux", "Firebase"]
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Content management system for writers and publishers",
    image: "https://picsum.photos/400/202",
    video: "https://www.w3schools.com/html/movie.mp4",
    viewLink: "https://www.example.com/project4",
    sourceLink: "https://github.com/example/project4",
    tags: ["Next.js", "MongoDB", "Auth"]
  },
  {
    id: 5,
    title: "Task Manager",
    description: "Productivity app with drag-and-drop functionality",
    image: "https://picsum.photos/400/203",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    viewLink: "https://www.example.com/project5",
    sourceLink: "https://github.com/example/project5",
    tags: ["React", "DnD", "IndexedDB"]
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "Real-time weather forecasts with interactive maps",
    image: "https://picsum.photos/400/204",
    video: "https://www.w3schools.com/html/movie.mp4",
    viewLink: "https://www.example.com/project6",
    sourceLink: "https://github.com/example/project6",
    tags: ["API", "Chart.js", "Geolocation"]
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [loadingVideos, setLoadingVideos] = useState({});

  const handleVideoLoad = (id) => {
    setLoadingVideos((prev) => ({ ...prev, [id]: false }));
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="projects-section"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-5 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Creative Projects
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => (
            <motion.article
              key={project.id}
              variants={item}
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-purple-400 transition-all duration-300"
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)"
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={`absolute w-full h-full object-cover transition-all duration-500 ${
                    hoveredProject === project.id ? "opacity-0 scale-110" : "opacity-100 scale-100"
                  }`}
                />

                {loadingVideos[project.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                )}

                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`absolute w-full h-full object-cover transition-all duration-500 ${
                    hoveredProject === project.id ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  }`}
                  onLoadedData={() => handleVideoLoad(project.id)}
                  onLoadStart={() => setLoadingVideos(prev => ({ ...prev, [project.id]: true }))}
                  title={`Demo video for ${project.title}`}
                />
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-xs font-medium rounded-full text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

                <div className="flex justify-between gap-4 mt-4">
  <a
    href={project.viewLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View live demo of ${project.title}`}
    className="flex items-center justify-center flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:from-purple-600 hover:to-blue-700 text-center shadow hover:shadow-lg hover:scale-[1.02]"
  >
    <FiExternalLink className="mr-2" />
    Go Live
  </a>
  <a
    href={project.sourceLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View source code of ${project.title}`}
    className="flex items-center justify-center flex-1 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg font-medium transition-all duration-300 hover:from-gray-900 hover:to-black text-center shadow hover:shadow-lg hover:scale-[1.02]"
  >
    <FiGithub className="mr-2" />
    View Source
  </a>
</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;