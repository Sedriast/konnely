import style_Cu from "../../css/Customer/Customer.module.css";
import { Data } from "./Data.js";
import swal from "sweetalert";
import { addCustomer } from "../../firebase/funtions/Add";

export function Customer(props) {
	const c = (e) => {
		swal({
			title: "¿Esta seguro de elegir este tema?",
			text: "Tendra que cerrar sección",
			icon: "warning",
			buttons: ["No", "Si"],
		}).then((respuesta) => {
			if (respuesta) {
				addCustomer({ tema: e.target.id });
			}
		});
	};

	return (
		<>
			<div className={props.clsName}>
				<div className={style_Cu.panel_}>
					{Data.map((a, index) => {
						return (
							<div key={index} className={style_Cu.theme}>
								{/* <a href="/customer"> */}
								<button className={style_Cu.ch} onClick={c}>
									<img
										className={style_Cu.preview_}
										id={a.backgroud}
										src={a.miniature}
										href=""
										alt=""
									/>
								</button>
								{/* </a> */}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
