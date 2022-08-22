import st from './styles/Vitae.module.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Lifecycle } from '../../com/Lifecycle';
import { basicData, reproData } from '../../scripts/dataProv';

import { Buttons } from '../../../0-GeneralComp/F-Buttons/Buttons';
import { RabbitDataView } from './components/RabbitDataView';
import { RabbitStadistics } from './components/RabbitStadistics';
import { RealTime } from '../../../../firebase/funtions/RealTime';

export function Vitae() {
	const navigate = useNavigate();

	function rabbitData() {
		if (basicData.id === null) {
			return null;
		} else {
			return RealTime({
				coleccion: 'conejos',
				parametro: 'id',
				busqueda: basicData.id,
			}).props.children[0];
		}
	}
	useEffect(() => {
		if (basicData.id === null) {
			navigate('/vitaeslist');
			return null;
		}
	}, [navigate]);

	return (
		<>
			<div className={st.container}>
				<RabbitDataView rabbitData={rabbitData} />

				<Lifecycle id={rabbitData()} />

				<RabbitStadistics reproData={reproData} />

				<div className={st.btnEdits}>
					<div className={st.basicData}>
						<Buttons path="" btnIconText="✏️ Datos básicos" />
					</div>
					<div className={st.lifeCi}>
						<Buttons path="" btnIconText="✏️ Ciclo de vida" />
					</div>
					<div className={st.nPartos}>
						<Buttons path="#" btnIconText={'Ciclo de reproductico: ' + reproData.partos} />
					</div>
				</div>
			</div>
		</>
	);
}
