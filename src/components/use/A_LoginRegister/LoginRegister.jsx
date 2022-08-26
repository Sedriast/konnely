import st from './styles/LoginRegister.module.css';

import { useEffect, useState } from 'react';

import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Option } from './components/Option';

export function LoginRegister() {
	const { user } = useAuth();
	const navigate = useNavigate();
	const [optionSelect, setOptionSelect] = useState(0);

	useEffect(() => {
		if (user) {
			navigate('/vitaeslist');
		}
	}, [navigate, user]);

	return (
		<>
			<div className={st.container}>
				<div className={st.panelContainer}>
					<div className={st.btns}>
						<button
							className={!optionSelect ? st.active_1 : st.inactive_1}
							onClick={() => {
								setOptionSelect(0);
							}}
						>
							Ingresar
						</button>
						<button
							className={optionSelect ? st.active_2 : st.inactive_2}
							onClick={() => {
								setOptionSelect(1);
							}}
						>
							Registrar
						</button>
					</div>
					<Option op={optionSelect} />
				</div>
			</div>
		</>
	);
}
