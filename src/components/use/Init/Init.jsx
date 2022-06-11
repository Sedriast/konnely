import { useState } from 'react';
import st from './css/Init.module.css';
import { Login } from './Login';
import { Register } from './Register';
// import { Login } from './Login';
// import { Register } from './Register';

export function Init() {
	const [tab_, setTab_] = useState(false);
	const select = () => setTab_(!tab_);

	return (
		<>
			<div className={st.container}>
				<div className={st.panel}>
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
						<div className={!tab_ ? st.hidden : ''} id="tab2">
							<Register />
						</div>
						<div className={tab_ ? st.hidden : ''} id="tab1">
							<Login />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
