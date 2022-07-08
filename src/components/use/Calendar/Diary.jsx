import { useState } from 'react';
import { Header } from './com/Header';
import st from './css/Calendar.module.css';

export function Diary() {
	const items = [
		{
			id: 1,
			title: 'Desarrollo 1',
			category: 'des',
			img: 'img',
			day: 'lun',
			time: '18:00',
		},
		{
			id: 2,
			title: 'Desarrollo 2',
			category: 'des',
			img: 'img',
			day: 'lun',
			time: '18:00',
		},
		{
			id: 3,
			title: 'Desarrollo 1',
			category: 'lo',
			img: 'img',
			day: 'lun',
			time: '18:00',
		},
		{
			id: 4,
			title: 'Desarrollo 1',
			category: 'desarrollo',
			img: 'img',
			day: 'lun',
			time: '18:00',
		},
	];
	return (
		<>
			<div className={st.container}>
				<div className={st.rows}>
					<Header />
					<Items items={items} />
				</div>
			</div>
		</>
	);
}
