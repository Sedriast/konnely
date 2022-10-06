import st from './EditRepro.module.css';

import { newTreats } from '../../0-GeneralComp/0-StaticData/options';
import { stages } from '../../0-GeneralComp/2-FakeData/liveCycle';

import { LeftBottomMenu } from '../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import { List } from './components/List';

import { litter } from '../../0-GeneralComp/2-FakeData/reproductiveCycle';

export function EditRepro() {
	return (
		<>
			<LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
			<div className={st.optionContainer}>
				<List info={litter} />
			</div>
		</>
	);
}
