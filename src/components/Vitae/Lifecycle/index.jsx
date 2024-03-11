import weaningI from "../../../constants/assets/logos/baby_bottle_13945.svg";

export default function Lifecycle({ lifecycle, weaning }) {
	return (
		<div>
			<h1>{lifecycle[0]}</h1>
			<span>
				<section>
					<img src={weaningI} alt={lifecycle[1]} />
					<h3>{lifecycle[1]}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{lifecycle[3][0]}</th>
							<td>{weaning.date}</td>
						</tr>
						<tr>
							<th>{lifecycle[3][1]}</th>
							<td>{weaning.weight}</td>
						</tr>
						<tr></tr>
					</tbody>
				</table>
			</span>
		</div>
	);
}
