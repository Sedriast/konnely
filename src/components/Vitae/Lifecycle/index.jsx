import weaningI from "../../../constants/assets/logos/baby_bottle_13945.svg";
import fatteningI from "../../../constants/assets/logos/rabbit_fattening_131007.svg";

export default function Lifecycle({ lifecycle, weaning, fattening }) {
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
			<span>
				<section>
					<img src={fatteningI} alt={lifecycle[2]} />
					<h3>{lifecycle[2]}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{lifecycle[3][0]}</th>
							<td>{fattening.date}</td>
						</tr>
						<tr>
							<th>{lifecycle[3][1]}</th>
							<td>{fattening.weight}</td>
						</tr>
						<tr></tr>
					</tbody>
				</table>
			</span>
		</div>
	);
}
