import React, { useRef, useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

const InfoCards = () => {
  const cards = [
    {
      id: 1,
      title: "Card One",
      description: "This is the description for card one. Learn more about it.",
    },
    {
      id: 2,
      title: "Card Two",
      description:
        "This is the description for card two. Discover its features.",
    },
    {
      id: 3,
      title: "Card Three",
      description:
        "This is the description for card three. Check out the details.",
    },
    {
      id: 4,
      title: "Card Four",
      description: "This is the description for card four. Find out more.",
    },
    {
      id: 5,
      title: "Card Five",
      description: "This is the description for card five. See what's inside.",
    },
    {
      id: 6,
      title: "Card Six",
      description: "This is the description for card six. Get the insights.",
    },
  ];

  const cardContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (cardContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = cardContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const cardContainer = cardContainerRef.current;

    if (cardContainer) {
      cardContainer.addEventListener("scroll", checkScrollPosition);
      return () =>
        cardContainer.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <section className="relative p-10">
      <div
        ref={cardContainerRef}
        className="flex space-x-4 overflow-x-auto p-4 no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 bg-primary text-white p-6 rounded-2xl shadow-md w-[25vw]"
            style={{ scrollSnapAlign: "center" }}
          >
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="mt-2">{card.description}</p>
            <div className="mt-4 w-48 -ml-4 text-white py-2 px-4 rounded flex">
              Know More
              <span className=" w-10 ml-2 mt-1 text-xl hover:cursor-pointer">
                <FaCircleArrowRight />
              </span>
            </div>
          </div>
        ))}
      </div>
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
          aria-label="Scroll Left"
        >
          <FaArrowLeft />
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
          aria-label="Scroll Right"
        >
          <FaArrowRight />
        </button>
      )}
    </section>
  );
};

export default InfoCards;
