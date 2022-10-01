import st from '../ReproductiveCycle.module.css';

import { Buttons } from '../../../../../../0-GeneralComp/1-Buttons/Buttons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Cards } from '../../../../../../C_ReproView/components/Cards/Cards';

import { litter } from '../../../../../../0-GeneralComp/2-FakeData/reproductiveCycle';

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
			return (
				<>
					{litter.map((item) =>
						item.state === true ? (
							<Cards key={item.id} id={item.id} editor={item.editors} stages={item.stages} />
						) : (
							<></>
						)
					)}
				</>
			);
		default:
			break;
	}
}
