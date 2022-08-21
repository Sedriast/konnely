import st from './styles/VitaeIsList.module.css';

import { List } from './components/List';

export function ViewIsList() {
	return (
		<>
			<div className={st.leftMenu}>
				<figure title="Nuevo conejo" tooltip-dir="rigth">
					<button>➕</button>
				</figure>
			</div>
			<List />
		</>
	);
}
