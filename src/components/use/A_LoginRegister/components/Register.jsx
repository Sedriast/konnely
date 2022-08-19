import st from '../styles/Register.module.css';
import swal from 'sweetalert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Inputs } from '../../Tools/Inputs/Inputs';
import { Buttons } from '../../Tools/Buttons/Buttons';
import { ValidationErrors } from '../scripts/ValidationErrors';
import { useAuth } from '../../../../context/AuthContext';

export function Register() {
	const { signup, logout } = useAuth();
	const navigate = useNavigate();
	const [newuser, setUser] = useState({
		userName: '',
		email: '',
		password: '',
		phone: '',
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setUser({ ...newuser, [name]: value });
	}

	const handleSubmit = async (e) => {
		try {
			await signup(
				e.target.id,
				newuser.userName,
				newuser.email,
				newuser.password,
				'+57' + newuser.phone
			);
			swal({
				title:
					'Debe verificar su cuenta en la bandeja de entrada de tu correo, si no lo encuentra hay puede buscarlo en el apartado de “spam” o “correos no deseados”.',
				icon: 'warning',
				buttons: 'Aceptar',
			}).then((respuesta) => {
				if (respuesta || !respuesta) {
					cerrarSesion();
					document.getElementById('formulario').reset();
					navigate('/#tab1');
				}
			});
		} catch (error) {
			ValidationErrors(error.code);
			console.log(error);
		}
	};
	const cerrarSesion = async () => {
		await logout();
	};
	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit({ email: e.target.email.value, password: e.target.password.value });
				}}
			>
				<div className={st.container}>
					<div className={st.inpCont}>
						<h3>Nombre de usuario</h3>
						<input name="userName" type="text" />
					</div>
					<div className={st.inpCont}>
						<h3>Correo electronico</h3>
						<input name="email" type="email" />
					</div>
					<div className={st.inpCont}>
						<h3>Contraseña</h3>
						<input name="password" type="password" />
					</div>
					<div className={st.submit}>
						<button type="submit">Registrar</button>
					</div>
				</div>
			</form>
		</>
	);
}
