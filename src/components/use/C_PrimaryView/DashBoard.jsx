import st from './DashBoard.module.css';

import { generalOptions } from '../0-GeneralComp/0-StaticData/options';
import { RigthTopButtons } from '../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons';

export function DashBoard() {
	return (
		<>
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}
