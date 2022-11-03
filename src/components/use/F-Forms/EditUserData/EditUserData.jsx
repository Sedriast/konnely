import st from './EditUserData.module.css';

import { newTreats } from '../../0-GeneralComp/0-StaticData/options';

import { Form } from './components/Form/Form';
import { LeftBottomMenu } from '../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';

export function EditUserData() {
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
