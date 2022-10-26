import st from './Loading.module.css';
import sd from '../../../img/load.gif';

export function Loading() {
	return (
		<>
			<div className={st.imPanel}>
				<img src={sd} alt="" />
				Cargando ...
			</div>
		</>
	);
}
