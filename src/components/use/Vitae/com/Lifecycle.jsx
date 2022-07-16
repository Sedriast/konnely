import st from '../css/Com.module.css';
import { ciclo } from '../dataProv';

export function Lifecycle() {
	return (
		<>
			<div className={st.container}>
				{ciclo.map((items, index) => {
					return (
						<div key={index} className={st.panelE}>
							|<div className={st.viewI}>{items.etapa}</div>
							<div className={st.viewI}>{items.peso}</div>
							<div className={st.viewI}>{items.fecha}</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
