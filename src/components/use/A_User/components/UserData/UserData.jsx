import st from './UserData.module.css';

import { useAuth } from '../../../../../context/AuthContext';
import { Themes } from './conponents/Themes/Themes';
import { Buttons } from '../../../0-GeneralComp/1-Buttons/Buttons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { recuperarUser } from '../../../0-GeneralComp/0-StaticData/dataProv';

export function UserData({ user_ }) {
	const { user } = useAuth();

	return (
		<>
			<div className={st.userData}>
				<div className={st.profilePhoto}>
					<img src={user.photoURL} alt="" href="" />
				</div>
				<div>
					<Buttons
						route="/user"
						label="editar"
						direction="bottom"
						btnIconText={faPenToSquare}
						btnClick={() => {
							recuperarUser(user);
						}}
					/>
				</div>
				<br />
				<div className={st.paragraph}>
					<div>{user.displayName}</div>
					<div>{user.email}</div>
					<br />
					<p>Otros datos del usuario</p>
				</div>
				<Themes />
			</div>
		</>
	);
}
