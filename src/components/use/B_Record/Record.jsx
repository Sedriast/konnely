import st from "../0-GeneralComp/OpContainers.module.css";

import { RigthTopButtons } from "../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons";
import { generalOptions } from "../0-GeneralComp/0-StaticData/options";
import { ViewRecord } from "./components/ViewRecord";

export function Record() {
	return (
		<>
			<div className={st.optionContainer}>
				<ViewRecord />
				Simon
			</div>
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}
