import { Link } from "react-router-dom";
import st from "../rabbitlist.module.css";

export default function Cards({ language, rabbit, setRabbit }) {
	const {
		id,
		origin,
		isFemale,
		litter,
		pictureURL,
		status: { active },
		lifecycle: { birth, weaning, fattening },
	} = rabbit;
	const { state_, gender_, birthDate_, origin_, stages_ } = language;

	return (
		<Link
			onClick={() => setRabbit(rabbit)}
			className={st.cards_panel}
			to={`/vitae/${id}`}>
			<table>
				<tbody>
					<tr>
						<th>
							<img src={pictureURL} title="" alt="" />
						</th>
						<td>{id}</td>
					</tr>

					<tr>
						<th>{state_}</th>
						{console.log(rabbit)}
						<td>
							{!active
								? stages_.inactive
								: !weaning.finish
								? stages_.reproductive
								: !fattening.finish
								? stages_.fattening
								: litter !== "false" && isFemale && stages_.litter}
						</td>
					</tr>
					<tr>
						<th>{gender_[0]}</th>
						<td> {isFemale ? gender_[1] : gender_[2]}</td>
					</tr>
					<tr>
						<th>{birthDate_}</th>
						<td> {birth.litter}</td>
					</tr>
					<tr>
						<th>{origin_}</th>
						<td> {origin}</td>
					</tr>
				</tbody>
			</table>
		</Link>
	);
}
