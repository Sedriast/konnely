import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import st from './Ref.module.css';

export function Ref({ stage }) {
	switch (stage.title) {
		case 'Monta':
			return (
				<div className={st.panel}>
					<h3>{stage.title}</h3>

					<br />

					<div className={st.pt}>
						<h1>Machos: </h1>
						<input type="text" />
					</div>

					<div className={st.pt}>
						<h1>Fecha: </h1>
						<input type="text" />
					</div>
				</div>
			);

		case 'Palpación':
			return (
				<div className={st.panel}>
					<h3>{stage.title}</h3>

					<br />

					<div className={st.pt}>
						<h1>Fecha: </h1>
						<input type="text" />
					</div>
				</div>
			);

		case 'Preparto':
			return (
				<div className={st.panel}>
					<h3>{stage.title}</h3>

					<br />

					<div className={st.pt}>
						<h1>Fecha: </h1>
						<input type="text" />
					</div>
				</div>
			);

		case 'Parto':
			return (
				<div className={st.panel}>
					<h3>{stage.title}</h3>

					<br />

					<div className={st.pt}>
						<h1>Crias vivas: </h1>
						<input type="text" />
					</div>
					<div className={st.pt}>
						<h1>Crias muertas: </h1>
						<input type="text" />
					</div>
					<div className={st.pt}>
						<h1>Homogeneizados: </h1>
						<input type="text" />
					</div>
					<div className={st.pt}>
						<h1>Crias totales: </h1>
						<input type="text" />
					</div>

					<div className={st.pt}>
						<h1>Fecha: </h1>
						<input type="text" />
					</div>
				</div>
			);

		case 'Destete':
			return (
				<div className={st.panel}>
					<h3>{stage.title}</h3>

					<br />

					<div className={st.pt}>
						<h1>Crias destetadas: </h1>
						<input type="text" />
					</div>
					<div className={st.pt}>
						<h1>Peso de la camada: </h1>
						<input type="text" />
					</div>

					<div className={st.pt}>
						<h1>Fecha: </h1>
						<input type="text" />
					</div>
				</div>
			);

		default:
			return <></>;
	}
}
