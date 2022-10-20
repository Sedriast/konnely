import st from './DashBoard.module.css';

import { RigthTopButtons } from '../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons';
import { generalOptions } from '../0-GeneralComp/0-StaticData/options';

export function DashBoard() {
	return (
		<>
			<div className={st.optionContainer}>
				<div className={st.panelA}></div>
			</div>
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}
