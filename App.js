import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import { Home } from "./src/screens/Home";

const Wrapper = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <Wrapper>
      <Home />
      <StatusBar style="auto" />
    </Wrapper>
  );
}
