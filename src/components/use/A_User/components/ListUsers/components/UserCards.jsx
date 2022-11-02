import st from './UserCards.module.css';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
import { recuperarUser } from '../../../../0-GeneralComp/0-StaticData/dataProv';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export function UserCards({ userEmail, userName, user }) {
	return (
		<div className={st.container}>
			<h1>{userName}</h1>

			<div className={st.mid}>{userEmail}</div>
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
		</div>
	);
}
