import st from './DashBoard.module.css';

import { RigthTopButtons } from '../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons';
import { generalOptions } from '../0-GeneralComp/0-StaticData/options';
import { PanelData1 } from './component/PanelData1';

export function DashBoard() {
	return (
		<>
			<div className={st.optionContainer}>
				<div className={st.panelA}>
					<div className={st.one}>
						<PanelData1 />
					</div>
					<div className={st.two}>
						<PanelData1 />
					</div>
				</div>
				<div className={st.panelB}></div>
			</div>
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}
