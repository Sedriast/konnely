import st from './styles/EditRabbitData.module.css';

import { newTreats } from '../../0-GeneralComp/0-StaticData/options';

import { Form } from './components/Form/Form';
import { RigthTopButtons } from '../../0-GeneralComp/0-PanelButtons/RigthTopButtons/RigthTopButtons';
import { LeftBottomMenu } from '../../0-GeneralComp/0-PanelButtons/LeftBottomMenu/LeftBottomMenu';

export function EditRabbitData() {
	return (
		<>
			<LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
			<div className={st.optionContainer}>
				<Form />
			</div>
		</>
	);
}
