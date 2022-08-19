import st from '../styles/Login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Inputs } from '../../Tools/Inputs/Inputs';
import { Buttons } from '../../Tools/Buttons/Buttons';
import { ValidationErrors } from '../scripts/ValidationErrors';
import { useAuth } from '../../../../context/AuthContext';

export function Login() {
	const { login } = useAuth();

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	function handleChange(e) {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await login(user.email, user.password);
			navigate('/list');
		} catch (error) {
			ValidationErrors(error.code);
		}
	};

	return (
		<>
			<div className={st.container}>
				<div className={st.inpCont}>
					<Inputs
						name_="email"
						type_="email"
						leyend="Correo electrónico"
						handleChange={handleChange}
					/>
				</div>
				<div className={st.inpCont}>
					<Inputs
						name_="password"
						type_="password"
						leyend="Contraseña"
						handleChange={handleChange}
					/>
				</div>
				<div className={st.submit}>
					<Buttons text_="Iniciar sesión" link_="#" click_={handleSubmit} />
				</div>
			</div>
		</>
	);
}
