import st from './List.module.css';

import { Buttons } from '../../../../../0-GeneralComp/F-Buttons/Buttons';
import { Cards } from '../Cards/Cards';

export function List({ trataments }) {
	return (
		<>
			{trataments.map((item) => (
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
					<div className={st.btn}>
						<Buttons route="#" label="eliminar" direction="bottom" btnIconText="🚮" />
					</div>
				</>
			))}
		</>
	);
}
