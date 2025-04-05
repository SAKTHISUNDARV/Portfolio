import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navbarHeight = 55; 

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Detect active section on scroll 
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let newActiveSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= navbarHeight + 20 && rect.bottom >= navbarHeight / 2) {
        newActiveSection = section.id;
      }
    });

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-[60px] bg-[#121927] shadow-md px-6 py-2 flex justify-between items-center z-50">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white text-2xl cursor-pointer"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Brand Name */} 
      <p className="font-zen text-[16px] text-white tracking-wide font-normal hover:text-[#0ef]">
        Sakthi Sundar
      </p>

      {/* Desktop Navbar */}
      <div className="hidden md:flex gap-6">
        {["home-section", "about-section", "skill-section", "projects-section", "contact-section"].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            offset={-navbarHeight}
            smooth={true}
            duration={500}
            className={`cursor-pointer font-sans text-[16px] ${
              activeSection === section ? "text-[#0ef] font-semibold" : "text-white"
            } font-medium transition-all hover:text-[#0ef]`}
          >
            {section.replace("-section", "").charAt(0).toUpperCase() + section.replace("-section", "").slice(1)}
          </Link>
        ))}
      </div>

      {/* Resume Button */}
      {/* <button className="text-blue-400 font-medium transition rounded-md ml-6 cursor-pointer hover:bg-blue-500 hover:text-white px-4 py-2">
        Resume
      </button> */}
      <a 
                href="/resume.pdf" 
                download
                className="flex items-center gap-2 text-[#00f0ff]  px-4 py-2 rounded-md border border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[55px] left-0 w-full bg-black/50 backdrop-blur-sm shadow-md px-6 py-4 flex flex-col gap-4 items-center">
          {["home-section", "about-section", "skill-section", "projects-section", "contact-section"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className={`cursor-pointer font-sans text-[16px] ${
                activeSection === section ? "text-[#0ef] font-semibold" : "text-white"
              } font-medium transition-all hover:text-[#0ef]`}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {section.replace("-section", "").charAt(0).toUpperCase() + section.replace("-section", "").slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
