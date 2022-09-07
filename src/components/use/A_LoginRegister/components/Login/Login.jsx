import swal from 'sweetalert';
import st from './Login.module.css';

import { useAuth } from '../../../../../context/AuthContext';
import { ValidationErrors } from '../../scripts/ValidationErrors';
import { useNavigate } from 'react-router-dom';

export function Login() {
	const navigate = useNavigate();
	const { login, user } = useAuth();
	console.log(user);

	const handleSubmit = async (e) => {
		try {
			await login(e.email, e.password);
		} catch (error) {
			ValidationErrors(error.code);
		}
	};
	if (user !== null && user.emailVerified === true) {
		navigate('/vitaeslist');
	} else {
		swal({
			title: 'Verifique su cuenta en la bandeja de su correo electronico',
			icon: 'error',
			button: 'aceptar',
		});
	}
	return (
		<>
			<div className={st.container}>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit({ email: e.target.email.value, password: e.target.password.value });
					}}
				>
					<div className={st.inpCont}>
						<h3>Usuario institucional</h3>
						<input name="email" type="email" />
					</div>
					<div className={st.inpCont}>
						<h3>Contraseña</h3>
						<input name="password" type="password" />
					</div>
					<div className={st.submit}>
						<button type="submit">Iniciar sesión</button>
					</div>
				</form>
			</div>
		</>
	);
}
