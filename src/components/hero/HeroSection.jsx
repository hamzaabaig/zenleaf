import React from "react";
import heroImg from "../../assets/images/heroImg.jpg";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center p-3 md:p-8">
      <div className="lg:col-span-5 space-y-6">
        <h4 className="text-gray-800 font-bold">Featured Article</h4>
        <a className="w-max hover:underline text-3xl font-bold" href="#">
          <h2>LOL with Bits Dragonfruit</h2>
        </a>
        <p>
          By{" "}
          <a href="#" className="font-bold">
            Danyal Swan
          </a>{" "}
          On{" "}
          <a
            href="#"
            className="font-bold text-gray-800 hover:text-black hover:underline"
          >
            November 15, 2024
          </a>
        </p>
        <p>
          Ready to LOL, IRL? Bits Dragonfruit LOL edibles are infused with 5mg
          THC, CBC, and adaptogens for a feel-good gummy for any time, any
          place.
        </p>
        <button className="text-white max-w-max bg-black px-8 py-4 rounded transition-all duration-200 hover:bg-gray-800 active:bg-gray-900">
          Read More
        </button>
      </div>
      <div className="lg:col-span-7">
        <img className="rounded-md" src={heroImg} />
      </div>
    </div>
  );
};

export default HeroSection;
