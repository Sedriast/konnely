import st from './LifeCycle.module.css';

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../../../../0-GeneralComp/1-Buttons/Buttons';

import { Cards } from './Cards/Cards';

export function LifeCycle({ info }) {
	return (
		<>
			<br />
			<div className={st.tit}>
				Ciclo de vida
				<div>
					<Buttons
						route="/editlife"
						label="editar"
						direction="bottom"
						btnIconText={faPenToSquare}
					/>
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className={st.panel}>
				<Cards info={info} />
			</div>
		</>
	);
}
