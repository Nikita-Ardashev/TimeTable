import React, { useState } from "react";
import styled from "styled-components/native";
import { Lesson } from "../components/Home/Lesson";
import { Dropdown } from "../components/Home/Dropdown";
import { CalendarPicker } from "../components/Home/CalendarPicker";
import { Notes } from "../components/Home/Notes";
import ProfileIcon from "../../assets/Home/ProfileIcon.svg";
import SearchIcon from "../../assets/Home/SearchIcon.svg";
import CalendarIcon from "../../assets/Home/CalendarIcon.svg";
import { Profile } from "../components/Home/Profile";
const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

const Header = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 16px 0 16px;
  border-bottom-color: #616161;
  border-bottom-width: 1px;
`;
const BoxHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BoxHeaderAfter = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const BoxHeaderBefore = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const ProfileBtn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;
const Title = styled.Text`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
`;
const CalendarBtn = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;
const SearchBtn = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;
const BoxDay = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const DayBtn = styled.TouchableOpacity``;

const Day = styled.Text`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  border-bottom-color: #3684dd;
  border-bottom-width: 1px;
`;

const BoxLesson = styled.View`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 8px;
`;

const BtnLesson = styled.TouchableOpacity``;

export const Home = () => {
  const [isNote, setNote] = useState(false);
  const [isCalendar, setCalendar] = useState(false);

  function toggleNote() {
    setNote(true);
  }
  const dateNow = new Date();
  const dayFirst = dateNow.getDate();
  const [selectedDate, setSelectedDate] = useState(dayFirst);
  function toggleCalendar() {
    setCalendar(true);
  }
  const [isProfile, setProfile] = useState(false);

  function toggleProfile() {
    setProfile(true);
  }
  return (
    <Wrapper>
      <CalendarPicker
        selected={selectedDate}
        setSelected={setSelectedDate}
        view={isCalendar}
        setView={setCalendar}
      />
      <Notes view={isNote} setView={setNote} />
      <Profile view={isProfile} setView={setProfile} />
      <Header>
        <BoxHeader>
          <BoxHeaderBefore>
            <ProfileBtn onPress={toggleProfile}>
              <ProfileIcon fill={"red"} />
            </ProfileBtn>
            <Title>Главная</Title>
          </BoxHeaderBefore>
          <BoxHeaderAfter>
            <CalendarBtn onPress={toggleCalendar}>
              <CalendarIcon />
            </CalendarBtn>
            <SearchBtn>
              <SearchIcon />
            </SearchBtn>
          </BoxHeaderAfter>
        </BoxHeader>
        <BoxDay>
          <DayBtn>
            <Day>Вчера</Day>
          </DayBtn>
          <DayBtn>
            <Day>Сегодня</Day>
          </DayBtn>
          <DayBtn>
            <Day>Завтра</Day>
          </DayBtn>
        </BoxDay>
      </Header>
      <BoxLesson>
        <BtnLesson onPress={toggleNote}>
          <Lesson
            time={"8:30 - 10:00"}
            numLesson={"1"}
            name={"Прогр решения для бизнеса"}
            group={"И-20-2"}
            cabinetNum={"302"}
          />
        </BtnLesson>
      </BoxLesson>
    </Wrapper>
  );
};
