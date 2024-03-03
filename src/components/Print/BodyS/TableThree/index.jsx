export function TableThree({ language, table_three }) {
	const { titles } = language;
	const { currentWeight, weaningWeight, birthORTrans, isTranslate } =
		table_three;

	return (
		<div>
			<h1>{titles[0]}</h1>
			<h1>{titles[1]}</h1>
			<h1>{isTranslate ? titles[2] : titles[3]}</h1>
			<h1>{titles[4]}</h1>
			<p>{currentWeight}</p>
			<p>{weaningWeight}</p>
			<p>{birthORTrans}</p>
		</div>
	);
}
