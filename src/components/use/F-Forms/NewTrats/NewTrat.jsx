import st from "../../0-GeneralComp/OpContainers.module.css";

import { FormTrat } from "./components/FormTrat";

import { newTreats } from "../../0-GeneralComp/0-StaticData/options";
import { LeftBottomMenu } from "../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu";

export function NewTrat() {
	return (
		<>
			<LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
			<div className={st.optionContainer}>
				<FormTrat />
			</div>
		</>
	);
}
