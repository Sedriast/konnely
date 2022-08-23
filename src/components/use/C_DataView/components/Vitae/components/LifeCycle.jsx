import st from '../styles/LifeCycle.module.css';
import { lifecycleChild } from '../../../../0-GeneralComp/0-Dates/Dates';

export function LifeCycle({ stageId }) {
	return (
		<>
			<div className={st.container}>
				{JSON.stringify(stageId) !== '{}' ? (
					<div className={st.panel}>
						{lifecycleChild(stageId).map((items, index) => {
							return (
								<div key={index} className={st.panelStage}>
									<div>
										{items.etapa}
										<br />
										<br />
										Peso:
										<br />
										<div>{items.peso}</div>
										<br />
										Fecha de registro:
										<br />
										<div>{items.fecha}</div>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
}
