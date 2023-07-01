import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-left: 6px;
  padding-bottom: 6px;
  padding-top: 6px;
  background-color: #e5ebf0;
  border-radius: 8px;
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
  justify-content: space-between;
`;

const Time = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: #000000;
`;

const NumberLesson = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
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
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #9c9c9c;
`;

const Cabinet = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
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
