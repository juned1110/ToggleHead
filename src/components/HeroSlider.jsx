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
      className={`relative flex flex-col-reverse md:flex-row items-center justify-between h-[40vh] md:h-[60vh] rounded-lg overflow-hidden ${slides[currentSlide].bg}`}
    >
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          {slides[currentSlide].title}
        </h1>
        <p className="mt-2 md:mt-4 text-gray-600">
          {slides[currentSlide].description}
        </p>
        <button className="mt-4 md:mt-6 px-6 py-2 md:px-8 md:py-3 bg-primary text-white rounded-lg">
          {slides[currentSlide].buttonText}
          <span className="ml-2 absolute text-lg md:text-2xl mt-[0.2vh]">
            <FaCaretRight />
          </span>
        </button>
      </div>

      <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] flex items-center justify-center">
        <img
          src={slides[currentSlide].imgSrc}
          alt="Slide graphic"
          className="max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSlider;
