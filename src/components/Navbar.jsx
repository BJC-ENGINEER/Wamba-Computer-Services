import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // adjust path if needed

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      {/* Bigger Logo */}
      <Link to="/">
        <img 
          src={logo} 
          alt="Wamba Computer Services Logo" 
          className="h-24 w-auto md:h-28" 
        />
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-xl">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}