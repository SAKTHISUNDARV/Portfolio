import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback Submitted successfully"); 
    navigate("/about", { state: formData });  };
  

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100 pt-15">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="bg-blue-600 text-white p-6 rounded shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name:</label>
              <input type="text" name="name" id="name" className="w-full p-2 rounded bg-amber-50 text-black" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">E-mail:</label>
              <input type="email" name="email" id="email" className="w-full p-2 bg-amber-50 rounded text-black" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block mb-1">Mobile No:</label>
              <input type="tel" name="mobile" id="mobile" className="w-full p-2 rounded bg-amber-50 text-black" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">Message:</label>
              <textarea name="message" id="message" cols="30" rows="5" className="w-full p-2 bg-amber-50 rounded text-black" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
