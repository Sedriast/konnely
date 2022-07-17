import { Buttons } from '../../Tools/Buttons/Buttons';
import st from '../css/Com.module.css';
import { Item } from './Item';

export function Items() {
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
