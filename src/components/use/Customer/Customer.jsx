import style_C from "../../css/Customer/Customer.module.css";
//import { Data } from "./Data";

export function Customer(props) {

	return (
		<>
			<div className={props.clsName}>
				<div className={style_C.panel_}>
					<img className={style_C.preview_} href="" alt="" />
				</div>
			</div>
		</>
	);
}
