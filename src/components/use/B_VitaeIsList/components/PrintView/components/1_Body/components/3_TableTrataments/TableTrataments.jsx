import { Data } from "./0_Data/Data";
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
								<th>FECHA</th>
								<th>SINTOMAS, SIGNOS, VACUNAS </th>
								<th>DIACNOSTICO</th>
								<tr></tr>
								<th>Medicamento</th>
								<th>Dosis</th>
								<th>RESULTADOS</th>
								<th>NOMBRE DEL PROFECIONAL</th>
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
