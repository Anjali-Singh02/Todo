import React, { Fragment, useState } from 'react';

export const Clock = () => {
	const time = new Date().toLocaleTimeString();
	const date = new Date().toLocaleDateString();
	const [currentTime, setCurrentTime] = useState(time);
	const [currentDate, setCurrentDate] = useState(date);
	const updateTime = () => {
		const time = new Date().toLocaleTimeString();

		setCurrentTime(time);
	};
	const updateDate = () => {
		const date = new Date().toDateString();
		setCurrentDate(date);
	};

	setInterval(updateTime, 1000);
	setInterval(updateDate);

	return (
		<Fragment>
			<div className="clockContainer">
				<div>{currentDate}</div>
				<div>{currentTime}</div>
			</div>
		</Fragment>
	);
};
