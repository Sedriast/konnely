import st from './styles/EditUserData.module.css';

import { Buttons } from '../0-GeneralComp/F-Buttons/Buttons';
export function EditUserData({ dataUser }) {
	return (
		<div className={st.container}>
			<div className={st.leftMenu}>
				<div className={st.btnBack}>
					<Buttons route="/users" btnIconText="🔙" label="Atrás" />
				</div>
			</div>
			<div className={st.container_}>
				<div className={st.panelContainer}></div>
			</div>
		</div>
	);
}
