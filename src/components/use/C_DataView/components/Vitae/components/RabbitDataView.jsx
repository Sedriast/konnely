import st from '../styles/RabbitDataView.module.css';

import app from '../../../../../firebase/credentials';

import { useEffect, useState } from 'react';
import { basicData } from '../../../scripts/dataProv';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';

const db = getFirestore(app);

export function RabbitDataView({ stageId }) {
	const [data_, setData_] = useState([]);
	useEffect(() => {
		const q = query(collection(db, 'conejos'), where('id', '==', stageId));
		onSnapshot(q, (snapshot) => setData_(snapshot.docs.map((doc) => ({ ...doc.data() }))));
	}, [stageId]);
	return (
		<>
			{basicData.id !== null && (
				<>
					<div className={st.panelBasicInfo}>
						<img className={st.imgVitae} src={data_[0]?.url} alt="" />
						<div className={st.subPanel}>
							Identificador:
							<br />
							<h1>{data_[0]?.id}</h1>
						</div>
						<div className={st.subPanel}>
							Raza:
							<br />
							<h1>{data_[0]?.raza}</h1>
						</div>
						<div className={st.subPanel}>
							Genero:
							<br />
							<h1>{data_[0]?.genero}</h1>
						</div>
						<div className={st.subPanel}>
							Id. Padre:
							<br />
							<h1>{data_[0]?.idPadre}</h1>
						</div>
						<div className={st.subPanel}>
							Id. Madre:
							<br />
							<h1>{data_[0]?.idMadre}</h1>
						</div>
						<div className={st.subPanel}>
							Origen:
							<br />
							<h1>{data_[0]?.origen}</h1>
						</div>
						<div className={st.subPanel}>
							Fecha concepcion:
							<br />
							<h1>{data_[0]?.nacimiento}</h1>
						</div>
						<div className={st.subPanel}>
							Porcentaje pureza:
							<br />
							<h1>{data_[0]?.porcentaje}</h1>
						</div>
					</div>
				</>
			)}
		</>
	);
}
