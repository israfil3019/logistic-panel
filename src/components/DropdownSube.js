import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { getAllDepartments } from '../api/api'
import { useCookies } from "react-cookie";


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
  padding: 0 10px;
  display:flex;
  justify-content:space-between;
  align-items:center;

`;

const DropDownListContainer = styled("div")`
  position: relative;
  bottom:10px;
  z-index: 100;
  width: 189px;
  border: 1px solid #145aa0;
  border-top:none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #ffffff;
  overflow-y: auto;
  overflow-x:hidden;
  height:150px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #e9e9e9;
    margin:4px 0;

  }
  &::-webkit-scrollbar-thumb {
    background-color: hsl(210, 78%, 35%);
    border-radius: 10px;

  }
`;





const DropDownList = styled("ul")`
  padding: 10px 4px;
  margin: 0;
  background: #ffffff;
  box-sizing: border-box;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
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
  const [options, setOptions] = useState([])
  const [token] = useCookies(["mytoken"]);

  let url = "logistic/departments";

  // useEffect(() => {
  //   getAllDepartments(
  //     { url }, token['mytoken']
  //     )
  //     .then((res) => {
  //       console.log(res)
  //       setOptions(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [token, url]);
  useEffect(() => {
    fetch("https://panel.poshta.ua/api/logistic/departments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token["mytoken"]}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setOptions(response);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, [token]);


  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option) => () => {
    setSelectedOption(option.Sube_Adi + option.Sube_Kodu);
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
                {option.Sube_Adi}{option.Sube_Kodu}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
