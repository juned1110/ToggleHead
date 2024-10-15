import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const questions = [
    "How does an investor gain access to MF Utility?",
    "Will investors be able to have multiple Common Account Numbers?",
    "How does an investor gain access to MF Utility?",
    "Will investors be able to have multiple Common Account Numbers?",
  ];

  return (
    <section className="p-4 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
        FAQ
      </h2>
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left text-primary font-semibold p-4 border-b-2"
          >
            <span>{question}</span>
            <span className="ml-4">
              {open === index ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="p-4 text-sm md:text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
