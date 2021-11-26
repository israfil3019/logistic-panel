import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

const DropDownContainer = styled("div")`
  width: 189px;
  height: 71px;
  cursor: pointer;
  background-color: #145aa0;
  border-radius: 13px;
  box-shadow: 0 3px 6px #cbd5e6;
  margin: 4px;
  box-sizing: border-box;
`;

const DropDownHeader = styled("div")`
  width: 189px;
  height: 71px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  box-sizing: border-box;
  padding: 20px;
  display:flex;
  justify-content:space-between;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 189px;
`;

const DropDownList = styled("ul")`
  padding: 10px 4px;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #004e9c;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 10px;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  padding: 5px;
  border-bottom: 1px solid #e5e5e5;
  &:hover {
    color: #005bbb;
  }
  &:last-child {
    border: none;
  }
`;

export default function DropdownSube() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Kiev", "Kiev-2", "Kiev-3"];

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || "Şube"}
        {isOpen ? <RiArrowUpSLine size={'30px'}/> : <RiArrowDownSLine size={'30px'}/>}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
