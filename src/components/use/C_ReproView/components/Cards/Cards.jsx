import st from './Cards.module.css';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../../0-GeneralComp/F-Buttons/Buttons';

export function Cards({ id, editors, state, idMother, stages }) {
	return (
		<div className={st.container} id={id}>
			<div className={st.panelId}>Camada {id}</div>
			<br />
			<hr />
			<br />
			<br />
			<div className={st.panelInfo}>
				<div className={st.sp}>
					Último editor
					<br />
					<div>{editors ? editors[0] : <></>}</div>
				</div>
				<div className={st.sp}>
					Id de la madre:
					<br />
					<div>{idMother}</div>
				</div>
				<div className={st.sp}>Etapas</div>
			</div>
		</div>
	);
}
