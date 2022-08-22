import st from '../styles/RabbitStadistics.module.css';

export function RabbitStadistics({ reproData }) {
	return (
		<div className={st.stadistics}>
			<div className={st.rej}>Crias rechasadas: {reproData.rechazos}</div>
			<div className={st.dea}>Crias muertas: {reproData.muertes}</div>
			<div className={st.lif}>Crias vivas: {reproData.vivos}</div>
		</div>
	);
}
