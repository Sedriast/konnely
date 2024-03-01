export default function Litter({ litter_, litterData }) {
	return (
		<div>
			<h1>{litter_[0]}</h1>
			<section>
				<section>
					<img src="" alt="" />
					<h3>{litter_[1]}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{}</th>
							<td>{}</td>
						</tr>
						<tr>
							<th>{}</th>
							<td>{}</td>
						</tr>
					</tbody>
				</table>
			</section>

			<h3>{}</h3>
			<h3>{litter_[2]}</h3>
			<h3>{litter_[3]}</h3>
			<h3>{litter_[4]}</h3>
			<h3>{litter_[5]}</h3>
		</div>
	);
}
