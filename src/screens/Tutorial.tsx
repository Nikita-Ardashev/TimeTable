import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import { SwiperItem } from "../components/Tutorial/SwiperItem";
import TimeTable from "../../assets/timetable.svg";
import ComfrtableTable from "../../assets/comfortableView.svg";
import Calendar from "../../assets/calendar.svg";
import Notes from "../../assets/notes.svg";
import Ready from "../../assets/ready.svg";
import { Image } from "react-native";

const Wrapper = styled.View`
  flex: 1;
`;

const Box = styled.View``;

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

const SwiperArr = [
  <SwiperItem
    ImgSource={<Image source={require("../../assets/timetable.png")} />}
    Title={"Добро пожаловать!"}
    MainText={
      "TimeTable - приложение для отслеживания пар преподавателей ИПЭК’а"
    }
  />,
  <SwiperItem
    ImgSource={<Image source={require("../../assets/comfortableView.png")} />}
    Title={"Удобный просмотр"}
    MainText={"Нажмите на фамилию преподавателя чтобы посмотреть его пары"}
  />,
  <SwiperItem
    ImgSource={<Image source={require("../../assets/calendar.png")} />}
    Title={"Заметки"}
    MainText={
      "Нажав на пару вы можете оставить заметку и просмотреть ее в будущем"
    }
  />,
  <SwiperItem
    ImgSource={<Image source={require("../../assets/notes.png")} />}
    Title={"Календарь"}
    MainText={
      "Вы можете воспользоваться календарем чтобы посмотреть какие пары у вас были в течении месяца"
    }
  />,
  <SwiperItem
    ImgSource={<Image source={require("../../assets/ready.png")} />}
    Title={"Готовы?"}
    MainText={"Теперь вы знаете о всех возможностях TimeTable. Удачи!"}
  />,
];

export const Tutorial = () => {
  const swipeItemlength = SwiperArr.length - 1;
  const [isReady, setReady] = useState(false);
  const ref = useRef(null);

  function Miss(index) {
    ref.current.scrollBy(index, true);
    setReady(true);
  }

  function renderBtn() {
    if (!isReady) {
      return (
        <Btn onPress={() => Miss(swipeItemlength)}>
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
      <Swiper
        index={0}
        ref={ref}
        loop={false}
        activeDotColor="#05D171"
        dotColor="#E1E1E1"
        onIndexChanged={(index) => {
          if (index === swipeItemlength) {
            setReady(true);
          } else {
            setReady(false);
          }
        }}
        removeClippedSubviews={true}
        autoplay={true}
        autoplayTimeout={5}
      >
        {SwiperArr.map((item, index) => {
          return <Box key={index}>{item}</Box>;
        })}
      </Swiper>
      {renderBtn()}
    </Wrapper>
  );
};
