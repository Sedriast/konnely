export function TableFour({ language, table_four }) {
	const { isTransfered, weaningAge, place, birthType } = table_four;
	const { titles } = language;
	return (
		<div>
			<span>
				<h1>{titles[0]}</h1>
				<p>{weaningAge}</p>
			</span>
			<span>
				<h1>{titles[1]}</h1>
				<p>
					{isTransfered ? `${titles[2]}${place}` : `${titles[3]}${birthType}`}
				</p>
			</span>
		</div>
	);
}
