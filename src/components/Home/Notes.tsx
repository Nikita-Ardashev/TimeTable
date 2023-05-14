import React, { useState } from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  background-color: white;
  border-radius: 16px;
  width: 320px;
  height: 400px;
`;

const Note = styled.TextInput`
  padding: 24px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
`;

export const Notes = () => {
  const [value, onChangeText] = useState("");
  return (
    <Wrapper>
      <Note
        placeholder={"Напишите что нибудь..."}
        editable
        multiline
        onChangeText={(text) => onChangeText(text)}
        value={value}
        numberOfLines={1}
        autoFocus={true}
      ></Note>
    </Wrapper>
  );
};
