import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #e5ebf0;
  padding: 16px;
  border-radius: 16px;
  gap: 8px;
  max-height: 92px;
`;
const NameAndDate = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
const Name = styled.Text`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: black;
`;
const Date = styled.Text`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #616161;
`;
const MainText = styled.Text`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #616161;
`;

export const Note = ({ TitleNote, DateNote, MainTextNote }) => {
  return (
    <Wrapper>
      <NameAndDate>
        <Name>{TitleNote}</Name>
        <Date>{DateNote}</Date>
      </NameAndDate>
      <MainText ellipsizeMode="tail" numberOfLines={2}>
        {MainTextNote}
      </MainText>
    </Wrapper>
  );
};
