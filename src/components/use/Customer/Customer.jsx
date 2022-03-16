import style_C from "../../css/Customer/Customer.module.css";
import { Data } from "../Customer/Data";

export function Customer(props) {
	const d =
		"linear-gradient(0deg, rgba(24, 3, 1, 0.75), rgba(24, 3, 1, 0.75))," +
		"url(https://drive.google.com/uc?export=download&id=1rmZYMQhdaMSTkGVcgD2JCKvo5ZD24QGW)";

	const back = () => {
		document.getElementById("lay").style.setProperty("background", d);
		document
			.getElementById("lay")
			.style.setProperty("background-repeat", "no-repeat");
		document
			.getElementById("lay")
			.style.setProperty("background-size", "cover");
	};
	return (
		<>
			<div className={props.clsName}>
				<div className={style_C.panel_}>
					{Data.map((a, index) => (
						<div key={index} className={style_C.theme}>
							{/* <a  href='/customer'> */}
								<button className={style_C.ch} onClick={back} >
									<img className={style_C.preview_} src={a.miniature} href="" alt="" />
								</button>
							{/* </a> */}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
