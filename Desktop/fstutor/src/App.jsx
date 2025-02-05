import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Testimonials from './pages/testimonial';

function App() {
  return (
    <Router> {/* Wrap your routes inside BrowserRouter */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
