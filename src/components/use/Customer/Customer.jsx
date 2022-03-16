import style_C from "../../css/Customer/Customer.module.css";
import { Data } from "../Customer/Data";

export function Customer(props) {

	const back = () => {

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
