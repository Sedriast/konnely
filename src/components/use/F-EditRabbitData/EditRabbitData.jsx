import st from './styles/EditRabbitData.module.css';

import { Form } from './components/Form';
import { Buttons } from '../0-GeneralComp/F-Buttons/Buttons';

export function EditRabbitData() {
	return (
		<>
			<div className={st.container}>
				<div className={st.leftMenu}>
					<div className={st.btn}>
						<Buttons direction="rigth" label="Cancelar" route="/vitaeslist" btnIconText="❌" />
					</div>
				</div>
				<Form />
			</div>
		</>
	);
}
