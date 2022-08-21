import st from './styles/VitaeIsList.module.css';

import { Option } from './components/Option';
import { useState } from 'react';

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
			<Option op={optionSelect} />
		</>
	);
}
