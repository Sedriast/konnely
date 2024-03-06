import React from "react";
import { PieChartS } from "../../Fragments/Stadistics/PieChartS";
import rabbitPictureDefault from "../../../constants/assets/defaultRabbit.jpg";

export default function PictureRaces({
	id,
	race,
	birth,
	L_rabbit,
	pictureURL,
}) {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td>
							<img
								src={pictureURL ? pictureURL : rabbitPictureDefault}
								alt=""
							/>
						</td>
						<th>
							<h2>{`${L_rabbit}: ${id}`}</h2>
						</th>
					</tr>
					<tr>
						<th>
							<h3>{race}</h3>
						</th>
						<td>
							<PieChartS data={birth.race} />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
