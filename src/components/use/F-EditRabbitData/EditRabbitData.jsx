import st from './styles/EditRabbitData.module.css';

import { Form } from 'reactstrap';
import { Buttons } from '../0-GeneralComp/F-Buttons/Buttons';

export function EditRabbitData() {
	return (
		<>
			<div className={st.leftMenu}>
				<Buttons route="#" label="Cancelar" direction="rigth" />
			</div>
			<Form />
		</>
	);
}
