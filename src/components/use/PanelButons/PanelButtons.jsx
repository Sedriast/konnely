import style_PB from '../../css/PanelButtons/PanelButtons.module.css';
import { Buttons } from '../Tools/Buttons';

export function PanelButtons(props) {
	return (
		<>
			<div className={props.clsName}>
				<div className={style_PB.panel_}>
					<Buttons clsName={style_PB.op1} link_="/list" cliLoa_={props.loading_} />
					<Buttons clsName={style_PB.op2} link_="/invoice" cliLoa_={props.loading_} />
					<Buttons clsName={style_PB.op3} link_="/" cliLoa_={props.loading_} />
					<Buttons clsName={style_PB.op4} link_="/" cliLoa_={props.loading_} />
					<Buttons clsName={style_PB.op5} link_="/" cliLoa_={props.loading_} />
					<Buttons clsName={style_PB.op6} link_="/form" cliLoa_={props.loading_} />
				</div>
			</div>
		</>
	);
}
