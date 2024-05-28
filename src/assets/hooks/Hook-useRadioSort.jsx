import React, { useState } from "react";
import { radioData } from "../../radioData";

export function useRadioSort() {
  const [radioDataArr, setradioDataArr] = useState(radioData);

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

  return [radioDataArr, changeCheckbox];
}
