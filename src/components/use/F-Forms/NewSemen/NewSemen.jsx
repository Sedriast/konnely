import st from "../../0-GeneralComp/OpContainers.module.css";

import { FormSemen } from "./components/FormSemen";
import { LeftBottomMenu } from "../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu";
import { newTreats } from "../../0-GeneralComp/0-StaticData/options";

export function NewSemen() {
	return (
		<>
			<LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
			<div className={st.optionContainer}>
				<FormSemen />
			</div>
		</>
	);
}
