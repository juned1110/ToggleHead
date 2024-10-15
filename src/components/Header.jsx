import React, { useState } from "react";
import { FaSearch, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Qualifications", hasDropdown: true },
    { name: "Organizations", hasDropdown: true },
    { name: "Research & Analysis", hasDropdown: true },
    { name: "Lorem Ipsum", hasDropdown: true },
    { name: "Lorem Ipsum", hasDropdown: true },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold md:ml-10">LOGO</div>

      {/* Hamburger Menu */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {!menuOpen && <FaBars />}
      </div>

      {/* Navigation Menu - Sliding from the right on mobile */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-primary text-white flex flex-col items-start p-6 space-y-4 z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:static md:transform-none md:flex-row md:space-x-6 md:p-0 md:w-auto md:h-auto md:bg-transparent md:flex`}
      >
        {/* Close Button */}
        <div className="w-full flex justify-start mb-6 md:hidden">
          <button className="text-2xl text-white" onClick={toggleMenu}>
            <FaTimes />
          </button>
        </div>

        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            <a
              href="#"
              className="hover:text-gray-300 flex items-center space-x-1"
            >
              <span>{item.name}</span>
              {item.hasDropdown && (
                <span className="ml-1">
                  <FaAngleDown />
                </span>
              )}
            </a>
            {item.hasDropdown && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-primary rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Option 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Option 2
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Option 3
                </a>
              </div>
            )}
          </div>
        ))}

        <FaSearch className="hover:text-gray-300 cursor-pointer h-8" />

        <a className="bg-white text-primary py-1 px-5 font-medium rounded-2xl hover:bg-gray-100 cursor-pointer ">
          Enrolment
        </a>
      </nav>
    </header>
  );
};

export default Header;
