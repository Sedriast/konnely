import st from './Cards.module.css';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../../../../0-GeneralComp/F-Buttons/Buttons';

export function Cards({ id, date, signs, diagnosis, tratament, result, professional }) {
	return (
		<div className={st.container} id={id}>
			<div className={st.panelId}>Tratamiento: {id}</div>
			<div className={st.btnPanel}>
				<div className={st.btnEdit}>
					<Buttons route="#" label="Editar" direction="bottom" btnIconText={faPen} />
				</div>
				<div className={st.btnTrash}>
					<Buttons route="#" label="Eliminar" direction="bottom" btnIconText={faTrash} />
				</div>
			</div>
			<br />
			<br />
			<hr />
			<br />
			<br />
			<br />
			<div className={st.panelInfo}>
				<table>
					<thead>
						<tr>
							<td>Fecha</td>
							<td>Sintomas</td>
							<td>Diagnostico</td>
							<td>Tratamiento</td>
							<td>Resultados</td>
							<td>Nombre del profecional</td>
						</tr>
					</thead>
				</table>
				<div className={st.sp}>
					<br />
					<div>{date}</div>
				</div>
				<div className={st.sp}>
					<br />
					<div>{signs}</div>
				</div>
				<div className={st.sp}>
					<br />
					<div>{diagnosis}</div>
				</div>
				<div className={st.sp}>
					<br />
					<div>{tratament}</div>
				</div>
				<div className={st.sp}>
					<br />
					<div>{result}</div>
				</div>
				<div className={st.sp}>
					<br />
					<div>{professional}</div>
				</div>
			</div>
		</div>
	);
}
