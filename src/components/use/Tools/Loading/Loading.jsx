import style_Loa from './css/Loading.module.css';
import lof from '../../../img/load.gif';

export function Loading(props) {
	return (
		<>
			<div className={props.clsName}>
				<div className={style_Loa.panel_}>
					<img src={lof} href="" alt="" />
				</div>
			</div>
		</>
	);
}
