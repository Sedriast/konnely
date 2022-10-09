import st from './Login.module.css';

import { useAuth } from '../../../../../context/AuthContext';
import { ValidationErrors } from '../../scripts/ValidationErrors';
import { useNavigate } from 'react-router-dom';

export function Login() {
	const navigate = useNavigate();
	const { login } = useAuth();

	const handleSubmit = async (e) => {
		try {
			await login(e.email + '@ucundinamarca.edu.co', e.password).then(() => {
				navigate('/vitaeslist');
			});
		} catch (error) {
			ValidationErrors(error.code);
		}
	};
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
						<input name="email" type="text" />
					</div>
					<div className={st.inpCont}>
						<h3>Contraseña</h3>
						<input name="password" type="password" />
					</div>
					<div className={st.submit}>
						<button type="submit">Iniciar sesión</button>
					</div>
					<div className={st.forgot}>
						<a href="">Olvidé mi contraseña</a>
					</div>
				</form>
			</div>
		</>
	);
}
