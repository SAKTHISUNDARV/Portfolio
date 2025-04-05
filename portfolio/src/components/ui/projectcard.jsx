import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-80">
      <img
        src="https://via.placeholder.com/300"
        alt="Project"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">Dummy Project</h3>
        <p className="text-gray-600 mt-2">
          This is a sample description of a project. It showcases key features
          and technologies used.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["React", "Tailwind", "API"].map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 text-sm rounded-md">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black flex items-center gap-1"
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href="https://your-live-demo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <FaExternalLinkAlt size={16} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
