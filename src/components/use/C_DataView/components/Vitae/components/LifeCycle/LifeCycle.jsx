import st from './LifeCycle.module.css';

import { useState } from 'react';

import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../../../../0-GeneralComp/F-Buttons/Buttons';

import { Cards } from './Cards/Cards';
import { FormCards } from './FormCards/FormCards';

export function LifeCycle({ stageId, info }) {
	const [edit, setEdit] = useState(false);

	return (
		<>
			<br />
			<div className={st.tit}>
				Ciclo de vida
				{edit ? (
					<div>
						<Buttons
							route="#"
							label="Cancelar"
							direction="bottom"
							btnIconText={faXmark}
							btnClick={() => {
								setEdit(false);
							}}
						/>
					</div>
				) : (
					<div>
						<Buttons
							route="#"
							label="Editar"
							direction="bottom"
							btnIconText={faPenToSquare}
							btnClick={() => {
								setEdit(true);
							}}
						/>
					</div>
				)}
			</div>
			<br />
			<br />
			<br />
			{/*stageId !== null ? (
				<div className={st.panel}>
					<Cards stageId={stageId} info={lifeCycleChild[info]} />
				</div>
				) : (
					<></>
				)*/}
			<div className={st.panel}>
				{edit ? (
					<FormCards stageId={stageId} info={info} />
				) : (
					<Cards stageId={stageId} info={info} />
				)}
			</div>
		</>
	);
}
