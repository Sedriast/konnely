import { Cards } from './Cards/Cards';

export function List({ litters }) {
	return (
		<>
			{litters?.map((item, index) => (
				<Cards key={index} id={item.id} editor={item.editors} stages={item.stages} />
			))}
		</>
	);
}
