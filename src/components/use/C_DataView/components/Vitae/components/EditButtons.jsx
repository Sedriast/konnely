import st from '../styles/EditButtons.module.css';

import { btnData } from '../scripts/btnData';
import { Buttons } from '../../../../0-GeneralComp/F-Buttons/Buttons';

export function EditButtons() {
	return (
		<div className={st.btnEdits}>
			{btnData.map((item) => {
				return (
					<div key={item.id} className={st[item.cls]}>
						<Buttons
							direction="bottom"
							route={item.path}
							btnIconText={item.iconText}
							label={item.label}
						/>
					</div>
				);
			})}
		</div>
	);
}
