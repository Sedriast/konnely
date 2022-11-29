import st from "../../0-GeneralComp/OpContainers.module.css";

import { FormHis } from "./components/FormHis/FormHis";
import { LeftBottomMenu } from "../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu";
import { newTreats } from "../../0-GeneralComp/0-StaticData/options";

export function NewHistory() {
	return (
		<>
			<LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
			<div className={st.optionContainer}>
				<FormHis />
			</div>
		</>
	);
}
