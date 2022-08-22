import st from './styles/LoginRegister.module.css';

import { useState } from 'react';

import { Login } from './components/Login';
import { Register } from './components/Register';

export function LoginRegister() {
	const [tab_, setTab_] = useState(false);
	const select = () => setTab_(!tab_);

	return (
		<>
			<div className={st.container}>
				<ul className={st.tabs}>
					<li onClick={select} className={!tab_ ? st.active : ''}>
						<a href="#tab1">
							<span className={st.text}>Ingresar</span>
						</a>
					</li>
					<li onClick={select} className={tab_ ? st.active : ''}>
						<a href="#tab2">
							<span className={st.text}>Registrar</span>
						</a>
					</li>
				</ul>
				<div className="sections">
					<div className={tab_ ? st.hidden : ''} id="tab1">
						<Login />
					</div>
					<div className={!tab_ ? st.hidden : ''} id="tab2">
						<Register />
					</div>
				</div>
			</div>
		</>
	);
}
