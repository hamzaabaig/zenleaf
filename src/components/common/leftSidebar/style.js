import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  ${tw`hidden lg:flex lg:col-span-3 pt-4 lg:sticky top-40 flex-col gap-4 h-fit`}
`;

const StatesDropdownBtn = styled.button`
  ${tw`w-full flex items-center justify-between py-4 px-7 border border-gray-200 rounded-md`}
`;

const BoldText = styled.span`
  ${tw`font-bold`}
  ${({ styles }) => styles && styles}
`;

const StatesDropdownMenu = styled.ul`
  ${tw`absolute pt-3 w-full bg-white border border-gray-200`}
  ${({ showStatesDropdown }) => (showStatesDropdown ? tw`block` : tw`hidden`)}
`;

const StatesDropdownItem = styled.li`
  ${tw`cursor-pointer pb-2 px-5 transition-all duration-200 hover:scale-105`}
`;

const SearchBlogField = styled.input`
  ${tw`py-4 px-7 border border-gray-200 rounded-md`}
`;

export {
  Wrapper,
  StatesDropdownBtn,
  BoldText,
  StatesDropdownMenu,
  StatesDropdownItem,
  SearchBlogField,
};
