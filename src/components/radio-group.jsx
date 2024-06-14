import { useRadioSort } from '../assets/hooks/Hook-useRadioSort';
import React from 'react';
import './checkbox-group.css';

export function RadioSort(props) {
	const { changeCheckBoxArr } = props;
	const [radioDataArr, changeCheckbox] = useRadioSort();
	const [active, setActive] = React.useState(10);

	return (
		<div className="radio-box">
			{radioDataArr.map((item, i) => {
				return (
					<label key={i} className={active == i ? 'label' : 'label active'} onClick={() => setActive(i)}>
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
