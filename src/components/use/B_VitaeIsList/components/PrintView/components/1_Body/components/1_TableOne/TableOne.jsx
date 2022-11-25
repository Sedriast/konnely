import st from "./TableOne.module.css";

export function TableOne({ dateBorn, race, rabbitId }) {
	const cm = (
		<div className={st.oneContainer}>
			<table>
				<thead>
					<tr>
						<th>Especie Cunicola</th>
						<th>
							<div className={st.col}>
								<table>
									<thead>
										<tr>
											<th>Fecha de nacimieto</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<table>
												<thead>
													<tr>
														<th>Año</th>
														<th>Mes</th>
														<th>Día</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>{dateBorn?.year}</td>
														<td>{dateBorn?.month}</td>
														<td>{dateBorn?.day}</td>
													</tr>
												</tbody>
											</table>
										</tr>
									</tbody>
								</table>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>
							N° Ident. Hembra:
							<br />
							{rabbitId}
						</th>
						<th>
							Raza:
							<br />
							{race}
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	);

	return cm;
}
