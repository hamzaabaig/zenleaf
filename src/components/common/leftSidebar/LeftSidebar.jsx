import React from "react";

const LeftSidebar = () => {
  return (
    <div className="hidden lg:flex lg:col-span-3 pt-4 lg:sticky top-40 flex-col gap-4 h-fit">
      <span className="font-bold ml-3">Search</span>
      <input
        className="py-4 px-7 border border-gray-200 rounded-md"
        type="text"
        placeholder="Search Blog"
      />
      <span className="font-bold ml-3">Filter By State</span>
      <input
        className="py-4 px-7 border border-gray-200 rounded-md"
        type="text"
        placeholder="Search Blog"
      />
      <span className="font-bold ml-3">Share</span>
      <div className="flex flex-col gap-4">
        <button className="flex justify-start items-center hover:bg-[#1877F2] hover:text-white transition-all duration-200 border border-gray-200 rounded-md py-4 px-7">
          <svg
            class="mr-6 inline"
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
        <button className="flex justify-start items-center hover:bg-[#1DA1F2] hover:text-white transition-all duration-200 border border-gray-200 rounded-md py-4 px-7">
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
