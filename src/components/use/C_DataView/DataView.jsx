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
			{/* <ul className={st.tabs}>
				<li onClick={select} className={!tab_ ? st.active : ''}>
					<a href="#tab1">
						<span className={st.text}>Datos</span>
					</a>
				</li>
				<li onClick={select} className={tab_ ? st.active : ''}>
					<a href="#tab2">
						<span className={st.text}>Salud</span>
					</a>
				</li>
			</ul>
			<div className="sections">
				<div className={tab_ ? st.hidden : ''} id="tab1">
					<Vitae />
				</div>
				<div className={!tab_ ? st.hidden : ''} id="tab2">
					<Items />
				</div>
			</div> */}
		</div>
	);
}
