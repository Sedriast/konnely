import st from "./TableTwo.module.css";

export function TableTwo({ father, mother, grandFatherF, grandMotherF, grandFatherM, grandMotherM }) {
	const cm = (
		<div className={st.oneContainer}>
			<tr>
				<th>Padre: </th>
				<th>{father}</th>
				{grandMotherF && (
					<td>
						<tr>
							<th>Madre: </th>
							<th>{grandMotherF}</th>
						</tr>
						<tr>
							<th>Padre: </th>
							<th>{grandFatherF}</th>
						</tr>
					</td>
				)}
			</tr>

			<tr>
				<th>Madre: </th>
				<th>{mother}</th>
				{grandMotherM && (
					<td>
						<tr>
							<th>Madre: </th>
							<th>{grandMotherM}</th>
						</tr>
						<tr>
							<th>Padre: </th>
							<th>{grandFatherM}</th>
						</tr>
					</td>
				)}
			</tr>
		</div>
	);

	return cm;
}
