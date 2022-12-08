import st from "./EditLife.module.css";

import { newTreats } from "../../0-GeneralComp/0-StaticData/options";
import { basicData } from "../../0-GeneralComp/0-StaticData/dataProv";

import { Form } from "./comoponents/Form/Form";
import { LeftBottomMenu } from "../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function EditLife() {
	const navigate = useNavigate();
	useEffect(() => {
		if (basicData.id === null) {
			navigate("/vitaeslist");
			return null;
		}
	}, [navigate]);
	return (
		<>
			Simon
			<LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
			<div className={st.optionContainer}>
				<Form
					info={basicData?.info?.lifecycle}
					uid={basicData?.info?.uid}
					nacimiento={basicData?.info?.nacimiento}
				/>
			</div>
		</>
	);
}
