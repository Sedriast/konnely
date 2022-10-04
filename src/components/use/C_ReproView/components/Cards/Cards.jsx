import st from './Cards.module.css';

import { Ref } from './components/Ref';

export function Cards({ id, editor, stages }) {
	return (
		<div className={st.container}>
			<div className={st.panelId}>
				{id}
				<br />
				Editor: {editor}
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
