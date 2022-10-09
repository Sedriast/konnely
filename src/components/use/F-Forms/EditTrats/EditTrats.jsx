/* eslint-disable array-callback-return */
import st from './Healt.module.css';

import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../../0-GeneralComp/1-Buttons/Buttons';
import { FormTrat } from './components/FormTrats/FormTrat';

export function EditTrats() {
	return (
		<div className={st.container}>
			<div className={st.panelItems}>
				<FormTrat />
			</div>
			<div className={st.new}>
				<Buttons
					btnIconText={faFileCirclePlus}
					route="/addTrat"
					label="Nuevo tratamiento"
					direction="top"
				/>
			</div>
		</div>
	);
}
