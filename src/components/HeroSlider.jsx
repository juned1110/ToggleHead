import React, { useEffect, useState } from "react";
import img from "../assets/Image.png";
import { FaCaretRight } from "react-icons/fa";

const slides = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    buttonText: "Know More",
    bg: "bg-gray-100",
    imgSrc: img,
  },
  {
    title: "Another Slide",
    description:
      "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    buttonText: "Learn More",
    bg: "bg-gray-100",
    imgSrc: img,
  },
  {
    title: "Final Slide",
    description: "Eirmod tempor invidunt ut labore et dolore magna aliquyam.",
    buttonText: "Discover",
    bg: "bg-gray-100",
    imgSrc: img,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative flex flex-col-reverse md:flex-row items-center justify-between h-[60vh] md:h-[70vh] rounded-lg overflow-hidden ${slides[currentSlide].bg}`}
    >
      {/* Content Section */}
      <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          {slides[currentSlide].title}
        </h1>
        <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">
          {slides[currentSlide].description}
        </p>
        <button className="mt-4 md:mt-6 px-6 md:px-11 py-2 md:py-3 bg-primary text-white rounded-lg relative">
          {slides[currentSlide].buttonText}
          <span className="ml-2 inline-block text-xl md:text-2xl absolute">
            <FaCaretRight />
          </span>
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center">
        <img
          src={slides[currentSlide].imgSrc}
          alt="Slide graphic"
          className="max-h-full object-fill h-[40vh] md:h-[60vh] w-full md:w-auto"
        />
      </div>

      {/* Vertical Scroll Effect */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 md:w-3 bg-white rounded-full ${
              currentSlide === index ? "h-6 md:h-8" : "h-2"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
