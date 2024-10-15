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

  useEffect(() => {
    const handleScroll = () => {
      const container = cardContainerRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    };

    cardContainerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      cardContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollCards = (direction) => {
    const container = cardContainerRef.current;
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative p-4 md:p-10">
      <h2 className="text-2xl font-bold text-center text-primary">
        Info Cards
      </h2>
      <div
        ref={cardContainerRef}
        className="flex space-x-4 overflow-x-auto p-4 no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 bg-primary text-white p-6 rounded-2xl shadow-md w-[80vw] md:w-[25vw]"
            style={{ scrollSnapAlign: "center" }}
          >
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="mt-2">{card.description}</p>
            <div className="mt-4 text-white py-2 px-4 rounded flex">
              Know More
              <span className="ml-2 mt-1 text-xl">
                <FaCircleArrowRight />
              </span>
            </div>
          </div>
        ))}
      </div>

      {showLeftArrow && (
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow-lg"
          onClick={() => scrollCards("left")}
        >
          <FaArrowLeft />
        </button>
      )}
      {showRightArrow && (
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow-lg"
          onClick={() => scrollCards("right")}
        >
          <FaArrowRight />
        </button>
      )}
    </section>
  );
};

export default InfoCards;
