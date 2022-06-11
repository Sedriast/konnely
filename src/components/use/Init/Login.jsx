import st from './css/Login.module.css';
import { Buttons } from '../Tools/Buttons';
import { Inputs } from '../Tools/Inputs/Inputs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { ValidationErrors } from './ValidationErrors';

export function Login(props) {
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
				<Inputs
					clsName={st.userName}
					name_="email"
					type_="email"
					leyend="Correo electronico"
					handleChange={handleChange}
				/>
				<Inputs
					clsName={st.userPass}
					name_="password"
					type_="password"
					leyend="Contraseña"
					handleChange={handleChange}
				/>
				<Buttons clsName={st.submit} click_={handleSubmit} text_="Iniciar sección" link_="#" />
			</div>
		</>
	);
}
