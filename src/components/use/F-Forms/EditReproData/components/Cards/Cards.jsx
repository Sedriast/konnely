import st from './Cards.module.css';

import { Ref } from './components/Ref/Ref';
import { Editors } from './components/Editors/Editors';

export function Cards({ id, editor, stages }) {
	return (
		<div className={st.container}>
			<div className={st.panelId}>
				{id}
				<br />
				<Editors />
			</div>
			<br />
			<div className={st.panelInfo}>
				{stages?.map((element) => {
					return (
						<>
							<Ref stage={element} />
							{element.title === 'Destete' ? '' : '>'}
						</>
					);
				})}
			</div>
		</div>
	);
}
