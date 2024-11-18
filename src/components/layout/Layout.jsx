import React from "react";
import BlogHeader from "../blogHeader/BlogHeader";
import HeroSection from "../hero/HeroSection";

const Layout = () => {
  return (
    <div className="px-6 lg:px-10">
      <BlogHeader />
      <HeroSection />
    </div>
  );
};

export default Layout;
