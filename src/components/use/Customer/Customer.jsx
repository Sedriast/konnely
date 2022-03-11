import style_C from "../../css/Customer/Customer.module.css";
import { Buttons } from "../Tools/Buttons";
import { Data } from "./Data";

export function Customer(props) {

	const d =  'linear-gradient(0deg, rgba(24, 3, 1, 0.75), rgba(24, 3, 1, 0.75)), url(https://drive.google.com/uc?export=download&id=1rmZYMQhdaMSTkGVcgD2JCKvo5ZD24QGW)'

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
				</div>
			</div>
		</>
	);
}
