import { Data } from "./0_Data/Data";
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
		<div className={st.oneContainer}>
			<table className={st.tableTop}>
				<thead>
					<tr id={st.date}>
						<tr className={st.b}>
							<table>
								<thead>
									<tr>
										<th>
											Fecha <br /> servicio
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<table id={st.t3}>
											<thead>
												<tr>
													<th id={st.r}>Año</th>
													<th id={st.r}>Mes</th>
													<th id={st.l}>Dia</th>
												</tr>
											</thead>
										</table>
									</tr>
								</tbody>
							</table>
						</tr>
						<th>Placa macho</th>
						<th>Fecha detección de preñes</th>
						<th>Fecha posible parto</th>
						<th>Fecha atención de parto</th>
						<th>Fecha real de parto</th>
						<tr className={st.b}>
							<table>
								<thead>
									<tr>
										<th>N° Animales</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<table id={st.t3}>
											<thead>
												<tr>
													<th id={st.r}>V</th>
													<th id={st.l}>M</th>
												</tr>
											</thead>
										</table>
									</tr>
								</tbody>
							</table>
						</tr>
						<th>Peso nacimiento (gr)</th>
						<th>Fecha destete</th>
						<tr className={st.b}>
							<table>
								<thead>
									<tr>
										<th>N° Animales</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<table id={st.t3}>
											<thead>
												<tr>
													<th id={st.r}>H</th>
													<th id={st.l}>M</th>
												</tr>
											</thead>
										</table>
									</tr>
								</tbody>
							</table>
						</tr>
						<th>Peso destete</th>
					</tr>
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
