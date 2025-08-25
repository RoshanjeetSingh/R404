import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function ResponciveNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="md:hidden absolute top-0 left-0 w-full z-50">
      <nav className="w-full">
        {/* Burger Menu */}
        <div
          className="flex flex-col justify-between items-center h-8 w-12 cursor-pointer absolute top-2 right-4 z-50"
          onClick={toggleMenu}
        >
          <div
            className={`h-2 w-10 rounded-full bg-blue-400 shadow transition-all duration-300 ${
              isMenuOpen ? "rotate-[-45deg] translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`h-2 w-10 rounded-full bg-blue-400 shadow transition-all duration-300 ${
              isMenuOpen ? "scale-0" : ""
            }`}
          ></div>
          <div
            className={`h-2 w-10 rounded-full bg-blue-400 shadow transition-all duration-300 ${
              isMenuOpen ? "rotate-[45deg] -translate-y-2" : ""
            }`}
          ></div>
        </div>
        {/* Responsive Nav List */}
        {isMenuOpen && (
          <ul className="flex flex-col absolute top-12 right-4 bg-gray-200 rounded shadow-lg p-2 w-48 animate-slideIn">
            <li>
              <NavLink className="block py-2 px-4 uppercase font-bold text-blue-900 hover:bg-gray-300 rounded transition" to={'/'}>home</NavLink>
            </li>
            <li>
              <NavLink className="block py-2 px-4 uppercase font-bold text-blue-900 hover:bg-gray-300 rounded transition" to={'/villages'}>village map</NavLink>
            </li>
            <li>
              <NavLink className="block py-2 px-4 uppercase font-bold text-blue-900 hover:bg-gray-300 rounded transition" to={'/guestbook'}>guest book</NavLink>
            </li>
            <li>
              <NavLink className="block py-2 px-4 uppercase font-bold text-blue-900 hover:bg-gray-300 rounded transition" to={'/gallary'}>gallary</NavLink>
            </li>
            <li>
              <NavLink className="block py-2 px-4 uppercase font-bold text-blue-900 hover:bg-gray-300 rounded transition" to={'/videos'}>videos</NavLink>
            </li>
            <li>
              <NavLink className="block py-2 px-4 uppercase font-bold text-blue-900 hover:bg-gray-300 rounded transition" to={'/news'}>submit news</NavLink>
            </li>
          </ul>
        )}
      </nav>
      {/* Custom animation for slide-in */}
      <style>
        {`
          @keyframes slideIn {
            0% { transform: translateX(100%); opacity: 0; filter: blur(5px);}
            100% { transform: translateX(0); opacity: 1; filter: blur(0);}
          }
          .animate-slideIn {
            animation: slideIn 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}

export default ResponciveNav;