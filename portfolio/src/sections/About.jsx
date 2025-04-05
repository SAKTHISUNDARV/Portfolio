import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-gray-800 text-white px-4 py-4 sm:px-6 sm:py-4" id="about-section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight">
            Beyond the Code
          </h1>
          <p className="text-gray-400 text-sm sm:text-base  mx-auto">
            More about my journey, skills, and what drives me as a developer
          </p>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Profile Column */}
          <aside className="flex flex-col items-center md:items-start space-y-4">
            <div className="relative w-32 h-32 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-blue-500/20">
              <img 
                src="/images/certificates/prof.png" 
                alt="Sakthi Sundar"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold">Sakthi Sundar V</h2>
              <p className="text-purple-400 text-sm sm:text-base">AI & Data Science Student</p>
            </div>
            
            <div className="flex space-x-3 sm:space-x-4">
              <SocialIcon 
                href="https://github.com/SAKTHISUNDARV" 
                icon={<FaGithub />} 
                label="GitHub"
              />
              <SocialIcon 
                href="https://linkedin.com/in/sakthi-sundar-8279062a1" 
                icon={<FaLinkedin className="text-blue-500" />} 
                label="LinkedIn"
              />
              <SocialIcon 
                href="mailto:sundarsakthi450@gmail.com" 
                icon={<FaEnvelope className="text-red-500" />} 
                label="Email"
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-2 space-y-6 sm:space-y-8">
            <article>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-blue-400">My Journey</h3>
              <div className="space-y-3 text-gray-300 text-sm sm:text-base">
                <p>
                  As an AI & Data Science student, I bridge theoretical knowledge with practical development skills. 
                  My passion for problem-solving led me to explore full-stack development alongside my academic studies.
                </p>
                <p>
                  I approach coding as both a science and an art - valuing clean architecture while creating intuitive 
                  user experiences. My current focus is on mastering React ecosystems and backend development with Node.js.
                </p>
              </div>
            </article>

            <article>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-purple-400">Beyond Development</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                When not coding, I contribute to open-source projects, write technical blogs, and participate in hackathons. 
                I believe in continuous learning and regularly take courses to expand my skill set.
              </p>
            </article>
          </main>
        </div>

        {/* Philosophy Section */}
        <footer className="mt-10 sm:mt-5 pt-3 sm:pt-4 border-t border-gray-700">
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-center text-blue-400">My Philosophy</h3>
          <blockquote className="text-gray-300 text-sm sm:text-base text-center max-w-2xl mx-auto italic">
            "I strive to build solutions that are not just functional but elegant - where performance meets maintainability, 
            and complex problems are solved with simple, well-structured code."
          </blockquote>
        </footer>
      </div>
    </section>
  );
};

// Reusable Social Icon Component
const SocialIcon = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 sm:p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
  >
    {React.cloneElement(icon, { className: `text-lg sm:text-xl ${icon.props.className || ''}` })}
  </a>
);

export default About;