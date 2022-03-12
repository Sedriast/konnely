import { Link } from 'react-router-dom';
import style_B from '../../css/Tools/Buttons.module.css';

export function Buttons (props){

	return(
		<>
			<div className={props.clsName}>
				<div className={style_B.panel_}>
					<Link to={props.link_}>
						<button onClick={props.click_} onChange={props.change_} name={props.name_} />
					</Link>
					<img src={props.icon_} href='' alt='' />
				</div>
			</div>
		</>
	);
}