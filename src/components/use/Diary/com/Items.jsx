import { Item } from './Item';

export function Items({ items }) {
	return (
		<>
			<h1>Cronograma agendado</h1>
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</>
	);
}
