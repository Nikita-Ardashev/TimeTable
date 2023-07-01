import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styled from "styled-components/native";
import { Home } from "./src/screens/Home";
import Constants from "expo-constants";

const Wrapper = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

export default function App() {
  function renderScreen() {
    if (true) {
      return <Home />;
    }
  }
  return (
    <Wrapper>
      {renderScreen()}
      <StatusBar style="auto" />
    </Wrapper>
  );
}
