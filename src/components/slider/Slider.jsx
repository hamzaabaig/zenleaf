import React from "react";

const Slider = () => {
  const slideText = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
    "Slide 4",
    "Slide 5",
    "Slide 2",
  ];

  return (
    <div className="flex items-center">
      <div className="flex gap-5 p-4 items-center overflow-hidden">
        {slideText.map((text, index) => (
          <a
            key={index}
            href="#"
            className="bg-gray-100 px-5 py-2 transition-all duration-150 rounded-md border-2 flex-shrink-0 border-gray-400 hover:border-black hover:bg-gray-200"
          >
            {text}
          </a>
        ))}
      </div>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer hover:scale-125"
        >
          <path
            d="M9 5L16 12L9 19"
            stroke="#1F1F1F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Slider;
