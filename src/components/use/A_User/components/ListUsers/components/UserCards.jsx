import st from '../styles/UserCards.module.css';
import { Buttons } from '../../../../0-GeneralComp/F-Buttons/Buttons';
export function UserCards({ userEmail, userId, userName }) {
	return (
		<div className={st.container}>
			<h1>{userName}</h1>

			<div className={st.mid}>{userEmail}</div>

			<div className={st.btnEdit}>
				<Buttons route="/user" btnIconText="✏️" label="Editar" direction="left" />
			</div>
		</div>
	);
}
