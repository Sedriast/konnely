export default function BasicData({
	date,
	mom_id,
	dad_id,
	status,
	origin,
	stages_,
	isFemale,
	basicData,
	birdLitter,
	isTransfered,
}) {
	return (
		<div>
			<h1>{basicData[0]}</h1>
			<table>
				<tbody>
					<tr>
						<th>{basicData[3]}</th>
						<td>{isFemale ? stages_.female : stages_.male}</td>
					</tr>
					{status ? (
						<>
							<tr>
								<th>{basicData[7]}</th>
								<td>{origin}</td>
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
							<tr>
								<td>
									<h3>{isTransfered}</h3>
								</td>
							</tr>
						</>
					) : (
						<>
							<tr>
								<th>{basicData[7]}</th>
								<td>{origin}</td>
							</tr>
							<tr>
								<th>{basicData[5]}</th>
								<td>{birdLitter.id}</td>
							</tr>
							<tr>
								<th>{basicData[8]}</th>
								<td>{birdLitter.stages.ride.female}</td>
							</tr>
							<tr>
								<th>{basicData[9]}</th>
								<td>{birdLitter.stages.ride.male}</td>
							</tr>
							<tr>
								<td>
									{birdLitter.stages.ride.male.isNatural
										? stages_.natural
										: stages_.artificial}
								</td>
							</tr>
						</>
					)}
				</tbody>
			</table>
		</div>
	);
}
