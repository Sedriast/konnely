import style_Lo from '../../css/Login/Login.module.css';
import { Buttons } from '../Tools/Buttons';
import { Inputs } from '../Tools/Inputs';

export function Login(props){
	return(
		<>
			<div className={props.clsName}>
				<div className={style_Lo.panel_}>
					<Inputs clsName={style_Lo.userName} type_='text' leyend="Nombre de usuario" ></Inputs>
					<Inputs clsName={style_Lo.userPass} type_='password' leyend="Contraseña" ></Inputs>
					<Buttons clsName={style_Lo.submit_Lo} link_='/list'></Buttons>
				</div>
			</div>
		</>
	);
}