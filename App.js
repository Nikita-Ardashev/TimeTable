import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styled from "styled-components/native";
import { Home } from "./src/screens/Home";
import { Tutorial } from "./src/screens/Tutorial";
import Constants from "expo-constants";

const Wrapper = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

export default function App() {
  const [isTutorialReady, setTutorialReady] = useState(false);
  function renderScreen() {
    if (isTutorialReady) {
      return <Home />;
    } else {
      return <Tutorial setTutorialReady={setTutorialReady} />;
    }
  }
  return (
    <Wrapper>
      {renderScreen()}
      <StatusBar style="auto" />
    </Wrapper>
  );
}
