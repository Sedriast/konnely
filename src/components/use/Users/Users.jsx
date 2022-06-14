import style_U from '../../css/Users/Users.module.css';
import { Buttons } from '../Tools/Buttons/Buttons';

export function Users(props) {
	return (
		<>
			<div className={props.clsName}>
				<div className={style_U.panel_}>
					<div className={style_U.panelImg_}>
						<img className={style_U.userImg_} src={props.src_} alt="" href="" />
						<Buttons clsName={style_U.op1} link_="/" />
						<Buttons clsName={style_U.op2} link_="/" />
						<Buttons clsName={style_U.op3} link_="/" />
						<Buttons clsName={style_U.op4} link_="/" />
					</div>
					<p>
						<h1>{props.title}</h1>
						<h3>{props.label}</h3>
					</p>
				</div>
			</div>
		</>
	);
}
