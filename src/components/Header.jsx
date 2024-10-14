import React from "react";

const Header = () => (
  <header className="bg-primary text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Website</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="#home" className="hover:text-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="#exams" className="hover:text-secondary">
            Exams
          </a>
        </li>
        <li>
          <a href="#statistics" className="hover:text-secondary">
            Statistics
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-secondary">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
