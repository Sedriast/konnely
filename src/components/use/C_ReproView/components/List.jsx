import { Cards } from './Cards/Cards';

import { litter } from '../../0-GeneralComp/2-FakeData/reproductiveCycle';

export function List({ trataments }) {
	return (
		<>
			{litter.map((item) => (
				<>
					<Cards
						key={item.id}
						id={item.id}
						date={item.date}
						signs={item.signs}
						diagnosis={item.diagnosis}
						tratament={item.tratament}
						result={item.result}
						professional={item.professional}
					/>
				</>
			))}
		</>
	);
}
