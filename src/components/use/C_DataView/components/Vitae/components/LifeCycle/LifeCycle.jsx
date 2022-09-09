import st from './LifeCycle.module.css';

//import { lifeCycleChild } from '../../../../../../0-GeneralComp/0-Dates/Dates';
import { stages } from '../../../../../0-GeneralComp/0-fakeData/liveCycle';
import { Cards } from './Cards/Cards';

export function LifeCycle({ stageId, info }) {
	return (
		<>
			<br />
			<div className={st.tit}>Ciclo de vida</div>
			<br />
			<br />
			<br />
			{/* <div className={st.panel}>
				<Cards stageId={stageId} info={lifeCycleChild[info]} />
			</div> */}
			{stageId !== null ? (
				<div className={st.panel}>
					<Cards stageId={102222} info={stages} />
				</div>
			) : (
				<></>
			)}
		</>
	);
}
