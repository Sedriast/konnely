import st from "./Data.module.css";

export function Data({ data }) {
	console.log(data);
	const dateserv = data[0]?.split("-");
	const dataparto = [data[1], data[2], data[3], data[4], data[5]];
	const cm = (
		<table>
			<tbody>
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
				<tr>
					{dataparto.map((e, i) => (
						<td key={i}>{e}</td>
					))}
				</tr>
			</tbody>
		</table>
	);
	return cm;
}
