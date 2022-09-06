import st from './styles/VitaeIsList.module.css';

import { generalOptions } from '../0-GeneralComp/0-StaticData/generalOptions';

//import { Option } from './components/Option';
import { useState } from 'react';
import { RigthTopButtons } from '../0-GeneralComp/0-PanelButtons/RigthTopButtons/RigthTopButtons';

export function ViewIsList() {
	const [optionSelect, setOptionSelect] = useState(0);
	return (
		<>
			<div className={st.leftMenu}>
				{optionSelect === 1 ? (
					<figure title="Atrás" tooltip-dir="rigth">
						<button
							className={st.btnBack}
							onClick={() => {
								setOptionSelect(0);
							}}
						>
							❌
						</button>
					</figure>
				) : (
					<figure title="Nuevo conejo" tooltip-dir="rigth">
						<button
							className={st.btnNew}
							onClick={() => {
								setOptionSelect(1);
							}}
						>
							➕
						</button>
					</figure>
				)}
			</div>
			{/* <div className={st.opSel_}>
				<Option op={optionSelect} />
			</div> */}
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}
