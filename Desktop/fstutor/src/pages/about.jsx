import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useLocation } from "react-router-dom";
const About = () => {
  const location = useLocation();
  const storedData = location.state || {}; 

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (storedData) {
      setFormData(storedData);
    }
  }, [storedData]); 

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-700">Submitted Contact Details</h1>
        {formData ? (
          <div className="bg-white p-6 mt-4 rounded shadow-lg w-96">
            <p className="text-lg"><strong>Name:</strong> {formData.name}</p>
            <p className="text-lg"><strong>Email:</strong> {formData.email}</p>
            <p className="text-lg"><strong>Mobile No:</strong> {formData.mobile}</p>
            <p className="text-lg"><strong>Message:</strong> {formData.message}</p>
          </div>
        ) : (
          <p className="text-xl text-red-500 mt-4">No data submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default About;
