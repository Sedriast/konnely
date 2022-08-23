import st from './styles/Healt.module.css';
import { tratamientos } from '../../scripts/dataProv';

import { Item } from './components/Item';

export function Healt() {
	return (
		<>
			<div className={st.conItems}>
				<h1 className={st.ti}>Lista de Tratamientos</h1>
				<div className={st.container}>
					<div className={st.panelItems}>
						<Item trataments={tratamientos} />
					</div>
				</div>
			</div>
		</>
	);
}
