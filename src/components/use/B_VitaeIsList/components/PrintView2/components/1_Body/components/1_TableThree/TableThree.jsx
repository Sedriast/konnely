import st from "./TableThree.module.css";

export function TableThree({ data1, data2, data3 }) {
	const cm = (
		<div className={st.oneContainer}>
			<table>
				<thead>
					<tr>
						<th id={st.i}></th>
						<th>Unidad</th>
						<th>Nacimiento</th>
						<th>Destete</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Peso</th>

						<td>{data1}</td>
						<td>{data2}</td>
						<td>{data3}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);

	return cm;
}
