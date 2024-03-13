export function LittersListP({ language, litterRecord }) {
	const {
		titles: {
			palpationDate,
			prepartumDate,
			ride: { date_r, format_r, males },
			partum: { date_p, format_p, animals_p, weight_p },
			weaning: { date_w, animals_w, format_w, weight_w },
		},
	} = language;

	const stimatedPartumDate = () => {
		let date_ = date_r.toDate();
		date_.setDate(date_.getDate() + 30);

		let day = String(date_.getDate()).padStart(2, "0");
		let month = String(date_.getMonth() + 1).padStart(2, "0");
		let year = date_.getFullYear();

		return `${month}-${day}-${year}`;
	};

	return (
		<div>
			<span>
				<h1>
					<h1>{date_r}</h1>
					<h1>{format_r[0]}</h1>
					<h1>{format_r[1]}</h1>
					<h1>{format_r[2]}</h1>
				</h1>
				<h1>{males}</h1>
				<h1>{palpationDate}</h1>
				<h1>{stimatedPartumDate}</h1>
				<h1>{prepartumDate}</h1>
				<h1>{date_p}</h1>
				<h1>
					<h1>{animals_p}</h1>
					<h1>{format_p[0]}</h1>
					<h1>{format_p[0]}</h1>
				</h1>
				<h1>{weight_p}</h1>
				<h1>{date_w}</h1>
				<h1>
					<h1>{animals_w}</h1>
					<h1>{format_w[0]}</h1>
					<h1>{format_w[1]}</h1>
				</h1>
				<h1>{weight_w}</h1>
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
