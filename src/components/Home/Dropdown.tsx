import React from "react";
import styled from "styled-components/native";
import { SelectList } from "react-native-dropdown-select-list";
import { Dimensions } from "react-native";
import SearchIcon from "../../../assets/search.svg";
import CloseIcon from "../../../assets/close.svg";
import ArrowIcon from "../../../assets/arrow.svg";

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
  const windowHeight = Dimensions.get("window").height;
  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={ArrayForDropdown}
      save="value"
      placeholder="Выбирите свою фамилию :)"
      maxHeight={windowHeight}
      searchPlaceholder="Поиск"
      arrowicon={<ArrowIcon />}
      closeicon={<CloseIcon />}
      searchicon={<SearchIcon />}
      notFoundText="Таких преподователей нет"
      boxStyles={{
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: "#c9c9c9",
        borderBottomWidth: 2,
        backgroundColor: "white",
        borderRadius: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
        paddingLeft: 16,
        paddingRight: 16,
        gap: 8,
        zIndex: 0,
      }}
      inputStyles={{
        paddingLeft: 12,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 19,
        lineHeight: 22,
        color: "#000000",
      }}
      searchPlaceholder={"Поиск..."}
      dropdownStyles={{
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        marginTop: 0,
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
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 19,
        lineHeight: 22,
        color: "#000000",
      }}
    />
  );
};
