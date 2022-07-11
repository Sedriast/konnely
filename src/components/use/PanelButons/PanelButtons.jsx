import swal from 'sweetalert';
import st from './css/PanelButtons.module.css';

import { Data } from './Data';
import { useNavigate } from 'react-router-dom';
import { Buttons } from '../Tools/Buttons/Buttons';
import { useAuth } from '../../../context/AuthContext';

export function PanelButtons(props) {
	const { logout, user } = useAuth();
	const navigate = useNavigate();

	const Logout_ = () => {
		try {
			swal({
				title: '¿Desea cerrar sesión?',
				icon: 'warning',
				buttons: ['No', 'Si'],
			}).then((respuesta) => {
				if (respuesta) {
					handleSubmit2();
					navigate('/');
				}
			});
		} catch (error) {}
	};
	const handleSubmit2 = async () => {
		await logout();
	};

	return (
		<>
			<div className={st.container}>
				<div className={st.opUser}>
					<Buttons link_="/users" icon_={user.photoURL} />
				</div>
				{Data.map((item, index) => {
					return (
						<div key={index} className={st.op}>
							<Buttons link_={item.path} cliLoa_={props.loading_} icon_={item.icon} />
						</div>
					);
				})}
				<div className={st.op}>
					<Buttons
						click_={() => {
							if (user) {
								Logout_();
							}
						}}
						link_="#"
					/>
				</div>

				{/* <div className={st.op}>
					<Buttons link_="/list" cliLoa_={props.loading_} icon_={ojo} />
				</div>
				<div className={st.op}>
					<Buttons link_="/invoice" cliLoa_={props.loading_} />
				</div>
				<div className={st.op}>
					<Buttons link_="/" cliLoa_={props.loading_} />
				</div>
				<div className={st.op}>
					<Buttons link_="/" cliLoa_={props.loading_} />
				</div>
				<div className={st.op}>
					<Buttons link_="/" cliLoa_={props.loading_} />
				</div>
				<div className={st.op}>
					<Buttons link_="/form" cliLoa_={props.loading_} icon_={ojo} />
				</div> */}
			</div>
		</>
	);
}
