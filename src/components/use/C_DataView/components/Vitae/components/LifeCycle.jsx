import st from '../styles/LifeCycle.module.css';
import { lifecycleChild } from '../../../../0-GeneralComp/0-Dates/Dates';
import { RealTime } from '../../../../../firebase/funtions/RealTime';

export function LifeCycle({ stageId }) {
	function rabbitData() {
		if (stageId === null) {
			return null;
		} else {
			return RealTime({
				coleccion: 'conejos',
				parametro: 'id',
				busqueda: stageId,
			}).props.children[0];
		}
	}
	return (
		<>
			<div className={st.container}>
				{stageId !== null ? (
					<div className={st.panel}>
						{lifecycleChild(rabbitData()).map((items, index) => {
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
		</>
	);
}
