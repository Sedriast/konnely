import st from './styles/Vitae.module.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { basicData } from '../../scripts/dataProv';
import { LifeCycle } from './components/LifeCycle/LifeCycle';
import { RabbitDataView } from './components/RabbitDataView/RabbitDataView';

export function Vitae() {
	const navigate = useNavigate();

	useEffect(() => {
		if (basicData.id === null) {
			navigate('/vitaeslist');
			return null;
		}
	}, [navigate]);
	return (
		<>
			{basicData.id !== null && (
				<div className={st.panel}>
					<RabbitDataView stageId={basicData.id} />
					<hr />
					<br />
					<LifeCycle stageId={basicData.id} info={basicData.info} />
				</div>
			)}
		</>
	);
}
