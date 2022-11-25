import { Data } from "../0_Data/Data";
import st from "./TableReproCicle.module.css";

export function TableReproCicle({ cicles }) {
	const dataCicle = (cicle) => {
		const data = [
			cicle?.stages[0]?.date,
			cicle?.stages[0]?.male,
			cicle?.stages[1]?.date,
			cicle?.stages[3]?.approximateDate,
			cicle?.stages[2]?.date,
			cicle?.stages[3]?.date,
			cicle?.stages[3]?.lives,
			cicle?.stages[3]?.deaths,
			"--------",
			cicle?.stages[4]?.date,
			cicle?.stages[4]?.FemaleHatchlings,
			cicle?.stages[4]?.MaleHatchlings,
			cicle?.stages[4]?.LitterWeight,
		];
		return data;
	};
	const cm = (
		<div className={st.complete}>
			<table className={st.tableTop}>
				<thead>
					<th>Fecha servicio</th>
					<th>Placa macho</th>
					<th>
						Fecha detección
						<br />
						de preñes
					</th>
					<th>
						Fecha
						<br />
						posible parto
					</th>
					<th>
						Fecha
						<br />
						atención de parto
					</th>
					<th>
						Fecha real
						<br />
						de parto
					</th>
					<th>Crias vivas</th>
					<th>Crias muertas</th>
					<th>Peso nacimiento (gr)</th>
					<th>Fecha destete</th>
					<th>Crias hembras</th>
					<th>Crias machos</th>
					<th>Peso destete</th>
				</thead>
				<tbody>
					{cicles?.map((e) => {
						if (e.state === false) return <Data data={dataCicle(e)} />;
						return <></>;
					})}
				</tbody>
			</table>
		</div>
	);
	return cm;
}
