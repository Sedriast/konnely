import st from "./DataView.module.css";

import { useEffect, useState } from "react";

import { faCircleInfo, faSyringe, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

import { generalOptions } from "../0-GeneralComp/0-StaticData/options";
import { RigthTopButtons } from "../0-GeneralComp/1-PanelButtons/RigthTopButtons/RigthTopButtons";
import { LeftBottomMenu } from "../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu";

import { Option } from "./components/Option";
import { basicData, recuperar } from "../0-GeneralComp/0-StaticData/dataProv";
import { QueriesSimple_ } from "../../firebase/funtions/GetInformation";
import { useNavigate } from "react-router-dom";

export function DataView() {
	const navigate = useNavigate();
	const rabbit = QueriesSimple_({ coleccion: "rabbits", parametro: "id", busqueda: basicData?.id }).props
		.children[0];
	useEffect(() => {
		if (basicData.id === null) {
			navigate("/vitaeslist");
		} else if (basicData?.info === undefined && basicData?.id !== null) {
			recuperar(basicData?.id, rabbit);
		}
	}, [navigate, rabbit]);

	const [optionSelect, setOptionSelect] = useState(0);
	const fal = () => {
		setOptionSelect(0);
	};
	const tru = () => {
		setOptionSelect(1);
	};
	const def = () => {
		setOptionSelect(3);
	};
	const dataViewOptions = [
		{
			id: 0,
			state: fal,
			icon: faCircleInfo,
			path: "#",
			label: "Información general",
		},
		{
			id: 1,
			state: tru,
			icon: faSyringe,
			path: "#",
			label: "Tratamientos",
		},
	];
	const dataViewOptions_ = [
		{
			id: 0,
			state: fal,
			icon: faCircleInfo,
			path: "#",
			label: "Información general",
		},
		{
			id: 1,
			state: tru,
			icon: faSyringe,
			path: "#",
			label: "Tratamientos",
		},
		{
			id: 2,
			state: def,
			icon: faWandMagicSparkles,
			path: "#",
			label: "Recolección de semen",
		},
	];

	return (
		<>
			<LeftBottomMenu options={rabbit?.genero === "Macho" ? dataViewOptions_ : dataViewOptions} />
			<div className={st.optionContainer}>
				<Option op={optionSelect} rabbit={rabbit} />
			</div>
			<RigthTopButtons BTNS={generalOptions} />
		</>
	);
}
