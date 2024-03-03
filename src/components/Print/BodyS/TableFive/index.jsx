export function TableFive({ language, table_five }) {
	const { litterRecord } = table_five;
	const { titles } = language;
	return (
		<div>
			<span>
				<h1>
					<h1>{titles[0][0]}</h1>
					<h1>{titles[0][1]}</h1>
					<h1>{titles[0][2]}</h1>
					<h1>{titles[0][3]}</h1>
				</h1>
				<h1>{titles[1]}</h1>
				<h1>{titles[2]}</h1>
				<h1>{titles[3]}</h1>
				<h1>{titles[4]}</h1>
				<h1>{titles[5]}</h1>
				<h1>
					<h1>{titles[6][0]}</h1>

					<h1>{titles[6][1]}</h1>
					<h1>{titles[6][2]}</h1>
				</h1>
				<h1>{titles[7]}</h1>
				<h1>{titles[8]}</h1>
				<h1>
					<h1>{titles[9][0]}</h1>
					<h1>{titles[9][1]}</h1>
					<h1>{titles[9][2]}</h1>
				</h1>
				<h1>{titles[10]}</h1>
			</span>
			{litterRecord.map((litter) => (
				<span key={litter.id}>
					<p>{litter.stages.ride.date}</p>
					<p>{litter.stages.ride.male}</p>
					<p>{litter.stages.palpation.date}</p>
					<p>{litter.stages.partum.date}</p>
					<p>{litter.stages.prepartum.date}</p>
					<p>{litter.stages.partum.date}</p>
					<p>
						<p>{litter.stages.partum.alive}</p>
						<p>{litter.stages.partum.dead}</p>
					</p>
					<p>〰〰〰〰〰</p>
					<p>{litter.stages.weaning.date}</p>
					<p>
						<p>{litter.stages.weaning.females}</p>
						<p>{litter.stages.weaning.males}</p>
					</p>
					<p>{litter.stages.weaning.averangeWeight}</p>
				</span>
			))}
		</div>
	);
}
