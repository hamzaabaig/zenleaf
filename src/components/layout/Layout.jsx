import React from "react";
import BlogHeader from "../blogHeader/BlogHeader";
import HeroSection from "../hero/HeroSection";
import Slider from "../slider/Slider";
import BlogArchive from "../blogArchive/BlogArchive";

const Layout = () => {
  return (
    <div className="px-6 lg:px-10">
      <BlogHeader />
      <HeroSection />
      <Slider />
      <BlogArchive />
    </div>
  );
};

export default Layout;
