import st from './styles/EditRabbitData.module.css';

import { generalOptions } from '../../0-GeneralComp/0-StaticData/options';

import { Form } from './components/Form';
import { Buttons } from '../../0-GeneralComp/F-Buttons/Buttons';
import { RigthTopButtons } from '../../0-GeneralComp/0-PanelButtons/RigthTopButtons/RigthTopButtons';
import { unstable_HistoryRouter } from 'react-router-dom';

export function EditRabbitData() {
	return (
		<>
			<div className={st.leftMenu}>
				<div className={st.btn}>
					<Buttons
						direction="rigth"
						label="Cancelar"
						route="#"
						btnIconText="❌"
						btnClick={() => {}}
					/>
				</div>
			</div>
			<div className={st.optionContainer}>
				<Form />
			</div>
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}
