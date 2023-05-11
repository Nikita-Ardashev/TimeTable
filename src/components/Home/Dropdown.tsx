import React from "react";
import styled from "styled-components/native";
import { SelectList } from "react-native-dropdown-select-list";
import { Dimensions } from "react-native";

const Arrow = styled.Image`
  width: 24px;
  height: 12px;
`;

export const Dropdown = ({ ArrayForDropdown }) => {
  const [selected, setSelected] = React.useState("");
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
  const windowHeight = Dimensions.get("window").height - 64;
  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={ArrayForDropdown}
      save="value"
      placeholder="Выбирите свою фамилию :)"
      maxHeight={windowHeight}
      searchPlaceholder="Поиск"
      arrowicon={<Arrow source={require("../../assets/arrow.svg")} />}
      closeicon={<Arrow source={require("../../assets/close.svg")} />}
      checkBoxStyles={{
        padding: 0,
      }}
      notFoundText="Таких преподователей нет"
      boxStyles={{
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        borderBottomColor: "#c9c9c9",
        borderBottomWidth: 2,
        // borderRadius: "none",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 64,
        paddingLeft: 16,
        paddingRight: 16,
        zIndex: 0,
      }}
      inputStyles={{
        fontFamily: "RobotoMedium",
        fontStyle: "normal",
        fontSize: 19,
        lineHeight: 22,
        color: "#000000",
        outline: "none",
      }}
      searchPlaceholder={"Поиск..."}
      dropdownStyles={{
        border: "none",
        // borderRadius: "none",
        margin: 0,
        flex: 0,
      }}
      dropdownItemStyles={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#c9c9c9",
        borderBottomWidth: 2,
        height: 64,
        paddingLeft: 16,
        paddingRight: 16,
      }}
      dropdownTextStyles={{
        fontFamily: "RobotoMedium",
        fontStyle: "normal",
        fontSize: 19,
        lineHeight: 22,
        color: "#000000",
      }}
    />
  );
};
