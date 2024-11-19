import React from "react";
import BlogHeader from "../blogHeader/BlogHeader";
import HeroSection from "../hero/HeroSection";
import Slider from "../slider/Slider";
import BlogArchive from "../blogArchive/BlogArchive";
import LeftSidebar from "../common/leftSidebar/LeftSidebar";

const Layout = () => {
  return (
    <div className="px-6 lg:px-10 max-w-screen-2xl w-full ms-auto me-auto">
      <BlogHeader />
      <HeroSection />
      <Slider />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <LeftSidebar />
        <BlogArchive />
      </div>
    </div>
  );
};

export default Layout;
