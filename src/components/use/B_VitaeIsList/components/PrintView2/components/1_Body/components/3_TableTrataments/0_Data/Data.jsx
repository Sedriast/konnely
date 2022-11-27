import st from "./Data.module.css";

export function Data({ data }) {
	const cm = (
		<tr className={st.y}>
			<td>{data[0]}</td>
			<td>{data[1]}</td>
			<td>{data[2]}</td>
			<tr className={st.b2}>
				<table>
					<tbody>
						<tr>
							<td className={st.r2}>{data[3]}</td>
							<td className={st.l2}>{data[4]}</td>
						</tr>
					</tbody>
				</table>
			</tr>
			<td>{data[5]}</td>
			<td>{data[6]}</td>
		</tr>
	);
	return cm;
}
