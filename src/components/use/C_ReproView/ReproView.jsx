import st from './ReproView.module.css';

import { newTreats } from '../0-GeneralComp/0-StaticData/options';

import { LeftBottomMenu } from '../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import { List } from './components/List';

import { litter } from '../0-GeneralComp/2-FakeData/reproductiveCycle';

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
				<List litters={litter} />
			</div>
		</>
	);
}
