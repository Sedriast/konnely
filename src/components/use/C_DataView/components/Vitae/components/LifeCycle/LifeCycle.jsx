import st from './LifeCycle.module.css';

import { useState } from 'react';

//import { lifeCycleChild } from '../../../../../../0-GeneralComp/0-Dates/Dates';
import { stages } from '../../../../../0-GeneralComp/0-fakeData/liveCycle';
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
							btnIconText="❌"
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
							btnIconText="✏️"
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
					<FormCards stageId={102222} info={stages} />
				) : (
					<Cards stageId={102222} info={stages} />
				)}
			</div>
		</>
	);
}
