import "./checkbox-group.css";
import React, { useState } from "react";
import { radioData } from "../radioData";

export function RadioSort(props) {
  const { changeCheckBoxArr } = props;

  export function useRadioSort() {
    const [radioDataArr, setradioDataArr] = useState(radioData);
  }

  function changeCheckbox(e) {
    const updatedradioData = radioDataArr.map((item) => {
      if (item.name === e.target.name) {
        return { ...item, state: e.target.checked };
      } else {
        return { ...item, state: false };
      }
    });
    setradioDataArr(updatedradioData);
  }

  return (
    <div className="radioData">
      {radioDataArr.map((item, i) => {
        return (
          <label key={i}>
            <input
              type="radio"
              name={item.name}
              checked={item.state}
              onChange={(e) => {
                changeCheckBoxArr(e);
                changeCheckbox(e);
              }}
            />
            {item.title}
          </label>
        );
      })}
    </div>
  );
}
