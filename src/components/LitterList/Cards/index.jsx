import palpationI from "../../../constants/assets/logos/latex_globes_13256.svg";
import weaningI from "../../../constants/assets/logos/baby_bottle_13945.svg";
import radeI from "../../../constants/assets/logos/rabbit_ride_13244.svg";
import prepartumI from "../../../constants/assets/logos/nest_13318.svg";
import partumI from "../../../constants/assets/logos/partum_13329.svg";

import st from "../litterlist.module.css";

export function Cards({ language, litter }) {
	const {
		titles: { ride, palpation, prepartum, partum, weaning },
		labels: {
			natural,
			litterID,
			rideDate,
			rideMale,
			rideFemale,
			artificial,
			partumDate,
			partumDead,
			partumAlive,
			weaningDate,
			weaningMales,
			palpationDate,
			prepartumDate,
			weaningFemales,
			partumHomogenized,
			weaningAverageWeight,
		},
	} = language;

	return (
		<section className={st.littersCard}>
			<h1>
				{litterID}
				<br />
				{litter.id}
			</h1>
			<span>
				<section>
					<img src={radeI} alt="" />
					<h3>{ride}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{rideDate}</th>
							<td>{litter.stages.ride.date}</td>
						</tr>
						{litter.stages.ride.isNatural && (
							<>
								<tr>
									<th>{rideFemale}</th>
									<td>{litter.stages.ride.female}</td>
								</tr>
								<tr>
									<th>{rideMale}</th>
									<td>{litter.stages.ride.male}</td>
								</tr>
							</>
						)}
						<tr>
							<th>〰〰〰〰〰</th>
							<td>〰〰〰〰〰</td>
						</tr>
						<tr>
							<td>{litter.stages.ride.isNatural ? natural : artificial}</td>
						</tr>
					</tbody>
				</table>
			</span>
			<span>
				<section>
					<img src={palpationI} alt="" />
					<h3>{palpation}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{palpationDate}</th>
							<td>{litter.stages.palpation.date}</td>
						</tr>
						<tr></tr>
					</tbody>
				</table>
			</span>
			<span>
				<section>
					<img src={prepartumI} alt="" />
					<h3>{prepartum}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{prepartumDate}</th>
							<td>{litter.stages.prepartum.date}</td>
						</tr>
						<tr></tr>
					</tbody>
				</table>
			</span>
			<span>
				<section>
					<img src={partumI} alt="" />
					<h3>{partum}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{partumDate}</th>
							<td>{litter.stages.partum.date}</td>
						</tr>
						<tr>
							<th>〰〰〰〰〰</th>
							<td>〰〰〰〰〰</td>
						</tr>
						<tr>
							<th>{partumAlive}</th>
							<td>{litter.stages.partum.alive}</td>
						</tr>
						<tr>
							<th>{partumDead}</th>
							<td>{litter.stages.partum.dead}</td>
						</tr>
						<tr>
							<th>{partumHomogenized}</th>
							<td>{litter.stages.partum.homogenized}</td>
						</tr>
						<tr></tr>
					</tbody>
				</table>
			</span>
			<span>
				<section>
					<img src={weaningI} alt="" />
					<h3>{weaning}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{weaningDate}</th>
							<td>{litter.stages.weaning.date}</td>
						</tr>
						<tr>
							<th>〰〰〰〰〰</th>
							<td>〰〰〰〰〰</td>
						</tr>
						<tr>
							<th>{weaningAverageWeight}</th>
							<td>{litter.stages.weaning.averangeWeight}</td>
						</tr>
						<tr>
							<th>{weaningFemales}</th>
							<td>{litter.stages.weaning.females}</td>
						</tr>
						<tr>
							<th>{weaningMales}</th>
							<td>{litter.stages.weaning.males}</td>
						</tr>
						<tr></tr>
					</tbody>
				</table>
			</span>
		</section>
	);
}
