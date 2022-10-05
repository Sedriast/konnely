import st from '../Cards/Cards.module.css';

import { Cards } from '../Cards/Cards';

export function List({ trataments }) {
	return (
		<>
			{trataments ? (
				trataments.map((item) => (
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
				))
			) : (
				<div className={st.pan}>
					<h1>Cargando porfavor espere...</h1>
				</div>
			)}
		</>
	);
}
