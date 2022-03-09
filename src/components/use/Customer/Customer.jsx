import style_C from "../../css/Customer/Customer.module.css";
import { Buttons } from "../Tools/Buttons";
//import { Data } from "./Data";

export function Customer(props) {

	return (
		<>
			<div className={props.clsName}>
				<div className={style_C.panel_}>
					<img className={style_C.preview_} href="" alt="" />
					<button className={style_C.ch} onClick={props.cl_}></button>
				</div>
			</div>
		</>
	);
}
