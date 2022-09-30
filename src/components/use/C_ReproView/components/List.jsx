import { Cards } from './Cards/Cards';

import { litter } from '../../0-GeneralComp/2-FakeData/reproductiveCycle';

export function List({ litters }) {
	return (
		<>
			{litter.map((item) => (
				<>
					<Cards key={item.id} id={item.id} editor={item.editors[0]} stages={item.stages} />
				</>
			))}
		</>
	);
}
