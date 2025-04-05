import React from "react";
import SkillsPage from "./sections/skills";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/footer"; // Ensure you include the footer if needed
import Navbar from "./components/navbar";
import "./index.css"; // Ensure this includes custom styles

const App = () => {
  return (
    <div className="h-screen flex flex-col custom-scrollbar scroll-p-[55px]">
      <Navbar /> 
      <div className="pt-[55px] flex-1 "> 
        <main>
          <Home />
          <About />
          <SkillsPage />
          <Projects />
          <Contact />
        </main>
      </div>
      {/* <Footer /> Include the Footer at the bottom */}
    </div>
  );
};

export default App;
