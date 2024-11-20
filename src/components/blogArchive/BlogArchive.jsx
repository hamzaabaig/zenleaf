import React from "react";
import cardImg from "../../assets/images/blogArchiveImg.jpg";
import {
  BlogPostContainer,
  BlogPost,
  TagsItem,
  TagsList,
  LoadMorePostsBtn,
  PostToFbBtn,
  PostToXBtn,
  ShareButtonsContainer,
} from "./style";

const BlogArchive = () => {
  return (
    <div className="col-span-9 pb-3">
      <BlogPostContainer>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-gray-800">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates and the differences between BHO
            and Ros.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            CBC vs. CBD: What’s the Difference Between These Two Cannabinoids?
          </h3>
          <p className="text-gray-800">
            Have you recently heard of Green Wednesday and are curious about
            what it is? Well mark your calendars because Green Wednesday is a
            cannabis holiday packed with soul should deals and good vibes. Let’s
            explore why Green Wednesday should be on your radar and how you can
            make the most of it.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-gray-800">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-gray-800">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            CBC vs. CBD: What’s the Difference Between These Two Cannabinoids?
          </h3>
          <p className="text-gray-800">
            Have you recently heard of Green Wednesday and are curious about
            what it is? Well mark your calendars because Green Wednesday is a
            cannabis holiday packed with soul should deals and good vibes. Let’s
            explore why Green Wednesday should be on your radar and how you can
            make the most of it.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-gray-800">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-gray-800">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            CBC vs. CBD: What’s the Difference Between These Two Cannabinoids?
          </h3>
          <p className="text-gray-800">
            Have you recently heard of Green Wednesday and are curious about
            what it is? Well mark your calendars because Green Wednesday is a
            cannabis holiday packed with soul should deals and good vibes. Let’s
            explore why Green Wednesday should be on your radar and how you can
            make the most of it.
          </p>
        </BlogPost>
        <BlogPost>
          <img className="rounded-md" src={cardImg} />
          <TagsList>
            <TagsItem>Canbis 101</TagsItem>
            <TagsItem>CBD</TagsItem>
          </TagsList>
          <h3 className="text-xl font-bold hover:underline">
            Butane Hash Oil (BHO) vs. Rosin: What’s the Difference?
          </h3>
          <p className="text-gray-800">
            Discover the differences between BHO and Rosin as we compare these
            two popular cannabis concentrates.
          </p>
        </BlogPost>
      </BlogPostContainer>
      <div className="flex justify-center mb-4">
        <LoadMorePostsBtn>Load More Posts</LoadMorePostsBtn>
      </div>
      <div className="lg:hidden">
        <span className="font-bold ml-3">Share</span>
        <ShareButtonsContainer>
          <PostToFbBtn>
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
          </PostToFbBtn>
          <PostToXBtn>
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
          </PostToXBtn>
        </ShareButtonsContainer>
      </div>
    </div>
  );
};

export default BlogArchive;
