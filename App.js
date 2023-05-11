import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import { Home } from "./src/screens/Home";
import { Tutorial } from "./src/screens/Tutorial";
import Constants from "expo-constants";

const Wrapper = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

export default function App() {
  return (
    <Wrapper>
      {/* <Home /> */}
      <Tutorial />
      <StatusBar style="auto" />
    </Wrapper>
  );
}
