import style_C from "../../css/Customer/Customer.module.css";
import { Buttons } from "../Tools/Buttons";
import { Data } from "./Data";

export function Customer(props) {

	const d =  Data.map((items) => {
		return(items.backgroud6)
	});

	const back = () => {

		window.setInterval(function(){
		document.getElementById('root').style.setProperty('background', d);
		}, 1);

		console.log("\n\n "+d);
	}
	return (
		<>
			<div className={props.clsName}>
				<div className={style_C.panel_}>
					<img className={style_C.preview_} href="" alt="" />
					<button className={style_C.ch} onClick={back}></button>
					<button className={style_C.ch} onClick={props.cl2_}></button>
				</div>
			</div>
		</>
	);
}
