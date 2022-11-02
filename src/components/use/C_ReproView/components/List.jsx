import st from '../ReproView.module.css';

import { QueriesSimple_ } from '../../../firebase/funtions/GetInformation';
import { basicData } from '../../0-GeneralComp/0-StaticData/dataProv';
import { Cards } from './Cards/Cards';

export function List() {
	const reproductiveCycles = QueriesSimple_({
		coleccion: 'reproductive',
		parametro: 'uidMother',
		busqueda: basicData.info.uid,
	}).props.children;
	return (
		<>
			{reproductiveCycles.length === 1 ? (
				<>
					{reproductiveCycles?.map((item, index) => (
						<Cards key={index} id={item.id} editor={item.editors} stages={item.stages} />
					))}
				</>
			) : (
				<>
					<div className={st.des}>No existen registros</div>
				</>
			)}
		</>
	);
}
