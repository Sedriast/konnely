import st from "./TableFour.module.css";

export function TableFour({ ageDestete, criterion }) {
	const cm = (
		<div className={st.oneContainer}>
			<table>
				<tr>
					<th>
						<tr>
							<th id={st.i}>Edad destete (meses):</th>
						</tr>
						<tr>
							<th>{ageDestete}</th>
						</tr>
					</th>
					<td>
						Criterio para la Selección:
						<br />
						{criterion}
					</td>
				</tr>
			</table>
		</div>
	);

	return cm;
}
