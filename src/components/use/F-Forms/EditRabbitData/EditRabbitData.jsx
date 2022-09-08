import st from './styles/EditRabbitData.module.css';

import { generalOptions } from '../../0-GeneralComp/0-StaticData/generalOptions';

import { Form } from './components/Form';
import { Buttons } from '../../0-GeneralComp/F-Buttons/Buttons';
import { RigthTopButtons } from '../../0-GeneralComp/0-PanelButtons/RigthTopButtons/RigthTopButtons';

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
				<RigthTopButtons BTNS={generalOptions} />
			</div>
		</>
	);
}
