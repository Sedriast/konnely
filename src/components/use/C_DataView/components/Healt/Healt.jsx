import st from '../styles/Com.module.css';
import { tratamientos } from '../../../scripts/dataProv';

import { Item } from './components/Item';
import { Buttons } from '../../0-GeneralComp/F-Buttons/Buttons';

export function Healt() {
	return (
		<>
			<div className={st.conItems}>
				<h1 className={st.ti}>Lista de Tratamientos</h1>

				<div className={st.scroll}>
					<Item />
				</div>
				<div className={st.save}>
					<Buttons link_="/data2" />
				</div>
			</div>
		</>
	);
}
