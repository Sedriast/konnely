import '../../css/Menu/Active.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import swal from 'sweetalert';
import { Data } from './Data';
import { useState } from 'react';
import st from '../../css/Menu/Navbar.module.css';
import { Link } from 'react-router-dom';
import { Buttons } from '../Tools/Buttons/Buttons';

export function Navbar(props) {
	const { logout, user } = useAuth();
	const navigate = useNavigate();
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

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
			<div className={props.clsName}>
				<div className={st.panel_}>
					<Link className={st.link_} to="#">
						<div className={st.gradient_} onClick={showSidebar}>
							<div className={st.moon_} />
						</div>
					</Link>
				</div>
				<nav className={sidebar ? 'menu_ active' : 'menu_'}>
					<ul className={st.items_} onClick={showSidebar}>
						<Buttons clsName={st.toggle_} link_="#" />
						<div className={st.gridMenu}>
							{Data.map((item, index) => {
								return (
									<Buttons key={index} clsName={st.options} text_={item.title} link_={item.path} />
								);
							})}
						</div>
					</ul>
				</nav>
			</div>
		</>
	);
}
