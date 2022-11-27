import st from "./PrintView.module.css";

import { newTreats } from "../../../0-GeneralComp/0-StaticData/options";

import { Body } from "./components/1_Body/Body";
import { LeftBottomMenu } from "../../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu";
import { basicData } from "../../../0-GeneralComp/0-StaticData/dataProv";
import { QueriesSimple_ } from "../../../../firebase/funtions/GetInformation";

import s from "../../../../img/LogoUDEC.png";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { Buttons } from "../../../0-GeneralComp/1-Buttons/Buttons";

import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { Head } from "./components/0_Head/Head";
import { Foot } from "./components/2_Foot/Foot";

export function PrintView2() {
	const componentRef = useRef();
	const cicles = QueriesSimple_({
		coleccion: "reproductive",
		parametro: "uidMother",
		busqueda: basicData.info.uid,
	}).props.children;
	const trataments = QueriesSimple_({
		coleccion: "trataments",
		parametro: "uidRabbit",
		busqueda: basicData.info.uid,
	}).props.children;

	const print = useReactToPrint({
		content: () => componentRef.current,
		documentTitle: "New paper",
	});
	const datahead = {
		marc: "MACROPROCESO DE APOYO",
		process: "PROCESO DE GESTIÓN DE APOYO ACADÉMICO",
		title: "HOJA DE VIDA SEMOVIENTE HEMBRA",
		code: "AAAr031",
		version: 7,
		validity: "2020 03 17",
		date: window.Date().replace(" GMT-0500 (hora estándar de Colombia)", ""),
	};
	const cm = (
		<>
			<LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>

			<div className={st.btnPrint}>
				<Buttons label='Imprimir' direction='rigth' btnClick={print} route='#' btnIconText={faPrint} />
			</div>
			<div className={st.optionContainer} ref={componentRef}>
				<div className={st.containerObj}>
					<Head
						marc={datahead.marc}
						proces={datahead.process}
						title={datahead.title}
						code={datahead.code}
						version={datahead.version}
						dateValidity={datahead.validity}
					/>
					16.
					<br />
					<br />
					<Body cicles={cicles} trataments={trataments} />
					<br />
					<br />
					<Foot />
				</div>
			</div>
		</>
	);
	return cm;
}
