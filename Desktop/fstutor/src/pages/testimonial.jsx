import React from "react";
import Navbar from "../components/navbar";
const Testimonials = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8 pt-15">
            <h1 className="text-3xl text-center font-bold mt-8">Testimonials</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-medium">"I love this website! It's so easy to use and it's free!"</p>
                        <p className="text-sm font-light mt-2">- John Doe</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-medium">"I love this website! It's so easy to use and it's free!"</p>
                        <p className="text-sm font-light mt-2">- Jane Doe</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-medium">"I love this website! It's so easy to use and it's free!"</p>
                        <p className="text-sm font-light mt-2">- John Smith</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Testimonials;