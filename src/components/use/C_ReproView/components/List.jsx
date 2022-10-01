import { Cards } from './Cards/Cards';

export function List({ litters }) {
	return (
		<>
			{litters.map((item) => (
				<Cards key={item.id} id={item.id} editor={item.editors[0]} stages={item.stages} />
			))}
		</>
	);
}
