export function TableTwo({ table_two, language }) {
	const { dad_id, mom_id } = table_two;
	const { titles } = language;
	return (
		<div>
			<span>{`${titles[0]}: ${dad_id}`}</span>
			<span>{`${titles[1]}: ${mom_id}`}</span>
		</div>
	);
}
