import weaningI from "../../../constants/assets/logos/baby_bottle_13945.svg";
import radeI from "../../../constants/assets/logos/rabbit_ride_13244.svg";
import palpationI from "../../../constants/assets/logos/latex_globes_13256.svg";
import prepartumI from "../../../constants/assets/logos/nest_13318.svg";
import partumI from "../../../constants/assets/logos/partum_13329.svg";

export default function Litter({ litter_, litterData }) {
	return (
		<div>
			<h1>
				{litter_[0]}
				<br />
				{litterData.id}
			</h1>
			<span>
				<section>
					<img src={radeI} alt="" />
					<h3>{litter_[1][0]}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{litter_[1][1]}</th>
							<td>{litterData.stages.ride.date}</td>
						</tr>
						{litterData.stages.ride.isNatural && (
							<tr>
								<th>{litter_[1][2]}</th>
								<td>{litterData.stages.ride.male}</td>
							</tr>
						)}
						<tr>
							<td>〰〰〰〰〰〰〰〰〰</td>
						</tr>
						<tr>
							<td>
								{litterData.stages.ride.isNatural
									? litter_.natural
									: litterData.artificial}
							</td>
						</tr>
					</tbody>
				</table>
			</span>
			<span>
				<section>
					<img src={palpationI} alt="" />
					<h3>{litter_[2]}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{litter_[1][1]}</th>
							<td>{litterData.stages.palpation.date}</td>
						</tr>
						<tr></tr>
					</tbody>
				</table>
			</span>
			<span>
				<section>
					<img src={prepartumI} alt="" />
					<h3>{litter_[3]}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{litter_[1][1]}</th>
							<td>{litterData.stages.prepartum.date}</td>
						</tr>
						<tr></tr>
					</tbody>
				</table>
			</span>
			<span>
				<section>
					<img src={partumI} alt="" />
					<h3>{litter_[4][0]}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{litter_[1][1]}</th>
							<td>{litterData.stages.partum.date}</td>
						</tr>
						<tr>
							<td>〰〰〰〰〰〰〰〰〰</td>
						</tr>
						<tr>
							<th>{litter_[4][1]}</th>
							<td>{litterData.stages.partum.alive}</td>
						</tr>
						<tr>
							<th>{litter_[4][2]}</th>
							<td>{litterData.stages.partum.dead}</td>
						</tr>
						<tr>
							<th>{litter_[4][3]}</th>
							<td>{litterData.stages.partum.homogenized}</td>
						</tr>
						<tr></tr>
					</tbody>
				</table>
			</span>
			<span>
				<section>
					<img src={weaningI} alt="" />
					<h3>{litter_[5][0]}</h3>
				</section>
				<table>
					<tbody>
						<tr></tr>
						<tr>
							<th>{litter_[1][1]}</th>
							<td>{litterData.stages.weaning.date}</td>
						</tr>
						<tr>
							<td>〰〰〰〰〰〰〰〰〰</td>
						</tr>
						<tr>
							<th>{litter_[5][1]}</th>
							<td>{litterData.stages.weaning.averangeWeight}</td>
						</tr>
						<tr>
							<th>{litter_[5][2]}</th>
							<td>{litterData.stages.weaning.females}</td>
						</tr>
						<tr>
							<th>{litter_[5][3]}</th>
							<td>{litterData.stages.weaning.males}</td>
						</tr>
						<tr></tr>
					</tbody>
				</table>
			</span>
		</div>
	);
}
