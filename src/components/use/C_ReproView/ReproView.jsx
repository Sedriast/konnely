import st from './ReproView.module.css';

import { newTreats } from '../0-GeneralComp/0-StaticData/options';

import { LeftBottomMenu } from '../0-GeneralComp/0-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import { List } from './components/List';

export function ReproView() {
	return (
		<>
			<LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
			<div className={st.optionContainer}>
				<List />
			</div>
		</>
	);
}
