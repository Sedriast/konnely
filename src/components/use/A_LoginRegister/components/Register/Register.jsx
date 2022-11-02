import st from './Register.module.css';
import { useNavigate } from 'react-router-dom';

import { ValidationErrors } from '../../scripts/ValidationErrors';
import { useAuth } from '../../../../../context/AuthContext';
import swal from 'sweetalert';
import { Inputs } from '../../../0-GeneralComp/1-Inputs/Inputs';
import { useState } from 'react';

export function Register() {
	const { signup } = useAuth();
	const navigate = useNavigate();
	const [cnsST, setCNSST] = useState(true);

	const handleSubmit = async (e) => {
		try {
			await signup(
				e.email + '@ucundinamarca.edu.co',
				e.idIns,
				e.userName,
				e.name,
				e.lastName,
				e.noTel,
				e.password
			).then(() => {
				swal({
					title: 'Verifique su cuenta en la bandeja de su correo electronico',
					icon: 'error',
					button: 'aceptar',
				}).then(() => {
					document.getElementById('formulario').reset();
					navigate('/');
				});
			});
		} catch (error) {
			ValidationErrors(error.code);
			console.log(error);
		}
	};
	function handleChange(e) {}
	return (
		<div className={st.container}>
			<form
				id="formulario"
				onSubmit={(e) => {
					e.preventDefault();
					if (e.target.password.value === e.target.authpassword.value) {
						handleSubmit({
							userName: e.target.email.value,
							name: e.target.name.value,
							lastName: e.target.lastName.value,
							idIns: e.target.idIns.value,
							noTel: e.target.noTel.value,
							email: e.target.email.value,
							password: e.target.password.value,
						});
					} else {
						swal({
							title: 'Las contraseñas no coinciden',
							icon: 'error',
							button: 'aceptar',
						});
					}
				}}
			>
				<div className={cnsST ? st.inpContInc : st.inpCont}>
					<h3 className={cnsST ? st.lblInac : st.lblAc}>Correo electronico</h3>
					<input
						id="email"
						name="email"
						type="text"
						onFocus={() => {
							setCNSST(false);
						}}
						onBlur={() => {
							if (document.getElementById('email').value === '') {
								setCNSST(true);
							}
						}}
					/>
					{cnsST ? <></> : <>@ucundinamarca.edu.co</>}
				</div>

				<Inputs
					name="idIns"
					type="number"
					leyend="Id institucional"
					min="1"
					pattern="^[0-9]+"
					handleChange={handleChange}
				/>
				<Inputs name="name" type="text" leyend="Nombres" handleChange={handleChange} />
				<Inputs name="lastName" type="text" leyend="Apellidos" handleChange={handleChange} />
				<Inputs
					name="noTel"
					type="number"
					leyend="Número telefónico"
					min="1"
					pattern="^[0-9]+"
					handleChange={handleChange}
				/>
				<Inputs name="password" type="password" leyend="Contraseña" handleChange={handleChange} />
				<Inputs
					name="authpassword"
					type="password"
					leyend="Confirma contraseña"
					handleChange={handleChange}
				/>
				<br />
				<br />
				<div className={st.submit}>
					<button type="submit">Registrar</button>
				</div>
			</form>
		</div>
	);
}
