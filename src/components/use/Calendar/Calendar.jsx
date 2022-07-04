import { useState } from 'react';
import st from './css/Calendar.module.css';

export function Calendar() {
	var monthNames = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Augosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Deciembre',
	];

	var currentDate = new Date();
	var [currentDay, setCurrentDay] = useState(currentDate.getDate());
	var [monthNumber, setMonthNumber] = useState(currentDate.getMonth());
	var [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

	const lastMonth = () => {
		if (monthNumber !== 0) {
			monthNumber--;
		} else {
			monthNumber = 11;
			currentYear--;
		}

		setNewDate();
	};

	const nextMonth = () => {
		if (monthNumber !== 11) {
			monthNumber++;
		} else {
			monthNumber = 0;
			currentYear++;
		}

		setNewDate();
	};

	const setNewDate = () => {
		currentDate.setFullYear(currentYear, monthNumber, currentDay);
		setMonthNumber();
		setCurrentYear();

		// month.textContent = monthNames[monthNumber];
		// year.textContent = currentYear.toString();
		// dates.textContent = '';
		//	writeMonth(monthNumber);
	};

	// var dates = document.getElementById('dates');
	// var month = document.getElementById('month');
	// var year = document.getElementById('year');

	// var prevMonthDOM = document.getElementById('prev-month');
	// var nextMonthDOM = document.getElementById('next-month');

	// month.textContent = monthNames[monthNumber];
	// year.textContent = currentYear.toString();

	// prevMonthDOM.addEventListener('click', () => lastMonth());
	// nextMonthDOM.addEventListener('click', () => nextMonth());

	// const writeMonth = (month) => {
	// 	for (let i = startDay(); i > 0; i--) {
	// 		dates.innerHTML += (
	// 			<div class="calendar__date calendar__item calendar__last-days">
	// 				${getTotalDays(monthNumber - 1) - (i - 1)}
	// 			</div>
	// 		);
	// 	}

	// 	for (let i = 1; i <= getTotalDays(month); i++) {
	// 		if (i === currentDay) {
	// 			dates.innerHTML += <div class="calendar__date calendar__item calendar__today">${i}</div>;
	// 		} else {
	// 			dates.innerHTML += <div class="calendar__date calendar__item">${i}</div>;
	// 		}
	// 	}
	// };

	// const getTotalDays = (month) => {
	// 	if (month === -1) month = 11;

	// 	if (
	// 		month == 0 ||
	// 		month == 2 ||
	// 		month == 4 ||
	// 		month == 6 ||
	// 		month == 7 ||
	// 		month == 9 ||
	// 		month == 11
	// 	) {
	// 		return 31;
	// 	} else if (month == 3 || month == 5 || month == 8 || month == 10) {
	// 		return 30;
	// 	} else {
	// 		return isLeap() ? 29 : 28;
	// 	}
	// };

	// const isLeap = () => {
	// 	return (currentYear % 100 !== 0 && currentYear % 4 === 0) || currentYear % 400 === 0;
	// };

	// const startDay = () => {
	// 	let start = new Date(currentYear, monthNumber, 1);
	// 	return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
	// };

	// writeMonth(monthNumber);

	return (
		<>
			<div className={st.container}>
				<div className={st.panel}>
					<div className={st.info}>
						<button className={st.prec} onClick={lastMonth} id="prev-month">
							&#9664;
						</button>
						<div className={st.month} id="month">
							{monthNames[monthNumber]}
						</div>
						<div className={st.year} id="year">
							{currentYear.toString()}
						</div>
						<div className={st.next} onClick={nextMonth} id="next-month">
							&#9654;
						</div>
					</div>

					<div class={st.week}>
						<div className="calendar__day calendar__item">Lun</div>
						<div className="calendar__day calendar__item">Mar</div>
						<div className="calendar__day calendar__item">Mie</div>
						<div className="calendar__day calendar__item">Jue</div>
						<div className="calendar__day calendar__item">Vie</div>
						<div className="calendar__day calendar__item">Sab</div>
						<div className="calendar__day calendar__item">Dom</div>
					</div>

					<div class="calendar__dates" id="dates"></div>
				</div>
			</div>
		</>
	);
}
