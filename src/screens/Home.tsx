import React from "react";
import styled from "styled-components/native";
import { Lesson } from "../components/Home/Lesson";
import { Dropdown } from "../components/Home/Dropdown";
import Note from "../../assets/notes.svg";

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

const teacher = [
  { value: "Балогланов Видади Нусратович" },
  { value: "Высотских Ангелина Ивановна" },
  { value: "Еремеева Елена Рудольфовна" },
  { value: "Ильин Николай Иванович" },
  { value: "Кузнецова Ирина Викторовна" },
  { value: "Луканова Елена Алексеевна" },
  { value: "Олина Светлана Валерьевна" },
  { value: "Сарварова Ирина Викторовна" },
  { value: "Тимошкин Николай Ильич" },
  { value: "Храмова Анна Валентиновна" },
  { value: "Шарафиева Лилия Расильевна" },
  { value: "Артемичева Елена Рудольфовна" },
  { value: "Банникова Анна Игоревна" },
  { value: "Баранова Елена Владимировна" },
  { value: "Бусленко Наталья Юрьевна" },
  { value: "Бывальцева Марина Валерьевна" },
  { value: "Васильев Николай Яковлевич" },
  { value: "Варламова Алена Михайловна" },
  { value: "Веселкова  Ольга Александровна" },
  { value: "Волкова Оксана Алексеевна" },
  { value: "Газидуллина Мария Александровна" },
  { value: "Долгова Юлия Аркадьевна" },
  { value: "Ефремова Инна Юрьевна" },
  { value: "Жуйков  Вениамин Николаевич " },
  { value: "Жуйкова Лариса Павловна" },
  { value: "Занина Татьяна Павловна" },
  { value: "Зорина Марина Александровна" },
  { value: "Кайгородов Алексей Алексеевич" },
  { value: "Камашева Анна Алексеевна" },
  { value: "Кузнецова Ольга Валерьевна" },
  { value: "Ломагин Василий Андреевич" },
  { value: "Мельников Валерий Серафимович" },
  { value: "Михалкина  Екатерина Александровна" },
  { value: "Мозгина Людмила Сергеевна" },
  { value: "Неклюдова Светлана Юрьевна" },
  { value: "Ошуркова Лидия Николаевна" },
  { value: "Ощепков Михаил Андреевич" },
  { value: "Перевозчиков Алексей Борисович" },
  { value: "Петрова Галина Александровна" },
  { value: "Плехова Анастасия Андреевна" },
  { value: "Пушин Александр Александрович" },
  { value: "Пушкарев Владимир Викторович" },
  { value: "Рахимьянова Ольга Трифоновна" },
  { value: "Сабурова Татьяна Леонидовна" },
  { value: "Самойленко Светлана Леонидовна " },
  { value: "Созонова Елена Аркадьевна" },
  { value: "Тику Наталья Геннадьевна" },
  { value: "Тихонова Татьяна Семеновна" },
  { value: "Феденев Александр Вячеславович" },
  { value: "Хайдукова Кристина Витальевна" },
  { value: "Чермных Светлана Викторовна" },
  { value: "Габитова Аниса Ахметлатыповна" },
  { value: "Главатских Ирина Викторовна" },
  { value: "Коновалов Андрей Андреевич" },
  { value: "Малинкина Юлия Игоревна" },
  { value: "Мартынова Екатерина Сергеевна" },
  { value: "Олина Анна Валерьевна" },
  { value: "Олина Елена Ивановна" },
  { value: "Охапкина Елена Леонидовна" },
  { value: "Пушина Юлия Андреевна" },
  { value: "Созонова Алефтина Вячеславовна" },
  { value: "Шестакова Виктория Павловна" },
];

export const Home = () => {
  return (
    <Wrapper>
      <Dropdown ArrayForDropdown={teacher} />
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
