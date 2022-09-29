import st from '../ReproductiveCycle.module.css';

import { Buttons } from '../../../../../../0-GeneralComp/1-Buttons/Buttons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Cards } from '../../../../../../C_ReproView/components/Cards/Cards';

export function Option({ op, click }) {
	switch (op) {
		case false:
			return (
				<div className={st.act}>
					<Buttons
						route="#"
						label="Nueva camada"
						direction="bottom"
						btnIconText={faCirclePlus}
						btnClick={click}
					/>
					<br />
					Nueva camada
				</div>
			);
		case true:
			return <Cards />;
		default:
			break;
	}
}
