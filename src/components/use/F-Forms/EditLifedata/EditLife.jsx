import { newTreats } from '../../0-GeneralComp/0-StaticData/options';
import { LeftBottomMenu } from '../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import st from './EditLife.module.css';
import { Form } from './Form/Form';

export function EditLife() {
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
