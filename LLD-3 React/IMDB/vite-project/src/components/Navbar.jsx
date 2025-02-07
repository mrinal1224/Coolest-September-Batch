import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext"; // Import Theme Context
import Logo from "../movieLogo.png";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
      } py-4 shadow-lg transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            className="w-[70px] transform hover:scale-110 transition duration-300"
            src={Logo}
            alt="Logo"
          />
          <span className="text-3xl font-bold text-yellow-300 drop-shadow-lg">Movies</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <Link
            to="/"
            className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/watchlist"
            className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            Watchlist
          </Link>

          <Link
            to="/recommend"
            className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            Recommendations
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;