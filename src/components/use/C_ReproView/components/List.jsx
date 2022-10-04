import { Cards } from './Cards/Cards';

import { litter } from '../../0-GeneralComp/2-FakeData/reproductiveCycle';

export function List({ litters }) {
	return (
		<>
			{litter?.map((item, index) => (
				<Cards key={index} id={item.id} editor={item.editors} stages={item.stages} />
			))}
		</>
	);
}
