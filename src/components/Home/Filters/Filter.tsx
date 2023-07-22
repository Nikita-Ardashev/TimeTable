import React, { useState } from "react";
import styled from "styled-components/native";

const FilterBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-radius: 64px;
  background-color: #e5ebf0;
  padding: 8px 12px;
  ${(props) =>
    props.$color &&
    `
    background-color: #C2C8CA;
  `}
`;
const FilterBtnIcon = styled.View``;
const FilterBtnText = styled.Text`
  color: black;
  font-family: "Roboto";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Filter = ({ icon, text, func, name, setActive }) => {
  function toggleActive() {
    func(name);
  }
  return (
    <FilterBtn $color={setActive} onPress={toggleActive}>
      <FilterBtnIcon>{icon}</FilterBtnIcon>
      <FilterBtnText>{text}</FilterBtnText>
    </FilterBtn>
  );
};
