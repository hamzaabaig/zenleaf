import React from "react";

const BlogHeader = () => {
  return (
    <div className="mb-7">
      <ul className="flex items-center py-2">
        <li>
          <a className="flex items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span>
              <svg
                class="h-5 w-5 flex-shrink-0 text-opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
              </svg>
            </span>
          </a>
        </li>
        <li className="font-bold">Blog</li>
      </ul>
      <h1 className="text-3xl font-bold pb-2">
        Cannabis Education News & Stories
      </h1>
      <p>
        Welcome to the Zen Leaf Blog. Be sure to visit often for new posts and
        special behind-the-scenes content.
      </p>
    </div>
  );
};

export default BlogHeader;
