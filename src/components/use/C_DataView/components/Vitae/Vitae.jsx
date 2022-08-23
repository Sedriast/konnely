import st from './styles/Vitae.module.css';

// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

import { LifeCycle } from './components/LifeCycle';
import { RabbitStadisticsView } from './components/RabbitStadisticsView';
import { EditButtons } from './components/EditButtons';

import { RabbitDataView } from './components/RabbitDataView';

// import { RealTime } from '../../../../firebase/funtions/RealTime';

export function Vitae({ rabbitData }) {
	// const navigate = useNavigate();

	// function rabbitData() {
	// 	if (basicData.id === null) {
	// 		return null;
	// 	} else {
	// 		return RealTime({
	// 			coleccion: 'conejos',
	// 			parametro: 'id',
	// 			busqueda: basicData.id,
	// 		}).props.children[0];
	// 	}
	// }
	// useEffect(() => {
	// 	if (basicData.id === null) {
	// 		navigate('/vitaeslist');
	// 		return null;
	// 	}
	// }, [navigate]);

	return (
		<>
			<div className={st.container}>
				<div className={st.panel}>
					<RabbitDataView rabbitData={rabbitData} />

					<hr />

					<LifeCycle id={rabbitData} />

					<hr />

					<RabbitStadisticsView />

					<hr />

					<EditButtons />
				</div>
			</div>
		</>
	);
}
