import styled from "styled-components";
import tw from "twin.macro";

const BlogPostContainer = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4`}
`;

const BlogPost = styled.div`
  ${tw`border-2 border-mediumGray p-4 rounded-md transition-all duration-200 cursor-pointer space-y-4`}

  &:hover {
    ${tw`border-primary`}
  }
`;

const TagsList = styled.ul`
  ${tw`flex gap-3 items-center`}
`;

const TagsItem = styled.li`
  ${tw`bg-lightGray bg-opacity-60 py-2 px-3 font-bold rounded-md text-secondary`}
`;

const LoadMorePostsBtn = styled.button`
  ${tw`py-4 px-10 text-white text-lg font-semibold rounded-md bg-lightGreen transition-all duration-150`}

  &:hover {
    ${tw`bg-green text-primary`}
  }
  &:active {
    ${tw`bg-mutedGreen`}
  }
`;

const ShareButtonsContainer = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 gap-2`}
`;

const ShareButtonsBase = styled.button`
  ${tw`flex justify-start items-center border border-gray-200 rounded-md py-4 px-7 transition-all duration-200`}
`;

const PostToFbBtn = styled(ShareButtonsBase)`
  &:hover {
    ${tw`bg-blue text-white`}
  }
  &:active {
    ${tw`bg-darkBlue`}
  }
`;

const PostToXBtn = styled(ShareButtonsBase)`
  &:hover {
    ${tw`bg-skyBlue text-white`}
  }
  &:active {
    ${tw`bg-brightBlue`}
  }
`;

export {
  BlogPostContainer,
  BlogPost,
  TagsItem,
  TagsList,
  LoadMorePostsBtn,
  PostToFbBtn,
  PostToXBtn,
  ShareButtonsContainer,
};
