import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-800 h-16 flex justify-center items-center fixed w-full">
      <div className="space-x-8 ">
        <Link className="text-cyan-50 hover:text-cyan-300" to="/">Home</Link>
        <Link className="text-cyan-50 hover:text-cyan-300" to="/about">About</Link>
        <Link className="text-cyan-50 hover:text-cyan-300" to="/contact">Contact</Link>
        <Link className="text-cyan-50 hover:text-cyan-300" to="/testimonial">Testimonials</Link>
      </div>
    </nav>
  );
}

export default Navbar;
