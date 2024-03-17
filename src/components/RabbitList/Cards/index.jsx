import { useNavigate } from "react-router-dom";
import st from "../rabbitlist.module.css";
import rabbitPictureDefault from "../../../constants/assets/defaultRabbit.jpg";

export function Cards({ language, rabbit, setRabbit }) {
	const navigate = useNavigate();
	const {
		id,
		isFemale,
		pictureURL,
		states: {
			isAlive,
			transferred: { origin, status, date },
		},
		lifecycle: { birth },
	} = rabbit;

	const { state_, gender_, birthDate_, origin_, stages_, transferenceDate } =
		language;

	return (
		<button
			className={st.cards_panel}
			type="button"
			title={id}
			onClick={() => {
				setRabbit && setRabbit(rabbit);
				setRabbit && navigate("/vitae");
			}}>
			<table>
				<tbody>
					<tr>
						<th>
							<img
								src={pictureURL ? pictureURL : rabbitPictureDefault}
								title=""
								alt=""
							/>
						</th>
						<td>{id}</td>
					</tr>
					<tr>
						<th>{state_}</th>
						<td>{!isAlive ? stages_.inactive : isFemale && stages_.litter}</td>
					</tr>
					<tr>
						<th>{gender_[0]}</th>
						<td> {isFemale ? gender_[1] : gender_[2]}</td>
					</tr>
					{status ? (
						<tr>
							<th>{transferenceDate}</th>
							<td>
								{new Date(date.toDate()).toLocaleDateString("es-ES", {
									year: "numeric",
									day: "numeric",
									month: "long",
								})}
							</td>
						</tr>
					) : (
						<tr>
							<th>{birthDate_}</th>
							<td> {birth.litter}</td>
						</tr>
					)}

					<tr>
						<th>{origin_}</th>
						<td> {origin}</td>
					</tr>
				</tbody>
			</table>
		</button>
	);
}
