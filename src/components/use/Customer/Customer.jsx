import style_Cu from "../../css/Customer/Customer.module.css";
import { Data } from "./Data.js";
import swal from "sweetalert";

import app from "../../firebase/credentials";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { AddInfoProfile } from "../../firebase/funtions/Add";
import { useAuth } from "../../../context/AuthContext";

const db = getFirestore(app);

export function Customer(props) {
	const { user } = useAuth();
	const [f, setF] = useState({ user: null, data: {} });

	const ca = (e) => {
		setF({ ...f, user: user.uid, data: { tema: e.target.id } });
	};

	const c = () => {
		swal({
			title: "¿Desea cambiar el tema predeterminado?",
			icon: "warning",
			buttons: ["No", "Si"],
		}).then((respuesta) => {
			if (respuesta) {
				AddInfoProfile(f);
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
								<button
									className={style_Cu.ch}
									onMouseEnter={ca}
								>
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
