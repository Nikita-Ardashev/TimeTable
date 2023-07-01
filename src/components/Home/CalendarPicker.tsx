import React, { useState } from "react";
import Arrow from "../../../assets/arrow.svg";
import styled from "styled-components/native";
import { Calendar, LocaleConfig } from "react-native-calendars";

const Wrapper = styled.Modal``;

const ArrowBox = styled.View``;

const Box = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Shadow = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.25;
`;

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "октябрь",
  "Ноябрь",
  "Декабрь",
];

LocaleConfig.locales["Rus"] = {
  monthNames: months,
  dayNames: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  today: "Сегодня",
};

LocaleConfig.defaultLocale = "Rus";

export const CalendarPicker = ({ view, setView, setSelected, selected }) => {
  return (
    <Wrapper animationType="fade" transparent={true} visible={view}>
      <Box>
        <Calendar
          firstDay={1}
          monthFormat={"MMMM"}
          onDayPress={(day) => {
            setSelected(day.dateString);
            setView(false);
          }}
          onDayLongPress={(day) => {
            console.log(day.day);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
            },
          }}
          style={{
            backgroundColor: "#FFFFFE",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 16,
            borderRadius: 16,
            width: 320,
            paddingBottom: 4,
          }}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            textSectionTitleColor: "black",
            selectedDayBackgroundColor: "#05D171",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#05D171",
            dayTextColor: "#000",
            textDayStyle: {
              marginTop: 2,
              textAlign: "center",
            },
            textDisabledColor: "#9c9c9c",
            textDayHeaderFontFamily: "Roboto",
            textDayHeaderFontSize: 20,
            textDayHeaderFontWeight: "400",
            textMonthFontFamily: "Roboto",
            textMonthFontSize: 28,
            textMonthFontWeight: "500",
            monthTextColor: "black",
            textDayFontFamily: "Roboto",
            textDayFontSize: 20,
            textDayFontWeight: "300",
            arrowHeight: 24,
            arrowWidth: 24,
          }}
          textDayStyle={{ backgroundColor: "blue" }}
          renderArrow={(direction) =>
            direction === "left" ? (
              <ArrowBox style={{ transform: [{ rotate: "90deg" }] }}>
                <Arrow />
              </ArrowBox>
            ) : (
              <ArrowBox style={{ transform: [{ rotate: "-90deg" }] }}>
                <Arrow />
              </ArrowBox>
            )
          }
        />
      </Box>
      <Shadow />
    </Wrapper>
  );
};
