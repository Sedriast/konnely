import st from './css/Register.module.css';
import { Buttons } from '../Tools/Buttons/Buttons';
import { Inputs } from '../Tools/Inputs/Inputs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export function Register(props) {
	const { signup, notification_err } = useAuth();

	const [user, setUser] = useState({
		userName: '',
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
			await signup(user.userName, user.email, user.password);
			navigate('/list');
		} catch (error) {
			notification_err(error.code, 'error', 'aceptar');
		}
	};
	return (
		<>
			<div className={st.container}>
				<Inputs
					clsName={st.userName}
					name_="userName"
					type_="text"
					leyend="Usuario"
					handleChange={handleChange}
				></Inputs>
				<Inputs
					clsName={st.userEmail}
					name_="email"
					type_="email"
					leyend="Correo electronico"
					handleChange={handleChange}
				></Inputs>
				<Inputs
					clsName={st.userPass}
					name_="password"
					type_="password"
					leyend="Contraseña"
					handleChange={handleChange}
				></Inputs>
				<div className={st.submit}>
					<Buttons click_={handleSubmit} link_="#" text_="Crear"></Buttons>
				</div>
			</div>
		</>
	);
}
