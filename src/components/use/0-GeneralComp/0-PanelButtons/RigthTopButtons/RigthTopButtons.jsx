import st from './RigthTopButtons.module.css';

import { Link } from 'react-router-dom';
import { useAuth } from '../../../../../context/AuthContext';
import { Buttons } from '../../F-Buttons/Buttons';

export function RigthTopButtons({ BTNS }) {
	const { user } = useAuth();
	return (
		<>
			<div className={st.container}>
				<div className={st.opUser}>
					<figure id="photo" title="Preferencias de usuario" tooltip-dir="rigth">
						<Link to="/users">
							<button className={st.Photo}>
								<img src={user.photoURL} alt="" />
							</button>
						</Link>
					</figure>
				</div>
				<div className={st.optPrincipal}>
					{BTNS.map((options) => {
						return (
							<div className={st.option} key={options.id}>
								<Buttons
									label={options.label}
									direction="left"
									route={options.path}
									btnId={options.id}
									btnName={options.label}
									btnIconText={options.icon}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
