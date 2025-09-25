import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 md:px-6 flex items-center justify-between">
      {/* Logo */}
      <Link to="/">
        <img 
          src={logo} 
          alt="Wamba Computer Services Logo" 
          className="h-16 w-auto md:h-24"
        />
      </Link>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex-row md:flex md:space-x-6 absolute md:static top-20 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li className="border-b md:border-none"><Link to="/" className="block px-4 py-2 md:py-0" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li className="border-b md:border-none"><Link to="/about" className="block px-4 py-2 md:py-0" onClick={() => setIsOpen(false)}>About</Link></li>
        <li className="border-b md:border-none"><Link to="/products" className="block px-4 py-2 md:py-0" onClick={() => setIsOpen(false)}>Products</Link></li>
        <li className="border-b md:border-none"><Link to="/contact" className="block px-4 py-2 md:py-0" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}