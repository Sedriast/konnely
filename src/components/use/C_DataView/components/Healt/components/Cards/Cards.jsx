import st from './Cards.module.css';

import { Link } from 'react-router-dom';

export function Cards({ id, date, signs, diagnosis, tratament, result, professional }) {
	return (
		<div className={st.container} id={id}>
			<div className={st.panelId}>Tratamiento: {id}</div>
			<br />
			<br />
			<hr />
			<br />
			<br />
			<br />
			<div className="sp">
				Fecha:
				<br />
				<div>{date}</div>
			</div>
			<div className="sp">
				Sintomas:
				<br />
				<div>{signs}</div>
			</div>
			<div className="sp">
				Diagnostico:
				<br />
				<div>{diagnosis}</div>
			</div>
			<div className="sp">
				Tratamiento:
				<br />
				<div>{tratament}</div>
			</div>
			<div className="sp">
				Resultados:
				<br />
				<div>{result}</div>
			</div>
			<div className="sp">
				Nombre del profecional:
				<br />
				<div>{professional}</div>
			</div>
		</div>
	);
}
