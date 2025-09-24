import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // make sure the path is correct

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo only */}
      <Link to="/">
        <img 
          src={logo} 
          alt="Wamba Computer Services Logo" 
          className="h-10 w-auto" 
        />
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}