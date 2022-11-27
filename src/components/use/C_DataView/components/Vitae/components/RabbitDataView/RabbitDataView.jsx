import st from "./RabbitDataView.module.css";

import { basicData } from "../../../../../0-GeneralComp/0-StaticData/dataProv";

import { Buttons } from "../../../../../0-GeneralComp/1-Buttons/Buttons";
import { faPenToSquare, faPrint } from "@fortawesome/free-solid-svg-icons";
import { estadoRabbit } from "../../../../../0-GeneralComp/0-Scripts/EstadoRabbit";

export function RabbitDataView({ user_, rabbit }) {
	const cm = (
		<>
			{basicData.id !== null && (
				<>
					<div className={st.initInfo}>
						{user_ !== undefined &&
							user_.rol === "administrador" &&
							(rabbit.genero === "Hembra" ? (
								<div className={st.btnPrint}>
									<Buttons
										direction='bottom'
										label='Imprimir hoja de vida'
										route='/print1'
										btnIconText={faPrint}
									/>
								</div>
							) : (
								<div className={st.btnPrint}>
									<Buttons
										direction='bottom'
										label='Imprimir hoja de vida'
										route='/print2'
										btnIconText={faPrint}
									/>
								</div>
							))}
						<div className={st.rabbitImg}>
							<img src={rabbit?.url} alt='' />
						</div>
						<br />
						{rabbit?.id}
						<br />
						<br />

						<hr />
						<br />
					</div>
					<div className={st.tit}>
						Datos Básicos
						{user_ !== undefined && user_.rol === "administrador" && (
							<div>
								<Buttons
									route='/formEdit'
									label='Editar'
									direction='bottom'
									btnIconText={faPenToSquare}
								/>
							</div>
						)}
					</div>
					<br />
					<br />
					<br />
					<div className={st.panelData}>
						<div className={st.titles}>
							Estado:
							<br />
							<br />
							Raza:
							<br />
							Genero:
							<br />
							<br />
							Fecha de nacimiento:
							<br />
							Concepción:
							<br />
							Procedencia:
							<br />
							<br />
							ID. Madre:
							<br />
							ID. Padre:
						</div>
						<div className={st.ask}>
							{rabbit !== undefined &&
								estadoRabbit({
									reproductivecycle: rabbit?.reproductivecycle,
									lifecycle: rabbit?.lifecycle,
								})}
							<br />
							<br />
							{rabbit?.raza} ({rabbit?.porcentaje}%)
							<br />
							{rabbit?.genero}
							<br />
							<br />
							{rabbit?.nacimiento}
							<br />
							{rabbit?.concepcion}
							<br />
							{rabbit?.origen}
							<br />
							<br />
							{rabbit?.idMadre}
							<br />
							{rabbit?.idPadre}
						</div>
					</div>
					<br />
					<br />
					<br />
				</>
			)}
		</>
	);

	return cm;
}
