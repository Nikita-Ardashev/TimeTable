import React, { useState } from "react";
import styled from "styled-components/native";
import CloseIcon from "../../../assets/CloseIcon.svg";

const Wrapper = styled.Modal``;

const Box = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const BoxNote = styled.View`
  display: flex;
  background-color: white;
  border-radius: 16px;
  width: 95%;
  height: 80%;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #e5ebf0;
  padding: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const NoteName = styled.TextInput`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
`;

const Close = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

const Note = styled.TextInput`
  padding: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
`;

const Shadow = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.25;
`;

export const Notes = ({ view, setView }) => {
  const [value, onChangeText] = useState("");

  function ViewNote() {
    setView(false);
  }
  return (
    <Wrapper animationType="fade" transparent={true} visible={view}>
      <Box>
        <BoxNote>
          <Header>
            <NoteName placeholder={"Название заметки"} />
            <Close onPress={ViewNote}>
              <CloseIcon />
            </Close>
          </Header>
          <Note
            placeholder={"Напишите что нибудь..."}
            editable
            multiline
            onChangeText={(text) => onChangeText(text)}
            value={value}
            numberOfLines={1}
            autoFocus={true}
          ></Note>
        </BoxNote>
      </Box>
      <Shadow />
    </Wrapper>
  );
};
