import React from "react";
import styled from "styled-components/native";
import Search from "../../../assets/search.svg";
import Close from "../../../assets/close.svg";

const Wrapper = styled.View`
  display: flex;
  padding-top: 24px;
`;

const BoxHeaderDropdown = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 64px;
  padding: 0 20px;
  border-bottom-color: #9c9c9c;
  border-bottom-width: 2px;
  z-index: 0;
`;

const BoxSearch = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const BtnSearch = styled.TouchableOpacity`
  height: 18px;
  width: 18px;
`;

const TextSearch = styled.TextInput`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  color: black;
  background-color: white;
  /* &::placeholder {
    color: #9c9c9c;
  } */
`;

const BtnClose = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

const BoxDropdown = styled.View`
  height: 64px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
`;

const ItemDropdown = styled.View`
  height: 64px;
  border-bottom-color: #9c9c9c;
  border-bottom-width: 2px;
`;

const TestImg = styled.Image`
  height: 18px;
  width: 18px;
`;

export const Dropdown = ({ ArrayForDropdown }) => {
  function listSort(list, element) {
    let arr = list.sort((a, b) => {
      if (a[element] < b[element]) {
        return -1;
      }
      if (a[element] > b[element]) {
        return 1;
      }
      return 0;
    });
    return arr;
  }
  listSort(ArrayForDropdown, "value");
  return (
    <Wrapper>
      <BoxHeaderDropdown>
        <BoxSearch>
          <BtnSearch>
            <Search />
          </BtnSearch>
          <TextSearch placeholder="Поиск..." />
        </BoxSearch>
        <BtnClose>
          <Close />
        </BtnClose>
      </BoxHeaderDropdown>
      {/* <BoxDropdown>
        {ArrayForDropdown.forEach((element) => {
          <ItemDropdown>{element}</ItemDropdown>;
        })}
      </BoxDropdown> */}
    </Wrapper>
  );
};
