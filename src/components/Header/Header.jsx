import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Product", "Contact", "Support"];

  return (
    <header className="shadow-2xl sticky z-50 top-0 border-b border-gray-800">
      <nav className="bg-[#0f0f0f]/90 backdrop-blur-md px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* G'graowl Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-[900] tracking-tighter uppercase italic bg-gradient-to-b from-white via-gray-400 to-orange-600 bg-clip-text text-transparent">
                G'graowl
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase ml-1 text-gray-500 group-hover:text-orange-600 transition-colors">
                Packager
              </span>
            </div>
          </Link>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="hidden sm:block text-gray-400 hover:text-white transition-colors font-medium text-sm px-4 py-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-600 font-bold rounded-sm text-xs uppercase tracking-tighter px-5 py-2.5 transition-all active:scale-95 mr-2"
            >
              Join
            </Link>

            {/* HAMBURGER BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:order-1 transition-all`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 font-bold uppercase text-xs tracking-widest mt-4 lg:mt-0">
              {navItems.map((item) => (
                <li key={item} className="border-b border-gray-900 lg:border-0">
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)} // Closes menu when link clicked
                    className={({ isActive }) =>
                      `block py-4 lg:py-0 duration-200 transition-all ${
                        isActive ? "text-orange-600" : "text-gray-400"
                      } hover:text-orange-500`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
