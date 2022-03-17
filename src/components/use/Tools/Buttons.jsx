import { Link } from 'react-router-dom';
import style_B from '../../css/Tools/Buttons.module.css';

export function Buttons (props){

	return(
		<>
			<div className={props.clsName}>
				<div className={style_B.panel_}>
					<button onClick={props.click_} onChange={props.change_} name={props.name_} >
						<Link to={props.link_}>
							<img src={props.icon_} onClick={props.cliLoa_} href='' alt='' />
						</Link>
					</button>
				</div>
			</div>
		</>
	);
}