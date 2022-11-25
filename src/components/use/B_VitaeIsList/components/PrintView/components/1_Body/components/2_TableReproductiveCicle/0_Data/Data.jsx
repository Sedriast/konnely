import st from "./Data.module.css";

export function Data({ data }) {
	console.log(data);
	const dateserv = data[0]?.split("-");
	const dataparto = [data[1], data[2], data[3], data[4], data[5]];
	const cm = (
		<tr>
			<tr className={st.b}>
				<table>
					<tbody>
						<tr>
							<td className={st.r}>{dateserv[0]}</td>
							<td>{dateserv[1]}</td>
							<td className={st.l}>{dateserv[2]}</td>
						</tr>
					</tbody>
				</table>
			</tr>

			{dataparto.map((e, i) => (
				<td key={i} id={st.y}>
					{e}
				</td>
			))}

			<tr className={st.b2}>
				<table>
					<tbody>
						<tr>
							<td className={st.r2}>{data[6]}</td>
							<td className={st.l2}>{data[7]}</td>
						</tr>
					</tbody>
				</table>
			</tr>

			<td id={st.y}>{data[8]}</td>
			<td id={st.y}>{data[9]}</td>

			<tr className={st.b2}>
				<table>
					<tbody>
						<tr>
							<td className={st.r2}>{data[10]}</td>
							<td className={st.l2}>{data[11]}</td>
						</tr>
					</tbody>
				</table>
			</tr>

			<td id={st.y}>{data[12]}</td>
		</tr>
	);
	return cm;
}
