import st from './Cards.module.css';

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';

import { Ref } from './components/Ref/Ref';

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
