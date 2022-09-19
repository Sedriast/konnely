import st from './New.module.css';

export function Card({ litter }) {
	return (
		<div className={st.container}>
			{litter[0].stages.map(() => {
				<div></div>;
			})}
		</div>
	);
}
