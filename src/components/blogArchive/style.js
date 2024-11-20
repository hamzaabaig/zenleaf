import styled from "styled-components";
import tw from "twin.macro";

const BlogPostContainer = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4`}
`;

const BlogPost = styled.div`
  ${tw`border-2 border-gray-200 p-4 rounded-md transition-all duration-200 cursor-pointer space-y-4`}

  &:hover {
    ${tw`border-black`}
  }
`;

const TagsList = styled.ul`
  ${tw`flex gap-3 items-center`}
`;

const TagsItem = styled.li`
  ${tw`bg-gray-100 py-2 px-3 font-bold rounded`}
`;

const LoadMorePostsBtn = styled.button`
  ${tw`py-4 px-10 text-white text-lg font-semibold rounded-md bg-[#4d664d] transition-all duration-150`}

  &:hover {
    ${tw`bg-[#b5ccb5] text-black`}
  }
  &:active {
    ${tw`bg-[#79a579]`}
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
    ${tw`bg-[#346cb6] text-white`}
  }
  &:active {
    ${tw`bg-[#215293]`}
  }
`;

const PostToXBtn = styled(ShareButtonsBase)`
  &:hover {
    ${tw`bg-[#1DA1F2] text-white`}
  }
  &:active {
    ${tw`bg-[#028ee3]`}
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
