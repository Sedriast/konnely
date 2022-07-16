import st from '../css/Com.module.css';
import { ciclo } from '../dataProv';

export function Lifecycle() {
	return (
		<>
			<div className={st.container}>
				<div className={st.panelE}>
					|<div className={st.viewI}>{ciclo[0].etapa}</div>
					<div className={st.viewI}>{ciclo[0].peso}</div>
					<div className={st.viewI}>{ciclo[0].fecha}</div>
				</div>
				<div className={st.panelE}>
					|<div className={st.viewI}>{ciclo[1].etapa}</div>
					<div className={st.viewI}>{ciclo[1].peso}</div>
					<div className={st.viewI}>{ciclo[1].fecha}</div>
				</div>
				<div className={st.panelE}>
					|<div className={st.viewI}>{ciclo[2].etapa}</div>
					<div className={st.viewI}>{ciclo[2].peso}</div>
					<div className={st.viewI}>{ciclo[2].fecha}</div>
				</div>
			</div>
		</>
	);
}
