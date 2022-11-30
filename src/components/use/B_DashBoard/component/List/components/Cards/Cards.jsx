import st from "./Cards.module.css";

export function Cards({ img, text }) {
	return (
		<>
			<table>
				<tr>
					<th>{img}</th>
					<td>{text}</td>
				</tr>
			</table>
		</>
	);
}
