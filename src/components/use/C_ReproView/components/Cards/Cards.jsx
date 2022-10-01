import st from './Cards.module.css';

import { Ref } from './components/Ref';

export function Cards({ id, editor, stages }) {
	return (
		<div className={st.container}>
			<div className={st.panelId}>
				Camada {id}
				<div>Editor: {editor}</div>
			</div>

			<div className={st.panelInfo}>
				<Ref stage={stages} />
			</div>
		</div>
	);
}
