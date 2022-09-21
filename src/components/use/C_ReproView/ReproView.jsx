import st from './ReproView.module.css';

import { LeftBottomMenu } from '../0-GeneralComp/0-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import { RigthTopButtons } from '../0-GeneralComp/0-PanelButtons/RigthTopButtons/RigthTopButtons';
import { List } from './components/List';

export function ReproView() {
	return (
		<>
			<LeftBottomMenu />
			<div className={st.optionContainer}>
				<List />
			</div>
			<RigthTopButtons />
		</>
	);
}
