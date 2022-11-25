import { Data } from "../2_TableReproductiveCicle/0_Data/Data";
import st from "./TableTrataments.module.css";

export function TableTrataments({ trataments }) {
	const dataTrataments = (tratament) => {
		const data = [
			tratament?.date,
			tratament?.signs,
			tratament?.diagnosis,
			tratament?.route,
			tratament?.responsible,
			tratament?.result,
			tratament?.professional,
		];
		return data;
	};
	const cm = (
		<>
			{trataments?.length > 0 && (
				<div className={st.carac}>
					<table>
						<thead>
							<tr>
								<th>Fecha</th>
								<th>sintomas,signos,vacunas </th>
								<th>Diagnostico</th>
								<th>Medicamento</th>
								<th>Dosis</th>
								<th>Redultados</th>
								<th>Nombre del profecional</th>
							</tr>
						</thead>
						<tbody>
							{trataments?.map((e) => {
								if (e.state !== "Inactivo") return <Data data={dataTrataments(e)} />;
								return <></>;
							})}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
	return cm;
}
