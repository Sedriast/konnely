import st from './styles/DataView.module.css';

import { useState } from 'react';
import { Option } from './components/Option';

export function DataView() {
	const [optionSelect, setOptionSelect] = useState(0);

	return (
		<div className={st.container}>
			<div className={st.leftMenu}>
				<figure title="Información general" tooltip-dir="rigth">
					<button
						className={st.btnInfo}
						onClick={() => {
							setOptionSelect(0);
						}}
					>
						ℹ️
					</button>
				</figure>

				<figure title="Salud" tooltip-dir="rigth">
					<button
						className={st.btnHealt}
						onClick={() => {
							setOptionSelect(1);
						}}
					>
						❤️‍🩹
					</button>
				</figure>
			</div>
			<div className={st.opSel_}>
				<Option op={optionSelect} />
			</div>
		</div>
	);
}
