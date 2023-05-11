import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7.5%;
  width: 100%;
  object-fit: fill;
`;

const MainImg = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 232px;
  height: 232px;
  margin-bottom: 10%;
`;

const BoxText = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  max-width: 85%;
`;

const TextHeader = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 35px;
  text-align: center;
`;

const Text = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
`;

export const SwiperItem = ({ ImgSource, Title, MainText }) => {
  return (
    <Wrapper>
      <MainImg>{ImgSource}</MainImg>
      <BoxText>
        <TextHeader>{Title}</TextHeader>
        <Text>{MainText} </Text>
      </BoxText>
    </Wrapper>
  );
};
