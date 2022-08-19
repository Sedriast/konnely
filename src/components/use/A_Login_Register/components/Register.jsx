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
			<form id="formulario">
				<div className={st.container}>
					<Inputs
						name_="userName"
						type_="text"
						leyend="Usuario"
						handleChange={handleChange}
					></Inputs>
					<Inputs
						name_="email"
						type_="email"
						leyend="Correo electrónico"
						handleChange={handleChange}
					/>
					<Inputs
						name_="password"
						type_="password"
						leyend="Contraseña"
						handleChange={handleChange}
					/>
					<div className={st.submit}>
						<Buttons id_="correo" click_={handleSubmit} link_="#" text_="Crear" />
					</div>
				</div>
			</form>
		</>
	);
}
