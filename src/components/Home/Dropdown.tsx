import React from "react";
import styled from "styled-components/native";
import Search from "../../../assets/search.svg";
import Close from "../../../assets/close.svg";
import Arrow from "../../../assets/arrow.svg";

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
`;

const BoxSearch = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const BtnSearch = styled.TouchableOpacity`
  background-image: url(${Search});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  width: 100%;
  &::placeholder {
    color: #9c9c9c;
  }
`;

const BtnClose = styled.TouchableOpacity`
  background-image: url(${Close});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 24px;
  height: 24px;
`;

const BoxDropdown = styled.View`
  position: absolute;
  top: 100%;
`;

const ItemDropdown = styled.View`
  height: 64px;
  border-bottom-color: #9c9c9c;
  border-bottom-width: 2px;
`;

export const Dropdown = () => {
  return (
    <Wrapper>
      <BoxHeaderDropdown>
        <BoxSearch>
          <BtnSearch />
          <TextSearch placeholder="Поиск..." />
        </BoxSearch>
        <BtnClose />
      </BoxHeaderDropdown>
      <BoxDropdown></BoxDropdown>
    </Wrapper>
  );
};
