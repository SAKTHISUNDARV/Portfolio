import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";

import image0 from "../assets/images/image.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";

const Home = () => {
  const images = [image0, image1, image2];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full min-h-screen pt-15 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <div className="w-3/4 max-w-lg">
          <img
            src={images[currentIndex]}
            alt="Slideshow"
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-opacity duration-500"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
