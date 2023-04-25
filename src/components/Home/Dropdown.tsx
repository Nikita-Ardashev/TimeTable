import React from "react";
import styled from "styled-components/native";
import Search from "../../../assets/search.svg";
import Close from "../../../assets/close.svg";
import Arrow from "../../../assets/arrow.svg";
import { Dimensions } from "react-native";

const Dimension = Dimensions.get("window").height;

const BoxHeaderDropdown = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 64px;
  padding: 0 20px;
  border-bottom-color: #9c9c9c;
  border-bottom-width: 2px;
  z-index: 1;
`;

const BoxSearch = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  max-width: 80%;
`;

const TextSearch = styled.TextInput`
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  color: black;
  background-color: white;
`;

const BtnTextHeaderDropdown = styled.TouchableOpacity``;

const TextHeaderDropdown = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 22px;
  color: #000000;
`;

const BtnCloseOrSearch = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

const BoxDropdown = styled.ScrollView`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  max-height: ${Dimension - 64}px;
  padding-bottom: 24px;
  position: absolute;
  top: 64px;
  z-index: 0;
`;

const ItemDropdown = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  border-bottom-color: #9c9c9c;
  border-bottom-width: 2px;
  padding: 0 16px;
`;

const ItemTextDropdown = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 22px;
  color: #000000;
`;

export const Dropdown = ({ ArrayForDropdown }) => {
  const [flexList, setFlexList] = React.useState("none");

  const Wrapper = styled.View`
    flex: ${flexList};
    display: flex;
    z-index: 1;
    background-color: white;
  `;

  function toggleFlexList() {
    if (flexList == "none") {
      setFlexList("1");
    } else {
      setFlexList("none");
    }
  }

  function listSort(list, element) {
    let arr = list.sort((a, b) => {
      if (a[element] < b[element]) {
        return -1;
      }
      if (a[element] > b[element]) {
        return 1;
      }
      return 0;
    });
    return arr;
  }
  listSort(ArrayForDropdown, "value");
  const [isSearch, setSearch] = React.useState(true);
  function toggleSearch() {
    setSearch(!isSearch);
    toggleFlexList();
  }
  function renderSearch() {
    if (isSearch) {
      return (
        <Wrapper>
          <BoxHeaderDropdown>
            <BtnTextHeaderDropdown onPress={toggleSearch}>
              <TextHeaderDropdown>Выбирите свою фамилию :)</TextHeaderDropdown>
            </BtnTextHeaderDropdown>

            <BtnCloseOrSearch onPress={toggleSearch}>
              <Arrow />
            </BtnCloseOrSearch>
          </BoxHeaderDropdown>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <BoxHeaderDropdown>
            <BoxSearch>
              <Search />

              <TextSearch
                placeholder="Поиск..."
                placeholderTextColor={"rgba(156, 156, 156, 1)"}
              />
            </BoxSearch>
            <BtnCloseOrSearch onPress={toggleSearch}>
              <Close />
            </BtnCloseOrSearch>
          </BoxHeaderDropdown>
          <BoxDropdown>
            {ArrayForDropdown.map((el) => (
              <ItemDropdown key={el.value}>
                <ItemTextDropdown>{el.value}</ItemTextDropdown>
              </ItemDropdown>
            ))}
          </BoxDropdown>
        </Wrapper>
      );
    }
  }
  return renderSearch();
};
