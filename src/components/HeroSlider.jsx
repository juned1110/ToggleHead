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
      className={`relative flex items-center justify-between h-[60vh] rounded-lg overflow-hidden ${slides[currentSlide].bg}`}
    >
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold text-primary ">
          {slides[currentSlide].title}
        </h1>
        <p className="mt-4 text-gray-600">{slides[currentSlide].description}</p>
        <button className="mt-6 px-8 py-3 bg-primary text-white rounded-lg">
          {slides[currentSlide].buttonText}
          <span className="ml-2 absolute mt-[0.2vh] text-2xl">
            <FaCaretRight />
          </span>
        </button>
      </div>

      <div className="w-1/2 h-screen flex items-center justify-center">
        <img
          src={slides[currentSlide].imgSrc}
          alt="Slide graphic"
          className="max-h-full object-fill h-[60vh]"
        />
      </div>

      {/* vertical scroll effect */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 bg-white rounded-full ${
              currentSlide === index ? "h-8" : "h-2"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
