function Footer (){
    return(
        <footer className="bg-gray-900 py-8 overflow-hidden">
  <div className="container mx-auto px-6 lg:px-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-400">
      {/* Column 1: About */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">About</h3>
        <p className="text-sm leading-relaxed">
          Hi, I'm Sakthi Sundar, a passionate Full-Stack Developer committed to building scalable web applications and seamless user experiences.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="#about" className="hover:text-yellow-400">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400">Services</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-yellow-400">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </li>
        </ul>
      </div>

      {/* Column 3: Contact */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
        <ul className="space-y-2">
          <li>Email: sundarsakthi450@gmail.com</li>
          <li>Phone: +91 9876543210</li>
          <li>Location: Chennai, India</li>
        </ul>
      </div>

      {/* Column 4: Follow Me */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
        <ul className="space-y-2">
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/SAKTHISUNDARV" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-500 flex flex-col sm:flex-row justify-between">
      <p>&copy; 2025 Sakthi Sundar. All rights reserved.</p>
      <p>Designed with ❤️ by Sakthi Sundar</p>
    </div>
  </div>
</footer>

    );
}
export default Footer;