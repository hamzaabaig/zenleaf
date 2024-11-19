import React, { useState } from "react";

const LeftSidebar = () => {
  const [showStatesDropdown, setShowStatesDropdown] = useState(false);

  const [dropdownButtonText, setDropdownButtonText] = useState("Select State");

  const handleStatesDropdown = () => {
    setShowStatesDropdown(!showStatesDropdown);
  };

  const handleDropdownButtonText = (event) => {
    const text = event.target.innerText;
    setDropdownButtonText(text);
    handleStatesDropdown();
  };

  return (
    <div className="hidden lg:flex lg:col-span-3 pt-4 lg:sticky top-40 flex-col gap-4 h-fit">
      <span className="font-bold ml-3">Search</span>
      <input
        className="py-4 px-7 border border-gray-200 rounded-md"
        type="text"
        placeholder="Search Blog"
      />
      <span className="font-bold ml-3">Filter By State</span>
      <div className="relative">
        <button
          onClick={handleStatesDropdown}
          className="w-full flex items-center justify-between py-4 px-7 border border-gray-200 rounded-md"
        >
          <span>{dropdownButtonText}</span>
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={`${showStatesDropdown ? "hidden" : "block"}`}
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={`${showStatesDropdown ? "block" : "hidden"}`}
          >
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
        </button>
        <ul
          className={`${
            showStatesDropdown ? "block" : "hidden"
          } absolute pt-3 border w-full bg-white border-gray-200`}
        >
          <li
            onClick={handleDropdownButtonText}
            className="cursor-pointer pb-2 px-5 transition-all duration-200 hover:scale-105"
          >
            All States
          </li>
          <li
            onClick={handleDropdownButtonText}
            className="cursor-pointer pb-2 px-5 transition-all duration-200 hover:scale-105"
          >
            West Virginia
          </li>
          <li
            onClick={handleDropdownButtonText}
            className="cursor-pointer pb-2 px-5 transition-all duration-200 hover:scale-105"
          >
            Michigan
          </li>
          <li
            onClick={handleDropdownButtonText}
            className="cursor-pointer pb-2 px-5 transition-all duration-200 hover:scale-105"
          >
            Ohio
          </li>
          <li
            onClick={handleDropdownButtonText}
            className="cursor-pointer pb-2 px-5 transition-all duration-200 hover:scale-105"
          >
            Arizona
          </li>
          <li
            onClick={handleDropdownButtonText}
            className="cursor-pointer pb-2 px-5 transition-all duration-200 hover:scale-105"
          >
            North Dakota
          </li>
          <li
            onClick={handleDropdownButtonText}
            className="cursor-pointer pb-2 px-5 transition-all duration-200 hover:scale-105"
          >
            South Carolina
          </li>
          <li
            onClick={handleDropdownButtonText}
            className="cursor-pointer pb-2 px-5 transition-all duration-200 hover:scale-105"
          >
            Utah
          </li>
          <li
            onClick={handleDropdownButtonText}
            className="cursor-pointer pb-2 px-5 transition-all duration-200 hover:scale-105"
          >
            New Jersey
          </li>
        </ul>
      </div>
      <span className="font-bold ml-3">Share</span>
      <div className="flex flex-col gap-4">
        <button className="flex justify-start items-center active:bg-[#215293] hover:bg-[#346cb6] hover:text-white transition-all duration-200 border border-gray-200 rounded-md py-4 px-7">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0352 13.125L16.5273 9.89062H13.3984V7.78125C13.3984 6.86719 13.8203 6.02344 15.2266 6.02344H16.668V3.24609C16.668 3.24609 15.3672 3 14.1367 3C11.5703 3 9.88281 4.58203 9.88281 7.39453V9.89062H7V13.125H9.88281V21H13.3984V13.125H16.0352Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="font-bold">Post To Facebook</span>
        </button>
        <button className="flex justify-start items-center hover:bg-[#1DA1F2] active:bg-[#028ee3] hover:text-white transition-all duration-200 border border-gray-200 rounded-md py-4 px-7">
          <svg
            class="mr-6 inline size-6"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="font-bold">Post to X</span>
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
