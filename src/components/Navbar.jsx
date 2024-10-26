import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white ">
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <h1 className="text-xl font-bold">
          <Link to="/">Kreva</Link>
        </h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 hidden gap-6 text-md font-semibold`}>
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-yellow-300">
              Gallery
            </Link>
          </li>
          
          <li>
            <Link to="/forum" className="hover:text-yellow-300">
              Forum
            </Link>
          </li>
          <li>
            <Link to="/community-feed" className="hover:text-yellow-300">
              Aktivitas Komunitas
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu Responsif Muncul dari Kanan */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-blue-700 p-4 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out md:hidden`}
      >
        <button onClick={toggleMenu} className="mb-4 text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="flex flex-col space-y-8 ">
          <li>
            <Link to="/" className="hover:text-yellow-300  " onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-yellow-300 " onClick={toggleMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 " onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/forum" className="hover:text-yellow-300 " onClick={toggleMenu}>
              Forum
            </Link>
          </li>
          <li>
            <Link to="/community-feed" className="hover:text-yellow-300 " onClick={toggleMenu}>
              Aktivitas Komunitas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
