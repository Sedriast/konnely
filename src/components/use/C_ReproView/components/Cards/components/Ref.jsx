import st from './Ref.module.css';

export function Ref({ stage }) {
	switch (stage.title) {
		case 'Monta':
			return (
				<div className={st.panel}>
					<div>Etapa: {stage.title}</div>
					<div>Estado: {stage.state}</div>

					<div>Males: {stage.males}</div>

					<div>Fecha: {stage.date}</div>
				</div>
			);
		case 'Palpación':
			return (
				<div className={st.panel}>
					<div>Etapa: {stage.title}</div>
					<div>Estado: {stage.state}</div>

					<div>Fecha: {stage.date}</div>
				</div>
			);
		case 'Preparto':
			return (
				<div className={st.panel}>
					<div>Etapa: {stage.title}</div>
					<div>Estado: {stage.state}</div>

					<div>Fecha: {stage.date}</div>
				</div>
			);
		case 'Parto':
			return (
				<div className={st.panel}>
					<div>Etapa: {stage.title}</div>
					<div>Estado: {stage.state}</div>

					<div>Crias vivas: {stage.lives}</div>
					<div>Crias muertas: {stage.deaths}</div>
					<div>Homogeneizados: {stage.homogen}</div>
					<div>Crias totales: {stage.total}</div>

					<div>Fecha: {stage.date}</div>
				</div>
			);
		case 'Destete':
			return (
				<div className={st.panel}>
					<div>Etapa: {stage.title}</div>
					<div>Estado: {stage.state}</div>

					<div>Crias destetadas: {stage.total}</div>
					<div>Peso de la camada: {stage.averageWeight}</div>

					<div>Fecha: {stage.date}</div>
				</div>
			);
		default:
			break;
	}
}
