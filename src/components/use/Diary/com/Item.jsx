import st from '../css/Com.module.css';

export function Item({ item }) {
	return (
		<div className={st.container}>
			<div>
				<img src={item.img} alt="" />
			</div>
			<p>{item.day}</p>
			<div>
				{item.title}-{item.category}
			</div>
			<div className={st.del}>&#8855;</div>
		</div>
	);
}
