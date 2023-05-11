import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import { SwiperItem } from "../components/Tutorial/SwiperItem";
import TimeTable from "../../assets/timetable.svg";
import ComfrtableTable from "../../assets/comfortableView.svg";
import Calendar from "../../assets/calendar.svg";
import Notes from "../../assets/notes.svg";
import Ready from "../../assets/ready.svg";

const Wrapper = styled.View`
  flex: 1;
`;

const Btn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  background-color: #3fe5a5cc;
`;

const BtnText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 35px;
  color: white;
`;

var SwiperArr = [
  <SwiperItem
    ImgSource={<TimeTable />}
    Title={"Добро пожаловать!"}
    MainText={
      "TimeTable - приложение для отслеживания пар преподавателей ИПЭК’а"
    }
  />,
  <SwiperItem
    ImgSource={<ComfrtableTable />}
    Title={"Удобный просмотр"}
    MainText={"Нажмите на фамилию преподавателя чтобы посмотреть его пары"}
  />,
  <SwiperItem
    ImgSource={<Calendar />}
    Title={"Заметки"}
    MainText={
      "Нажав на пару вы можете оставить заметку и просмотреть ее в будущем"
    }
  />,
  <SwiperItem
    ImgSource={<Notes />}
    Title={"Календарь"}
    MainText={
      "Вы можете воспользоваться календарем чтобы посмотреть какие пары у вас были в течении месяца"
    }
  />,
  <SwiperItem
    ImgSource={<Ready />}
    Title={"Готовы?"}
    MainText={"Теперь вы знаете о всех возможностях TimeTable. Удачи!"}
  />,
];

export const Tutorial = () => {
  function renderBtn() {
    if (true) {
      return (
        <Btn>
          <BtnText>Пропустить</BtnText>
        </Btn>
      );
    } else {
      return (
        <Btn>
          <BtnText>Готово</BtnText>
        </Btn>
      );
    }
  }
  return (
    <Wrapper>
      <Swiper loop={false}>
        {SwiperArr.map((item) => {
          return item;
        })}
      </Swiper>
      {renderBtn()}
    </Wrapper>
  );
};
