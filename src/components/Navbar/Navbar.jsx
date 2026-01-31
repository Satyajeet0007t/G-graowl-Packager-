import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Styling for active links to match our orange/red theme
  const activeStyle = ({ isActive }) =>
    isActive
      ? "text-orange-600 border-b-2 border-orange-600"
      : "text-gray-400 hover:text-white";

  return (
    <nav className="bg-[#050505] border-b border-gray-900 sticky top-0 z-[100] w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* BRAND LOGO */}
        <Link to="/" className="flex flex-col leading-none group">
          <span className="text-xl font-[900] tracking-tighter uppercase italic bg-gradient-to-b from-white to-orange-800 bg-clip-text text-transparent">
            G'graowl
          </span>
          <span className="text-[7px] font-bold tracking-[0.4em] uppercase ml-1 text-orange-700">
            Packager
          </span>
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em]">
          <NavLink to="/" className={activeStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={activeStyle}>
            About
          </NavLink>
          <NavLink to="/products" className={activeStyle}>
            Products
          </NavLink>
          <NavLink to="/contact" className={activeStyle}>
            Contact
          </NavLink>
        </div>

        {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`md:hidden bg-[#0a0a0a] overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-64 border-b border-gray-800" : "max-h-0"}`}
      >
        <div className="flex flex-col items-center py-6 space-y-6 text-[12px] font-black uppercase tracking-[0.3em]">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={activeStyle}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={activeStyle}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className={activeStyle}
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={activeStyle}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
