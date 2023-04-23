import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-left: 4px;
  padding-bottom: 8px;
  padding-top: 8px;
  border-bottom-color: #e1e1e1;
  border-bottom-width: 2px;
`;

const LineIndecator = styled.View`
  background: #00f3af;
  width: 8px;
  border-radius: 8px;
`;

const BoxLesson = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 1;
`;

const BoxTime = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const Time = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const NumberLesson = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #9c9c9c;
`;

const Name = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const Group = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #9c9c9c;
`;

const Cabinet = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #9c9c9c;
`;

export const Lesson = ({ time, numLesson, name, group, cabinetNum }) => {
  return (
    <Wrapper>
      <LineIndecator />
      <BoxLesson>
        <BoxTime>
          <Time>{time}</Time>
          <NumberLesson>{numLesson} пара</NumberLesson>
        </BoxTime>
        <Name>{name}</Name>
        <Group>{group}</Group>
        <Cabinet>{cabinetNum} каб.</Cabinet>
      </BoxLesson>
    </Wrapper>
  );
};
