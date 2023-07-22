import React from "react";
import styled from "styled-components/native";
import ArrowFilter from "../../../../assets/Home/ArrowInFilters.svg";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;
const FiltersFieldBoxText = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const FiltersFieldTitle = styled.Text`
  color: black;
  font-family: "Roboto";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;
const FiltersFieldInfo = styled.Text`
  color: #616161;
  font-family: "Roboto";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
const FiltersFieldCurrent = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;
const FiltersFieldCurrentText = styled.Text`
  color: black;
  font-family: "Roboto";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
export const FilterField = ({ titleText, text, currentText }) => {
  return (
    <Wrapper>
      <FiltersFieldBoxText>
        <FiltersFieldTitle>{titleText}</FiltersFieldTitle>
        <FiltersFieldInfo>{text}</FiltersFieldInfo>
      </FiltersFieldBoxText>
      <FiltersFieldCurrent>
        <FiltersFieldCurrentText>{currentText}</FiltersFieldCurrentText>
        <ArrowFilter />
      </FiltersFieldCurrent>
    </Wrapper>
  );
};
