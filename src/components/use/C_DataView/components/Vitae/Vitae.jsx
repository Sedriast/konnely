/* eslint-disable array-callback-return */
import st from "./Vitae.module.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { basicData, recuperar } from "../../../0-GeneralComp/0-StaticData/dataProv";

import { LifeCycle } from "./components/LifeCycle/LifeCycle";
import { RabbitDataView } from "./components/RabbitDataView/RabbitDataView";
import { ReproductiveCycle } from "./components/ReproductiveCycle/ReproductiveCycle";
import { PanelData } from "../../../C_PrimaryView/component/PanelData";
import { QueriesSimple_ } from "../../../../firebase/funtions/GetInformation";
import { Stadics } from "../../../0-GeneralComp/0-Scripts/FormatStadics";
import { useAuth } from "../../../../../context/AuthContext";

export function Vitae() {
	const { user } = useAuth();
	const navigate = useNavigate();
	const rabbit = QueriesSimple_({ coleccion: "rabbits", parametro: "id", busqueda: basicData?.id }).props
		.children[0];
	const stadics = QueriesSimple_({
		coleccion: "reproductive",
		parametro: "uidMother",
		busqueda: rabbit?.uid,
	}).props.children;
	const user_ = QueriesSimple_({ coleccion: "users", parametro: "uid", busqueda: user.uid }).props.children[0];

	useEffect(() => {
		if (basicData.id === null) {
			navigate("/vitaeslist");
		} else if (basicData?.info === undefined && basicData?.id !== null) {
			recuperar(basicData?.id, rabbit);
		}
	}, [navigate, stadics, rabbit]);

	return (
		<>
			{basicData?.id !== null && (
				<div className={st.panel}>
					<RabbitDataView user_={user_} rabbit={rabbit} />
					<hr />
					<br />
					<LifeCycle info={rabbit} user_={user_} />
					<br />
					<br />
					{rabbit?.genero === "Hembra" && rabbit?.lifecycle[3]?.date !== null && (
						<>
							<hr />
							<br />
							<br />
							<ReproductiveCycle reproductivecycle={rabbit?.reproductivecycle} uid={rabbit?.uid} />
							<br />
							<br />
							<hr />
							<br />
							<br />
							<div className={st.stad}>
								<PanelData stadics={Stadics(stadics)} />
							</div>
							<br />
							<br />
						</>
					)}
					<hr />
					<br />
					<br />
				</div>
			)}
		</>
	);
}
