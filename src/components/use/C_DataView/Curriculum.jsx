import st from './styles/Com.module.css';

import { Vitae } from './Vitae';
import { useState } from 'react';
import { Items } from './com/Items';

export function Curriculum() {
	const [tab_, setTab_] = useState(false);
	const select = () => setTab_(!tab_);
	return (
		<div className={st.con}>
			<ul className={st.tabs}>
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
			</div>
		</div>
	);
}
