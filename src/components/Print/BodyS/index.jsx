export function BodyS({ language, table_one }) {
	const { labels, titles } = language;
	const { isTransfered, BoT_Date, isFemale, rabbitID, races } = table_one;
	return (
		<section>
			<div>
				<span>{`${titles[0]}: ${labels[0]}`}</span>
				<span>
					<h1>{isTransfered ? titles[1][1] : titles[1][0]}</h1>
					<h1>{titles[1][2]}</h1>
					<h1>{titles[1][3]}</h1>
					<h1>{titles[1][4]}</h1>
					<p>{BoT_Date[0]}</p>
					<p>{BoT_Date[1]}</p>
					<p>{BoT_Date[2]}</p>
				</span>
				<span>
					<h4>{isFemale ? titles[2] : titles[3]}</h4>
					<p>{rabbitID}</p>
				</span>
				<span>
					<h4>{titles[4]}</h4>
					{races?.map((element, index) => (
						<p key={index}>{`${element.value}% ${element.name}`}</p>
					))}
				</span>
			</div>
		</section>
	);
}
