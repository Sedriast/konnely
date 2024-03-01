import { Link } from "react-router-dom";
import { useRabbits } from "../../hooks/useContexts";
import { PieChartS } from "../Fragments/Stadistics/PieChartS";
import st from "./vitae.module.css";
import Litter from "./Litter";

export function Vitae({ language, user }) {
	const {
		buttons: { BTN_back },
		titles: {
			race,
			litter_,
			stages_,
			basicData,
			lifecycle,
			stadistics,
			isTransfered,
		},
	} = language;
	const {
		rabbit: {
			id,
			litter,
			origin,
			isFemale,
			pictureURL,
			status: {
				active,
				transferred: { status, date, mom_id, dad_id },
			},
			lifecycle: { birth, weaning, fattening },
		},
		litters,
	} = useRabbits();

	const birdLitter = () => litters.find((doc) => doc.id === birth.litter);

	function raceDataStadistics(data) {
		return data?.map((doc) => {
			const value_ = () => {
				const fraction = doc.percentage.split("/");
				return parseFloat(fraction[0]) / parseFloat(fraction[1]);
			};
			return { name: doc.name, value: value_() * 100 };
		});
	}

	return (
		<>
			<Link className={st.BTN_back} to="/rabbitList">
				{BTN_back}
			</Link>
			<section className={st.vitae_panel}>
				<div>
					<h2>{id}</h2>
					<img src={pictureURL} alt="" />
					<hr />
					<h3>{race}</h3>
					<span>
						<PieChartS data={raceDataStadistics(birth.race)} />
					</span>
				</div>
				<div>
					<h1>{basicData[0]}</h1>
					<table>
						<tbody>
							<tr>
								<th>{basicData[1]}</th>
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
								<th>{basicData[3]}</th>
								<td>{isFemale ? stages_.female : stages_.male}</td>
							</tr>
							<tr>
								<th>{basicData[7]}</th>
								<td>{origin}</td>
							</tr>
							{status ? (
								<>
									<tr>
										<td>
											<h1>{isTransfered}</h1>
										</td>
									</tr>
									<tr>
										<th>{basicData[4]}</th>
										<td>{date}</td>
									</tr>
									<tr>
										<th>{basicData[8]}</th>
										<td>{mom_id}</td>
									</tr>
									<tr>
										<th>{basicData[9]}</th>
										<td>{dad_id}</td>
									</tr>
								</>
							) : (
								<>
									<tr>
										<td>
											<h1>
												{birdLitter().stages.ride.male.isNatural
													? stages_.natural
													: stages_.artificial}
											</h1>
										</td>
									</tr>
									<tr>
										<th>{basicData[4]}</th>
										<td>{date}</td>
									</tr>
									<tr>
										<th>{basicData[8]}</th>
										<td>{birdLitter().stages.ride.female}</td>
									</tr>
									<tr>
										<th>{basicData[9]}</th>
										<td>{birdLitter().stages.ride.male}</td>
									</tr>
								</>
							)}
						</tbody>
					</table>
				</div>
				<div>
					<h1>{lifecycle[0]}</h1>
					<section>
						<section>
							<img src="" alt="" />
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
							</tbody>
						</table>
					</section>
					<section>
						<section>
							<img src="" alt="" />
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
							</tbody>
						</table>
					</section>
				</div>
				<Litter litter_={litter_} />
				<div>
					<h1>{stadistics}</h1>
				</div>
			</section>
		</>
	);
}
