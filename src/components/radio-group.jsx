import { useRadioSort } from "../assets/hooks/Hook-useRadioSort";
import "./checkbox-group.css";

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
