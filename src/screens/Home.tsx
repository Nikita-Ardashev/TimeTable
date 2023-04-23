import React from "react";
import styled from "styled-components/native";
import { Lesson } from "../components/Home/Lesson";
import { Dropdown } from "../components/Home/Dropdown";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

const DateStyle = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 8px;
  padding-left: 16px;
  gap: 8px;
`;

const Day = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const WeekDay = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #9c9c9c;
`;

const CalendarPosition = styled.View`
  position: relative;
  height: 64px;
  width: 100%;
`;

export const Home = () => {
  return (
    <Wrapper>
      <Dropdown />
      <DateStyle>
        <Day>8 Февраля</Day>
        <WeekDay>ср</WeekDay>
      </DateStyle>
      <Lesson
        time={"8:30 - 10:00"}
        numLesson={"1"}
        name={"Прогр решения для бизнеса"}
        group={"И-20-2"}
        cabinetNum={"302"}
      />
    </Wrapper>
  );
};
