import st from './LifeCycle.module.css';
import { lifeCycleChild } from '../../../../../0-GeneralComp/0-Dates/Dates';

export function LifeCycle({ stageId, info }) {
	return (
		<>
			<hr />
			<br />
			Ciclo de vida
			<br />
			<br />
			<div className={st.container}>
				{stageId !== null ? (
					<div className={st.panel}>
						{lifeCycleChild(info).map((items, index) => {
							return (
								<div key={index} className={st.panelStage}>
									<div>
										{items.etapa}
										<br />
										<br />
										Peso:
										<br />
										<h1>{items.peso}</h1>
										<br />
										Fecha de registro:
										<br />
										<h1>{items.fecha}</h1>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<></>
				)}
			</div>
			<br />
			<br />
			<hr />
			<br />
		</>
	);
}
