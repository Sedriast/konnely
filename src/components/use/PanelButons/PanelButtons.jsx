import style_PB from '../../css/PanelButtons/PsnelButtons.module.css';
import { Buttons } from '../Tools/Buttons';

export function PanelButtons(props){
	return(
		<>
			<div className={props.clsName}>
				<div className={style_PB.panel_}>
					<Buttons clsName={style_PB.op1} link_='/form'/>
					<Buttons clsName={style_PB.op2} link_='/list'/>
					<Buttons clsName={style_PB.op3} link_='/'/>
					<Buttons clsName={style_PB.op4} link_='/'/>
					<Buttons clsName={style_PB.op5} link_='/'/>
					<Buttons clsName={style_PB.op6} link_='/'/>
				</div>
			</div>
		</>
	);
}