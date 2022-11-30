import st from "./Cards.module.css";

export function Cards({ img, text }) {
	return (
		<div className={st.container}>
			<table>
				<tr>
					<th>
						<img src={img} alt='' />
					</th>
					<td>
						<p>{text}</p>
					</td>
				</tr>
			</table>
		</div>
	);
}
