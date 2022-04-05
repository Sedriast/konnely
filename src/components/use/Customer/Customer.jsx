import style_Cu from "../../css/Customer/Customer.module.css";
import { Data } from "./Data.js";
import swal from "sweetalert";
//import { addCustomer } from "../../firebase/funtions/Add";

import app from "../../firebase/credentials";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";

const db = getFirestore(app);

export function Customer(props) {
	// const c = (e) => {
	// 	// swal({
	// 	// 	title: "¿Esta seguro de elegir este tema?",
	// 	// 	text: "Tendra que cerrar sección",
	// 	// 	icon: "warning",
	// 	// 	buttons: ["No", "Si"],
	// 	// }).then((respuesta) => {
	// 	// 	if (respuesta) {
	// 	// 		addCustomer({ Theme: e.target.id });
	// 	// 		window.location.reload();
	// 	// 	}
	// 	// });
	// };
	const [f, setF] = useState("");

	const c = (e) => {
		setF(e.target.id);
		console.log(e.target.id);
	};

	const ca = async (d) => {
		try {
			await setDoc(doc(db, "Users", "Camila"), {
				datos: { theme: d.target.id },
			});
		} catch (error) {
			console.log(d);
			swal({
				title: error,
				icon: "error",
				button: "aceptar",
			});
		}
	};

	return (
		<>
			<div className={props.clsName}>
				<div className={style_Cu.panel_}>
					{Data.map((a, index) => {
						return (
							<div key={index} className={style_Cu.theme}>
								<button className={style_Cu.ch} onClick={ca}>
									<img
										className={style_Cu.preview_}
										id={a.backgroud}
										src={a.miniature}
										onClick={c}
										href=""
										alt=""
									/>
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
