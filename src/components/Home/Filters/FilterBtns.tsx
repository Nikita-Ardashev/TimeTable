import React from "react";
import styled from "styled-components/native";
import { Filter } from "./Filter";

const FiltersBtn = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
`;

const FilterBtns = ({ data, funcBtn, dataActive }) => {
  return (
    <FiltersBtn>
      {data.map((obj) => (
        <Filter
          icon={obj.icon}
          text={obj.text}
          name={obj.id}
          key={obj.id}
          func={funcBtn}
          setActive={dataActive[obj.id]}
        />
      ))}
    </FiltersBtn>
  );
};

export default FilterBtns;
