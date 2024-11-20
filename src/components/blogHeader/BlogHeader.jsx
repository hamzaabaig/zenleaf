import React from "react";
import HouseIcon from "../../assets/svgs/HouseIcon";
import ForwardSlashIcon from "../../assets/svgs/ForwardSlasIcon";
import { BreadcrumbList, BlogTitle } from "./style";

const BlogHeader = () => {
  return (
    <div className="mb-7">
      <BreadcrumbList>
        <li className="flex items-center">
          <a href="#">
            <HouseIcon />
          </a>
          <ForwardSlashIcon />
        </li>
        <li className="font-bold">Blog</li>
      </BreadcrumbList>
      <BlogTitle>Cannabis Education News & Stories</BlogTitle>
      <p>
        Welcome to the Zen Leaf Blog. Be sure to visit often for new posts and
        special behind-the-scenes content.
      </p>
    </div>
  );
};

export default BlogHeader;
