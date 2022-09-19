import st from './styles/UserData.module.css';
import swal from 'sweetalert';

import { faHouse, faPersonWalkingDashedLineArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../context/AuthContext';
import { Buttons } from '../../../0-GeneralComp/F-Buttons/Buttons';

export function UserData({ user_ }) {
	const { logout, user } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async () => {
		navigate('/');
		await logout();
	};

	const exit = () => {
		try {
			swal({
				title: '¿Desea cerrar sesión?',
				icon: 'warning',
				buttons: ['No', 'Si'],
			}).then((respuesta) => {
				if (respuesta) {
					handleSubmit();
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className={st.profilePhoto}>
				<img src={user.photoURL} alt="" href="" />
			</div>
			<div className={st.userData}>
				<div className={st.paragraph}>
					<div>{user.displayName}</div>
					<div>{user.email}</div>
					<p>
						Otros datos del usuario
						<br />
						Tema: {user_.theme}
						<br />
						<br />
						fadfadfafdsafaf
					</p>
				</div>
				{/* Aqui estan los botones de la parte inferior de la informacion del usuario */}
				<div className={st.btnP}>
					<div>
						<Buttons
							route="/vitaeslist"
							label="Página principal"
							direction="top"
							btnIconText={faHouse}
							btnClick={() => {
								if (user) {
									navigate('/vitaeslist');
								}
							}}
						/>
					</div>
					<div>
						<Buttons
							route="#"
							label="Cerrar sesión"
							direction="top"
							btnIconText={faPersonWalkingDashedLineArrowRight}
							btnClick={() => {
								if (user) {
									exit();
								}
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
