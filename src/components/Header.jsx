import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { name: "Qualifications", hasDropdown: true },
    { name: "Organizations", hasDropdown: true },
    { name: "Research & Analysis", hasDropdown: true },
    { name: "Lorem Ipsum", hasDropdown: true },
    { name: "Lorem Ipsum", hasDropdown: true },
  ];

  return (
    <header className="bg-primary text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-xl font-bold mb-4 md:mb-0 md:ml-10">LOGO</div>
      <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
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
        <FaSearch className="hover:text-gray-300 cursor-pointer" />
        <a
          href="#"
          className="bg-white text-primary py-2 px-4 font-medium rounded-2xl ml-4 hover:bg-gray-100"
        >
          Enrolment
        </a>
      </nav>
    </header>
  );
};

export default Header;
