import React, { useState } from "react";
import { PostToFbBtn, PostToXBtn } from "../../blogArchive/style";
import DownArrowIcon from "../../../assets/svgs/DownArrowIcon";
import UpArrowIcon from "../../../assets/svgs/UpArrowIcon";
import FacebookIcon from "../../../assets/svgs/FBIcon";
import XIcon from "../../../assets/svgs/XIcon";
import tw from "twin.macro";
import {
  Wrapper,
  StatesDropdownBtn,
  BoldText,
  StatesDropdownMenu,
  StatesDropdownItem,
  SearchBlogField,
} from "./style";

const LeftSidebar = () => {
  const states = [
    "All States",
    "Texas",
    "West Virginia",
    "Michigan",
    "Ohio",
    "Arizona",
    "North Dakota",
    "South Carolina",
    "New Jersey",
  ];

  const [showStatesDropdown, setShowStatesDropdown] = useState(false);

  const [dropdownButtonText, setDropdownButtonText] = useState("Select State");

  const handleStatesDropdown = () => {
    setShowStatesDropdown(!showStatesDropdown);
  };

  const handleDropdownButtonText = (event) => {
    const text = event.target.innerText;
    setDropdownButtonText(text);
    handleStatesDropdown();
  };

  return (
    <Wrapper>
      <BoldText styles={tw`ml-3`}>Search</BoldText>
      <SearchBlogField type="text" placeholder="Search Blog" />
      <BoldText styles={tw`ml-3`}>Filter By State</BoldText>
      <div className="relative">
        <StatesDropdownBtn onClick={handleStatesDropdown}>
          <span>{dropdownButtonText}</span>
          <DownArrowIcon
            className={`${showStatesDropdown ? "hidden" : "block"}`}
          />
          <UpArrowIcon
            className={`${showStatesDropdown ? "block" : "hidden"}`}
          />
        </StatesDropdownBtn>
        <StatesDropdownMenu showStatesDropdown={showStatesDropdown}>
          {states.map((state, index) => (
            <StatesDropdownItem key={index} onClick={handleDropdownButtonText}>
              {state}
            </StatesDropdownItem>
          ))}
        </StatesDropdownMenu>
      </div>
      <BoldText styles={tw`ml-3`}>Share</BoldText>
      <div className="flex flex-col gap-4">
        <PostToFbBtn>
          <FacebookIcon className="mr-6" />
          <BoldText>Post To Facebook</BoldText>
        </PostToFbBtn>
        <PostToXBtn>
          <XIcon className="mr-6" />
          <BoldText>Post to X</BoldText>
        </PostToXBtn>
      </div>
    </Wrapper>
  );
};

export default LeftSidebar;
