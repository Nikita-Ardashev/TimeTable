import React from "react";
import styled from "styled-components/native";
import { FilterField } from "./FilterField";

const FiltersField = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterFields = ({ data, dataActive }) => {
  return (
    <FiltersField>
      {data.map((obj) =>
        dataActive[obj.id] ? (
          <FilterField
            titleText={obj.current.title}
            text={obj.current.text}
            currentText={obj.current.current}
            key={obj.current.id}
          />
        ) : (
          ""
        )
      )}
    </FiltersField>
  );
};

export default FilterFields;
