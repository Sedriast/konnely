import { Item } from './Item';

export function Items({ items }) {
	return (
		<>
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</>
	);
}
