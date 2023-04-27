import React, { useState } from 'react';

export const Clock = () => {
	const time = new Date().toLocaleTimeString();

	const [currentTime, setCurrentTime] = useState(time);
	const updateTime = () => {
		const time = new Date().toLocaleTimeString();
		setCurrentTime(time);
	};
	setInterval(updateTime, 1000);

	return <div className="clockContainer">{currentTime}</div>;
};
