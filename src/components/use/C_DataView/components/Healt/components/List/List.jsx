import { Cards } from '../Cards/Cards';

export function List({ trataments }) {
	return (
		<>
			{trataments.map((item) => (
				<>
					<Cards
						key={item.uid}
						id={item.uid}
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
