import st from './Ref.module.css';

export function Ref({ stage }) {
	return (
		<>
			{stage[0].title === 'Monta/Servicio' && stage[0].state === true ? (
				<div className={st.panel}>
					<div>Etapa: {stage.title}</div>
					<div>Estado: {stage.state}</div>

					<div>Males: {stage.males}</div>

					<div>Fecha: {stage.date}</div>
				</div>
			) : (
				<></>
			)}
			{stage[1].title === 'Palpacion' && stage[1].state === true ? (
				<div className={st.panel}>
					<div>Etapa: {stage.title}</div>
					<div>Estado: {stage.state}</div>

					<div>Fecha: {stage.date}</div>
				</div>
			) : (
				<></>
			)}
			{stage[2].title === 'Preparto' && stage[2].state === true ? (
				<div className={st.panel}>
					<div>Etapa: {stage.title}</div>
					<div>Estado: {stage.state}</div>

					<div>Fecha: {stage.date}</div>
				</div>
			) : (
				<></>
			)}
			{stage[3].title === 'Parto' && stage[3].state === true ? (
				<div className={st.panel}>
					<div>Etapa: {stage.title}</div>
					<div>Estado: {stage.state}</div>

					<div>Crias vivas: {stage.lives}</div>
					<div>Crias muertas: {stage.deaths}</div>
					<div>Homogeneizados: {stage.homogen}</div>
					<div>Crias totales: {stage.total}</div>

					<div>Fecha: {stage.date}</div>
				</div>
			) : (
				<></>
			)}
			{stage[4].title === 'Destete' && stage[4].state === true ? (
				<div className={st.panel}>
					<div>Etapa: {stage.title}</div>
					<div>Estado: {stage.state}</div>

					<div>Crias destetadas: {stage.total}</div>
					<div>Peso de la camada: {stage.averageWeight}</div>

					<div>Fecha: {stage.date}</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
}
