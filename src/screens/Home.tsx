import React, { useState } from "react";
import styled from "styled-components/native";
import { Lesson } from "../components/Home/Lesson";
import { Dropdown } from "../components/Home/Dropdown";
import { CalendarPicker } from "../components/Home/CalendarPicker";
import { Notes } from "../components/Home/Notes";
const Wrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Box = styled.View`
  margin-top: 72px;
`;

const DropdownBox = styled.View`
  position: absolute;
  width: 100%;
  z-index: 5;
  background: white;
`;

const DateStyle = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 8px;
  padding-left: 16px;
  gap: 8px;
`;

const BoxLesson = styled.TouchableOpacity``;

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

const CalendarModal = styled.Modal``;

const BoxCalendar = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
  z-index: 2;
`;

const NoteModal = styled.Modal``;

const BoxNote = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
  z-index: 2;
`;

const Shadow = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.25;
  z-index: 1;
`;

const teachers = [
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
const monthsView = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "октября",
  "Ноября",
  "Декабря",
];
export const Home = () => {
  const dateNow = new Date();
  const yearFirst = dateNow.getFullYear();
  const monthFirst = dateNow.getMonth();
  const dayFirst = dateNow.getDate();

  const [monthDay, setMonthDay] = useState(dayFirst);
  const [month, setMonth] = useState(monthFirst + 1);
  const [date, setDate] = useState(new Date());
  const weekday = new Date(date)
    .toLocaleDateString(undefined, {
      weekday: "short",
    })
    .substring(0, 2);
  const [isCalendar, setCalendar] = useState(false);
  function toggleCalendar() {
    setCalendar(!isCalendar);
  }
  function monthSelect() {
    if (monthFirst + 1 < 10) {
      return `0${monthFirst + 1}`;
    } else {
      return monthFirst + 1;
    }
  }

  const [selectedDate, setSelectedDate] = useState(
    `${yearFirst}-${monthSelect()}-${dayFirst}`
  );
  const [isNote, setNote] = useState(false);

  function toggleNote() {
    setNote(!isNote);
  }
  return (
    <Wrapper>
      <CalendarModal
        animationType="fade"
        transparent={true}
        visible={isCalendar}
      >
        <BoxCalendar>
          <CalendarPicker
            setCalendar={setCalendar}
            setMonthDay={setMonthDay}
            setMonth={setMonth}
            setDate={setDate}
            selected={selectedDate}
            setSelected={setSelectedDate}
          />
        </BoxCalendar>
        <Shadow onPress={toggleCalendar} />
      </CalendarModal>
      <NoteModal animationType="fade" transparent={true} visible={isNote}>
        <BoxNote>
          <Notes />
        </BoxNote>
        <Shadow onPress={toggleNote} />
      </NoteModal>
      <DropdownBox>
        <Dropdown ArrayForDropdown={teachers} />
      </DropdownBox>
      <Box>
        <DateStyle onPress={toggleCalendar}>
          <Day>{monthDay + " " + monthsView[month - 1]} </Day>
          <WeekDay>{weekday}</WeekDay>
        </DateStyle>
        <BoxLesson onPress={toggleNote}>
          <Lesson
            time={"8:30 - 10:00"}
            numLesson={"1"}
            name={"Прогр решения для бизнеса"}
            group={"И-20-2"}
            cabinetNum={"302"}
          />
        </BoxLesson>
      </Box>
    </Wrapper>
  );
};
