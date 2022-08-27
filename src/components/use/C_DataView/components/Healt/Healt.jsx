import st from './styles/Healt.module.css';
import { tratamientos } from '../../scripts/dataProv';

import { Item } from './components/Item';
import { Buttons } from '../../../0-GeneralComp/F-Buttons/Buttons';

export function Healt() {
	return (
		<>
			<div className={st.container}>
				<h1>Lista de Tratamientos</h1>
				<br />
				<div className={st.panelContainer}>
					<div className={st.panelItems}>
						<Item trataments={tratamientos} />
					</div>
				</div>
				<div className={st.new}>
					<Buttons
						btnIconText="🧑🏽‍⚕️ Nuevo 🧑🏽‍⚕️"
						route="/addTrat"
						label="Nuevo tratamiento"
						direction="bottom"
					/>
				</div>
			</div>
		</>
	);
}
