import React, { useState } from "react";

const slideText = [
  "All Categories",
  "Slide 2",
  "Cannabis 101",
  "Slide 4",
  "CBD",
  "Slide 6",
  "Cooking",
  "Slide 5",
  "Dosing",
  "Slide 7",
  "Health & Wellness",
  "Slide 9",
  "Industry News",
  "Slide 5",
  "Medical Cannabis",
];

const Slider = () => {
  const [translateXValue, setTranslateXValue] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    if (currentIndex < slideText.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTranslateXValue((prevValue) => prevValue + 180);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTranslateXValue((prevValue) => prevValue - 180);
    }
  };

  return (
    <div className="flex items-center mb-5 sticky top-0 bg-white z-30">
      <button
        className={`${
          currentIndex === 0 && "hidden"
        } flex justify-center items-center p-3 hover:scale-125 transition-all duration-150`}
        onClick={handlePrevSlide}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19L8 12L15 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>

      <div className="overflow-hidden w-full">
        <div
          className="flex gap-5 py-4 items-center transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(-${translateXValue}px)`,
          }}
        >
          {slideText.map((text, index) => (
            <a
              key={index}
              href="#"
              className="bg-gray-100 text-center w-40 py-2 font-bold transition-all duration-150 rounded-md border-2 flex-shrink-0 border-gray-400 hover:border-black hover:bg-gray-200"
            >
              {text}
            </a>
          ))}
        </div>
      </div>

      <button
        className="flex justify-center items-center p-3 ml-auto hover:scale-125 transition-all duration-150"
        onClick={handleNextSlide}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5L16 12L9 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Slider;
