import React, { useState } from "react";
import styled from "styled-components/native";
import ReturnArrowIcon from "../../../assets/Home/ReturnArrow.svg";
import FilterOff from "../../../assets/Home/FilterOff.svg";
import LessonIcon from "../../../assets/Home/LessonIcon.svg";
import CalendarIcon from "../../../assets/Home/CalendarIcon.svg";
import NumberIcon from "../../../assets/Home/NumberIcon.svg";
import PersonIcon from "../../../assets/Home/PersonIcon.svg";
import RoomIcon from "../../../assets/Home/RoomIcon.svg";
import FilterBtns from "./Filters/FilterBtns";
import FilterFields from "./Filters/FilterFields";

const Wrapper = styled.Modal``;
const Box = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;
const ReturnAndTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
const RetutnBtn = styled.TouchableOpacity``;
const Title = styled.Text`
  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: black;
`;
const ResetFiltersBtn = styled.TouchableOpacity``;

const Main = styled.View`
  display: flex;
  flex-direction: column;
  padding: 8px;
  height: 100%;
`;

export const Filters = () => {
  const filterBtns = [
    {
      id: "NumberBtn",
      icon: <NumberIcon />,
      text: "Номер пары",
      current: {
        id: "NumberLesson",
        title: "Номер пары",
        text: "1",
        current: "Выбрать",
      },
    },
    {
      id: "LessonBtn",
      icon: <LessonIcon />,
      text: "Пара",
      current: {
        id: "Lesson",
        title: "Пара",
        text: "Физкультура, Английский язык и др.",
        current: "Выбрать",
      },
    },
    {
      id: "CalendarBtn",
      icon: <CalendarIcon />,
      text: "Дата",
      current: {
        id: "Data",
        title: "Дата",
        text: "30.03.2020 - 30.02.2023",
        current: "Выбрать",
      },
    },
    {
      id: "RoomBtn",
      icon: <RoomIcon />,
      text: "Кабинет",
      current: {
        id: "Cabinet",
        title: "Кабинет",
        text: "303",
        current: "Выбрать",
      },
    },
    {
      id: "PersonBtn",
      icon: <PersonIcon />,
      text: "Преподаватель",
      current: {
        id: "Teacher",
        title: "Преподаватель",
        text: "Перевозчиков А.Б.",
        current: "Выбрать",
      },
    },
  ];

  let objActiveFilter = {};

  filterBtns.forEach((btn) => {
    objActiveFilter[btn.id] = false;
  });
  const [arrFilter, setArrFilter] = useState(objActiveFilter);
  function toggleAcitveFilter(name) {
    let active = !arrFilter[name];
    setArrFilter((prevValue) => {
      return { ...prevValue, [name]: active };
    });
  }

  function resetFilters() {
    setArrFilter(objActiveFilter);
  }

  return (
    <Wrapper animationType="slide" transparent={true} visible={true}>
      <Box>
        <Header>
          <ReturnAndTitle>
            <RetutnBtn>
              <ReturnArrowIcon />
            </RetutnBtn>
            <Title>Фильтры</Title>
          </ReturnAndTitle>
          <ResetFiltersBtn onPress={resetFilters}>
            <FilterOff />
          </ResetFiltersBtn>
        </Header>
        <Main>
          <FilterBtns
            data={filterBtns}
            dataActive={arrFilter}
            funcBtn={toggleAcitveFilter}
          />
          <FilterFields data={filterBtns} dataActive={arrFilter} />
        </Main>
      </Box>
    </Wrapper>
  );
};
