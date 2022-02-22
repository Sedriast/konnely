import { Btn } from '../Buttons/Btn';
import style from '../css/Login.module.css';

export function Login() {


	return (
	<>
		<div className={style.subPanelL}> 
			<input className={style.userIn} type='text' />
			<input className={style.passIn} type='text' />
			<Btn clName={style.submitLo}/>
		</div>
	</>
	);
}