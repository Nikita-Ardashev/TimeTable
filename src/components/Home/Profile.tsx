import React from "react";
import styled from "styled-components/native";
import ReturnArrowIcon from "../../../assets/Home/ReturnArrow.svg";
import NoteIcon from "../../../assets/Home/NoteIcon.svg";
import LessonIcon from "../../../assets/Home/LessonIcon.svg";
import { Note } from "./Note";

const Wrapper = styled.Modal``;

const Box = styled.View`
  display: flex;
  gap: 16px;
  width: 100%;
  height: 100%;
  background-color: #e5ebf0;
`;

const Header = styled.View`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
const FirstBoxHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  height: 56px;
  width: 100%;
  padding: 16px;
`;
const ReturnArrow = styled.TouchableOpacity``;
const Title = styled.Text`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  color: black;
`;
const ProfileInfo = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 16px;
  height: 144px;
  position: relative;
  background-color: white;
  margin-top: 64px;
  border-radius: 16px;
`;
const BoxAvatar = styled.View`
  background-color: black;
  position: absolute;
  border-radius: 64px;
  border: 4px solid white;
  width: 100px;
  height: 100px;
  top: -40%;
`;
const BoxName = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const Name = styled.Text`
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  color: black;
`;
const LastEdit = styled.Text`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #616161;
`;
const Main = styled.View`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: white;
  height: 100%;
  border-radius: 16px;
`;
const Btns = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 12px;
`;
const Btn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const BtnText = styled.Text`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`;

const Notes = styled.View`
  display: flex;
  flex-direction: column;
`;

const NoteBtn = styled.TouchableOpacity``;

export const Profile = ({ view, setView }) => {
  function ViewProfile() {
    setView(false);
  }
  return (
    <Wrapper animationType="slide" transparent={true} visible={view}>
      <Box>
        <Header>
          <FirstBoxHeader>
            <ReturnArrow onPress={ViewProfile}>
              <ReturnArrowIcon />
            </ReturnArrow>
            <Title>Главная</Title>
          </FirstBoxHeader>
          <ProfileInfo>
            <BoxAvatar></BoxAvatar>
            <BoxName>
              <Name>Перевозчиков</Name>
              <LastEdit>01.01.2000</LastEdit>
            </BoxName>
          </ProfileInfo>
        </Header>
        <Main>
          <Btns>
            <Btn>
              <NoteIcon />
              <BtnText>Заметки</BtnText>
            </Btn>
            <Btn>
              <LessonIcon />
              <BtnText>Пары</BtnText>
            </Btn>
          </Btns>
          <Notes>
            <NoteBtn>
              <Note
                TitleNote={"Title"}
                DateNote={"01.01.2000"}
                MainTextNote={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                }
              />
            </NoteBtn>
          </Notes>
        </Main>
      </Box>
    </Wrapper>
  );
};
