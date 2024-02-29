import { useRabbits } from "../../hooks/useContexts";
import st from "./vitae.module.css";

export function Vitae({ language, user }) {
	const {
		titles: {
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
			transferred,
			status: { active },
			lifecycle: { bird, weaning, fattening },
		},
		litters,
	} = useRabbits();
	const birdLitter = () => {
		if (transferred.status) {
			return {
				type: isTransfered,
				mom_id: transferred.id_mom,
				dad_id: transferred.id_dad,
				finishDate: transferred.date,
			};
		} else {
			return findLitters(bird.litter)[0];
		}
	};

	function findLitters(id) {
		return litters.find((doc) => doc.id === id);
	}

	return (
		<section className={st.vitae_panel}>
			<div>
				<img src={pictureURL} alt="" />
				<h2>{id}</h2>
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
							<th>{basicData[4]}</th>
							<td>{birdLitter.finishDate}</td>
						</tr>
						<tr>
							<th>{basicData[5]}</th>
							<td>{birdLitter.type}</td>
						</tr>
						<tr>
							<th>{basicData[6]}</th>
							<td>{origin}</td>
						</tr>

						<tr>
							<th>{basicData[7]}</th>
							<td>{birdLitter.mom_id}</td>
						</tr>
						<tr>
							<th>{basicData[8]}</th>
							<td>{birdLitter.dad_id}</td>
						</tr>
						{/*Razas estadistica
                         <tr>
							<th>{basicData[2]}</th>
							<td>{bird.race.map((race_)=>)}</td>
						</tr> */}
					</tbody>
				</table>
			</div>
			<div>
				<h1>{lifecycle[0]}</h1>
				<section>
					<h3>{lifecycle[1]}</h3>
					<table>
						<tbody>
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
					<h3>{lifecycle[2]}</h3>
					<table>
						<tbody>
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
			<div>
				<h1>{litter_[0]}</h1>
				<h3>{litter_[1]}</h3>
				<h3>{litter_[2]}</h3>
				<h3>{litter_[3]}</h3>
				<h3>{litter_[4]}</h3>
				<h3>{litter_[5]}</h3>
			</div>
			<div>
				<h1>{stadistics}</h1>
			</div>
		</section>
	);
}
