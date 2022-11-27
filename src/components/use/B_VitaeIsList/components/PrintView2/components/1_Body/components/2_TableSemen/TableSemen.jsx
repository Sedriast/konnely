import { Data } from "./0_Data/Data";
import st from "./TableSemen.module.css";

export function TableSemen({ semens }) {
	const dataTrataments = (semens) => {
		const data = [
			semens?.date,
			semens?.signs,
			semens?.diagnosis,
			semens?.route,
			semens?.responsible,
			semens?.result,
			semens?.professional,
		];
		return data;
	};
	const cm = (
		<>
			{semens?.length > 0 && (
				<div className={st.oneContainer}>
					<table className={st.tableTop}>
						<thead>
							<tr>
								<th>FECHA</th>
								<th>SINTOMAS, SIGNOS, VACUNAS </th>
								<th>DIACNOSTICO</th>
								<tr className={st.b}>
									<table>
										<thead>
											<tr>
												<th>N° ANIMALES</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<table id={st.t3}>
													<thead>
														<tr>
															<th id={st.r}>MEDICAMENTO</th>
															<th id={st.l}>DOSIS</th>
														</tr>
													</thead>
												</table>
											</tr>
										</tbody>
									</table>
								</tr>

								<th>RESULTADOS</th>
								<th>NOMBRE DEL PROFECIONAL</th>
							</tr>
						</thead>
						<tbody>
							{semens?.map((e) => {
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