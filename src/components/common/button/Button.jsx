import React from "react";

const Button = ({ text, svg, svgPosition, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-primary font-bold gap-6 flex justify-start items-center border border-gray-200 rounded-md py-4 px-7 transition-all duration-200  ${className}`}
    >
      {svgPosition === "start" && svg}
      {text}
      {svgPosition === "end" && svg}
    </button>
  );
};

export default Button;
