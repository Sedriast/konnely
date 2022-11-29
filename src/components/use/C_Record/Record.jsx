import st from "./Record.module.css";

import { RigthTopButtons } from "../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons";
import { generalOptions } from "../0-GeneralComp/0-StaticData/options";
import { Record_ } from "./component/Record_/Record_";

export function Record() {
	return (
		<>
			<div className={st.optionContainer}>
				<Record_ />
			</div>
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}
