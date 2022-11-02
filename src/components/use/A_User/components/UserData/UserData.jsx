import st from './UserData.module.css';

import { useAuth } from '../../../../../context/AuthContext';
import { Themes } from './conponents/Themes/Themes';

export function UserData({ user_ }) {
	const { user } = useAuth();

	return (
		<>
			<div className={st.userData}>
				<div className={st.profilePhoto}>
					<img src={user.photoURL} alt="" href="" />
				</div>
				<div className={st.paragraph}>
					<div>{user.displayName}</div>
					<div>{user.email}</div>
					<p>
						Otros datos del usuario
						<br />
						<br />
						<br />
						fadfadfafdsafaf
					</p>
				</div>
				<Themes />
			</div>
		</>
	);
}
