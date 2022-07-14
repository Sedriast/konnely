import { useState } from 'react';
import { Items } from './com/Items';
import st from './css/Diary.module.css';

export function Diary() {
	const [items, setItems] = useState([
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
			title: 'Desarrollo 3',
			category: 'des',
			img: 'img',
			day: 'lun',
			time: '18:00',
		},
		{
			id: 4,
			title: 'Desarrollo 4',
			category: 'des',
			img: 'img',
			day: 'lun',
			time: '18:00',
		},
	]);
	return (
		<>
			<div className={st.container}>
				<div className={st.panel}>
					<Items items={items} />
				</div>
			</div>
		</>
	);
}
