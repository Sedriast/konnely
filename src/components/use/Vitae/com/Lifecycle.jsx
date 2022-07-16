import st from '../css/Com.module.css';
import { ciclo } from '../dataProv';

export function Lifecycle() {
	return (
		<>
			<div className={st.container}>
				<div className={st.panelE}>
					|<div className={st.etapa}>{ciclo[1].etapa}</div>
					<div className={st.peso}>{ciclo[1].peso}</div>
					<div className={st.fecha}>{ciclo[1].fecha}</div>
				</div>
				<div className={st.panelE}>
					|<div className={st.etapa}>{ciclo[2].etapa}</div>
					<div className={st.peso}>{ciclo[2].peso}</div>
					<div className={st.fecha}>{ciclo[2].fecha}</div>
				</div>
				<div className={st.panelE}>
					|<div className={st.etapa}>{ciclo[2].etapa}</div>
					<div className={st.peso}>{ciclo[2].peso}</div>
					<div className={st.fecha}>{ciclo[2].fecha}</div>
				</div>
			</div>
		</>
	);
}
