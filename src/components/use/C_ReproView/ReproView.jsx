import st from './ReproView.module.css';

import { newTreats } from '../0-GeneralComp/0-StaticData/options';

import { LeftBottomMenu } from '../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import { List } from './components/List';

export function ReproView() {
	return (
		<>
			<LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
			<div className={st.panelSearchBar}>
				<input placeholder="Buscar" onChange={(e) => {}} />
				<button className={st.btnSearch}>🔎</button>
			</div>
			<div className={st.optionContainer}>
				<List />
			</div>
		</>
	);
}
