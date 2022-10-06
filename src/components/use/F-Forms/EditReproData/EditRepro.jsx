import st from './EditRepro.module.css';

import { newTreats } from '../../0-GeneralComp/0-StaticData/options';

import { LeftBottomMenu } from '../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';

import { litter } from '../../0-GeneralComp/2-FakeData/reproductiveCycle';
import { Cards } from './components/Cards/Cards';

export function EditRepro() {
	const opt = litter?.map((item) => (item.state === true ? item : []));
	return (
		<>
			<LeftBottomMenu
				backCancel={newTreats}
				click={() => {
					window.history.back();
				}}
			/>
			<div className={st.optionContainer}>
				<Cards id={opt.id} editor={opt.editors} stages={opt.stages} />
			</div>
		</>
	);
}
