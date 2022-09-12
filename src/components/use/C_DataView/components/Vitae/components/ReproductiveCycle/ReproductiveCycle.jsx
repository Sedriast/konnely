import st from './ReproductiveCycle.module.css';

import { litter } from '../../../../../0-GeneralComp/0-fakeData/reproductiveCycle';

export function ReproductiveCycle() {
	return (
		<>
			<div className={st.container}>
				{litter[0].stages.map(() => {
					<div></div>;
				})}
			</div>
		</>
	);
}
