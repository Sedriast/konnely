import st from "../../0-GeneralComp/OpContainers.module.css";

import { FormExtraction } from "./components/FormExtraction";
import { LeftBottomMenu } from "../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu";
import { newTreats } from "../../0-GeneralComp/0-StaticData/options";

export function EditExtraction() {
	return (
		<>
			<LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
			<div className={st.optionContainer}>
				<FormExtraction />
			</div>
		</>
	);
}
