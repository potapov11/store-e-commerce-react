import "./checkbox-group.css";
import { useRadioSort } from "../assets/hooks/Hook-useRadioSort";

export function RadioSort(props) {
  const { changeCheckBoxArr } = props;
  const [radioDataArr, changeCheckbox] = useRadioSort();

  return (
    <div className="radio-box">
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
