import "./checkbox-group.css";
import React, { useState } from "react";

const checkBoxes = [
  {
    title: "Электроника",
    name: "electro",
    state: false,
  },
  {
    title: "Одежда",
    name: "ropa",
    state: false,
  },
  {
    title: "Игрушки",
    name: "toys",
    state: false,
  },
  {
    title: "Товары для дома",
    name: "forhome",
    state: false,
  },
];

export function CheckboxSort(props) {
  const { changeCheckBoxArr } = props;
  const [checkBoxesArr, setCheckBoxesArr] = useState(checkBoxes);

  function changeCheckbox(e) {
    const updatedCheckboxes = checkBoxesArr.map((item) => {
      if (item.name === e.target.name) {
        return { ...item, state: e.target.checked };
      } else {
        return { ...item, state: false };
      }
    });
    setCheckBoxesArr(updatedCheckboxes);
  }

  return (
    <div className="checkboxes">
      {checkBoxesArr.map((item, i) => {
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
{
  /* <label>
<input type="checkbox" />
Электроника
</label> */
}
