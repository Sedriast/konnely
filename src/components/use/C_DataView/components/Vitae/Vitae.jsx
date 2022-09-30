import st from './Vitae.module.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { recuperar } from '../../../0-GeneralComp/0-StaticData/dataProv';

import { LifeCycle } from './components/LifeCycle/LifeCycle';
import { RabbitDataView } from './components/RabbitDataView/RabbitDataView';
import { ReproductiveCycle } from './components/ReproductiveCycle/ReproductiveCycle';

export function Vitae() {
	const navigate = useNavigate();

	useEffect(() => {
		if (recuperar.id === null) {
			navigate('/vitaeslist');
			return null;
		}
	}, [navigate]);

	return (
		<>
			{recuperar.id !== null && (
				<div className={st.panel}>
					<RabbitDataView stageId={recuperar.id} />
					<hr />
					<br />
					<LifeCycle info={recuperar.info} />
					<br />
					<br />
					<hr />
					<br />
					<br />
					<ReproductiveCycle />
				</div>
			)}
		</>
	);
}
