import React from "react";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-cyan-500 text-white p-4 shadow-md font-sans">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          LOGO
        </a>

        {/* Navigation Links & Login */}
        <div className="flex items-center text-base md:text-lg">
          {/* Main Links (hidden on small screens) */}
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="px-3 py-2 hover:bg-cyan-600 rounded-md transition-colors duration-300"
            >
              หน้าแรก
            </a>
            <a
              href="#"
              className="px-3 py-2 hover:bg-cyan-600 rounded-md transition-colors duration-300"
            >
              บทเรียน
            </a>
            <a
              href="#"
              className="px-3 py-2 hover:bg-cyan-600 rounded-md transition-colors duration-300"
            >
              ทดสอบพิเศษ
            </a>
            <a
              href="#"
              className="px-3 py-2 mr-2 hover:bg-cyan-600 rounded-md transition-colors duration-300"
            >
              มินิเกม
            </a>
          </div>

          {/* Separator */}
          <div className="border-l border-white/80 h-6 mx-2 hidden md:block"></div>

          {/* Login Link */}
          <a
            href="#"
            className="px-3 py-2 hover:bg-cyan-600 rounded-md transition-colors duration-300"
          >
            เข้าสู่ระบบ
          </a>

          {/* Hamburger Menu for small screens (optional) */}
          <button className="md:hidden ml-4">
            {/* You can add a hamburger icon here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
