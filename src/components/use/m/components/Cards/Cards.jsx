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
				<div className={st.sp}>
					Fecha:
					<br />
					<div>{date}</div>
				</div>
				<div className={st.sp}>
					Sintomas:
					<br />
					<div>{signs}</div>
				</div>
				<div className={st.sp}>
					Diagnostico:
					<br />
					<div>{diagnosis}</div>
				</div>
				<div className={st.sp}>
					Tratamiento:
					<br />
					<div>{tratament}</div>
				</div>
				<div className={st.sp}>
					Resultados:
					<br />
					<div>{result}</div>
				</div>
				<div className={st.sp}>
					Nombre del profecional:
					<br />
					<div>{professional}</div>
				</div>
			</div>
		</div>
	);
}
